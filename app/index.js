
<head>
<title>Swamp.finance</title>
<meta name="description" content="Swamp.Finance is an advanced yield optimizer hosted on Binance Smart Chain (BSC) with Swampy (SWAMP), a governance token native to the Swamp finance ecosystem.">
<meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=0.7">
<link rel="apple-touch-icon" sizes="57x57" href="/static/frontend/img/page-header/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/static/frontend/img/page-header/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/static/frontend/img/page-header/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/static/frontend/img/page-header/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/static/frontend/img/page-header/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/static/frontend/img/page-header/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/static/frontend/img/page-header/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/static/frontend/img/page-header/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/static/frontend/img/page-header/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="32x32" href="/static/frontend/img/page-header/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/static/frontend/img/page-header/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/static/frontend/img/page-header/favicon-16x16.png">
<link rel="manifest" href="/static/frontend/img/page-header/site.webmanifest">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/static/frontend/img/page-header/ms-icon-144x144.png">
<meta name="theme-color" content="#030609">
<link href="/static/frontend/css/main.css?v=70" rel="stylesheet" type="text/css">
</head>
<body data-static-url="/static/">
<main class="app preload">
<header>
<div class="top-notification hidden">
<span class="txt"></span>
<a class="btn-close"></a>
</div>
<div class="container">
<div class="logo">
<a href="/">
<img src="/static/frontend/img/logo.svg">
<span class="txt">swamp.finance</span>
</a>
</div>
<menu>
<ul>
<li class="selected"><a href="/app/">Earn</a></li>
<li><a href="/tutorials/">Tutorials</a></li>
<li><a href="https://docs.swamp.finance/" target="_blank">Docs</a></li>
<li><a href="/buy-bnb/">Buy BNB</a></li>
<li><a href="/download-wallet/">Download Wallet</a></li>
</ul>
</menu>
<div class="wallet">
<div class="swamp-price">
<img src="/static/frontend/img/symbols/swamp.svg">
<div class="txt ml-10 price">$67.90</div>
</div>
<a class="btn small ml-20 primary buy-swamp hidden">Buy SWAMP</a>
<a class="btn small ml-10 btn-wallet" id="btn-wallet-unlock">Unlock Wallet</a>
<div class="balance ml-10 hidden">
<span class="swamp-balance">0 SWAMP</span>
<div class="wallet-info">
<span class="wallet-address">...</span>
<span class="icon ml-10"></span>
</div>
</div>
</div>
<div class="hamburger">
<svg viewBox="0 0 18 15">
<path fill="#3C4E5A" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
<path fill="#3C4E5A" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
<path fill="#3C4E5A" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
</svg>
</div>
</div>
<div class="mobile-menu">
<div class="wallet">
<a class="btn small ml-10 btn-wallet" id="btn-wallet-unlock">Unlock Wallet</a>
<div class="balance ml-10 hidden">
<span class="swamp-balance">0 SWAMP</span>
<div class="wallet-info">
<span class="wallet-address">...</span>
<span class="icon ml-10"></span>
</div>
</div>
<div class="break"></div>
<div class="swamp-price">
<img src="/static/frontend/img/symbols/swamp.svg">
<div class="txt ml-10 price">$67.90</div>
</div>
<a class="btn small ml-20 primary buy-swamp">Buy SWAMP</a>
</div>
<div class="menu">
<ul>
<li class="selected"><a href="/app/">Earn</a></li>
<li><a href="/tutorials/">Tutorials</a></li>
<li><a href="https://docs.swamp.finance/">Docs</a></li>
<li><a href="/buy-bnb/">Buy BNB</a></li>
<li><a href="/download-wallet/">Download Wallet</a></li>
</ul>
</div>
</div>
</header>
<div class="background no-anim">
<div class="firefly" size="5" offset="1" anim="1"></div>
<div class="firefly" size="8" offset="2" anim="3"></div>
<div class="firefly" size="6" offset="3" anim="2"></div>
<div class="firefly" size="5" offset="4" anim="1"></div>
<img class="layer front" src="/static/frontend/img/background/bg-front.svg">
<img class="layer fog" src="/static/frontend/img/background/bg-fog.png">
<img class="layer bg" src="/static/frontend/img/background/bg-back.svg">
</div>
<div class="content" data-gas-limits="{&quot;1&quot;: &quot;500000&quot;, &quot;2&quot;: &quot;2000000&quot;, &quot;3&quot;: &quot;500000&quot;}" data-bsc-networks="{56: &#x27;Binance Smart Chain - Mainnet&#x27;, 97: &#x27;Binance Smart Chain - Testnet&#x27;}" data-bep20-token-contracts="" data-farm-contract="0x33AdBf5f1ec364a4ea3a5CA8f310B597B8aFDee3" data-native-token-ticker="SWAMP" data-native-token-display-decimals="2" data-native-token-bep20-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-pankcake-bnb-native-pool-contract="0xa823C74dE2343E922ab24520f29D08390B4e894D" data-pancake-bnb-stablecoin-pool-contract="0x1b96b92314c44b159149f7e0303511fb2fc4774f" data-api-prices-url="/api-prices/" data-currency-native-id="3" data-prices-all="{&quot;5&quot;: &quot;504.85280000&quot;, &quot;1&quot;: &quot;504.85280000&quot;, &quot;8&quot;: &quot;61224.55302075&quot;, &quot;9&quot;: &quot;1.00000000&quot;, &quot;10&quot;: &quot;1.00000000&quot;, &quot;11&quot;: &quot;4.65100000&quot;, &quot;12&quot;: &quot;0.60335729&quot;, &quot;13&quot;: &quot;126.04786358&quot;, &quot;14&quot;: &quot;25.04963176&quot;, &quot;15&quot;: &quot;25.20400000&quot;, &quot;16&quot;: &quot;1.31290000&quot;, &quot;17&quot;: &quot;12.00330000&quot;, &quot;18&quot;: &quot;2361.46220217&quot;, &quot;19&quot;: &quot;20.84577433&quot;, &quot;20&quot;: &quot;31.47480268&quot;, &quot;21&quot;: &quot;0.07185000&quot;, &quot;22&quot;: &quot;0.55582148&quot;, &quot;23&quot;: &quot;0.90878115&quot;, &quot;24&quot;: &quot;0.83616194&quot;, &quot;25&quot;: &quot;0.56515804&quot;, &quot;26&quot;: &quot;0.72014995&quot;, &quot;27&quot;: &quot;3.06165218&quot;, &quot;28&quot;: &quot;0.29097124&quot;, &quot;29&quot;: &quot;1.00000000&quot;, &quot;30&quot;: &quot;2378.74156588&quot;, &quot;31&quot;: &quot;3927.07996063&quot;, &quot;32&quot;: &quot;17.78995911&quot;, &quot;3&quot;: &quot;67.89631074645531401783316028&quot;, &quot;4&quot;: 0, &quot;1003&quot;: &quot;410.88039568&quot;, &quot;1017&quot;: &quot;17.40596024&quot;, &quot;1018&quot;: &quot;78.89518785&quot;, &quot;1023&quot;: &quot;4126.89812890&quot;, &quot;1026&quot;: &quot;160.47527008&quot;, &quot;1043&quot;: &quot;69.45875652&quot;, &quot;2&quot;: &quot;21.97933129&quot;, &quot;1001&quot;: &quot;240.13657166&quot;, &quot;1002&quot;: &quot;240.13657166&quot;, &quot;6&quot;: &quot;8.02424216&quot;, &quot;7&quot;: &quot;1.93295212&quot;, &quot;1004&quot;: &quot;3.06086307&quot;, &quot;1005&quot;: &quot;71.86999236&quot;, &quot;1006&quot;: &quot;708.65676943&quot;, &quot;1007&quot;: &quot;2.06146542&quot;, &quot;1011&quot;: &quot;4.49918698&quot;, &quot;1015&quot;: &quot;10.24808630&quot;, &quot;1016&quot;: &quot;233863.36887670&quot;, &quot;1021&quot;: &quot;10.00582482&quot;, &quot;1025&quot;: &quot;11.61697527&quot;, &quot;1042&quot;: &quot;8.48501373&quot;, &quot;1028&quot;: &quot;1.57667716&quot;, &quot;1029&quot;: &quot;2.04870826&quot;, &quot;1031&quot;: &quot;1.99852713&quot;, &quot;1036&quot;: &quot;1.14696070&quot;, &quot;1037&quot;: &quot;2.00631180&quot;, &quot;1039&quot;: &quot;142.76261429&quot;, &quot;1008&quot;: &quot;11905.49913094&quot;, &quot;1009&quot;: &quot;52.09035952&quot;, &quot;1010&quot;: &quot;54.85048215&quot;, &quot;1012&quot;: &quot;36.26600899&quot;, &quot;1013&quot;: &quot;581.93421031&quot;, &quot;1014&quot;: &quot;228.27389905&quot;, &quot;1019&quot;: &quot;167661308.57242404&quot;, &quot;1020&quot;: &quot;4012.20873295&quot;, &quot;1022&quot;: &quot;224.11517221&quot;, &quot;1024&quot;: &quot;238.39265094&quot;, &quot;1041&quot;: &quot;190.77673903&quot;, &quot;1027&quot;: &quot;1225808.98128369&quot;, &quot;1030&quot;: &quot;44.12279297&quot;, &quot;1032&quot;: &quot;34.79468431&quot;, &quot;1033&quot;: &quot;38.89306926&quot;, &quot;1034&quot;: &quot;80.25916583&quot;, &quot;1035&quot;: &quot;26.25228150&quot;, &quot;1038&quot;: &quot;2227.98966237&quot;, &quot;1040&quot;: &quot;1.97659317&quot;, &quot;1044&quot;: &quot;2.00302409&quot;, &quot;1045&quot;: &quot;2.00509550&quot;}">
<div class="title">
<div class="txt ttl">Deposit & Earn money</div>
<div class="txt tvl ml-auto">TVL $88,912,902</div>
</div>
<div class="filters">
<div class="filter search">
<div class="lbl">Search</div>
<div class="input-container search">
<input type="text" class="mt-10" placeholder="Search pools...">
</div>
</div>
<div class="filter platform">
<div class="lbl">Platform</div>
<div class="dropdown-wrapper wrapped mt-10 platform" data-value="all" data-name="All">
<div class="dropdown">
<div class="itm" data-value="-1" data-name="All">All</div>
<div class="itm" data-value="1" data-name="Pancake Swap">Pancake Swap</div>
<div class="itm" data-value="2" data-name="Swamp">Swamp</div>
<div class="itm" data-value="4" data-name="Panda Yield">Panda Yield</div>
<div class="itm" data-value="5" data-name="Goose Finance">Goose Finance</div>
<div class="itm" data-value="6" data-name="Blizzard (legacy)">Blizzard (legacy)</div>
<div class="itm" data-value="7" data-name="bDollar">bDollar</div>

<div class="itm" data-value="8" data-name="Midas Dollar">Midas Dollar</div>
<div class="itm" data-value="9" data-name="ApeSwap">ApeSwap</div>
<div class="itm" data-value="10" data-name="Farm.space">Farm.space</div>
<div class="itm" data-value="11" data-name="Blizzard.money">Blizzard.money</div>
<div class="itm" data-value="12" data-name="Venus (Auto)">Venus (Auto)</div>
<div class="itm" data-value="13" data-name="MDEX (Auto)">MDEX (Auto)</div>
</div>
</div>
</div>
<div class="filter type">
<div class="lbl">Type</div>
<div class="dropdown-wrapper mt-10 pool-type" data-value="all" data-name="All">
<div class="dropdown">
<div class="itm" data-value="-1" data-name="All">All</div>
<div class="itm" data-value="1" data-name="Single Token">Single Token</div>
<div class="itm" data-value="2" data-name="Stable Token">Stable Token</div>
<div class="itm" data-value="3" data-name="LP Token">LP Token</div>
</div>
</div>
</div>
<div class="filter asset">
<div class="lbl">Asset</div>
<div class="dropdown-wrapper wrapped mt-10 asset" data-value="all" data-name="All">
<div class="dropdown">
<div class="itm" data-value="-1" data-name="All">All</div>
<div class="itm" data-value="5" data-name="BNB">BNB</div>
<div class="itm" data-value="8" data-name="BTCB">BTCB</div>
<div class="itm" data-value="9" data-name="BUSD">BUSD</div>
<div class="itm" data-value="10" data-name="USDT">USDT</div>
<div class="itm" data-value="11" data-name="SXP">SXP</div>
<div class="itm" data-value="12" data-name="BUX">BUX</div>
<div class="itm" data-value="13" data-name="BELT">BELT</div>
<div class="itm" data-value="14" data-name="BMXX">BMXX</div>
<div class="itm" data-value="15" data-name="DEXE">DEXE</div>
<div class="itm" data-value="16" data-name="NULS">NULS</div>
<div class="itm" data-value="17" data-name="ALICE">ALICE</div>
<div class="itm" data-value="18" data-name="BIFI">BIFI</div>
<div class="itm" data-value="19" data-name="EGG">EGG</div>
<div class="itm" data-value="20" data-name="BLZD">BLZD</div>
<div class="itm" data-value="21" data-name="SWTH">SWTH</div>
<div class="itm" data-value="22" data-name="BDO">BDO</div>
<div class="itm" data-value="23" data-name="MDO">MDO</div>
<div class="itm" data-value="24" data-name="BANANA">BANANA</div>
<div class="itm" data-value="25" data-name="DFT">DFT</div>
<div class="itm" data-value="26" data-name="TRADE">TRADE</div>
<div class="itm" data-value="27" data-name="NRV">NRV</div>
<div class="itm" data-value="28" data-name="SPACE">SPACE</div>
<div class="itm" data-value="29" data-name="USDC">USDC</div>
<div class="itm" data-value="30" data-name="ETH">ETH</div>
<div class="itm" data-value="31" data-name="MDS">MDS</div>
<div class="itm" data-value="32" data-name="XBLZD">XBLZD</div>
<div class="itm" data-value="3" data-name="SWAMP">SWAMP</div>
<div class="itm" data-value="1003" data-name="SWAMP-BNB LP">SWAMP-BNB LP</div>
<div class="itm" data-value="1017" data-name="SWAMP-BUSD LP">SWAMP-BUSD LP</div>
<div class="itm" data-value="1018" data-name="SWAMP-CAKE LP">SWAMP-CAKE LP</div>
<div class="itm" data-value="1023" data-name="SWAMP-BTCB LP">SWAMP-BTCB LP</div>
<div class="itm" data-value="1026" data-name="SWAMP-BLZD LP">SWAMP-BLZD LP</div>

<div class="itm" data-value="1043" data-name="SWAMP-XBLZD LP">SWAMP-XBLZD LP</div>
<div class="itm" data-value="2" data-name="CAKE">CAKE</div>
<div class="itm" data-value="1001" data-name="CAKE-WBNB LP">CAKE-WBNB LP</div>
<div class="itm" data-value="1002" data-name="CAKE-BNB LP">CAKE-BNB LP</div>
<div class="itm" data-value="6" data-name="SLME">SLME</div>
<div class="itm" data-value="7" data-name="BBOO">BBOO</div>
<div class="itm" data-value="1004" data-name="BBOO-BUSD LP">BBOO-BUSD LP</div>
<div class="itm" data-value="1005" data-name="BBOO-BNB LP">BBOO-BNB LP</div>
<div class="itm" data-value="1006" data-name="BBOO-BTCB LP">BBOO-BTCB LP</div>
<div class="itm" data-value="1007" data-name="BUSD-USDT LP">BUSD-USDT LP</div>
<div class="itm" data-value="1011" data-name="SXP-BUSD LP">SXP-BUSD LP</div>
<div class="itm" data-value="1015" data-name="DEXE-BUSD LP">DEXE-BUSD LP</div>
<div class="itm" data-value="1016" data-name="NULS-BUSD LP">NULS-BUSD LP</div>
<div class="itm" data-value="1021" data-name="EGG-BUSD LP">EGG-BUSD LP</div>
<div class="itm" data-value="1025" data-name="BLZD-BUSD LP">BLZD-BUSD LP</div>
<div class="itm" data-value="1042" data-name="XBLZD-BUSD LP">XBLZD-BUSD LP</div>
<div class="itm" data-value="1028" data-name="BDO-BUSD LP">BDO-BUSD LP</div>
<div class="itm" data-value="1029" data-name="MDO-BUSD LP">MDO-BUSD LP</div>
<div class="itm" data-value="1031" data-name="BANANA-BUSD LP">BANANA-BUSD LP</div>
<div class="itm" data-value="1036" data-name="SPACE-BUSD LP">SPACE-BUSD LP</div>
<div class="itm" data-value="1037" data-name="BUSD-USDC LP">BUSD-USDC LP</div>
<div class="itm" data-value="1039" data-name="MDS-BUSD LP">MDS-BUSD LP</div>
<div class="itm" data-value="1008" data-name="BNB-BTCB LP">BNB-BTCB LP</div>
<div class="itm" data-value="1009" data-name="BNB-BUSD LP">BNB-BUSD LP</div>
<div class="itm" data-value="1010" data-name="BNB-USDT LP">BNB-USDT LP</div>
<div class="itm" data-value="1012" data-name="BUX-BNB LP">BUX-BNB LP</div>
<div class="itm" data-value="1013" data-name="BELT-BNB LP">BELT-BNB LP</div>
<div class="itm" data-value="1014" data-name="BMXX-BNB LP">BMXX-BNB LP</div>
<div class="itm" data-value="1019" data-name="ALICE-BNB LP">ALICE-BNB LP</div>
<div class="itm" data-value="1020" data-name="BIFI-BNB LP">BIFI-BNB LP</div>
<div class="itm" data-value="1022" data-name="EGG-BNB LP">EGG-BNB LP</div>
<div class="itm" data-value="1024" data-name="BLZD-BNB LP">BLZD-BNB LP</div>
<div class="itm" data-value="1041" data-name="XBLZD-BNB LP">XBLZD-BNB LP</div>
<div class="itm" data-value="1027" data-name="SWTH-BNB LP">SWTH-BNB LP</div>
<div class="itm" data-value="1030" data-name="BANANA-BNB LP">BANANA-BNB LP</div>
<div class="itm" data-value="1032" data-name="DFT-BNB LP">DFT-BNB LP</div>
<div class="itm" data-value="1033" data-name="TRADE-BNB LP">TRADE-BNB LP</div>
<div class="itm" data-value="1034" data-name="NRV-BNB LP">NRV-BNB LP</div>
<div class="itm" data-value="1035" data-name="SPACE-BNB LP">SPACE-BNB LP</div>
<div class="itm" data-value="1038" data-name="BNB-ETH LP">BNB-ETH LP</div>
<div class="itm" data-value="1040" data-name="MDO-USDT LP">MDO-USDT LP</div>
<div class="itm" data-value="1044" data-name="USDT-BUSD LP">USDT-BUSD LP</div>
<div class="itm" data-value="1045" data-name="USDT-USDC LP">USDT-USDC LP</div>
</div>
</div>
</div>
<div class="filter sort">
<div class="lbl">Sort by</div>
<div class="dropdown-wrapper wrapped mt-10 sort" data-value="default" data-name="Default">
<div class="dropdown">
<div class="itm" data-value="default" data-name="Default">Default</div>
<div class="itm" data-value="name" data-name="Name">Name</div>
<div class="itm" data-value="balance" data-name="Balance">Balance</div>
<div class="itm" data-value="deposited" data-name="Deposited">Deposited</div>
<div class="itm" data-value="apy" data-name="Yearly">Yearly</div>
<div class="itm" data-value="daily" data-name="Daily">Daily</div>
<div class="itm" data-value="tvl" data-name="TVL">TVL</div>
</div>
</div>
</div>
<div class="filter zero-balance">
<div class="checkbox-container hide-zero-balance">
<label for="hide-zero-balance">Show my vaults</label>
<input type="checkbox" id="hide-zero-balance">
</div>
</div>
</div>

<div class="stats-stripe">
<div class="btn show-hide"></div>
<div class="txt deposit-ttl">My total deposit:</div>
<div class="txt total-deposit loading">&zwnj;</div>
<div class="txt swamp-ttl">Swamp pending:</div>
<div class="txt swamp-pending loading">
<span class="amount"></span>
<span class="value"></span>
</div>
<div class="btn harvest-all disabled">Harvest All</div>
</div>
<div class="pools">
<div class="pool-card highlighted" data-pid="2" data-pool-type="1" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[3, -1, 3]" data-pool-title="SWAMP" data-currency-id="3" data-currency-name="Swampy" data-currency-ticker="SWAMP" data-currency-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-strategy-contract-address="0xc65D6E612C27b7C9B00dE40715015EEa81368252" data-is-lp="false" data-token0-ticker="swamp" data-token0-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="614.66909146" data-daily="1.684024908109589041095890411" data-tvl="9811482.60167128" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP</div>
<div class="bottom">
<div class="tag multiplier">45x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
614.67%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.68%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$9.81M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SWAMP</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d">
Deposit to Vault
</div>

</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">614.67%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">614.67%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">1.68%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.68%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">45x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$9,811,483</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card highlighted" data-pid="3" data-pool-type="3" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[5, 3, 1003]" data-pool-title="SWAMP / BNB LP" data-currency-id="1003" data-currency-name="SWAMP-BNB LP" data-currency-ticker="SWAMP-BNB LP" data-currency-contract="0xa823c74de2343e922ab24520f29d08390b4e894d" data-strategy-contract-address="0x66C0Fb89F559FA58E2786C95b2C5E7f701aB2130" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token1-ticker="swamp" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="671.64983008" data-daily="1.840136520767123287671232877" data-tvl="1995356.91452513" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">10x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
671.65%
</div>
 <div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.84%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$2.00M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / SWAMP</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xa823c74de2343e922ab24520f29d08390b4e894d">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
 <div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">671.65%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">671.65%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">1.84%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.84%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">10x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,995,357</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card highlighted" data-pid="18" data-pool-type="3" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[3, 9, 1017]" data-pool-title="SWAMP / BUSD LP" data-currency-id="1017" data-currency-name="SWAMP-BUSD LP" data-currency-ticker="SWAMP-BUSD LP" data-currency-contract="0x9b06c33807a9dee35dc676c401e6b8d93ab2a2f4" data-strategy-contract-address="0x65c480303AFF5D40c917F3CeE4B5794D7a75d04A" data-is-lp="true" data-token0-ticker="swamp" data-token0-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="683.71610639" data-daily="1.873194812027397260273972603" data-tvl="1960142.69675981" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/swamp.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">10x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
683.72%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.87%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.96M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SWAMP / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x9b06c33807a9dee35dc676c401e6b8d93ab2a2f4">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">683.72%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">683.72%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">1.87%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.87%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
 <div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">10x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,960,143</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card highlighted" data-pid="19" data-pool-type="3" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[2, 3, 1018]" data-pool-title="SWAMP / CAKE LP" data-currency-id="1018" data-currency-name="SWAMP-CAKE LP" data-currency-ticker="SWAMP-CAKE LP" data-currency-contract="0x427549A576CA834EAd349772a3E9674Ed8Ef1095" data-strategy-contract-address="0x1b1d769B609b92C8A036CA9e57099e9f1253957c" data-is-lp="true" data-token0-ticker="cake" data-token0-contract="0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" data-token0-is-gas="false" data-token1-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token1-ticker="swamp" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="695.81481104" data-daily="1.906341948054794520547945205" data-tvl="963030.04141969" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/cake.svg">
<img src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP / CAKE LP</div>
<div class="bottom">
<div class="tag multiplier">5x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
695.81%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.91%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$963,030
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP-CAKE LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get CAKE / SWAMP</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x427549A576CA834EAd349772a3E9674Ed8Ef1095">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
 <div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">695.81%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">695.81%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">1.91%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.91%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$963,030</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card highlighted" data-pid="25" data-pool-type="3" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[8, 3, 1023]" data-pool-title="SWAMP / BTCB LP" data-currency-id="1023" data-currency-name="SWAMP-BTCB LP" data-currency-ticker="SWAMP-BTCB LP" data-currency-contract="0xffbDe721C00c8F5e17bF8e83e6e501959D3736f0" data-strategy-contract-address="0x15D2086E30D1bD01e95D2aBDF901b4F5CA8Aed23" data-is-lp="true" data-token0-ticker="btcb" data-token0-contract="0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" data-token0-is-gas="false" data-token1-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token1-ticker="swamp" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="637.90692991" data-daily="1.747690218931506849315068493" data-tvl="420180.77238508" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/btcb.svg">
<img src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP / BTCB LP</div>
<div class="bottom">
<div class="tag multiplier">2x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
637.91%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.75%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$420,181
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP-BTCB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BTCB / SWAMP</a>
</div>
 <div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xffbDe721C00c8F5e17bF8e83e6e501959D3736f0">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">637.91%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">637.91%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">1.75%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.75%</span>
 </div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">2x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$420,181</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card highlighted" data-pid="48" data-pool-type="3" data-platform="2" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[32, 3, 1043]" data-pool-title="SWAMP / xBLZD LP" data-currency-id="1043" data-currency-name="SWAMP-XBLZD LP" data-currency-ticker="SWAMP-XBLZD LP" data-currency-contract="0x10c9DF9C7a47BEfB7C25a453D817845286a68C6C" data-strategy-contract-address="0xf4052aF7a24B5907c185c3BD195fc965753d5Cce" data-is-lp="true" data-token0-ticker="xblzd" data-token0-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E" data-token0-is-gas="false" data-token1-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-token1-ticker="swamp" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="729.51415681" data-daily="1.998668922767123287671232877" data-tvl="45927.18044215" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/xblzd.svg">
<img src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="pool">
<div class="ttl">SWAMP / xBLZD LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Swamp</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
729.51%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
2.00%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$45,927
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWAMP-XBLZD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get XBLZD / SWAMP</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x10c9DF9C7a47BEfB7C25a453D817845286a68C6C">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
 <span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">729.51%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">729.51%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">2.00%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">2.00%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$45,927</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="33" data-pool-type="3" data-platform="8" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[23, 9, 1029]" data-pool-title="MDO / BUSD LP" data-currency-id="1029" data-currency-name="MDO-BUSD LP" data-currency-ticker="MDO-BUSD LP" data-currency-contract="0xD65F81878517039E39c359434d8D8bD46CC4531F" data-strategy-contract-address="0xB657e76A4CA10Bf142689e5B600624B699b32022" data-is-lp="true" data-token0-ticker="mdo" data-token0-contract="0x35e869B7456462b81cdB5e6e42434bD27f3F788c" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="5229.90764713" data-daily="1.186385897917808219178082191" data-tvl="1976035.72956980" data-gas-limit-tx="1">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
<div class="mini-tag promotion">PROMOTION</div>
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/mdo.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">MDO / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Midas Dollar</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
5229.91%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.19%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.98M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get MDO-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get MDO / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xD65F81878517039E39c359434d8D8bD46CC4531F">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">5196.00%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">33.91%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">5229.91%</span>
</div>
</div>
 <div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.09%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.09%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.19%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,976,036</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$10,453,485</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="44" data-pool-type="3" data-platform="8" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[23, 10, 1040]" data-pool-title="MDO / USDT LP" data-currency-id="1040" data-currency-name="MDO-USDT LP" data-currency-ticker="MDO-USDT LP" data-currency-contract="0xd245BDb115707730136F0459e2aa9b0b19023724" data-strategy-contract-address="0xd8A88BBC24c6e4Db4DCD30533A6DAA1376Aa8151" data-is-lp="true" data-token0-ticker="mdo" data-token0-contract="0x35e869B7456462b81cdB5e6e42434bD27f3F788c" data-token0-is-gas="false" data-token1-contract="0x55d398326f99059fF775485246999027B3197955" data-token1-ticker="usdt" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="5222.30045338" data-daily="1.192268193589041095890410959" data-tvl="1848633.26944763" data-gas-limit-tx="1">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
<div class="mini-tag promotion">PROMOTION</div>
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/mdo.svg">
<img src="/static/frontend/img/symbols/usdt.svg">
</div>
<div class="pool">
<div class="ttl">MDO / USDT LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Midas Dollar</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
5222.30%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.19%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.85M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get MDO-USDT LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get MDO / USDT</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
 </div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xd245BDb115707730136F0459e2aa9b0b19023724">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">5186.05%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">36.25%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">5222.30%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.09%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.10%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.19%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,848,633</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$5,067,342</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="43" data-pool-type="3" data-platform="8" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[31, 9, 1039]" data-pool-title="MDS / BUSD LP" data-currency-id="1039" data-currency-name="MDS-BUSD LP" data-currency-ticker="MDS-BUSD LP" data-currency-contract="0x4925D290b22A9c19e126583a4dc858fBe909B014" data-strategy-contract-address="0x6DA40a320F591B37De3D6132b9da0c5E871d9c0E" data-is-lp="true" data-token0-ticker="mds" data-token0-contract="0x242E46490397ACCa94ED930F2C4EdF16250237fa" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="124852.31300685" data-daily="2.181597214547945205479452055" data-tvl="878427.32053079" data-gas-limit-tx="1">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
<div class="mini-tag promotion">PROMOTION</div>
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/mds.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">MDS / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Midas Dollar</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
124852.31%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
2.18%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$878,427
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get MDS-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get MDS / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x4925D290b22A9c19e126583a4dc858fBe909B014">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">124776.03%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">76.28%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">124852.31%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.97%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.21%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">2.18%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$878,427</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$2,687,037</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="55" data-pool-type="2" data-platform="12" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[9, -1, 9]" data-pool-title="BUSD" data-currency-id="9" data-currency-name="Binance BUSD" data-currency-ticker="BUSD" data-currency-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-strategy-contract-address="0x8aEB2EDB565b3D2B08A437e13645A32b39859c2f" data-is-lp="false" data-token0-ticker="busd" data-token0-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="82.99837856" data-daily="0.2170959070684931506849315068" data-tvl="1264798.96075984" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BUSD</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Venus (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
83.00%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.22%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.26M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BUSD</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56">
<span class="warn">Deposit to Vault</span>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
 <div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">30.02%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">52.98%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">83.00%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.07%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.15%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.22%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,264,799</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$0</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
<img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit. It also has a 0.1% deposit fee and 0.1% withdrawal fee.
</span>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="56" data-pool-type="1" data-platform="12" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[1, -1, 1]" data-pool-title="WBNB" data-currency-id="1" data-currency-name="Binance Coin" data-currency-ticker="WBNB" data-currency-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-strategy-contract-address="0x6dbE16FFCec020Ff8cD15ac2B7822Cd79F6Df69b" data-is-lp="false" data-token0-ticker="wbnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="108.59100044" data-daily="0.2906605304383561643835616438" data-tvl="792996.32427589" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/wbnb.svg">
</div>
<div class="pool">
<div class="ttl">WBNB</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Venus (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
 </div>
<div class="key-value apy shorter">
<div class="val primary">
108.59%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.29%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$792,996
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get WBNB</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get WBNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c">
<span class="warn">Deposit to Vault</span>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">24.09%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">84.50%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">108.59%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.06%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.23%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.29%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$792,996</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$0</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
 Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
<img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit. It also has a 0.1% deposit fee and 0.1% withdrawal fee.
</span>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="51" data-pool-type="1" data-platform="9" data-platform-swap-single-url="https://dex.apeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://dex.apeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://dex.apeswap.finance/#/add/BNB/" data-currencies="[24, -1, 24]" data-pool-title="BANANA" data-currency-id="24" data-currency-name="BANANA" data-currency-ticker="BANANA" data-currency-contract="0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95" data-strategy-contract-address="0xF0b31c3a36430380FAb0486cA65D17E1A2744284" data-is-lp="false" data-token0-ticker="banana" data-token0-contract="0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1196.91360751" data-daily="0.9076051806027397260273972602" data-tvl="415813.31502026" data-gas-limit-tx="1">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/banana.svg">
</div>
<div class="pool">
<div class="ttl">BANANA</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">ApeSwap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1196.91%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.91%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$415,813
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BANANA</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BANANA</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1116.34%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">80.58%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1196.91%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.69%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.22%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.91%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$415,813</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$9,351,774</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card new" data-pid="53" data-pool-type="3" data-platform="13" data-platform-swap-single-url="https://bsc.mdex.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://bsc.mdex.com/#/add/" data-platform-swap-lp-with-gas-url="https://bsc.mdex.com/#/add/BNB/" data-currencies="[10, 9, 1044]" data-pool-title="USDT / BUSD LP" data-currency-id="1044" data-currency-name="USDT-BUSD LP" data-currency-ticker="USDT-BUSD LP" data-currency-contract="0x62c1dEC1fF328DCdC157Ae0068Bb21aF3967aCd9" data-strategy-contract-address="0x30A02DDD701579b54aF609555d87b146564D4d7f" data-is-lp="true" data-token0-ticker="usdt" data-token0-contract="0x55d398326f99059fF775485246999027B3197955" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="192.22463946" data-daily="0.5014135590136986301369863014" data-tvl="234468.00654374" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/usdt.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">USDT / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">MDEX (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
192.22%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.50%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$234,468
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get USDT-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
 <div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get USDT / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x62c1dEC1fF328DCdC157Ae0068Bb21aF3967aCd9">
<span class="warn">Deposit to Vault</span>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">49.33%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">142.90%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">192.22%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.11%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.39%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.50%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$234,468</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$138,753,004</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
<img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit.
</span>
</div>
</div>
</div>
</div>
</div>
 <div class="pool-card new" data-pid="54" data-pool-type="3" data-platform="13" data-platform-swap-single-url="https://bsc.mdex.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://bsc.mdex.com/#/add/" data-platform-swap-lp-with-gas-url="https://bsc.mdex.com/#/add/BNB/" data-currencies="[10, 29, 1045]" data-pool-title="USDT / USDC LP" data-currency-id="1045" data-currency-name="USDT-USDC LP" data-currency-ticker="USDT-USDC LP" data-currency-contract="0x9f4Da89774570E27170873BefD139a79CB1A3da2" data-strategy-contract-address="0x17501303B8D280CEf49a399569ff78C02Ce0e348" data-is-lp="true" data-token0-ticker="usdt" data-token0-contract="0x55d398326f99059fF775485246999027B3197955" data-token0-is-gas="false" data-token1-contract="0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" data-token1-ticker="usdc" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="203.61868262" data-daily="0.5300396421917808219178082191" data-tvl="221189.27663726" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag new-tag">NEW</div>
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/usdt.svg">
<img src="/static/frontend/img/symbols/usdc.svg">
</div>
<div class="pool">
<div class="ttl">USDT / USDC LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">MDEX (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
203.62%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.53%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$221,189
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get USDT-USDC LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get USDT / USDC</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x9f4Da89774570E27170873BefD139a79CB1A3da2">
<span class="warn">Deposit to Vault</span>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">52.14%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">151.47%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
 <div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">203.62%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.12%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.41%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.53%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$221,189</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$72,466,956</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
<img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit.
</span>
</div>
</div>
</div>
</div>
</div>
 <div class="pool-card" data-pid="0" data-pool-type="1" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[2, -1, 2]" data-pool-title="CAKE" data-currency-id="2" data-currency-name="PancakeSwap Token" data-currency-ticker="CAKE" data-currency-contract="0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" data-strategy-contract-address="0x7207712971eA788813C70D58f1601Dec95CEB10e" data-is-lp="false" data-token0-ticker="cake" data-token0-contract="0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="188.47059048" data-daily="0.3140130779178082191780821918" data-tvl="20267736.73311156" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/cake.svg">
</div>
<div class="pool">
<div class="ttl">CAKE</div>
<div class="bottom">
<div class="tag multiplier">2x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
188.47%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.31%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$20.27M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get CAKE</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get CAKE</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">175.25%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">13.22%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">188.47%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.28%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.04%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.31%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">2x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$20,267,737</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$2,320,694,869</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="1" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[2, 5, 1002]" data-pool-title="CAKE / BNB LP" data-currency-id="1002" data-currency-name="CAKE-BNB LP" data-currency-ticker="CAKE-BNB LP" data-currency-contract="0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6" data-strategy-contract-address="0xEf8148Fc9Dc6E6d3AD655B24873d7FF633CEd67f" data-is-lp="true" data-token0-ticker="cake" data-token0-contract="0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="140.84458680" data-daily="0.2729345829863013698630136986" data-tvl="13036069.54206122" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/cake.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">CAKE / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">2x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
140.84%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.27%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$13.04M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get CAKE-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get CAKE / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6">
 Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">120.28%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">20.56%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">140.84%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.22%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.06%</span>
 </div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.27%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">2x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$13,036,070</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$996,922,007</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="20" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[17, 5, 1019]" data-pool-title="ALICE / BNB LP" data-currency-id="1019" data-currency-name="ALICE-BNB LP" data-currency-ticker="ALICE-BNB LP" data-currency-contract="0xe022baa3E5E87658f789c9132B10d7425Fd3a389" data-strategy-contract-address="0xA48E0AfF15490d63958Ad85E4e1fDAF6F3C4d582" data-is-lp="true" data-token0-ticker="alice" data-token0-contract="0xac51066d7bec65dc4589368da368b212745d63e8" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="355.80431601" data-daily="0.6282647261643835616438356164" data-tvl="650358.93335754" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/alice.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">ALICE / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
355.80%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.63%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$650,359
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get ALICE-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get ALICE / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xe022baa3E5E87658f789c9132B10d7425Fd3a389">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
 <div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">252.77%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">103.03%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">355.80%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.35%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.28%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.63%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$650,359</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$14,316,305</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="14" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[5, 13, 1013]" data-pool-title="BELT / BNB LP" data-currency-id="1013" data-currency-name="BELT-BNB LP" data-currency-ticker="BELT-BNB LP" data-currency-contract="0x83B92D283cd279fF2e057BD86a95BdEfffED6faa" data-strategy-contract-address="0x66598484FA9dF7D0E65b088cA0Fb16590F5BA32f" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f" data-token1-ticker="belt" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1115.22846295" data-daily="0.8611693933972602739726027397" data-tvl="961916.47759682" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/belt.svg">
</div>
<div class="pool">
<div class="ttl">BELT / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
 <div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1115.23%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.86%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$961,916
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BELT-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / BELT</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x83B92D283cd279fF2e057BD86a95BdEfffED6faa">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1045.57%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">69.66%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1115.23%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.67%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.19%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.86%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$961,916</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$234,670,210</span>
</div>

</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="21" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[5, 18, 1020]" data-pool-title="BIFI / BNB LP" data-currency-id="1020" data-currency-name="BIFI-BNB LP" data-currency-ticker="BIFI-BNB LP" data-currency-contract="0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD" data-strategy-contract-address="0xd9B78587303C36352DB0ba8C10F473CfeA431BB7" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xCa3F508B8e4Dd382eE878A314789373D80A5190A" data-token1-ticker="bifi" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="136.45839272" data-daily="0.2592338651780821917808219178" data-tvl="4452493.76853644" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/bifi.svg">
</div>
<div class="pool">
<div class="ttl">BIFI / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
136.46%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.26%
 </div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$4.45M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BIFI-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / BIFI</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">121.41%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">15.05%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">136.46%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.22%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.04%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.26%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$4,452,494</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$10,605,575</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="15" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[14, 5, 1014]" data-pool-title="BMXX / BNB LP" data-currency-id="1014" data-currency-name="BMXX-BNB LP" data-currency-ticker="BMXX-BNB LP" data-currency-contract="0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67" data-strategy-contract-address="0x84F78E6583d3D099e954aED2d8be0422261a6735" data-is-lp="true" data-token0-ticker="bmxx" data-token0-contract="0x4131b87f74415190425ccd873048c708f8005823" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1396.22158985" data-daily="1.113471414602739726027397260" data-tvl="461694.99168140" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bmxx.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">BMXX / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1396.22%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.11%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$461,695
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BMXX-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BMXX / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1251.08%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">145.14%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
 <span class="val highlight">1396.22%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.72%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.40%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.11%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$461,695</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$8,152,051</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="9" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[8, 5, 1008]" data-pool-title="BNB / BTCB LP" data-currency-id="1008" data-currency-name="BNB-BTCB LP" data-currency-ticker="BNB-BTCB LP" data-currency-contract="0x7561EEe90e24F3b348E1087A005F78B4c8453524" data-strategy-contract-address="0x2E4745Cb23131c565546B4E2c746f9CcE00cFF7F" data-is-lp="true" data-token0-ticker="btcb" data-token0-contract="0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="77.22330303" data-daily="0.2112861765753424657534246576" data-tvl="923115.90899833" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/btcb.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">BNB / BTCB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
77.22%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.21%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$923,116
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BNB-BTCB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BTCB / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x7561EEe90e24F3b348E1087A005F78B4c8453524">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">4.63%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">72.59%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">77.22%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.01%</span>
</div>
 <div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.20%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.21%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$923,116</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$249,403,648</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="10" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[5, 9, 1009]" data-pool-title="BNB / BUSD LP" data-currency-id="1009" data-currency-name="BNB-BUSD LP" data-currency-ticker="BNB-BUSD LP" data-currency-contract="0x1B96B92314C44b159149f7E0303511fB2Fc4774f" data-strategy-contract-address="0x5f80032c1f11A8Fcf25295dd13926cB94a7DcBE0" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="42.33359630" data-daily="0.1158551958356164383561643835" data-tvl="1707220.52468471" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BNB / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
42.33%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.12%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.71M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BNB-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x1B96B92314C44b159149f7E0303511fB2Fc4774f">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
 </div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">3.08%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">39.25%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">42.33%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.01%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.11%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.12%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,707,221</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$549,032,530</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="11" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[10, 5, 1010]" data-pool-title="BNB / USDT LP" data-currency-id="1010" data-currency-name="BNB-USDT LP" data-currency-ticker="BNB-USDT LP" data-currency-contract="0x20bCC3b8a0091dDac2d0BC30F68E6CBb97de59Cd" data-strategy-contract-address="0x0e7E56ea2046e43442EE3063123f49A51A1dB379" data-is-lp="true" data-token0-ticker="usdt" data-token0-contract="0x55d398326f99059fF775485246999027B3197955" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="89.32030757" data-daily="0.2440977047945205479452054794" data-tvl="812650.65242597" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/usdt.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">BNB / USDT LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
 <div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
89.32%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.24%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$812,651
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BNB-USDT LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get USDT / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x20bCC3b8a0091dDac2d0BC30F68E6CBb97de59Cd">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
 <span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">6.86%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">82.46%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">89.32%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.02%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.23%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.24%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$812,651</span>
</div>
<div class="itm total-daily-apy">
 <span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$125,272,739</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="49" data-pool-type="2" data-platform="12" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[9, -1, 9]" data-pool-title="BUSD" data-currency-id="9" data-currency-name="Binance BUSD" data-currency-ticker="BUSD" data-currency-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-strategy-contract-address="0xEA748c1DCA762188Ec3ec8D2da1523B35bbA6a63" data-is-lp="false" data-token0-ticker="busd" data-token0-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="69.74899546" data-daily="0.1654035208767123287671232876" data-tvl="3365211.78900235" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag secondary">PAUSED</div>
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BUSD</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Venus (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
69.75%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.17%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$3.37M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BUSD</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BUSD</a>
</div>
<div class="deprecated-container">
Deposits are paused. Funds are <b>SAFE!</b>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">49.84%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">19.91%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">69.75%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.11%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.05%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.17%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$3,365,212</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$0</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
<img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit.
</span>
</div>
</div>
</div>
 </div>
</div>
<div class="pool-card" data-pid="8" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[10, 9, 1007]" data-pool-title="BUSD / USDT LP" data-currency-id="1007" data-currency-name="BUSD-USDT LP" data-currency-ticker="BUSD-USDT LP" data-currency-contract="0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd" data-strategy-contract-address="0xAf923cb6962D89fab2770F998EB2F72bA889A525" data-is-lp="true" data-token0-ticker="usdt" data-token0-contract="0x55d398326f99059fF775485246999027B3197955" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="44.13359771" data-daily="0.1208702487123287671232876712" data-tvl="1582864.95240765" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/usdt.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BUSD / USDT LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
44.13%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.12%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.58M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BUSD-USDT LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get USDT / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1.80%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">42.33%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
 <div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">44.13%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.00%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.12%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.12%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,582,865</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$180,486,824</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="13" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[12, 5, 1012]" data-pool-title="BUX / BNB LP" data-currency-id="1012" data-currency-name="BUX-BNB LP" data-currency-ticker="BUX-BNB LP" data-currency-contract="0x0F556f4E47513d1a19Be456a9aF778d7e1A226B9" data-strategy-contract-address="0x671B92Cb7Aa3433132f25a4DF6A0F0e515Cc2fFa" data-is-lp="true" data-token0-ticker="bux" data-token0-contract="0x211ffbe424b90e25a15531ca322adf1559779e45" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1403.22070887" data-daily="1.146561948219178082191780822" data-tvl="425116.63379052" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bux.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">BUX / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1403.22%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.15%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$425,117
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BUX-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BUX / BNB</a>
</div>
<div class="input-container number with-max">
 <input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x0F556f4E47513d1a19Be456a9aF778d7e1A226B9">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1245.60%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">157.63%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1403.22%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
 <span class="val">0.71%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.43%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.15%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$425,117</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$6,367,820</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="16" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[15, 9, 1015]" data-pool-title="DEXE / BUSD LP" data-currency-id="1015" data-currency-name="DEXE-BUSD LP" data-currency-ticker="DEXE-BUSD LP" data-currency-contract="0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c" data-strategy-contract-address="0xb6b91B90c71Fb4640f22424fcFefF0995B0062Fb" data-is-lp="true" data-token0-ticker="dexe" data-token0-contract="0x039cb485212f996a9dbb85a9a75d898f94d38da6" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1026.57333370" data-daily="0.9350283020000000000000000000" data-tvl="617617.54920777" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/dexe.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">DEXE / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1026.57%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.94%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$617,618
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get DEXE-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get DEXE / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
 <span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">918.08%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">108.50%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1026.57%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.64%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.30%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.94%</span>
</div>
 </div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$617,618</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$7,394,333</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="17" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[16, 9, 1016]" data-pool-title="NULS / BUSD LP" data-currency-id="1016" data-currency-name="NULS-BUSD LP" data-currency-ticker="NULS-BUSD LP" data-currency-contract="0xCA01F5D89d5b1d24ca5D6Ecc856D21e8a61DAFCc" data-strategy-contract-address="0x361825CC31196C43D2017aFA1D7820c26C00855B" data-is-lp="true" data-token0-ticker="nuls" data-token0-contract="0x8cd6e29d3686d24d3c2018cee54621ea0f89313b" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="258.06223923" data-daily="0.5691053870684931506849315069" data-tvl="551375.39816955" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/nuls.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">NULS / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
258.06%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.57%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$551,375
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get NULS-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get NULS / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xCA01F5D89d5b1d24ca5D6Ecc856D21e8a61DAFCc">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
 </div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">136.53%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">121.53%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">258.06%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.24%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.33%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.57%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$551,375</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$9,911,547</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="30" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[21, 5, 1027]" data-pool-title="SWTH / BNB LP" data-currency-id="1027" data-currency-name="SWTH-BNB LP" data-currency-ticker="SWTH-BNB LP" data-currency-contract="0x8c5cFfad6cddb96Ee33DA685D0d50a37e030E115" data-strategy-contract-address="0xeeF69ADA00020BEcAc9789a7413285cd233BA64c" data-is-lp="true" data-token0-ticker="swth" data-token0-contract="0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="738.17744362" data-daily="0.6603814414794520547945205480" data-tvl="2114569.04389533" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/swth.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">SWTH / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
 <div class="key-value apy shorter">
<div class="val primary">
738.18%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.66%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$2.11M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SWTH-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SWTH / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x8c5cFfad6cddb96Ee33DA685D0d50a37e030E115">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">706.49%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">31.69%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">738.18%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.57%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.09%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.66%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$2,114,569</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$8,122,060</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="12" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[11, 9, 1011]" data-pool-title="SXP / BUSD LP" data-currency-id="1011" data-currency-name="SXP-BUSD LP" data-currency-ticker="SXP-BUSD LP" data-currency-contract="0x2F82286c2178e9144F2a7b8d27D5B3203253CBA4" data-strategy-contract-address="0x7866E91C6492cfac8D7424340DB1e0d5EbeBEaf0" data-is-lp="true" data-token0-ticker="sxp" data-token0-contract="0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="223.16514039" data-daily="0.6101711187671232876712328767" data-tvl="314106.24124906" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/sxp.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">SXP / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
223.17%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.61%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$314,106
</div>
 <div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SXP-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SXP / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x2F82286c2178e9144F2a7b8d27D5B3203253CBA4">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">9.83%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">213.33%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">223.17%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.03%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.58%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.61%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$314,106</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$490,455</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="52" data-pool-type="1" data-platform="12" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[1, -1, 1]" data-pool-title="WBNB" data-currency-id="1" data-currency-name="Binance Coin" data-currency-ticker="WBNB" data-currency-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-strategy-contract-address="0xe740A624f4a3fa8ba247468249D48e7a79200F0B" data-is-lp="false" data-token0-ticker="wbnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="46.10950862" data-daily="0.1156913817534246575342465753" data-tvl="4307226.99929549" data-gas-limit-tx="2">
<div class="tag-container">
<div class="mini-tag secondary">PAUSED</div>
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/wbnb.svg">
</div>
<div class="pool">
<div class="ttl">WBNB</div>
<div class="bottom">
<div class="tag multiplier">0.5x</div>
<div class="provider ml-10">Venus (Auto)</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
 </div>
<div class="key-value apy shorter">
<div class="val primary">
46.11%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.12%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$4.31M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get WBNB</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get WBNB</a>
</div>
<div class="deprecated-container">
Deposits are paused. Funds are <b>SAFE!</b>
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
<span class="warn">Withdraw to Wallet</span>
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
 <span class="val">30.55%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">15.56%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">46.11%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.07%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.04%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.12%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.5x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$4,307,227</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$0</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
<div class="warn">
<div class="seperator"></div>
<div class="content">
 <img src="/static/frontend/img/info-primary.svg">
<span>
This vault uses increased gas limit.
</span>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="35" data-pool-type="3" data-platform="9" data-platform-swap-single-url="https://dex.apeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://dex.apeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://dex.apeswap.finance/#/add/BNB/" data-currencies="[24, 5, 1030]" data-pool-title="BANANA / BNB LP" data-currency-id="1030" data-currency-name="BANANA-BNB LP" data-currency-ticker="BANANA-BNB LP" data-currency-contract="0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713" data-strategy-contract-address="0x3cC0842ff8c2738276A0AeC4D3d54c3791111abD" data-is-lp="true" data-token0-ticker="banana" data-token0-contract="0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="2912.65477926" data-daily="1.059473405643835616438356164" data-tvl="726289.67947651" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/banana.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">BANANA / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">ApeSwap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
2912.65%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.06%
</div>
<div class="key">Daily</div>
 </div>
<div class="key-value tvl shorter">
<div class="val">
$726,290
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BANANA-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BANANA / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">2866.52%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">46.13%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">2912.65%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.93%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.13%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.06%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$726,290</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$8,932,589</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="36" data-pool-type="3" data-platform="9" data-platform-swap-single-url="https://dex.apeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://dex.apeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://dex.apeswap.finance/#/add/BNB/" data-currencies="[24, 9, 1031]" data-pool-title="BANANA / BUSD LP" data-currency-id="1031" data-currency-name="BANANA-BUSD LP" data-currency-ticker="BANANA-BUSD LP" data-currency-contract="0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914" data-strategy-contract-address="0x8f7F7f6F37882799F674a5eEEb14c16404aD9ecE" data-is-lp="true" data-token0-ticker="banana" data-token0-contract="0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="3580.74243377" data-daily="1.171081865534246575342465753" data-tvl="500503.14716065" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/banana.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BANANA / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">ApeSwap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
3580.74%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.17%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$500,503
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BANANA-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
 <div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BANANA / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">3513.80%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">66.94%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">3580.74%</span>
 </div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.99%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.18%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.17%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$500,503</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$4,314,634</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="41" data-pool-type="3" data-platform="9" data-platform-swap-single-url="https://dex.apeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://dex.apeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://dex.apeswap.finance/#/add/BNB/" data-currencies="[29, 9, 1037]" data-pool-title="BUSD / USDC LP" data-currency-id="1037" data-currency-name="BUSD-USDC LP" data-currency-ticker="BUSD-USDC LP" data-currency-contract="0xC087C78AbaC4A0E900a327444193dBF9BA69058E" data-strategy-contract-address="0x42CF504aa845CA9f038029eB359c8bfa09311894" data-is-lp="true" data-token0-ticker="usdc" data-token0-contract="0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="72.01715700" data-daily="0.1801228529863013698630136986" data-tvl="1039046.25685265" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/usdc.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BUSD / USDC LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">ApeSwap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
72.02%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.18%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.04M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BUSD-USDC LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get USDC / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
 <div class="btn secondary mt-20 deposit" data-currency-contract="0xC087C78AbaC4A0E900a327444193dBF9BA69058E">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">39.77%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">32.25%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">72.02%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.09%</span>
</div>
<div class="itm swamp-daily-apy">
 <span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.09%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.18%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,039,046</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$3,526,868</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="34" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[25, 5, 1032]" data-pool-title="DFT / BNB LP" data-currency-id="1032" data-currency-name="DFT-BNB LP" data-currency-ticker="DFT-BNB LP" data-currency-contract="0x8FbCbD7e30b1733965a8980bf7Ae2ca1c0C456cc" data-strategy-contract-address="0x76CF647E33593b7C993921f9C438B8832417C3a6" data-is-lp="true" data-token0-ticker="dft" data-token0-contract="0x42712dF5009c20fee340B245b510c0395896cF6e" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="2237.39286642" data-daily="1.059690951726027397260273973" data-tvl="455953.65199270" data-gas-limit-tx="1">
<div class="tag-container">

</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/dft.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">DFT / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
2237.39%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.06%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$455,954
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get DFT-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get DFT / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x8FbCbD7e30b1733965a8980bf7Ae2ca1c0C456cc">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">2163.91%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">73.48%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">2237.39%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.86%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.20%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.06%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
 <div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$455,954</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$7,848,709</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="42" data-pool-type="3" data-platform="9" data-platform-swap-single-url="https://dex.apeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://dex.apeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://dex.apeswap.finance/#/add/BNB/" data-currencies="[30, 5, 1038]" data-pool-title="ETH / BNB LP" data-currency-id="1038" data-currency-name="BNB-ETH LP" data-currency-ticker="BNB-ETH LP" data-currency-contract="0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11" data-strategy-contract-address="0x0eB82E9dd503452e47a95539320a411E2CeD93d6" data-is-lp="true" data-token0-ticker="eth" data-token0-contract="0x2170Ed0880ac9A755fd29B2688956BD959F933F8" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="66.90909075" data-daily="0.1624061129863013698630136987" data-tvl="1486564.22729671" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/eth.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">ETH / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">ApeSwap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
66.91%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.16%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$1.49M
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BNB-ETH LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get ETH / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">44.37%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">22.54%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">66.91%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.10%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.06%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.16%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$1,486,564</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
 <span class="val highlight">$1,786,471</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="38" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[27, 5, 1034]" data-pool-title="NRV / BNB LP" data-currency-id="1034" data-currency-name="NRV-BNB LP" data-currency-ticker="NRV-BNB LP" data-currency-contract="0x5a805994a2E30aC710e7376ccc0211285bD4dD92" data-strategy-contract-address="0x4825706bC7459379a42eCc7E71E6186564065700" data-is-lp="true" data-token0-ticker="nrv" data-token0-contract="0x42f6f551ae042cbe50c739158b4f0cac0edb9096" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="628.66556625" data-daily="0.7805245037534246575342465754" data-tvl="332729.15694197" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/nrv.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">NRV / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
628.67%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.78%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$332,729
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get NRV-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get NRV / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x5a805994a2E30aC710e7376ccc0211285bD4dD92">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">527.97%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">100.70%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">628.67%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.50%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.28%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.78%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$332,729</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$9,886,441</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
 <div class="pool-card" data-pid="39" data-pool-type="3" data-platform="10" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[28, 5, 1035]" data-pool-title="SPACE / BNB LP" data-currency-id="1035" data-currency-name="SPACE-BNB LP" data-currency-ticker="SPACE-BNB LP" data-currency-contract="0x78d9a0c50f6484291b4122f61888bb9ee71879ff" data-strategy-contract-address="0x8e02d21469A208AaCbE531AB0CE4bFbaeB102fB4" data-is-lp="true" data-token0-ticker="space" data-token0-contract="0x0abd3E3502c15ec252f90F64341cbA74a24fba06" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="47763.27755816" data-daily="1.873886598219178082191780822" data-tvl="542490.82207494" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/space.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">SPACE / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Farm.space</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
47763.28%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.87%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$542,491
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SPACE-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SPACE / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x78d9a0c50f6484291b4122f61888bb9ee71879ff">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">47701.52%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">61.76%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">47763.28%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.70%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.17%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.87%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$542,491</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$1,504,460</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="40" data-pool-type="3" data-platform="10" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[28, 9, 1036]" data-pool-title="SPACE / BUSD LP" data-currency-id="1036" data-currency-name="SPACE-BUSD LP" data-currency-ticker="SPACE-BUSD LP" data-currency-contract="0x6b936c5c1fd7de08e03684b0588a87dbd8ce6b63" data-strategy-contract-address="0x72dcfE2e08AD9fdCF1Be38Bc3C181aB0ec6b9892" data-is-lp="true" data-token0-ticker="space" data-token0-contract="0x0abd3E3502c15ec252f90F64341cbA74a24fba06" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="32315.45129080" data-daily="1.797494037287671232876712328" data-tvl="455277.07515544" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/space.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">SPACE / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Farm.space</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
32315.45%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.80%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$455,277
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get SPACE-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get SPACE / BUSD</a>
</div>
<div class="input-container number with-max">
 <input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x6b936c5c1fd7de08e03684b0588a87dbd8ce6b63">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">32241.86%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">73.59%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">32315.45%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
 <span class="val">1.60%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.20%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.80%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$455,277</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$1,011,599</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="37" data-pool-type="3" data-platform="1" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[26, 5, 1033]" data-pool-title="TRADE / BNB LP" data-currency-id="1033" data-currency-name="TRADE-BNB LP" data-currency-ticker="TRADE-BNB LP" data-currency-contract="0x2562f94E90dE6D9eb4fB6B3b8Eab56b15Aa4FC72" data-strategy-contract-address="0x2eCedDd9c5B97269bC548B4c38D23f53a7B5F5aB" data-is-lp="true" data-token0-ticker="trade" data-token0-contract="0x7af173F350D916358AF3e218Bdf2178494Beb748" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1242.29675579" data-daily="1.007245359698630136986301370" data-tvl="288497.49277550" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/trade.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">TRADE / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.25x</div>
<div class="provider ml-10">Pancake Swap</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1242.30%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.01%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$288,497
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get TRADE-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="18">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get TRADE / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x2562f94E90dE6D9eb4fB6B3b8Eab56b15Aa4FC72">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
 <span class="ttl">Vault:</span>
<span class="val" data-display-decimals="18">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1126.16%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">116.13%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1242.30%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.69%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.32%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.01%</span>
</div>
 </div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.25x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$288,497</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$6,951,019</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="4" data-pool-type="1" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[7, -1, 7]" data-pool-title="BBOO" data-currency-id="7" data-currency-name="Panda Yield" data-currency-ticker="BBOO" data-currency-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68" data-strategy-contract-address="0xdbc15fa17977dAf361Ea6f845a360A99435b5AC6" data-is-lp="false" data-token0-ticker="bboo" data-token0-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="408.72960118" data-daily="0.5100888078630136986301369863" data-tvl="461329.25307734" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/bboo.svg">
</div>
<div class="pool">
<div class="ttl">BBOO</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
408.73%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.51%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$461,329
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BBOO</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BBOO</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
 <div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">379.68%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">29.05%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">408.73%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.43%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.08%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.51%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$461,329</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$1,648,189</span>
 </div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="6" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[5, 7, 1005]" data-pool-title="BBOO / BNB LP" data-currency-id="1005" data-currency-name="BDOO-BNB LP" data-currency-ticker="BBOO-BNB LP" data-currency-contract="0xed81c1fbbfe8a3051f96d1532b800c967e88eb16" data-strategy-contract-address="0x2bA734bCAc0aA2bf511C629568c8241615bc04FA" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68" data-token1-ticker="bboo" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1244.39428348" data-daily="1.033740008273972602739726027" data-tvl="105955.65016014" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/bboo.svg">
</div>
<div class="pool">
<div class="ttl">BBOO / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1244.39%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.03%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$105,956
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BBOO-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / BBOO</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xed81c1fbbfe8a3051f96d1532b800c967e88eb16">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1117.91%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">126.49%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1244.39%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.69%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.35%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.03%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$105,956</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$399,303</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="7" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[8, 7, 1006]" data-pool-title="BBOO / BTCB LP" data-currency-id="1006" data-currency-name="BDOO-BTCB LP" data-currency-ticker="BBOO-BTCB LP" data-currency-contract="0xc18C7f26898F1e318352eEE407bc6CB1d37791B3" data-strategy-contract-address="0xE3f8da3ED04f4F085D5dc45E6Ea5bd75821427B2" data-is-lp="true" data-token0-ticker="btcb" data-token0-contract="0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" data-token0-is-gas="false" data-token1-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68" data-token1-ticker="bboo" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="2593.86192667" data-daily="1.259539513616438356164383562" data-tvl="99987.47550221" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/btcb.svg">
<img src="/static/frontend/img/symbols/bboo.svg">
</div>
<div class="pool">
<div class="ttl">BBOO / BTCB LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
2593.86%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.26%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$99,987
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BBOO-BTCB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BTCB / BBOO</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xc18C7f26898F1e318352eEE407bc6CB1d37791B3">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">2459.83%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">134.03%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
 <span class="val highlight">2593.86%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.89%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.37%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.26%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$99,987</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$303,645</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="5" data-pool-type="3" data-platform="4" data-platform-swap-single-url="https://exchange.pandayield.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pandayield.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pandayield.com/#/add/BNB/" data-currencies="[7, 9, 1004]" data-pool-title="BBOO / BUSD LP" data-currency-id="1004" data-currency-name="BDOO-BUSD LP" data-currency-ticker="BBOO-BUSD LP" data-currency-contract="0x768bab009c840c9ed321e96cdd6189462dfcd85f" data-strategy-contract-address="0x29E4688C2c807374391254FbB2F589CEA4e73ADd" data-is-lp="true" data-token0-ticker="bboo" data-token0-contract="0xd909840613fCb0fADC6ee7E5eCF30cDEf4281a68" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="1692.84094148" data-daily="1.016405476602739726027397260" data-tvl="155528.50347297" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bboo.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BBOO / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Panda Yield</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
1692.84%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.02%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$155,529
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BBOO-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BBOO / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
 <div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x768bab009c840c9ed321e96cdd6189462dfcd85f">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">1606.67%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">86.17%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">1692.84%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.78%</span>
</div>

<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.24%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.02%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$155,529</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$439,678</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="31" data-pool-type="3" data-platform="7" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[22, 9, 1028]" data-pool-title="BDO / BUSD LP" data-currency-id="1028" data-currency-name="BDO-BUSD LP" data-currency-ticker="BDO-BUSD LP" data-currency-contract="0xc5b0d73A7c0E4eaF66baBf7eE16A2096447f7aD6" data-strategy-contract-address="0x26a934633c5f719ee332AA7c4912076258d0acF2" data-is-lp="true" data-token0-ticker="bdo" data-token0-contract="0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="423.99924628" data-daily="0.5766221763835616438356164383" data-tvl="240352.35462010" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bdo.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">BDO / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">bDollar</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
424.00%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
0.58%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$240,352
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get BDO-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BDO / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xc5b0d73A7c0E4eaF66baBf7eE16A2096447f7aD6">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">368.24%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">55.76%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">424.00%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.42%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.15%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">0.58%</span>
</div>
</div>
<div class="info">
<div class="itm head">
 <span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$240,352</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$18,153,444</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="24" data-pool-type="3" data-platform="5" data-platform-swap-single-url="https://exchange.goosedefi.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.goosedefi.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.goosedefi.com/#/add/BNB/" data-currencies="[5, 19, 1022]" data-pool-title="EGG / BNB LP" data-currency-id="1022" data-currency-name="EGG-BNB LP" data-currency-ticker="EGG-BNB LP" data-currency-contract="0xd1B59D11316E87C3a0A069E80F590BA35cD8D8D3" data-strategy-contract-address="0xcEbB1316D125258187B8764CEAb999fd4BDf9449" data-is-lp="true" data-token0-ticker="bnb" data-token0-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token0-is-gas="true" data-token1-contract="0xf952fc3ca7325cc27d15885d37117676d25bfda6" data-token1-ticker="egg" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="3843.28704002" data-daily="1.214201455835616438356164384" data-tvl="176737.36332955" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/bnb.svg">
<img src="/static/frontend/img/symbols/egg.svg">
</div>
<div class="pool">
<div class="ttl">EGG / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Goose Finance</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
3843.29%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.21%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$176,737
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get EGG-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BNB / EGG</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xd1B59D11316E87C3a0A069E80F590BA35cD8D8D3">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">3767.46%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">75.83%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">3843.29%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.01%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.21%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.21%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$176,737</span>
</div>
<div class="itm total-daily-apy">
 <span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$12,353,550</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="23" data-pool-type="3" data-platform="5" data-platform-swap-single-url="https://exchange.goosedefi.com/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.goosedefi.com/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.goosedefi.com/#/add/BNB/" data-currencies="[9, 19, 1021]" data-pool-title="EGG / BUSD LP" data-currency-id="1021" data-currency-name="EGG-BUSD LP" data-currency-ticker="EGG-BUSD LP" data-currency-contract="0x19e7cbECDD23A16DfA5573dF54d98F7CaAE03019" data-strategy-contract-address="0x368E59b146f4110c030fe5f7bA38413676454fFC" data-is-lp="true" data-token0-ticker="busd" data-token0-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token0-is-gas="false" data-token1-contract="0xf952fc3ca7325cc27d15885d37117676d25bfda6" data-token1-ticker="egg" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="3502.99365262" data-daily="1.137858065342465753424657534" data-tvl="236280.79151493" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/busd.svg">
<img src="/static/frontend/img/symbols/egg.svg">
</div>
<div class="pool">
<div class="ttl">EGG / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Goose Finance</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
3502.99%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.14%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$236,281
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get EGG-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get BUSD / EGG</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x19e7cbECDD23A16DfA5573dF54d98F7CaAE03019">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
 <div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">3446.27%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">56.72%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">3502.99%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">0.98%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.16%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.14%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$236,281</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$12,645,186</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
 </div>
</div>
</div>
<div class="pool-card" data-pid="45" data-pool-type="1" data-platform="11" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[32, -1, 32]" data-pool-title="xBLZD" data-currency-id="32" data-currency-name="XBLZD" data-currency-ticker="XBLZD" data-currency-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E" data-strategy-contract-address="0x1787cc3b25e300B8Ce5Df083BCe121395696dF04" data-is-lp="false" data-token0-ticker="xblzd" data-token0-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E" data-token0-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="7911.53007598" data-daily="1.296000273013698630136986301" data-tvl="412851.28133691" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols">
<img src="/static/frontend/img/symbols/xblzd.svg">
</div>
<div class="pool">
<div class="ttl">xBLZD</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Blizzard.money</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
7911.53%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.30%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$412,851
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get XBLZD</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
 <span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get XBLZD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">7879.07%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">32.46%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">7911.53%</span>
</div>
 </div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.21%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.09%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.30%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$412,851</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$220,620</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="46" data-pool-type="3" data-platform="11" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[32, 5, 1041]" data-pool-title="xBLZD / BNB LP" data-currency-id="1041" data-currency-name="XBLZD-BNB LP" data-currency-ticker="XBLZD-BNB LP" data-currency-contract="0xfC207DB720851f52545229E406068b205E02B952" data-strategy-contract-address="0xe4F48C0c4DD3C55c18C2b9CC3D9Eba3C6b82e22d" data-is-lp="true" data-token0-ticker="xblzd" data-token0-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E" data-token0-is-gas="false" data-token1-contract="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" data-token1-ticker="bnb" data-token1-is-gas="true" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="83488.49705645" data-daily="1.903425997506849315068493150" data-tvl="854680.69554007" data-gas-limit-tx="1">
<div class="tag-container">
</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/xblzd.svg">
<img src="/static/frontend/img/symbols/bnb.svg">
</div>
<div class="pool">
<div class="ttl">xBLZD / BNB LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Blizzard.money</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
83488.50%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
1.90%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$854,681
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get XBLZD-BNB LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get XBLZD / BNB</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0xfC207DB720851f52545229E406068b205E02B952">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">83472.82%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">15.68%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">83488.50%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">1.86%</span>
</div>
<div class="itm swamp-daily-apy">
 <span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.04%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">1.90%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$854,681</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$6,396,390</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>
<div class="pool-card" data-pid="47" data-pool-type="3" data-platform="11" data-platform-swap-single-url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=" data-platform-swap-lp-url="https://exchange.pancakeswap.finance/#/add/" data-platform-swap-lp-with-gas-url="https://exchange.pancakeswap.finance/#/add/BNB/" data-currencies="[32, 9, 1042]" data-pool-title="xBLZD / BUSD LP" data-currency-id="1042" data-currency-name="XBLZD-BUSD LP" data-currency-ticker="XBLZD-BUSD LP" data-currency-contract="0x33e75f29D52a8BcfBC54a79ED6eF9482b2c035a2" data-strategy-contract-address="0xE57E3478D8BcfBB67E2DC1Df54CF9ae33fD53c46" data-is-lp="true" data-token0-ticker="xblzd" data-token0-contract="0x9a946c3Cb16c08334b69aE249690C236Ebd5583E" data-token0-is-gas="false" data-token1-contract="0xe9e7cea3dedca5984780bafc599bd69add087d56" data-token1-ticker="busd" data-token1-is-gas="false" data-updated="false" data-deposited="0" data-pending="0" data-balance="0" data-apy="279282.12614211" data-daily="2.240645998191780821917808219" data-tvl="857084.67234531" data-gas-limit-tx="1">
<div class="tag-container">

</div>
<div class="info">
<div class="symbols single">
<img src="/static/frontend/img/symbols/xblzd.svg">
<img src="/static/frontend/img/symbols/busd.svg">
</div>
<div class="pool">
<div class="ttl">xBLZD / BUSD LP</div>
<div class="bottom">
<div class="tag multiplier">0.1x</div>
<div class="provider ml-10">Blizzard.money</div>
</div>
</div>
<div class="key-value balance">
<div class="val">0</div>
<div class="key">Balance</div>
</div>
<div class="key-value deposited">
<div class="val">0</div>
<div class="key">Deposited</div>
</div>
<div class="key-value apy shorter">
<div class="val primary">
279282.13%
</div>
<div class="key">Yearly</div>
</div>
<div class="key-value daily shorter">
<div class="val">
2.24%
</div>
<div class="key">Daily</div>
</div>
<div class="key-value tvl shorter">
<div class="val">
$857,085
</div>
<div class="key">TVL</div>
</div>
<div class="btn outlined loading ml-auto get">Get XBLZD-BUSD LP</div>
<div class="btn expand ml-10"></div>
</div>
<div class="details">
<div class="line"></div>
<div class="transactions">
<div class="transaction deposit no-bg">
<div class="amount">
<span class="ttl">Wallet:</span>
<span class="val" data-display-decimals="6">-- <span class="estimate"></span></span>
</div>
<div class="swap">
<a>Get XBLZD / BUSD</a>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 deposit" data-currency-contract="0x33e75f29D52a8BcfBC54a79ED6eF9482b2c035a2">
Deposit to Vault
</div>
</div>
<div class="transaction withdraw">
<div class="amount">
<span class="ttl">Vault:</span>
<span class="val" data-display-decimals="6">0.00 <span class="estimate"></span></span>
</div>
<div class="input-container number with-max">
<input type="text" data-humanize="false" data-decimal-places="18" value="0">
<div class="max">MAX</div>
</div>
<div class="btn secondary mt-20 withdraw">
Withdraw to Wallet
</div>
</div>
<div class="transaction harvest">
<div class="ttl">Pending SWAMP:</div>
<div class="val">
<span class="amount">0.0</span>
<span class="value">($0.0)</span>
</div>
<div class="btn primary harvest">Harvest</div>
</div>
</div>
<div class="farm-info">
<div class="information">
<div class="info">
<div class="itm head">
<span class="ttl">Annual</span>
</div>
<div class="itm pond-apy">
<span class="ttl">Farm APY:&nbsp;</span>
<span class="val">279266.49%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm swamp-apy">
<span class="ttl">Swamp APR:&nbsp;</span>
<span class="val">15.64%</span>
<img class="tooltip" src="/static/frontend/img/info-primary.svg">
</div>
<div class="itm total-apy">
<span class="ttl">Total Returns:&nbsp;</span>
<span class="val highlight">279282.13%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Daily</span>
</div>
<div class="itm pond-daily-apy">
<span class="ttl">Farm Daily:&nbsp;</span>
<span class="val">2.20%</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp Daily:&nbsp;</span>
<span class="val">0.04%</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Total Daily:&nbsp;</span>
<span class="val highlight">2.24%</span>
</div>
</div>
<div class="info">
<div class="itm head">
<span class="ttl">Farm</span>
 </div>
<div class="itm pond-daily-apy">
<span class="ttl">Weight:&nbsp;</span>
<span class="val">0.1x</span>
</div>
<div class="itm swamp-daily-apy">
<span class="ttl">Swamp TVL:&nbsp;</span>
<span class="val">$857,085</span>
</div>
<div class="itm total-daily-apy">
<span class="ttl">Farm TVL:&nbsp;</span>
<span class="val highlight">$9,036,527</span>
</div>
</div>
<div class="info learn">
Learn how to buy and add to staking <a href="/tutorials/" target="_blank">Tutorials</a><br>
Check Fees & Tokenomics <a href="https://docs.swamp.finance/tokenomics-and-fees" target="_blank">Read Docs</a>
</div>
</div>
</div>
</div>
</div>

<a class="certik-container large" href="https://certik.org/projects/swampfinance" target="_blank">
<span class="txt">Audited by</span>
<img class="logo" src="/static/frontend/img/certik-full.svg">
<img class="check" src="/static/frontend/img/check-primary.svg">
<div class="mini-tag pending">IN PROGRESS</div>
</a>
<div class="popup-container">
<div id="popup-buy-lp-token" class="popup" data-static-symbols="/static/frontend/img/symbols" data-url-buy-bnb="/buy-bnb/">
<div class="header">
<div class="ttl">-</div>
<img class="btn close" src="/static/frontend/img/popup-close.svg">
</div>
<div class="content">
<div class="tokens">
<div class="itm token0">
<img src="/static/frontend/img/binance-outlined.svg">
<div class="balance">0</div>
<a href="#" target="_blank" class="btn secondary">Buy</a>
</div>
<div class="itm token1">
<img src="/static/frontend/img/binance-outlined.svg">
<div class="balance">0</div>
<a href="#" target="_blank" class="btn secondary">Buy</a>
</div>
</div>
<div class="bottom">
<div class="txt">
You need 50% - 50% of both tokens to deposit in LP.
<a href="/tutorials/#how-to-create-lp-token-and-deposit-to-vault">How to create LP?</a>
</div>
<a href="#" target="_blank" class="btn secondary add-lp">Add to LP</a>
</div>
</div>
</div>
<div id="popup-buy-single-token" class="popup" data-static-symbols="/static/frontend/img/symbols">
<div class="header">
<div class="ttl">-</div>
<img class="btn close" src="/static/frontend/img/popup-close.svg">
</div>
<div class="content">
<img src="/static/frontend/img/symbols/swamp.svg">
<div class="balance">0</div>
<a href="#" target="_blank" class="btn secondary buy">Buy</a>
</div>
</div>
<div id="popup-buy-swamp" class="popup" data-native-contract="0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" data-native-pool-pid="2">
<div class="header">
<div class="ttl">-</div>
<img class="btn close" src="/static/frontend/img/popup-close.svg">
</div>
<div class="content">
<img src="/static/frontend/img/symbols/swamp.svg">
<div class="balance">0</div>
<div class="key-value">
<div class="key">Balance</div>
<div class="value swamp-balance">0 SWAMP</div>
</div>
<div class="key-value mt-10">
<div class="key">Balance in Vault</div>
<div class="value swamp-balance-vault">0 SWAMP</div>
</div>
<div class="seperator"></div>
<div class="key-value">
<div class="key">Price</div>
<div class="value swamp-price">$67.90</div>
</div>
<div class="key-value mt-10">
<div class="key">Current Supply</div>
<div class="value swamp-supply">-</div>
</div>
<div class="key-value mt-10">
<div class="key">Contract Address</div>
<div class="value swamp-contract">0xc5A4...765d<img class="copy" src="/static/frontend/img/copy.svg"></div>
</div>
<a class="chart" href="https://unidexbeta.app/bscCharting?token=0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d" target="_blank">View chart</a>
<a class="btn primary buy" target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d">Buy SWAMP</a>
</div>
</div>
<div id="popup-account" class="popup">
<div class="header">
<div class="ttl">Account</div>
<img class="btn close" src="/static/frontend/img/popup-close.svg">
</div>
<div class="content">
<div class="address">
<div class="icon"></div>
<div class="txt">-</div>
<div class="copy">Copy Address</div>
</div>
<a class="btn secondary disconnect">Disconnect Wallet</a>
</div>
</div>
<div id="popup-harvest-all" class="popup" data-url-symbols="/static/frontend/img/symbols" data-is-harvesting="false">
<div class="header">
<div class="ttl">Harvest All</div>
<img class="btn close" src="/static/frontend/img/popup-close.svg">
</div>
<div class="content">
<div class="pending-container">
<div class="head">
<div class="ttl">Pending:</div>
<div class="vaults">0/0 vaults</div>
</div>
<div class="bottom">
<div class="amount">
<span class="swamp">0 SWAMP</span>
<span class="value">($0.0)</span>
</div>
<div class="reset">Reset</div>
</div>
</div>
<div class="seperator"></div>
<div class="vault-list">
<div class="itm template">
<div class="icons">
<img class="icon icon-1" src="/static/frontend/img/symbols/swamp.svg">
<img class="icon icon-2" src="/static/frontend/img/symbols/swamp.svg">
</div>
<div class="content">
<div class="ttl">SWAMP</div>
<div class="pending">0.0 SWAMP</div>
</div>
<div class="actions">
<div class="spinner"></div>
<img class="btn cancel" src="/static/frontend/img/close-gray-2.svg">
</div>
</div>
</div>
<a class="btn primary harvest-all">Harvest All</a>
</div>
</div>
</div>
<footer>
<div class="content">
<div class="copyright">
?? 2021 Swamp.finance. All rights reserved.
</div>
<div class="social">
<a href="https://github.com/swamp-finance/" target="_blank" aria-label="github"><img src="/static/frontend/img/social/github.svg"></a>
<a href="https://twitter.com/SwampFinance" target="_blank" aria-label="twitter"><img src="/static/frontend/img/social/twitter.svg"></a>
<a href="https://t.me/swampfinance" target="_blank" aria-label="telegram"><img src="/static/frontend/img/social/telegram.svg"></a>
<a href="https://discord.gg/EShGqrFwAF" target="_blank" aria-label="telegram"><img src="/static/frontend/img/social/discord.svg"></a>
<a href="https://swampfinance.medium.com" target="_blank" aria-label="medium"><img src="/static/frontend/img/social/medium.svg"></a>
</div>
</div>
</footer>
</main>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/static/frontend/js/frontend-common.js?v=70"></script>

<script defer type="module">
        import { createIcon } from '/static/frontend/lib/blockies.js';
        window.createIcon = createIcon;
    </script>

<script defer type="module">
        import { CountUp } from '/static/frontend/lib/countUp.js';
        window.countup = CountUp;
    </script>

<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>

<script type="text/javascript" src="https://unpkg.com/web3@1.2.11/dist/web3.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/web3modal@1.9.0/dist/index.js"></script>
<script type="text/javascript" src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@walletconnect/web3-provider@1.2.1/dist/umd/index.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fortmatic@2.0.6/dist/fortmatic.js"></script>

<script src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js" type="application/javascript"></script>

<script src="/static/frontend/js/crypto-utils.js?v=70"></script>
<script src="/static/frontend/js/wallet.js?v=70"></script>
<script src="/static/frontend/js/frontend-app.js?v=70"></script>
<script>
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-190438711-1', 'auto');
            ga('send', 'pageview');
        </script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
</body>
</html>
