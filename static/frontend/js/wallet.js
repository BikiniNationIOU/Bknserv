let Providers={METAMASK:{name:'Metamask',description:'Metamask',tag:'injected',enabled:true,},BINANCE_WALLET:{name:'Binance',description:'Binance Chain Wallet',tag:'custom-binance',enabled:true,},WALLET_CONNECT:{name:'Wallet Connect',description:'Wallet Connect for Binance Smart Chain',tag:'custom-wc',enabled:true,},SAFEPAL:{name:'Safepal',description:'Safepal for Binance Smart Chain',tag:'custom-safepal',enabled:false,},MATH_WALLET:{name:'Math',description:'Math Wallet',tag:'custom-math',enabled:false,},BITKEEP:{name:'Bitkeep',description:'The world\'s largest multi-chain wallet',tag:'custom-bitkeep',enabled:true,}};let Wallet=(function(){const Web3Modal=window.Web3Modal.default;const WalletConnectProvider=window.WalletConnectProvider.default;const Fortmatic=window.Fortmatic;let web3Modal=null;let provider=null;let modalProvider=null;let accounts=null;let usingWalletConnect=false;let r={loadWalletSelfCached:async function(){await FrontendCommon.sleep(1000);try{modalProvider=await web3Modal.connect();await r.addNetworkConfiguration();provider=new ethers.providers.Web3Provider(modalProvider);accounts=await provider.listAccounts();modalProvider.on('accountsChanged',function(_){});}
catch(exception){provider=null;accounts=[];}
FrontendApp.refreshWalletInfo();FrontendApp.refreshAllCards();FrontendApp.resetStatsStripe(true);},initializeProviderModal:async function(){let staticUrl=$('body').data('static-url');const providerOptions={};const injectedConnector=async(providerPackage,data)=>{let provider=window.ethereum;await provider.enable();return provider;};if(Providers.BINANCE_WALLET.enabled){providerOptions[Providers.BINANCE_WALLET.tag]={display:{logo:staticUrl+'frontend/img/binance-icon.png',name:Providers.BINANCE_WALLET.name,description:Providers.BINANCE_WALLET.description,},package:WalletConnectProvider,connector:async(_,data)=>{let provider=window.BinanceChain;provider.autoRefreshOnNetworkChange=true;await provider.enable();return provider;},};}
if(Providers.WALLET_CONNECT.enabled){providerOptions[Providers.WALLET_CONNECT.tag]={display:{logo:staticUrl+'frontend/img/walletconnect.svg',name:Providers.WALLET_CONNECT.name,description:Providers.WALLET_CONNECT.description,},package:new WalletConnectProvider({chainId:56,rpc:{56:'https://bsc-dataseed.binance.org/',},}),connector:async(providerInstance,data)=>{setTimeout(function(){$('.walletconnect-modal__header').click(function(){Wallet.disconnect();});},500);await providerInstance.enable();usingWalletConnect=true;return providerInstance;},};}
if(Providers.SAFEPAL.enabled){providerOptions[Providers.SAFEPAL.tag]={display:{logo:staticUrl+'frontend/img/safepal.svg',name:Providers.SAFEPAL.name,description:Providers.SAFEPAL.description,},package:'safepal',connector:async(providerInstance,data)=>{let provider=window.ethereum;await provider.enable();return provider;},};}
if(Providers.MATH_WALLET.enabled){providerOptions[Providers.MATH_WALLET.tag]={display:{logo:staticUrl+'frontend/img/math-wallet.svg',name:Providers.MATH_WALLET.name,description:Providers.MATH_WALLET.description,},package:'mathwallet',connector:async(providerInstance,data)=>{let provider=window.ethereum;await provider.enable();return provider;},};}
if(Providers.BITKEEP.enabled){providerOptions[Providers.BITKEEP.tag]={display:{logo:staticUrl+'frontend/img/bitkeep.svg',name:Providers.BITKEEP.name,description:Providers.BITKEEP.description,},package:'bitkeep',connector:async(providerInstance,data)=>{let provider=window.ethereum;await provider.enable();return provider;},};}
web3Modal=new Web3Modal({cacheProvider:true,providerOptions,network:56,disableInjectedProvider:false,theme:{background:'#1D2F3B',main:'#FFFFFF',secondary:'#CCF66C',border:'#3C4E5A',hover:'#3C4E5A',}});},getCachedProvider:function(){return FrontendCommon.getLocalItem('WEB3_CONNECT_CACHED_PROVIDER',null);},addNetworkConfiguration:async function(){try{await modalProvider.request({method:'wallet_addEthereumChain',params:[{chainId:'0x38',chainName:'Binance Smart Chain',blockExplorerUrls:['https://bscscan.com'],nativeCurrency:{name:'Binance Coin',symbol:'BNB',decimals:18,},rpcUrls:['https://bsc-dataseed.binance.org/','https://bsc-dataseed1.binance.org/','https://bsc-dataseed2.binance.org/',],}]});return true;}catch(e){return false;}},},u={harvestAll:async function(pids,callback){if(!this.isConnected()){return false;}
if(r.getCachedProvider()===Providers.BINANCE_WALLET.tag){await CryptoUtils.harvestMultipleWaitForTx(pids,Wallet.getAccounts()[0],this.getProvider(),callback);}else{await CryptoUtils.harvestMultiple(pids,Wallet.getAccounts()[0],this.getProvider(),callback);}},harvest:function(pid,gasLimit,callback){if(!this.isConnected()){callback(false,{});return;}
CryptoUtils.harvest(pid,gasLimit,this.getProvider(),callback);},withdraw:function(pid,gasLimit,amount,callback){if(!this.isConnected()){callback(false,{});return;}
CryptoUtils.withdraw(pid,gasLimit,amount,this.getProvider(),callback);},deposit:function(pid,gasLimit,amount,tokenContract,callback){if(!this.isConnected){callback(false,{error:'Wallet is not connected.',});return;}
CryptoUtils.getAllowance(Wallet.getAccounts()[0],tokenContract,(result,data)=>{if(result){if(data.allowance===0){CryptoUtils.approve(tokenContract,CryptoUtils.getUint256Max(),this.getProvider(),(result,data)=>{if(result){CryptoUtils.deposit(pid,gasLimit,amount,this.getProvider(),callback);}else{callback(false,{error:'Allowance was not approved',});}});}else{CryptoUtils.deposit(pid,gasLimit,amount,this.getProvider(),callback);}}else{callback(false,{error:'Allowance network error',});}});},gasBalance:function(callback){if(!this.isConnected()){callback(false,{error:'Wallet is not connected',});return;}
CryptoUtils.getGasBalance(Wallet.getAccounts()[0],this.getProvider(),callback);},balance:function(tokenContract,callback){if(!this.isConnected()){callback(false,{error:'Wallet is not connected',});return;}
CryptoUtils.getTokenBalance(Wallet.getAccounts()[0],tokenContract,this.getProvider(),callback);},balanceInVault:function(pid,callback){if(!this.isConnected()){callback(false,{error:'Wallet is not connected',});return;}
CryptoUtils.getStakedTokens(pid,Wallet.getAccounts()[0],callback);},connect:async function(){await r.loadWalletSelfCached();},disconnect:async function(){provider=null;accounts=null;FrontendApp.resetStatsStripe(false);await web3Modal.clearCachedProvider();},getProvider:function(){return provider;},getAccounts:function(){return accounts;},isConnected:function(){return provider!==null&&accounts!==null&&accounts.length>0;},initialize:async function(){await r.initializeProviderModal();await this.connect();},};return u;})();