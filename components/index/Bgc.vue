<template>
  <div>
    <div class="pc">
      <div class="bgc">
        <div class="bgc-left">
          <img src="../../assets/images/left_bg.png" alt="" />
        </div>
        <div class="bgc-right">
          <img src="../../assets/images/right_bg.png" alt="" />
        </div>
      </div>
      <div class="banner">
        <div class="banner-left">
          <h3>
            <img src="../../assets/images/logo.png" alt="" />
            <span>游点电</span>
          </h3>
          <p class="title">你的智能云端手机</p>
          <p class="content">
            采用华为自研ARM技术，在云手机、人工智能、
            华为云鲲鹏云服务共同开展“5G+云+AI”计算层面的合作布局，为全行业提供安全、高效的云技术解决方案，让手机用户体验更健康的生活方式，享受生活。
          </p>
        </div>
        <div class="banner-right">
          <div class="img">
            <img src="../../assets/images/hero-img-web.png" alt="" />
          </div>
        </div>
      </div>
      <div class="download">
        <a :href="downloadLink" target="_blank" class="btn">
          <img src="../../assets/images/andriod.png" alt="" />
          <p>安卓版下载</p>
        </a>
        <a :href="downloadLink" target="_blank" class="btn">
          <img src="../../assets/images/ios.png" alt="" />
          <p>苹果版下载</p>
        </a>
        <a :href="qunkongLink" target="_blank" class="btn">
          <img src="../../assets/images/web.png" alt="" />
          <p>群控专业版</p>
        </a>
      </div>
    </div>
    <div class="mobile">
      <div class="mobile-wrop">
        <div class="title" data-aos="fade-up" data-aos-delay="200">
          <h2>你的智能云端手机</h2>
          <h3>更安全/更流畅/更多选择</h3>
        </div>
        <div class="mobile-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="../../assets/images/斜切备份@2x.png" alt="" />
        </div>
      </div>

      <div class="mobile-btn-wrop">
        <a :href="downloadLink" target="_blank">
          <div class="mobile-btn">
            <img src="../../assets/images/苹果@2x.png" alt="" /><span
              >ios下载</span
            >
          </div>
        </a>
        <a :href="downloadLink" target="_blank">
          <div class="mobile-btn">
            <img src="../../assets/images/安卓@2x.png" alt="" /><span
              >安卓下载</span
            >
          </div>
        </a>
      </div>
      <div class="mobile-btn-qunkong">
        <a :href="qunkongLink" target="_blank"> 群控专业版（pc端） </a>
      </div>
    </div>
  </div>
</template>

<script>
import Config from "../../assets/js/settings";
export default {
  name: "Bgc",
  data() {
    return {
      downloadLink: Config.link,
      qunkongLink: Config.qunKong,
    };
  },
};
</script>

<style lang='less' scoped>
@keyframes banner {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(30px);
  }
}
.bgc {
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
  }
  .bgc-left {
    width: 380px;
  }
  .bgc-right {
    width: 743px;
  }
}
.banner {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 300px;
  padding: 0 244px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .banner-left {
    width: 628px;
    margin-right: 58px;
    h3 {
      display: flex;
      align-items: center;
      font-size: 48px;
      img {
        width: 75px;
        height: 52px;
      }
      span {
        color: #029ffc;
        font-size: 40px;
        margin-left: 7px;
      }
    }
    .title {
      margin: 50px 0 20px 0;
      font-size: 30px;
    }
    .content {
      font-size: 24px;
      color: #a7a7a7;
      line-height: 2;
    }
  }
  .banner-right {
    .img {
      width: 701px;
      height: 668px;
      animation: banner 1.5s linear infinite alternate;
      img {
        width: 100%;
      }
    }
  }
}
.download {
  display: flex;
  justify-content: center;
  margin-top: 280px;
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 100px;
    &:hover {
      img {
        filter: none;
        transform: scale(1.2);
      }
      p {
        color: #029ffc;
      }
    }
    img {
      width: 96px;
      height: 96px;
      filter: grayscale(100);
      transition: all 0.4s ease-in-out;
    }
    p {
      font-size: 22px;
      margin-top: 22px;
    }
  }
}

.mobile {
  .mobile-wrop {
    margin-bottom: 45px;
    .title {
      text-align: center;
      h2 {
        font-size: 72px;
        margin: 64px 0 24px 0;
      }
      h3 {
        color: #029ffc;
        letter-spacing: 32px;
        font-size: 48px;
        margin-top: 60px;
      }
    }
    .mobile-img {
      width: 100%;
      height: 954px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .mobile-btn-qunkong {
    display: flex;
    justify-content: center;
    a {
      display: block;
      text-align: center;
      width: 520px;
      height: 144px;
      background: #029ffc;
      font-size: 48px;
      line-height: 144px;
      color:#fff;
      border-radius: 8px;
    }
  }
  .mobile-btn-wrop {
    padding: 102px 198px;
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      border-radius: 8px;
      overflow: hidden;
      .mobile-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 520px;
        height: 144px;
        background: #029ffc;
        img {
          width: 52px;
          height: 54px;
        }
        span {
          margin-left: 84px;
          font-size: 48px;
          color: #fff;
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .mobile {
    display: none;
  }
  .pc {
    display: block;
  }
}

@media (max-width: 992px) {
  .mobile {
    display: block;
  }
  .pc {
    display: none;
  }
}
</style>