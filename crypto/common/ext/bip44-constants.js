/**
 * based on https://github.com/bitcoinjs/bip44-constants/blob/master/index.js
 * Format for each row:
 * [ constant, coinSymbol, coinName ]
 */
module.exports = [

    [ `44'/0`, "BTC", "Bitcoin" ],
    [ `44'/1`, "BTC_TEST", "Testnet (all coins)" ],
    [ `84'/0`, "BTC_SEGWIT", "Bitcoin" ],
    [ `49'/0`, "BTC_SEGWIT_COMPATIBLE", "Bitcoin" ],
    [ `44'/0`, "USDT", "USDT Omni" ], // actual = 200
    [ `44'/279553`, "BTC_LIGHT", "Bitcoin Light" ],

    [ `44'/145`, "BCH", "Bitcoin Cash" ],
    [ `44'/156`, "BTG", "Bitcoin Gold" ],
    [ `44'/236`, "BSV", "Bitcoin SV" ],

    [ `44'/60`, "ETH", "Ether" ],
    [ `44'/61`, "ETC", "Ether Classic" ],
    [ `44'/1`, "ETH_ROPSTEN", "Ropsten Ether" ],

    [ `44'/2`, "LTC", "Litecoin" ],
    [ `84'/2`, "LTC_SEGWIT", "Litecoin" ],
    [ `44'/3`, "DOGE", "Dogecoin" ],
    [ `44'/77`, "XVG", "Verge" ],
    [ `44'/195`, "TRX", "Tron" ],

    [ `44'/144`, "XRP", "Ripple" ],
    [ `44'/148`, "XLM", "Stellar" ],
    [ `44'/128`, "XMR", "Monero" ],

    [ `44'/235`, "FIO", "FIO" ],

    [ `44'/714`, "BNB", "BNB" ],
    /*
    [ 0x80000004, "RDD", "Reddcoin" ],
    [ 0x80000005, "DASH", "Dash (ex Darkcoin)" ],
    [ 0x80000006, "PPC", "Peercoin" ],
    [ 0x80000007, "NMC", "Namecoin" ],
    [ 0x80000008, "FTC", "Feathercoin" ],
    [ 0x80000009, "XCP", "Counterparty" ],
    [ 0x8000000a, "BLK", "Blackcoin" ],
    [ 0x8000000b, "NSR", "NuShares" ],
    [ 0x8000000c, "NBT", "NuBits" ],
    [ 0x8000000d, "MZC", "Mazacoin" ],
    [ 0x8000000e, "VIA", "Viacoin" ],
    [ 0x8000000f, "XCH", "ClearingHouse" ],
    [ 0x80000010, "RBY", "Rubycoin" ],
    [ 0x80000011, "GRS", "Groestlcoin" ],
    [ 0x80000012, "DGC", "Digitalcoin" ],
    [ 0x80000013, "CCN", "Cannacoin" ],
    [ 0x80000014, "DGB", "DigiByte" ],
    [ 0x80000015, "", "Open Assets" ],
    [ 0x80000016, "MONA", "Monacoin" ],
    [ 0x80000017, "CLAM", "Clams" ],
    [ 0x80000018, "XPM", "Primecoin" ],
    [ 0x80000019, "NEOS", "Neoscoin" ],
    [ 0x8000001a, "JBS", "Jumbucks" ],
    [ 0x8000001b, "ZRC", "ziftrCOIN" ],
    [ 0x8000001c, "VTC", "Vertcoin" ],
    [ 0x8000001d, "NXT", "NXT" ],
    [ 0x8000001e, "BURST", "Burst" ],
    [ 0x8000001f, "MUE", "MonetaryUnit" ],
    [ 0x80000020, "ZOOM", "Zoom" ],
    [ 0x80000021, "VASH", "Virtual Cash Also known as VPNcoin" ],
    [ 0x80000022, "CDN", "Canada eCoin" ],
    [ 0x80000023, "SDC", "ShadowCash" ],
    [ 0x80000024, "PKB", "ParkByte" ],
    [ 0x80000025, "PND", "Pandacoin" ],
    [ 0x80000026, "START", "StartCOIN" ],
    [ 0x80000027, "MOIN", "MOIN" ],
    [ 0x80000028, "EXP", "Expanse" ],
    [ 0x80000029, "EMC2", "Einsteinium" ],
    [ 0x8000002a, "DCR", "Decred" ],
    [ 0x8000002b, "XEM", "NEM" ],
    [ 0x8000002c, "PART", "Particl" ],
    [ 0x8000002d, "ARG", "Argentum" ],
    [ 0x8000002e, "", "Libertas" ],
    [ 0x8000002f, "", "Posw coin" ],
    [ 0x80000030, "SHR", "Shreeji" ],
    [ 0x80000031, "GCR", "Global Currency Reserve (GCRcoin)" ],
    [ 0x80000032, "NVC", "Novacoin" ],
    [ 0x80000033, "AC", "Asiacoin" ],
    [ 0x80000034, "BTCD", "Bitcoindark" ],
    [ 0x80000035, "DOPE", "Dopecoin" ],
    [ 0x80000036, "TPC", "Templecoin" ],
    [ 0x80000037, "AIB", "AIB" ],
    [ 0x80000038, "EDRC", "EDRCoin" ],
    [ 0x80000039, "SYS", "Syscoin" ],
    [ 0x8000003a, "SLR", "Solarcoin" ],
    [ 0x8000003b, "SMLY", "Smileycoin" ],

    [ 0x8000003d, "ETC", "Ether Classic" ],
    [ 0x8000003e, "PSB", "Pesobit" ],
    [ 0x8000003f, "LDCN", "Landcoin" ],
    [ 0x80000040, "", "Open Chain" ],
    [ 0x80000041, "XBC", "Bitcoinplus" ],
    [ 0x80000042, "IOP", "Internet of People" ],
    [ 0x80000043, "NXS", "Nexus" ],
    [ 0x80000044, "INSN", "InsaneCoin" ],
    [ 0x80000045, "OK", "OKCash" ],
    [ 0x80000046, "BRIT", "BritCoin" ],
    [ 0x80000047, "CMP", "Compcoin" ],
    [ 0x80000048, "CRW", "Crown" ],
    [ 0x80000049, "BELA", "BelaCoin" ],
    [ 0x8000004a, "ICX", "ICON" ],
    [ 0x8000004b, "FJC", "FujiCoin" ],
    [ 0x8000004c, "MIX", "MIX" ],
    [ 0x8000004e, "EFL", "Electronic Gulden" ],
    [ 0x8000004f, "CLUB", "ClubCoin" ],
    [ 0x80000050, "RICHX", "RichCoin" ],
    [ 0x80000051, "POT", "Potcoin" ],
    [ 0x80000052, "QRK", "Quarkcoin" ],
    [ 0x80000053, "TRC", "Terracoin" ],
    [ 0x80000054, "GRC", "Gridcoin" ],
    [ 0x80000055, "AUR", "Auroracoin" ],
    [ 0x80000056, "IXC", "IXCoin" ],
    [ 0x80000057, "NLG", "Gulden" ],
    [ 0x80000058, "BITB", "BitBean" ],
    [ 0x80000059, "BTA", "Bata" ],
    [ 0x8000005a, "XMY", "Myriadcoin" ],
    [ 0x8000005b, "BSD", "BitSend" ],
    [ 0x8000005c, "UNO", "Unobtanium" ],
    [ 0x8000005d, "MTR", "MasterTrader" ],
    [ 0x8000005e, "GB", "GoldBlocks" ],
    [ 0x8000005f, "SHM", "Saham" ],
    [ 0x80000060, "CRX", "Chronos" ],
    [ 0x80000061, "BIQ", "Ubiquoin" ],
    [ 0x80000062, "EVO", "Evotion" ],
    [ 0x80000063, "STO", "SaveTheOcean" ],
    [ 0x80000064, "BIGUP", "BigUp" ],
    [ 0x80000065, "GAME", "GameCredits" ],
    [ 0x80000066, "DLC", "Dollarcoins" ],
    [ 0x80000067, "ZYD", "Zayedcoin" ],
    [ 0x80000068, "DBIC", "Dubaicoin" ],
    [ 0x80000069, "STRAT", "Stratis" ],
    [ 0x8000006a, "SH", "Shilling" ],
    [ 0x8000006b, "MARS", "MarsCoin" ],
    [ 0x8000006c, "UBQ", "Ubiq" ],
    [ 0x8000006d, "PTC", "Pesetacoin" ],
    [ 0x8000006e, "NRO", "Neurocoin" ],
    [ 0x8000006f, "ARK", "ARK" ],
    [ 0x80000070, "USC", "UltimateSecureCashMain" ],
    [ 0x80000071, "THC", "Hempcoin" ],
    [ 0x80000072, "LINX", "Linx" ],
    [ 0x80000073, "ECN", "Ecoin" ],
    [ 0x80000074, "DNR", "Denarius" ],
    [ 0x80000075, "PINK", "Pinkcoin" ],
    [ 0x80000076, "ATOM", "Atom" ],
    [ 0x80000077, "PIVX", "Pivx" ],
    [ 0x80000078, "FLASH", "Flashcoin" ],
    [ 0x80000079, "ZEN", "Zencash" ],
    [ 0x8000007a, "PUT", "Putincoin" ],
    [ 0x8000007b, "ZNY", "BitZeny" ],
    [ 0x8000007c, "UNIFY", "Unify" ],
    [ 0x8000007d, "XST", "StealthCoin" ],
    [ 0x8000007e, "BRK", "Breakout Coin" ],
    [ 0x8000007f, "VC", "Vcash" ],
    [ 0x80000080, "XMR", "Monero" ],
    [ 0x80000081, "VOX", "Voxels" ],
    [ 0x80000082, "NAV", "NavCoin" ],
    [ 0x80000083, "FCT", "Factom Factoids" ],
    [ 0x80000084, "EC", "Factom Entry Credits" ],
    [ 0x80000085, "ZEC", "Zcash" ],
    [ 0x80000086, "LSK", "Lisk" ],
    [ 0x80000087, "STEEM", "Steem" ],
    [ 0x80000088, "XZC", "ZCoin" ],
    [ 0x80000089, "RBTC", "RSK" ],
    [ 0x8000008a, "", "Giftblock" ],
    [ 0x8000008b, "RPT", "RealPointCoin" ],
    [ 0x8000008c, "LBC", "LBRY Credits" ],
    [ 0x8000008d, "KMD", "Komodo" ],
    [ 0x8000008e, "BSQ", "bisq Token" ],
    [ 0x8000008f, "RIC", "Riecoin" ],
    [ 0x80000090, "XRP", "Ripple" ],
    [ 0x80000091, "BCH", "Bitcoin Cash" ],
    [ 0x80000092, "NEBL", "Neblio" ],
    [ 0x80000093, "ZCL", "ZClassic" ],
    [ 0x80000094, "XLM", "Stellar Lumens" ],
    [ 0x80000095, "NLC2", "NoLimitCoin2" ],
    [ 0x80000096, "WHL", "WhaleCoin" ],
    [ 0x80000097, "ERC", "EuropeCoin" ],
    [ 0x80000098, "DMD", "Diamond" ],
    [ 0x80000099, "BTM", "Bytom" ],
    [ 0x8000009a, "BIO", "Biocoin" ],
    [ 0x8000009b, "XWC", "Whitecoin" ],
    [ 0x8000009c, "BTG", "Bitcoin Gold" ],
    [ 0x8000009d, "BTC2X", "Bitcoin 2x" ],
    [ 0x8000009e, "SSN", "SuperSkynet" ],
    [ 0x8000009f, "TOA", "TOACoin" ],
    [ 0x800000a0, "BTX", "Bitcore" ],
    [ 0x800000a1, "ACC", "Adcoin" ],
    [ 0x800000a2, "BCO", "Bridgecoin" ],
    [ 0x800000a3, "ELLA", "Ellaism" ],
    [ 0x800000a4, "PIRL", "Pirl" ],
    [ 0x800000a5, "XRB", "RaiBlocks" ],
    [ 0x800000a6, "VIVO", "Vivo" ],
    [ 0x800000a7, "FRST", "Firstcoin" ],
    [ 0x800000a8, "HNC", "Helleniccoin" ],
    [ 0x800000a9, "BUZZ", "BUZZ" ],
    [ 0x800000aa, "MBRS", "Ember" ],
    [ 0x800000ab, "HSR", "Hcash" ],
    [ 0x800000ac, "HTML", "HTMLCOIN" ],
    [ 0x800000ad, "ODN", "Obsidian" ],
    [ 0x800000ae, "ONX", "OnixCoin" ],
    [ 0x800000af, "RVN", "Ravencoin" ],
    [ 0x800000b0, "GBX", "GoByte" ],
    [ 0x800000b1, "BTCZ", "BitcoinZ" ],
    [ 0x800000b2, "POA", "Poa" ],
    [ 0x800000b3, "NYC", "NewYorkCoin" ],
    [ 0x800000b4, "MXT", "MarteXcoin" ],
    [ 0x800000b5, "WC", "Wincoin" ],
    [ 0x800000b6, "MNX", "Minexcoin" ],
    [ 0x800000b7, "BTCP", "Bitcoin Private" ],
    [ 0x800000b8, "MUSIC", "Musicoin" ],
    [ 0x800000b9, "BCA", "Bitcoin Atom" ],
    [ 0x800000ba, "CRAVE", "Crave" ],
    [ 0x800000bb, "STAK", "STRAKS" ],
    [ 0x800000bc, "WBTC", "World Bitcoin" ],
    [ 0x800000bd, "LCH", "LiteCash" ],
    [ 0x800000be, "EXCL", "ExclusiveCoin" ],
    [ 0x800000bf, "", "Lynx" ],
    [ 0x800000c0, "LCC", "LitecoinCash" ],
    [ 0x800000c1, "XFE", "Feirm" ],
    [ 0x800000c2, "EOS", "EOS" ],
    [ 0x800000c3, "TRX", "Tron" ],
    [ 0x800000c4, "KOBO", "Kobocoin" ],
    [ 0x800000c5, "HUSH", "HUSH" ],
    [ 0x800000c6, "BANANO", "Bananos" ],
    [ 0x800000c7, "ETF", "ETF" ],
    [ 0x800000c8, "OMNI", "Omni" ],
    [ 0x800000c9, "BIFI", "BitcoinFile" ],
    [ 0x800000ca, "UFO", "Uniform Fiscal Object" ],
    [ 0x800000cb, "CNMC", "Cryptonodes" ],
    [ 0x800000cc, "BCN", "Bytecoin" ],
    [ 0x800000cd, "RIN", "Ringo" ],
    [ 0x800000ce, "ATP", "PlatON" ],
    [ 0x800000cf, "EVT", "everiToken" ],
    [ 0x800000d0, "ATN", "ATN" ],
    [ 0x800000d1, "BIS", "Bismuth" ],
    [ 0x800000d2, "NEET", "NEETCOIN" ],
    [ 0x800000d3, "BOPO", "BopoChain" ],
    [ 0x800000d4, "OOT", "Utrum" ],
    [ 0x800000d5, "XSPEC", "Spectrecoin" ],
    [ 0x800000d5, "MONK", "Monkey Project" ],
    [ 0x800000d7, "BOXY", "BoxyCoin" ],
    [ 0x800000d8, "FLO", "Flo" ],
    [ 0x800000d9, "MEC", "Megacoin" ],
    [ 0x800000da, "BTDX", "BitCloud" ],
    [ 0x800000db, "XAX", "Artax" ],
    [ 0x800000dc, "ANON", "ANON" ],
    [ 0x800000dd, "LTZ", "LitecoinZ" ],
    [ 0x800000de, "BITG", "Bitcoin Green" ],
    [ 0x800000df, "ASK", "AskCoin" ],
    [ 0x800000e0, "SMART", "Smartcash" ],
    [ 0x800000e1, "XUEZ", "XUEZ" ],
    [ 0x800000e2, "HLM", "Helium" ],
    [ 0x800000e3, "WEB", "Webchain" ],
    [ 0x800000e4, "ACM", "Actinium" ],
    [ 0x800000e5, "NOS", "NOS Stable Coins" ],
    [ 0x800000e6, "BITC", "BitCash" ],
    [ 0x800000e7, "HTH", "Help The Homeless Coin" ],
    [ 0x800000e8, "TZC", "Trezarcoin" ],
    [ 0x800000e9, "VAR", "Varda" ],
    [ 0x800000ea, "IOV", "IOV" ],
    [ 0x800000eb, "FIO", "FIO" ],
    [ 0x800000ec, "BSV", "BitcoinSV" ],
    [ 0x800000ed, "DXN", "DEXON" ],
    [ 0x800000ee, "QRL", "Quantum Resistant Ledger" ],
    [ 0x800000ef, "PCX", "ChainX" ],
    [ 0x800000f0, "LOKI", "Loki" ],
    [ 0x800000f1, "", "Imagewallet" ],
    [ 0x800000f2, "NIM", "Nimiq" ],
    [ 0x800000f3, "SOV", "Sovereign Coin" ],
    [ 0x800000f4, "JCT", "Jibital Coin" ],
    [ 0x800000f5, "SLP", "Simple Ledger Protocol" ],
    [ 0x800000f6, "EWT", "Energy Web" ],
    [ 0x800000f7, "UC", "Ulord" ],
    [ 0x800000f8, "EXOS", "EXOS" ],
    [ 0x800000f9, "ECA", "Electra" ],
    [ 0x800000fa, "SOOM", "Soom" ],
    [ 0x800000fb, "XRD", "Redstone" ],
    [ 0x800000fc, "FREE", "FreeCoin" ],
    [ 0x800000fd, "NPW", "NewPowerCoin" ],
    [ 0x800000fe, "BST", "BlockStamp" ],
    [ 0x800000ff, "", "SmartHoldem" ],
    [ 0x80000100, "NANO", "Bitcoin Nano" ],
    [ 0x80000101, "BTCC", "Bitcoin Core" ],
    [ 0x80000102, "", "Zen Protocol" ],
    [ 0x80000103, "ZEST", "Zest" ],
    [ 0x80000104, "ABT", "ArcBlock" ],
    [ 0x80000105, "PION", "Pion" ],
    [ 0x80000106, "DT3", "DreamTeam3" ],
    [ 0x80000107, "ZBUX", "Zbux" ],
    [ 0x80000108, "KPL", "Kepler" ],
    [ 0x80000109, "TPAY", "TokenPay" ],
    [ 0x8000010a, "ZILLA", "ChainZilla" ],
    [ 0x8000010b, "ANK", "Anker" ],
    [ 0x8000010c, "BCC", "BCChain" ],
    [ 0x8000010d, "HPB", "HPB" ],
    [ 0x8000010e, "ONE", "ONE" ],
    [ 0x8000010f, "SBC", "SBC" ],
    [ 0x80000110, "IPC", "IPChain" ],
    [ 0x80000111, "DMTC", "Dominantchain" ],
    [ 0x80000112, "OGC", "Onegram" ],
    [ 0x80000113, "SHIT", "Shitcoin" ],
    [ 0x80000114, "ANDES", "Andescoin" ],
    [ 0x80000115, "AREPA", "Arepacoin" ],
    [ 0x80000116, "BOLI", "Bolivarcoin" ],
    [ 0x80000117, "RIL", "Rilcoin" ],
    [ 0x80000118, "HTR", "Hathor Network" ],
    [ 0x80000119, "FCTID", "Factom ID" ],
    [ 0x8000011a, "BRAVO", "BRAVO" ],
    [ 0x8000011b, "ALGO", "Algorand" ],
    [ 0x8000011c, "BZX", "Bitcoinzero" ],
    [ 0x8000011d, "GXX", "GravityCoin" ],
    [ 0x8000011e, "HEAT", "HEAT" ],
    [ 0x8000011f, "XDN", "DigitalNote" ],
    [ 0x80000120, "FSN", "FUSION" ],
    [ 0x80000121, "CPC", "Capricoin" ],
    [ 0x80000122, "BOLD", "Bold" ],
    [ 0x80000123, "IOST", "IOST" ],
    [ 0x80000124, "TKEY", "Tkeycoin" ],
    [ 0x80000125, "USE", "Usechain" ],
    [ 0x80000126, "BCZ", "BitcoinCashZero" ],
    [ 0x80000127, "IOC", "Iocoin" ],
    [ 0x8000012b, "NUKO", "Nekonium" ],
    [ 0x8000012c, "GNX", "Genaro Network" ],
    [ 0x8000012d, "DIVI", "Divi Project" ],
    [ 0x8000012f, "EUNO", "EUNO" ],
    [ 0x80000137, "ADS", "Adshares" ],
    [ 0x80000138, "ARA", "Aura" ],
    [ 0x80000139, "ZIL", "Zilliqa" ],
    [ 0x8000013a, "MOAC", "MOAC" ],
    [ 0x8000013b, "SWTC", "SWTC" ],
    [ 0x8000013c, "VNSC", "vnscoin" ],
    [ 0x80000141, "RAP", "Rapture" ],
    [ 0x80000142, "GARD", "Hashgard" ],
    [ 0x80000148, "BLOCK", "Blocknet" ],
    [ 0x8000014d, "MEM", "MemCoin" ],
    [ 0x80000171, "XAS", "Asch" ],
    [ 0x80000180, "XSN", "Stakenet" ],
    [ 0x80000188, "CENNZ", "CENNZnet" ],
    [ 0x8000018e, "XPC", "XPChain" ],
    [ 0x80000190, "NIX", "NIX" ],
    [ 0x80000194, "XBI", "XBI" ],
    [ 0x8000019c, "AIN", "AIN" ],
    [ 0x800001a0, "SLX", "SLX" ],
    [ 0x800001a4, "NODE", "NodeHost" ],
    [ 0x800001a9, "AION", "Aion" ],
    [ 0x800001bc, "PHR", "Phore" ],
    [ 0x800001bf, "DIN", "Dinero" ],
    [ 0x800001c9, "AE", "æternity" ],
    [ 0x800001d0, "ETI", "EtherInc" ],
    [ 0x800001e8, "VEO", "Amoveo" ],
    [ 0x800001f4, "THETA", "Theta" ],
    [ 0x800001fe, "KOTO", "Koto" ],
    [ 0x80000200, "XRD", "Radiant" ],
    [ 0x80000204, "VEE", "Virtual Economy Era" ],
    [ 0x80000206, "LET", "Linkeye" ],
    [ 0x80000208, "BTCV", "BitcoinVIP" ],
    [ 0x8000020e, "BU", "BUMO" ],
    [ 0x80000210, "YAP", "Yapstone" ],
    [ 0x80000215, "PRJ", "ProjectCoin" ],
    [ 0x8000022b, "BCS", "Bitcoin Smart" ],
    [ 0x8000022d, "LKR", "Lkrcoin" ],
    [ 0x80000258, "UTE", "Unit-e" ],
    [ 0x8000026a, "SSP", "SmartShare" ],
    [ 0x80000271, "EAST", "Eastcoin" ],
    [ 0x80000297, "SFRX", "EtherGem Sapphire" ],
    [ 0x8000029a, "ACT", "Achain" ],
    [ 0x8000029c, "SSC", "SelfSell" ],
    [ 0x800002ba, "VEIL", "Veil" ],
    [ 0x800002bc, "XDAI", "xDai" ],
    [ 0x800002c9, "KTS", "Katallassos" ],
    [ 0x800002ca, "BNB", "Binance" ],
    [ 0x80000300, "BALLZ", "Ballzcoin" ],
    [ 0x80000309, "BTW", "Bitcoin World" ],
    [ 0x80000320, "BEET", "Beetle Coin" ],
    [ 0x80000321, "DST", "DSTRA" ],
    [ 0x80000328, "QVT", "Qvolta" ],
    [ 0x80000332, "VET", "VeChain Token" ],
    [ 0x80000334, "CLO", "Callisto" ],
    [ 0x80000376, "ADF", "AD Token" ],
    [ 0x80000378, "NEO", "NEO" ],
    [ 0x80000379, "TOMO", "TOMO" ],
    [ 0x8000037a, "XSEL", "Seln" ],
    [ 0x80000384, "LMO", "Lumeneo" ],
    [ 0x80000394, "META", "Metadium" ],
    [ 0x800003ca, "TWINS", "TWINS" ],
    [ 0x800003e4, "OKP", "OK Points" ],
    [ 0x800003e6, "LBTC", "Lightning Bitcoin" ],
    [ 0x800003e7, "BCD", "Bitcoin Diamond" ],
    [ 0x800003e8, "BTN", "Bitcoin New" ],
    [ 0x800003e9, "TT", "ThunderCore" ],
    [ 0x800003ea, "BKT", "BanKitt" ],
    [ 0x80000400, "ONT", "Ontology" ],
    [ 0x80000457, "BBC", "Big Bitcoin" ],
    [ 0x80000460, "RISE", "RISE" ],
    [ 0x80000462, "CMT", "CyberMiles Token" ],
    [ 0x80000468, "ETSC", "Ethereum Social" ],
    [ 0x80000479, "CDY", "Bitcoin Candy" ],
    [ 0x80000539, "DFC", "Defcoin" ],
    [ 0x80000575, "HYC", "Hycon" ],
    [ 0x800005f4, "", "Taler" ],
    [ 0x80000654, "ATH", "Atheios" ],
    [ 0x80000698, "BCX", "BitcoinX" ],
    [ 0x800006c1, "XTZ", "Tezos" ],
    [ 0x800006f0, "LBTC", "Liquid BTC" ],
    [ 0x80000717, "ADA", "Cardano" ],
    [ 0x80000743, "TES", "Teslacoin" ],
    [ 0x8000076d, "CLC", "Classica" ],
    [ 0x8000077f, "VIPS", "VIPSTARCOIN" ],
    [ 0x80000786, "CITY", "City Coin" ],
    [ 0x800007b9, "XMX", "Xuma" ],
    [ 0x800007c0, "TRTL", "TurtleCoin" ],
    [ 0x800007c3, "EGEM", "EtherGem" ],
    [ 0x800007c5, "HODL", "HOdlcoin" ],
    [ 0x800007c6, "PHL", "Placeholders" ],
    [ 0x800007cd, "POLIS", "Polis" ],
    [ 0x800007ce, "XMCC", "Monoeci" ],
    [ 0x800007cf, "COLX", "ColossusXT" ],
    [ 0x800007d0, "GIN", "GinCoin" ],
    [ 0x800007d1, "MNP", "MNPCoin" ],
    [ 0x800007e1, "KIN", "Kin" ],
    [ 0x800007e2, "EOSC", "EOSClassic" ],
    [ 0x800007e3, "GBT", "GoldBean Token" ],
    [ 0x800007e4, "PKC", "PKC" ],
    [ 0x80000801, "TRUE", "TrueChain" ],
    [ 0x80000840, "IoTE", "IoTE" ],
    [ 0x800008fd, "QTUM", "QTUM" ],
    [ 0x800008fe, "ETP", "Metaverse" ],
    [ 0x800008ff, "GXC", "GXChain" ],
    [ 0x80000900, "CRP", "CranePay" ],
    [ 0x80000901, "ELA", "Elastos" ],
    [ 0x80000922, "SNOW", "Snowblossom" ],
    [ 0x80000a0a, "AOA", "Aurora" ],
    [ 0x80000b4e, "REOSC", "REOSC Ecosystem" ],
    [ 0x80000bbb, "LUX", "LUX" ],
    [ 0x80000d35, "DYN", "Dynamic" ],
    [ 0x80000d37, "SEQ", "Sequence" ],
    [ 0x80000de0, "DEO", "Destocoin" ],
    [ 0x80000dec, "DST", "DeStream" ],
    [ 0x80000a9e, "NAS", "Nebulas" ],
    [ 0x80000b7d, "BND", "Blocknode" ],
    [ 0x80000ccc, "CCC", "CodeChain" ],
    [ 0x80000d31, "ROI", "ROIcoin" ],
    [ 0x8000107a, "IOTA", "IOTA" ],
    [ 0x80001092, "AXE", "Axe" ],
    [ 0x00001480, "FIC", "FIC" ],
    [ 0x000014e9, "HNS", "Handshake" ],
    [ 0x8000167d, "", "Stacks" ],
    [ 0x80001720, "SLU", "SILUBIUM" ],
    [ 0x800017ac, "GO", "GoChain GO" ],
    [ 0x80001a0a, "BPA", "Bitcoin Pizza" ],
    [ 0x80001a20, "SAFE", "SAFE" ],
    [ 0x80001b39, "ROGER", "TheHolyrogerCoin" ],
    [ 0x80001e61, "BTV", "Bitvote" ],
    [ 0x80002093, "BTQ", "BitcoinQuark" ],
    [ 0x800022b8, "SBTC", "Super Bitcoin" ],
    [ 0x80002304, "NULS", "NULS" ],
    [ 0x80002327, "BTP", "Bitcoin Pay" ],
    [ 0x80002645, "NRG", "Energi" ],
    [ 0x800026a0, "BTF", "Bitcoin Faith" ],
    [ 0x8000270f, "GOD", "Bitcoin God" ],
    [ 0x80002710, "FO", "FIBOS" ],
    [ 0x80002833, "BTR", "Bitcoin Rhodium" ],
    [ 0x80002B67, "ESS", "Essentia One" ],
    [ 0x80003333, "BTY", "BitYuan" ],
    [ 0x80003334, "YCC", "Yuan Chain Coin" ],
    [ 0x80003de5, "SDGO", "SanDeGo" ],
    [ 0x80004add, "SAFE", "Safecoin" ],
    [ 0x80004adf, "ZEL", "ZelCash" ],
    [ 0x80004ae1, "RITO", "Ritocoin" ],
    [ 0x80004e44, "NDAU", "ndau" ],
    [ 0x800057e8, "PWR", "PWRcoin" ],
    [ 0x800062a4, "BELL", "Bellcoin" ],
    [ 0x8000797e, "ESN", "EtherSocial Network" ],
    [ 0x80007a69, "", "ThePower.io" ],
    [ 0x80008456, "BTCS", "Bitcoin Stake" ],
    [ 0x80008888, "BTT", "ByteTrade" ],
    [ 0x80009468, "FXTC", "FixedTradeCoin" ],
    [ 0x80009999, "AMA", "Amabig" ],
    [ 0x80010000, "KETH", "Krypton World" ],
    [ 0x80015b38, "RYO", "c0ban" ],
    [ 0x8001869f, "WICC", "Waykichain" ],
    [ 0x80030fb1, "AKA", "Akroma" ],
    [ 0x80011000, "GENOM", "GENOM" ],
    [ 0x8003C301, "ATS", "ARTIS sigma1" ],
    [ 0x80067932, "X42", "x42" ],
    [ 0x800a2c2a, "VITE", "Vite" ],
    [ 0x8011df89, "ILT", "iOlite" ],
    [ 0x8014095a, "ETHO", "Ether-1" ],
    [ 0x801a2010, "LAX", "LAPO" ],
    [ 0x80501949, "BCO", "BitcoinOre" ],
    [ 0x8050194a, "BHD", "BitcoinHD" ],
    [ 0x8050544e, "PTN", "PalletOne" ],
    [ 0x8057414e, "WAN", "Wanchain" ],
    [ 0x80579bfc, "WAVES", "Waves" ],
    [ 0x8073656d, "SEM", "Semux" ],
    [ 0x80737978, "ION", "ION" ],
    [ 0x80776772, "WGR", "WGR" ],
    [ 0x80776773, "OBSR", "OBServer" ],
    [ 0x83adbc39, "AQUA", "Aquachain" ],
    [ 0x857ab1e1, "kUSD", "kUSD" ],
    [ 0x85f5e0fe, "FLUID", "Fluid Chains" ],
    [ 0x85f5e0ff, "QKC", "QuarkChain" ] */
]
