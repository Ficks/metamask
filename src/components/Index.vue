<template>
  <div class="wrap">
    <div class="top">
      <div class="left">
        <h1>可收藏
          <br>可繁殖
          <br>讨人喜欢
        </h1>
        <p>收藏并繁殖数字喵咪</p>
        <el-button class="btn" type="primary" @click="submit">开始竞拍</el-button>
      </div>
      <div class="right">
        <ul>
          <li>
            <img src="/static/images/cp1.jpg" alt>
          </li>
          <li>
            <img src="/static/images/cp2.jpg" alt>
          </li>
        </ul>
        <ul>
          <li>
            <img src="/static/images/cp3.jpg" alt>
          </li>
          <li>
            <img src="/static/images/cp4.jpg" alt>
          </li>
        </ul>
        <ul>
          <li>
            <img src="/static/images/cp5.jpg" alt>
          </li>
          <li>
            <img src="/static/images/cp6.jpg" alt>
          </li>
        </ul>
      </div>
    </div>

    <div class="whit">
      <div class="container box">
        <div class="img leftimg">
          <img src="/static/images/cp2.jpg" alt>
        </div>
        <div class="wz">
          <h2>什么是艺术品？</h2>
          <p>谜恋猫是世界首款区块链游戏。“区块链”是支持类似比特币这样的加密货币的运作技术基础。尽管谜恋猫不是数字货币，但它也能提供同样的安全保障：每一只谜恋猫都是独一无二的，而且100%归您所有。它无法被复制、拿走、或销毁。</p>
        </div>
      </div>
    </div>

    <div class="container difference">
      <h2>艺术品为何与众不同？
        <p>谜恋猫是世界首款架构在区块链技术上的数字猫收集与繁殖游戏，同样的技术突破使得比特币和以太坊的运作的基础。比特币和以太幣是加密货币，而谜恋猫是加密收藏品。您可以购买，出售，或交易您的谜恋猫，就像它是一件传统的收藏品一样，而且它的安全性是毋庸置疑的，区块链将安全地追踪其所有权归属。</p>
      </h2>
    </div>

    <div class="whit sa">
      <div class="container box">
        <li class="img">
          <img src="/static/images/cp4.jpg" alt>
        </li>
        <li class="img">
          <img src="/static/images/cp2.jpg" alt>
        </li>
        <li class="img">
          <img src="/static/images/cp3.jpg" alt>
        </li>
      </div>
    </div>

    <div class="bomtsa container">
      <h3>但是，与传统的收藏品不同，您可以通过两只谜恋猫进行交配繁殖，生出一只全新的，拥有独一无二的基因的猫宝宝。</h3>
      <p>就像世界上每个人都是独一无二的一样，每只谜恋猫都与众不同。</p>
      <el-button class="btn" type="primary" @click="submit">开始竞拍</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped lang="less">
.btn {
  padding: 20px 60px;
  font-size: 20px;
  margin-top: 40px;
}
.bomtsa {
  text-align: center;
  padding: 100px;
  box-sizing: border-box;

  h3 {
    font-size: 28px;
    color: #82817d;
  }
  p {
    font-size: 28px;
    color: #2a2825;
    margin-top: 40px;
    margin-bottom: 30px;
  }
}
.top {
  padding: 100px 0;
  width: 1400px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  .left {
    float: left;

    p {
      color: #82817d;
      font-size: 30px;
    }
  }
  .right {
    float: right;

    ul {
      float: left;
      margin: 0 15px;

      li {
        margin: 15px 0;
      }
    }
  }
}
.whit {
  background-color: #f3f1ee;
  background-image: url(/static/images/pattern-tile.svg);
  padding: 145px 0;
  height: auto;
  overflow: hidden;
  .box {
    background: #fff;
    padding: 80px;
    box-sizing: border-box;
    height: auto;
    overflow: hidden;
    .leftimg {
      border-radius: 50%;
      width: 220px;
      height: 220px;
      overflow: hidden;
      float: left;
    }
    .wz {
      width: 70%;
      float: left;
      padding-left: 80px;
      box-sizing: border-box;

      p {
        color: #82817d;
        font-size: 22px;
        line-height: 36px;
        margin-top: 20px;
      }
    }
  }
}

.difference {
  text-align: center;
  padding: 150px 0;
  p {
    color: #82817d;
    font-size: 22px;
    line-height: 36px;
    margin-top: 20px;
    padding: 0 150px;
    box-sizing: border-box;
  }
}

.sa {
  ul {
    overflow: hidden;
    height: auto;
  }
  li {
    width: 100/3%;
    text-align: center;
    float: left;
  }
}
</style>

