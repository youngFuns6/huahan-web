<template>
  <div>
      <section class="banner" data-aos="zoom-in-up"
        data-aos-duration='200'>
    <img src="../assets/images/编组@2x.png" alt="" />
    <div class="text">
      <p class="top">
        <span>关于我们</span>
        <span>/ ABOUT US</span>
      </p>
      <p class="bot">诚信、创新、专注、用心服务</p>
    </div>
  </section>

  <section class="about" data-aos="zoom-in-up"
        data-aos-duration='300'>
    <p class="title">关于我们</p>
    <div class="content">
      <div class="left">

                                    游点电云手机隶属于常州群翔网络科技有限公司旗下APP，专注于云手机应用平台的研发与构建，以“诚信、创新、专注、用心服务”为核心价值，致力于为全国乃至全球智能手机用户打造一个能够提供各种手机应用程序的展示、下载、应用与管理的多元化、 全方位的云端智能手机平台，为整个行业提供安全、高效的云技术解决方案，旨在让手机用户体验健康的生活方式。
游点电云手机以创造健康、生态的移动智能手机应用为理念，围绕国内外智能手机用户群，以用户需求为中心，依托无线互联网、数据处理、虚拟云、云指令、云端操作等技术，致力于云手机应用平台的研发和建设，为全国乃至全球智能手机用户提供一种多样化、全方位的云手机平台，提供各种手机应用的展示、下载、应用和管理等功能。APP适用于电商、服务、教育、医疗、社交、机关、零售、运营、营销、游戏等领域。
                                
      </div>
      <div class="right">
        <div class="top">
          <img src="../assets/images/公司简介2.png" alt="">
        </div>
        <div class="bot">
          <div><img src="../assets/images/公司简介1.png" alt=""></div>
          <div><img src="../assets/images/公司简介3.png" alt=""></div>
        </div>
      </div>
    </div>
  </section>

  <section class="core" data-aos="fade-up"
        data-aos-duration='500'>
    <p class="title">核心价值</p>
    <ul>
      <li>
        <div><img src="../assets/images/诚信2@2x.png" alt=""></div>
        <p>诚信</p>
      </li>
      <li>
        <div><img src="../assets/images/创意@2x.png" alt=""></div>
        <p>创新</p>
      </li>
      <li>
        <div><img src="../assets/images/专注2@2x.png" alt=""></div>
        <p>专注</p>
      </li>
      <li>
        <div><img src="../assets/images/用心服务@2x.png" alt=""></div>
        <p>用心服务</p>
      </li>
    </ul>
  </section>

  <section class="server" data-aos="zoom-in-up"
        data-aos-duration='700'>
    <p class="title">服务范围</p>
    <p class="content"></p>
    <ul>
      <li><img src="../assets/images/诚信@2x.png" alt=""></li>
      <li><img src="../assets/images/创新@2x.png" alt=""></li>
      <li><img src="../assets/images/专注@2x.png" alt=""></li>
      <li><img src="../assets/images/服务@2x.png" alt=""></li>
      
    </ul>
  </section>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.banner {
  position: relative;
  height: 480px;
  background: #333333;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.54;
  }
}
.text {
  position: absolute;
  top: 150px;
  left: 320px;
  color: #fff;
  .top {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .bot {
    width: 610px;
    padding: 15px 32px;
    background: #029ffc;
    border-radius: 4px;
    opacity: 0.49;
    font-size: 32px;
  }
}
.about {
  padding: 80px 208px;
  .title {
    margin-bottom: 64px;
    text-align: center;
    font-size: 30px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      width: 950px;
      font-size: 24px;
      line-height: 2;
      font-size: 24px;
    }
    .right {
      width: 520px;
      .top {
        height: 205px;
         margin-bottom: 14px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .bot {
        display: flex;
        justify-content: space-between;
        div {
           height: 202px;
           width: 48%;
           img {
             width: 100%;
             height: 100%;
           }
        }
      }
    }
  }
}

.core {
  height: 452px;
  box-sizing: border-box;
  margin-bottom: 80px;
  background: url(../assets/images/编组3@2x.png) 100% 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 30px;
    color: #fff;
    padding-top: 50px;
    padding-bottom: 80px;
    text-align: center;
  }
  ul {
    margin-bottom: 56px;
     display: flex;
      justify-content: center;
      align-items: center;
    li {
      margin: 0 175px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
      div {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 32px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        color: #fff;
        font-size: 24px;
      }
    }
  }
}

.server {
  margin-bottom: 100px;
  .title {
    font-size: 30px;
    margin-bottom: 64px;
    text-align: center;
  }
  .content {
    font-size: 24px;
    text-align: center;
    margin-bottom: 44px;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
    width: 346px;
    height: 200px;
    margin: 0 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  }
  
} 

// 手机端适配
@media (max-width: 992px) {
  .banner {
    height: 960px;
  }
  .text {
    top: 300px;
    .top {
      font-size: 72px;
      margin-bottom: 40px;
    }
    .bot {
      width: 1220px;
      font-size: 64px;
    }
  }
  .about {
    .title {
      font-size: 60px;
    }
    .content {
      flex-direction: column;
      align-items: center;
      .left {
        width: 100%;
        font-size: 48px;
      }
      .right {
        width: 100%;
        .top {
          height: 410px;
          margin-bottom: 28px;
          margin-top: 30px;
        }
        .bot {
          display: none;
        }
      }
    }
  }
  .core {
    height: auto;
    .title {
      font-size: 60px;
    }
    ul {
      flex-wrap: wrap;
      li {
        margin: 50px 350px;
        div {
          width: 250px;
          height: 250px;
        }
        p {
          font-size: 48px;
        }
      }
    }
  }
  .server {
    .title {
      font-size: 60px;
    }
    ul {
      flex-wrap: wrap;
      li {
        width: 682px;
        height: 400px;
        margin: 32px;
      }
    }
  }
}
</style>