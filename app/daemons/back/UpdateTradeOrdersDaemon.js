/**
 * @version 0.30
 */
import Log from '../../services/Log/Log'

import Api from '../../services/Api/Api'
import ApiV3 from '../../services/Api/ApiV3'

import Settings from '../../appstores/DataSource/Settings/Settings'
import ExchangeActions from '../../appstores/Stores/Exchange/ExchangeActions'
import CashBackUtils from '../../appstores/Stores/CashBack/CashBackUtils'
import BlocksoftKeysStorage from '../../../crypto/actions/BlocksoftKeysStorage/BlocksoftKeysStorage'
import config from '../../config/config'
import DBInterface from '../../appstores/DataSource/DB/DBInterface'
import ExchangeOrdersActions from '../../appstores/Stores/ExchangeOrders/ExchangeOrdersActions'

const settingsDS = new Settings()


const CACHE_VALID_TIME = 20000 // 2 minute
let CACHE_REMOVED = false

let CACHE_LAST_TIME = false
let TRY_COUNTER = 0

const LIMIT_FOR_CURRENCY = 20

class UpdateTradeOrdersDaemon {

    removedFromDb = async () => {
        const tmpRemoved = await settingsDS.getSetting('bseRemoved')

        CACHE_REMOVED = {}
        if (typeof tmpRemoved !== 'undefined' && tmpRemoved) {
            try {
                const tmp = JSON.parse(tmpRemoved.paramValue)
                if (typeof tmp.removed !== 'undefined') {
                    CACHE_REMOVED = tmp.removed
                }
            } catch (e) {
                Log.errDaemon('UpdateTradeOrders removed from db error ' + e.message, tmpRemoved)
            }
        }
    }

    /**
     * @param params.force
     * @param params.source
     * @param params.removeId
     * @returns {Promise<boolean>}
     */
    updateTradeOrdersDaemon = async (params) => {
        const dbInterface = new DBInterface()

        Log.daemon('UpdateTradeOrders called ' + JSON.stringify(params))
        if (CACHE_REMOVED === false) {
            await this.removedFromDb()
        }

        const tmpAuthHash = await BlocksoftKeysStorage.getSelectedWallet()
        if (!tmpAuthHash) {
            return false
        }

        if (typeof params.source !== 'undefined' && params.source === 'ACCOUNT_OPEN' && CACHE_LAST_TIME) {
            const now = new Date().getTime()
            const diff = now - CACHE_LAST_TIME
            if (diff < CACHE_VALID_TIME) {
                Log.daemon('UpdateTradeOrders skipped by diff ' + diff)
                return false
            }
        }

        try {
            let tmpTradeOrders = await Api.getExchangeOrders()
            const tmpTradeOrdersV3 = await ApiV3.getExchangeOrders()
            if (typeof tmpTradeOrdersV3 !== 'undefined' && tmpTradeOrdersV3 && tmpTradeOrdersV3.length > 0) {
                if (tmpTradeOrders && typeof tmpTradeOrders.length !== 'undefined' && tmpTradeOrders.length > 0) {
                    try {
                        for (const one of tmpTradeOrdersV3) {
                            one.orderId = one.orderHash
                            tmpTradeOrders.push(one)
                        }
                    } catch (e) {
                        Log.log('UpdateTradeOrders tmpTradeOrders error ' + e.message, tmpTradeOrders)
                    }
                } else {
                    tmpTradeOrders = tmpTradeOrdersV3
                }
            }

            let walletToken = CashBackUtils.getWalletToken()
            if (!walletToken || typeof walletToken === 'undefined') {
                walletToken = ''
            }


            if (typeof params.removeId !== 'undefined') {
                if (typeof CACHE_REMOVED[params.removeId] === 'undefined') {
                    CACHE_REMOVED[params.removeId] = 1
                    await settingsDS.setSettings('bseRemoved', JSON.stringify({ removed: CACHE_REMOVED }))
                }
            }

            try {
                if (typeof tmpTradeOrders !== 'undefined' && tmpTradeOrders && tmpTradeOrders.length > 0 && typeof tmpTradeOrders.sort !== 'undefined') {

                    tmpTradeOrders = tmpTradeOrders.sort((item1, item2) => item2.createdAt - item1.createdAt)

                    let item

                    const index = {}
                    let total = 0

                    const tradeOrders = {}

                    for (item of tmpTradeOrders) {
                        if (total > 100) {
                            break
                        }
                        if (typeof CACHE_REMOVED[item.orderId] !== 'undefined') {
                            continue
                        }
                        const tmps = [
                            {
                                currencyCode: item.requestedInAmount.currencyCode || false,
                                updateHash: item.inTxHash || false,
                                suffix: 'in'
                            },
                            {
                                currencyCode: item.requestedOutAmount.currencyCode || false,
                                updateHash: item.outTxHash || false,
                                suffix: 'out'
                            }
                        ]

                        let needAdd = false
                        let savedToTx = false
                        let currencyCode = 'NONE'
                        for (const tmp of tmps) {
                            if (!tmp.currencyCode) continue
                            if (typeof index[tmp.currencyCode] === 'undefined') {
                                index[tmp.currencyCode] = 1
                            } else {
                                index[tmp.currencyCode]++
                            }
                            currencyCode = tmp.currencyCode
                            if (index[tmp.currencyCode] < LIMIT_FOR_CURRENCY) {
                                let sql
                                if (tmp.updateHash) {
                                    sql = `
                                     UPDATE transactions 
                                     SET bse_order_id_${tmp.suffix}='${item.orderId}', bse_order_data='${dbInterface.escapeString(JSON.stringify(item))}'
                                     WHERE transaction_hash='${tmp.updateHash}'
                                     AND currency_code='${tmp.currencyCode}'
                                     `
                                    savedToTx = true
                                } else {
                                    sql = `
                                     UPDATE transactions 
                                     SET bse_order_data='${dbInterface.escapeString(JSON.stringify(item))}'
                                     WHERE bse_order_id='${item.orderId}'
                                     `
                                    // could be true could be not
                                }
                                await dbInterface.setQueryString(sql).query(true)
                                needAdd = true
                            }
                        }

                        if (needAdd) {
                            if (!savedToTx) {
                                if (typeof tradeOrders[currencyCode] === 'undefined') {
                                    tradeOrders[currencyCode] = []
                                }
                                tradeOrders[currencyCode].push(item)
                            }
                            total++
                        }
                    }

                    ExchangeOrdersActions.setExchangeOrderList(tradeOrders)

                    for (const currencyCode in tradeOrders) {
                        // here will be only orders without txs
                        await settingsDS.setSettings('bseOrders_' + walletToken + '_' + currencyCode, JSON.stringify({ ordersList: tradeOrders[currencyCode] }))
                    }

                    Log.daemon('UpdateTradeOrders success')

                    TRY_COUNTER = 0

                }
            } catch (e) {
                if (config.debug.appErrors) {
                    console.log(e.message + ' tmpTradeOrders', e, JSON.parse(JSON.stringify(tmpTradeOrders)))
                }
                throw new Error(e.message + ' tmpTradeOrders' + JSON.stringify(tmpTradeOrders))
            }

        } catch (e) {
            if (Log.isNetworkError(e.message) && TRY_COUNTER < 10) {
                TRY_COUNTER++
                Log.daemon('UpdateTradeOrders network try ' + TRY_COUNTER + ' ' + e.message)
            } else if (e.message === 'No cashbackToken') {
                Log.daemon('UpdateTradeOrders notice ' + e.message)
            } else {
                Log.errDaemon('UpdateTradeOrders error ' + e.message)
            }
        }
        CACHE_LAST_TIME = new Date().getTime()
    }
}

export default new UpdateTradeOrdersDaemon
