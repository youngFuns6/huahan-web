<template>
<div>
  <ul>
      <li @click="toPush(1)">
        <a href="/news">
          <span>资讯</span>
          <i>></i>
        </a>
      </li>
      <li @click="toPush(2)">
        <a href="/helpCenter/questionList?type=8&page=1&pageSize=5">
          <span>帮助中心</span>
          <i>></i>
        </a>
      </li>
      <li @click="toPush(3)">
        <a href="/index/inner">
          <span>关于我们</span>
          <i>></i>
        </a>
      </li>
    </ul>
    <div class="wrop">
    
    <div class="footer-img-pc">
      <p>
        <span>公司名称：常州群翔网络科技有限公司</span>

        <span class="contactPhone"
          >联系电话：{{ contactInfo.contactPhone }}</span
        >
      </p>
      <p>
        <span class="address">公司地址：{{ contactInfo.address }}</span>
        <span class="contactQQ">联系QQ：{{ contactInfo.contactQQ }}</span>
      </p>

      <p>
        <span class="QQqun"
          >
          QQ群：<span v-html="contactInfo.QQqun"></span>
         </span>
      </p>
      <div class="link">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32041102000822"
        >
          <p>苏公网安备 32041102000822号</p>
        </a>
      </div>
      <div class="link">
        <span>网站备案/许可证号：</span
        ><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
          >苏ICP备2021013946号-4</a
        >
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: "Footer",
  components: {},
  // inject: ['contactInfo'],
  props: {
    contactInfo: {
      // type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    toPush(i){
       window.sessionStorage.setItem("active", i);
    }
  },
  computed: {},
  
};
</script>

<style lang='less' scoped>
.wrop {
  // position: absolute;
  // bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 230px;
  padding: 35px;
  box-sizing: border-box;
  background: linear-gradient(360deg, #019dfc 0%, #17b8e0 100%);
  // position: fixed;
  // left: 0;
  // bottom: 0;
  font-size: 16px;
  color: #fff;
}
.footer-img-pc {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    margin: 5px;
    span {
      margin: 0 20px;
    }
  }
  .link {
    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      margin: 0;
    }
    margin: 5px 20px;
  }
}
.QQqun {
  display: flex !important;
  align-items: center;
}




// 手机端

  ul {
    padding: 50px 120px;
    border-top: 100px solid #F3F4F8;
    li {
      font-size: 64px;
      // margin: 0 120px;
      padding: 60px 0;
      border-bottom: 1px solid #a7a7a7;
     a {
        color: #333;
      display: flex;
      justify-content: space-between;
     }
    }
  }


@media (min-width: 992px) {

    ul {
      display: none;
    }
  }


@media (max-width: 992px) {
  .wrop {
    ul {
      display: block;
    }
  }

  .wrop {
    height: auto;
    font-size: 48px !important;
    background: #fff;
    color: #333;
    .footer-img-pc {
      .link {
        a {
          color: #333;
        }
      }
      p {
        span {
          display: block;
         text-align: center;
         line-height: 2;
        }
        margin: 20px;
      }
      // .qqQun {
      //   display: inline-block;
      //   height: 100px;
      //   img {
      //       width: 100%;
      //       height: 100%;
      //   }
      // }
      .QQqun a img{
        width: 400px;
      }
    }
  }
}
</style>