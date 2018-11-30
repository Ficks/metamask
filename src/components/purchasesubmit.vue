<template>
  <div class="wrap">
    <div class="banner">
      <div class="topleft">
        <i class="icon"></i>
        <span>
          等待购买
          <em>Ξ</em>
          <em>0.999213</em>
        </span>
      </div>
      <div class="img">
        <img src="/static/images/banner.png" alt>
      </div>
    </div>
    <div class="ombox container">
      <ul>
        <li>
          <span>Ξ 0.9033</span> 即时购买价格
        </li>
        <li>
          <span>Ξ 0.0038</span> 预计交易费用
        </li>
        <li>
          <span>Ξ 0.9071</span> 预计总额
        </li>
      </ul>
      <p>这是我们的最优估价。点击下方按钮后您会得到最终的交易价格。</p>
    </div>
    <div class="btmss">
      <el-button class="btn" type="primary" @click="submit2">好，我知道了</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit2() {
      App.handleTransfer();
    },
    submit() {
      var abi = [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [
            {
              name: "",
              type: "string"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address"
            },
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "transferFrom",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [
            {
              name: "",
              type: "uint8"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "burn",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "sellPrice",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "burnFrom",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "buyPrice",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [
            {
              name: "",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [
            {
              name: "",
              type: "string"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            }
          ],
          name: "frozenAccount",
          outputs: [
            {
              name: "",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address"
            },
            {
              name: "_value",
              type: "uint256"
            },
            {
              name: "_extraData",
              type: "bytes"
            }
          ],
          name: "approveAndCall",
          outputs: [
            {
              name: "success",
              type: "bool"
            }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "",
              type: "address"
            },
            {
              name: "",
              type: "address"
            }
          ],
          name: "allowance",
          outputs: [
            {
              name: "",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "newOwner",
              type: "address"
            }
          ],
          name: "transferOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: "target",
              type: "address"
            },
            {
              indexed: false,
              name: "frozen",
              type: "bool"
            }
          ],
          name: "FrozenFunds",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: "target",
              type: "address"
            },
            {
              indexed: false,
              name: "amount",
              type: "uint256"
            }
          ],
          name: "recycleFouds",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: "from",
              type: "address"
            },
            {
              indexed: false,
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              name: "value",
              type: "uint256"
            }
          ],
          name: "transferFromTos",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              name: "value",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "from",
              type: "address"
            },
            {
              indexed: false,
              name: "value",
              type: "uint256"
            }
          ],
          name: "Burn",
          type: "event"
        },
        {
          constant: false,
          inputs: [
            {
              name: "target",
              type: "address"
            },
            {
              name: "mintedAmount",
              type: "uint256"
            }
          ],
          name: "mintToken",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "target",
              type: "address"
            },
            {
              name: "freeze",
              type: "bool"
            }
          ],
          name: "freezeAccount",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "newSellPrice",
              type: "uint256"
            },
            {
              name: "newBuyPrice",
              type: "uint256"
            }
          ],
          name: "setPrices",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [],
          name: "buy",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "amount",
              type: "uint256"
            }
          ],
          name: "sell",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "target",
              type: "address"
            },
            {
              name: "amount",
              type: "uint256"
            }
          ],
          name: "recycle",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_from",
              type: "address"
            },
            {
              name: "_to",
              type: "address"
            },
            {
              name: "amount",
              type: "uint256"
            }
          ],
          name: "transferFromTo",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        }
      ];

      if (typeof web3 !== "undefined") {
        // web3 = new Web3(web3.currentProvider);
        web3 = new Web3(
          new Web3.providers.HttpProvider("http://192.168.1.178:8545")
        );
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(
          new Web3.providers.HttpProvider("http://192.168.1.178:8545")
        );
      }

      web3.eth.defaultAccount = web3.eth.accounts[0];

      var infoContract = web3.eth.contract(abi);
      var info = infoContract.at("0x3c3ff2ba43bd30e81df974f6b3462ab928e6f11f");

      // 调用

      console.log(
        info.transfer("0x69dF86c3F3cca336d4b73a4E85Ff9f69B6d2E385", 100)
      );
    }
  }
};
</script>
<style lang="less" scoped>
.btmss {
  text-align: center;
  padding: 50px 0;
}
.ombox {
  padding-top: 50px;
  ul {
    margin: 0 auto;
    width: 800px;
    border: 2px solid #f3f1ee;
    padding: 20px 30px;
    box-sizing: border-box;
    border-radius: 10px;
    li {
      height: 65px;
      line-height: 65px;
      border-bottom: 2px dashed #f3f1ee;
      span {
        float: right;
        color: #82817d;
      }

      &:last-child {
        border-bottom: 0;
        span {
          color: #333;
        }
      }
    }
  }

  p {
    text-align: center;
    padding-top: 20px;
    font-size: 24px;
    color: #82817d;
  }
}
.btn {
  padding: 20px 60px;
  font-size: 20px;
}
.wrap {
  padding-top: 50px;
}
.banner {
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  background: #bec5e7;
  text-align: center;
  position: relative;
  img {
    width: 60%;
  }

  .topleft {
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 10px;
    background: #fff;
    width: 196px;
    height: 45px;
    line-height: 45px;

    .icon {
      background-image: url("/static/images/tag.svg");
      display: inline-block;
      width: 20px;
      height: 19px;
      position: relative;
      top: 3px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50%;
    }

    em {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
