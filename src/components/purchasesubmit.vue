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
      <el-button class="btn" type="primary" @click="submit">好，我知道了</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTrue: false
    };
  },
  methods: {
    submit() {
      if (this.isTrue) {
        alert("请先登录MetaMask插件");
        return;
      }
      App.handleTransfer();
    }
  },
  mounted() {
    var account = web3.eth.accounts[0];
    var accountInterval = setInterval(() => {
      account = web3.eth.accounts[0];
      this.isTrue = !account;
    }, 1000);
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
