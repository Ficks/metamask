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

    <div class="md">
      <div class="container">
        <div class="top">
          <el-button class="btn" type="primary" @click="submit">立刻竞拍</el-button>
          <div class="list">
            <p>即时购买价格</p>
            <p class="jjs">
              <span>Ξ</span> 0.9142
            </p>
          </div>
          <div class="list c">
            <p>剩余时间</p>
            <p class="c2">22 小时</p>
          </div>
        </div>
        <div class="bm img">
          <img src="/static/images/timg.jpg" alt>
        </div>
        <div class="bom">
          <div class="l left">
            起始价 Ξ
            <span>0.9841</span>
          </div>
          <div class="l right">
            结束价 Ξ
            <span>0.9841</span>
          </div>
        </div>
      </div>
    </div>

    <div class="jianjie container">
      <h2>艺术品简介</h2>
      <p>Ni hao. My parents named me Arun Grogsire just to be a jerk. You should know that I'm obsessed with catching the world's first cerberus, and I won't rest until I do. Don't @ me.</p>

      <div class="li">
        <div class="img">
          <img src="/static/images/cp1.jpg" alt>
        </div>
        <div class="img">
          <img src="/static/images/cp2.jpg" alt>
        </div>
        <div class="img">
          <img src="/static/images/cp3.jpg" alt>
        </div>
        <div class="img">
          <img src="/static/images/cp4.jpg" alt>
        </div>
        <div class="img">
          <img src="/static/images/cp5.jpg" alt>
        </div>
        <div class="img">
          <img src="/static/images/cp6.jpg" alt>
        </div>
      </div>
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
        path: "/purchasesubmit"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  padding-top: 50px;
}
.jianjie {
  padding: 100px 0;
  text-align: center;
  p {
    color: #82817d;
    line-height: 50px;
    text-align: left;
    text-indent: 2em;
  }
  .li {
    height: auto;
    overflow: hidden;
  }
  .img {
    float: left;
    width: 100/4%;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
.md {
  .bom {
    height: auto;
    overflow: hidden;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    .l {
      color: #9c9c9b;
    }
    span {
      font-weight: bold;
      color: #333;
    }
  }
  .bm {
    width: 100%;

    img {
      width: 100%;
    }
  }
  padding-top: 50px;
  .top {
    height: auto;
    overflow: hidden;
  }
  .list {
    float: left;
    margin-right: 40px;
    line-height: 30px;

    span {
      color: rgba(251, 163, 113, 1);
      font-weight: bold;
    }
    .jjs {
      font-weight: bold;
    }
  }
  .c {
    color: #9c9c9b;
    .c2 {
      font-size: 20px;
    }
  }
}
.btn {
  position: relative;
  top: -30px;
  padding: 20px 60px;
  float: right;
  font-size: 20px;
  margin-top: 40px;
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
