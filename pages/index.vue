<template>
  <div>
      <section class="banner" data-aos="fade-up">
    <div class="banner-img">
      <img src="../assets/images/banner.png" alt />
    </div>
    <div class="text">
      <p>游点电云控</p>
      <p>一台电脑轻松管理千万台云手机</p>
      <a href="https://group.yunxint.com/" target="_blank">进入系统</a>
    </div>
  </section>

  <!-- 更多 -->

  <section class="more" data-aos="fade-up">
    <div class="title">
      <p>更多功能 等你发现</p>
      <p>More features are waiting for you to discover</p>
    </div>
    <div class="content">
      <div class="wrop" v-for="(item, index) in moreData" :key="index">
        <div class="icon">
          <img :src="item.icon" alt />
        </div>
        <p class="icon-title">{{ item.title }}</p>
        <p class="icon-content">{{ item.content }}</p>
      </div>
    </div>
  </section>

  <section class="application">
    <div class="title">
      <p>应用领域</p>
      <p>Application area</p>
    </div>
    <div class="content">
      <div
        class="img-wrop"
        v-for="(item, index) in applicationData"
        :key="index"
        data-aos="zoom-in-up"
        :data-aos-duration="500 * index"
      >
        <img :src="item.img" alt />

        <p>{{ item.title }}</p>
      </div>
    </div>
  </section>
  <section class="end">
    <div
      class="contend-wrop"
      v-for="(item, index) in endData"
      :key="index"
      data-aos="zoom-out-down"
    >
      <p class="title">{{ item.title }}</p>
      <div>
        <img :src="item.img" alt />
      </div>
    </div>
  </section>
  </div>
</template>

<script>
 // You can also use <link> for styles
// ..

// import 'aos/dist/aos.css'
// import AOS from 'aos/dist/aos.js'

// const path = require('path')
import icon1 from "../assets/images/icon1.png";
import icon5 from "../assets/images/icon5.png";
import icon2 from "../assets/images/icon2.png";
import icon6 from "../assets/images/icon6.png";
import icon3 from "../assets/images/icon3.png";
import icon7 from "../assets/images/icon7.png";
import icon4 from "../assets/images/icon4.png";
import icon8 from "../assets/images/icon8.png";

// import app1 from "~asset/images/"
import app2 from "../assets/images/微信营销备份@2x.png";
import app3 from "../assets/images/app推广备份@2x.png";
import app4 from "../assets/images/吸粉赚金备份@2x.png";

import end1 from "../assets/images/编组 3备份@2x.png";
import end2 from "../assets/images/编组 6备份@2x.png";
import end3 from "../assets/images/编组 4备份@2x.png";
import end4 from "../assets/images/编组 7备份@2x.png";
export default {
  components: {},
  data() {
    return {
      moreData: [
        {
          icon: icon1,
          title: "一键操控，批量同步",
          content: "群控云手机，集中部署，一人轻松控制上千台",
        },
        {
          icon: icon5,
          title: "7*24小时，云手机监控",
          content: "ARM服务器云手机，云端24小时不怕断网，不怕关机，永久在线",
        },
        {
          icon: icon2,
          title: "AI替代人工",
          content: "24小时运作，降低人工成本业务高效处理",
        },
        {
          icon: icon6,
          title: "一键新机，任意刷机",
          content: "轻松一键高级，刷IMEI，支持模拟任意机型",
        },
        {
          icon: icon3,
          title: "降低硬件成本",
          content: "弹性云计算，按需订购一台低配电脑即可操作",
        },
        {
          icon: icon7,
          title: "灵活配置",
          content: "按天， 按月购买云手机和配套服务",
        },
        {
          icon: icon4,
          title: "生态安卓系统",
          content: "免ROOT，兼容市面上的APP下载与上传，包括游戏脚本",
        },
        {
          icon: icon8,
          title: "贴心服务",
          content: "专属客服，一对一服务，帮您解决问题",
        },
      ],
      applicationData: [
        { img: app2, title: "手游挂机" },
        { img: app2, title: "微信营销" },
        { img: app3, title: "APP推广" },
        { img: app4, title: "吸粉赚金" },
      ],
      endData: [
        { title: "高速画面控制", img: end1 },
        { title: "Mac/Windows全兼容", img: end2 },
        { title: "简单易上手", img: end3 },
        { title: "持续迭代更新", img: end4 },
      ],
    };
  },
  
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.banner {
  position: relative;
  .banner-img {
    height: 800px;
    background: #333;
    img {
      opacity: 0.5;
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
    p:first-child {
      color: #ffffff;
      font-size: 56px;
      margin-bottom: 24px;
    }
    p:nth-child(2) {
      color: #ffffff;
      font-size: 36px;
      margin-bottom: 24px;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 174px;
      height: 56px;
      background: #029ffc;
      border-radius: 35px;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 22px;
    }
  }
}
.more {
  padding: 90px 260px;
  .title {
    text-align: center;
    margin-bottom: 64px;
    p:first-child {
      margin-bottom: 16px;
      color: #333;
      font-size: 30px;
    }
    p:last-child {
      color: #a7a7a7;
      font-size: 24px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 550px;
    .wrop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 290px;
      .icon {
        width: 80px;
        height: 80px;
        margin-bottom: 25px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .icon-title {
        margin-bottom: 16px;
        color: #333;
        font-size: 24px;
        font-weight: 500;
      }
      .icon-content {
        color: #333;
        font-size: 20px;
        line-height: 1.5;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.application {
  height: 515px;
  background-color: #fafafa;
  padding: 45px 270px;
  .title {
    text-align: center;
    margin-bottom: 77px;
    p:first-child {
      margin-bottom: 16px;
      font-size: 30px;
      font-weight: 500;
    }
    p:last-child {
      font-size: 24px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-wrop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 50%;
    }
    p {
      margin-top: 66px;
    }
  }
}
.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 1200px;
  padding: 88px 300px;
  .contend-wrop {
    width: 636px;
    height: 515px;
    margin: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f2f2f2;
    .title {
      margin: 130px 0;
      font-size: 30px;
      font-weight: 500;
      color: #333;
    }
    div {
      width: 483px;
      // height: 546px;
      margin-bottom: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

// 动画类
// .custom-enter-active {
//   animation-name: fadeIn;
//   animation-duration: 2s;
// }
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 992px) {
  .banner {
    .banner-img {
      height: 1600px;
    }
    .text {
      p:nth-child(1) {
        font-size: 112px;
        margin-bottom: 48px;
      }
      p:nth-child(2) {
        font-size: 72px;
        margin-bottom: 48px;
        white-space: nowrap;
      }
      a {
        width: 348px;
        height: 112px;
        font-size: 44px;
        border-radius: 70px;
      }
    }
  }
  .more {
    .title {
      margin-bottom: 128px;
      p:first-child {
        margin-bottom: 32px;
        font-size: 60px;
      }
      p:last-child {
        font-size: 48px;
      }
    }
    .content {
      height: auto;
      flex-direction: row;
      .wrop {
        width: 580px;
        margin-bottom: 100px;
        .icon {
          width: 160px;
          height: 160px;
          margin-bottom: 50px;
        }
        .icon-title {
          font-size: 48px;
        }
        .icon-content {
          font-size: 40px;
        }
      }
    }
  }
  .application {
    .title {
      p:nth-child(1) {
        font-size: 60px;
      }
      p:nth-child(2) {
        font-size: 48px;
      }
    }
  }
  .end {
    .contend-wrop .title {
      font-size: 52px;
    }
  }
}
</style>