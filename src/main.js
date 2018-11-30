import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"; //框架
import "element-ui/lib/theme-chalk/index.css"; //依赖样式
Vue.use(ElementUI);

Vue.config.productionTip = false


// var Eth = require('ethjs-query');
// var EthContract = require('ethjs-contract');
// if (typeof web3 !== 'undefined') {
//     eth = new Eth(web3.currentProvider);
//     contract = new EthContract(eth);
//     startApp();
// } else {
//     alert("No currentProvider for web3");
// }

// var simpleStorage;
// function startApp() {
//   const abi = [ { "constant": true, "inputs": [], "name": "data", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view",  "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": false, "name": "value", "type":    "uint256" } ], "name": "Set", "type": "event" }, { "constant": false, "inputs": [ { "name": "x", "type": "uint256" } ], "name": "set", "outputs": [],  "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
//   const addresss = '0x06e1c13546e04514a0cf8d842216a84745ac317a';
//   const SimpleStorage = contract(abi);
//   const simpleStorage = SimpleStorage.at(addresss);
//   // Listen to clicks from a <button> that trigger a function call of contract 

// }


// simpleStorage.set(value, { from: "0x123abc000..." }, function(error, result) {
//   if (error) {
//        console.debug(error);
//        return;
//   }  
//   // will return txHash as result
//   console.debug(result);
// })

// 可以用一下
// var api = [{
//     "constant": true,
//     "inputs": [],
//     "name": "last_completed_migration",
//     "outputs": [{
//       "name": "",
//       "type": "uint256"
//     }],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "owner",
//     "outputs": [{
//       "name": "",
//       "type": "address"
//     }],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "constant": false,
//     "inputs": [{
//       "name": "completed",
//       "type": "uint256"
//     }],
//     "name": "setCompleted",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [{
//       "name": "new_address",
//       "type": "address"
//     }],
//     "name": "upgrade",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];
// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   // set the provider you want from Web3.providers
//   web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.1.178:8545"));
// }


// web3.eth.defaultAccount = web3.eth.accounts[0];

// var infoContract = web3.eth.contract(api);
// console.log(infoContract)
// var info = InfoContract.at('0xeef8daedc010eb561751d7debaf858cfb3ba5afe');

// info.getInfo(function (error, result) {
//   if (!error) {
//     console.log(result);
//   } else
//     console.error(error);
// });

// info.getInfo(1, 1);


// 官网的
// const Eth = require('ethjs');
// const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

// eth.getBlockByNumber(45300, true, (err, block) => {
//   // result null { ...block data... }
// });

// const etherValue = Eth.toWei(72, 'ether');

// // result <BN: 3e733628714200000>

// const tokenABI = [{
//     "constant": true,
//     "inputs": [],
//     "name": "last_completed_migration",
//     "outputs": [{
//       "name": "",
//       "type": "uint256"
//     }],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "owner",
//     "outputs": [{
//       "name": "",
//       "type": "address"
//     }],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "constant": false,
//     "inputs": [{
//       "name": "completed",
//       "type": "uint256"
//     }],
//     "name": "setCompleted",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [{
//       "name": "new_address",
//       "type": "address"
//     }],
//     "name": "upgrade",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];

// const token = eth.contract(tokenABI).at('0xeef8daedc010eb561751d7debaf858cfb3ba5afe');
// token.totalSupply(1).then((totalSupply) => {
//   console.log(111111111);
//   console.log(totalSupply);
//   // result <BN ...>  4500000
// });

// // token.transfer( ... ).then(txHash => eth.getTransactionSuccess(txHash)).then(receipt => console.log(receipt));





























// 唤醒插件必须使用这个代码
// var Eth2 = require('ethjs-query');
// var eth2;
// var contract;
// var EthContract = require('ethjs-contract');
// if (typeof web3 !== 'undefined') {
//   eth2 = new Eth2(web3.currentProvider);
//   contract = new EthContract(eth2);
//   startApp();
// } else {
//   alert("No currentProvider for web3");
// }

// var simpleStorage;

// function startApp() {
//   const abi = [{
//       "constant": true,
//       "inputs": [],
//       "name": "last_completed_migration",
//       "outputs": [{
//         "name": "",
//         "type": "uint256"
//       }],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "owner",
//       "outputs": [{
//         "name": "",
//         "type": "address"
//       }],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "constant": false,
//       "inputs": [{
//         "name": "completed",
//         "type": "uint256"
//       }],
//       "name": "setCompleted",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [{
//         "name": "new_address",
//         "type": "address"
//       }],
//       "name": "upgrade",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];
//   const addresss = '0xeef8daedc010eb561751d7debaf858cfb3ba5afe';
//   const SimpleStorage = contract(abi);
//   simpleStorage = SimpleStorage.at(addresss);
//   // Listen to clicks from a <button> that trigger a function call of contract 

//   console.log(simpleStorage)
//   simpleStorage.set(1, {
//     from: ""
//   }, function (error, result) {
//     if (error) {
//       console.debug(error);
//       return;
//     }
//     // will return txHash as result
//     console.log(11111111);
//     console.debug(result);
//     console.debug(result);
//   })
// }

// 作者：安德森_Anderson
// 链接：https://www.jianshu.com/p/d77dad7e20b1
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。




// window.addEventListener('load', function () {

//   // 检查Web3是否已被浏览器注入（Mist / MetaMask）
//   if (typeof web3 !== ' undefined ') {
//     // 使用浏览器的以太坊提供商
//     var provider = web3.currentProvider;


//     // 
//     // var Web3 = require('web3')
//     var localWeb3 = new Web3(web3.currentProvider);
//     const Eth = require('ethjs');
//     const eth = new Eth(web3.currentProvider);
//     // 

//     // 检测网络情况
//     web3.version.getNetwork((err, netId) => {
//       switch (netId) {
//         case "1":
//           // 这是主网络，其他全是测试网络
//           console.log('This is mainnet')
//           break
//         case "2":
//           console.log('This is the deprecated Morden test network.')
//           break
//         case "3":
//           console.log('This is the ropsten test network.')
//           break
//         case "4":
//           console.log('This is the Rinkeby test network.')
//           break
//         case "42":
//           console.log('This is the Kovan test network.')
//           break
//         default:
//           console.log('This is an unknown network.')
//       }
//     })



//     // 许多Dapps都有内置的身份管理解决方案作为后备。检测到以太坊浏览器环境时，用户界面应反映该帐户是在外部进行管理的。
//     var accounts = web3.eth.accounts; //得到账号
//     console.log(accounts); // ["0x407d73d8a49eeb85d32cf465507dd71d507100c1"] 


//     // 实时监测账号变化
//     var account = web3.eth.accounts[0];
//     var accountInterval = setInterval(function () {
//       if (web3.eth.accounts[0] !== account) {
//         account = web3.eth.accounts[0];
//         // 查看账号是否发生变化
//       }
//     }, 100);
//   } else {
//     console.log("没有web3？你应该考虑尝试MetaMask！")
//   }

// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
