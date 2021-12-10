<template>
  <div>
    <div class="wrop" data-aos="fade-up">
      <div class="bar-left">
        <img src="../../assets/images/why-us-image.png" alt="" />
      </div>
      <div class="bar-right">
        <h3>全方位的云端智能手机平台</h3>
        <p>
          公司2020年与华为正式签署战略合作协议成为晋级战略合作伙伴关系。采用华为自研ARM技术，在云手机、人工智能、华为云鲲鹏云服务共同开展“5G+云+AI”计算层面的合作布局，为全行业提供安全、高效的云技术解决方案，让手机用户体验更健康的生活方式，享受生活。
        </p>
      </div>
    </div>

    <div class="mobile-wrop" data-aos="fade-up">
      <div class="title">
        <h3>游点电云手机</h3>
      </div>
      <div class="bgc-box">
        <div class="card">
          <img src="../../assets/images/team-frist.png" alt="" />
        </div>
        <div class="content">
          公司2020年与华为正式签署战略合作协议成为晋级战略合作伙伴关系。采用华为自研ARM技术，在云手机、人工智能、华为云鲲鹏云服务共同开展“5G+云+AI”计算层面的合作布局，为全行业提供安全、高效的云技术解决方案，让手机用户体验更健康的生活方式，享受生活。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiddleBar",
  components: {},
};
</script>

<style lang='less' scoped>
.wrop {
  width: 100%;
  height: 500px;
  background: linear-gradient(90deg, #17b8e0 0%, #019dfc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  .bar-left {
    width: 583px;
    height: 382px;
    margin-right: 160px;
    img {
      width: 100%;
    }
  }
  .bar-right {
    color: #fff;
    width: 792px;
    h3 {
      font-size: 28px;
      margin-bottom: 30px;
    }
    p {
      font-size: 24px;
      line-height: 1.5;
    }
  }
}

.title {
  text-align: center;
  h3 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #333333;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #5ad4ff 0%, #008bf7 100%);
      bottom: 0;
      left: calc(50% - 20px);
    }
  }
}

@media (min-width: 992px) {
  .mobile-wrop {
    display: none;
  }
  // .wrop {
  //   display: block;
  // }
}

@media (max-width: 992px) {
  .wrop {
    display: none;
  }
  .mobile-wrop {
    display: block;
  }

  .mobile-wrop {
    margin: 152px 0;
    .title {
      margin-bottom: 104px;
      h3 {
        font-size: 72px;
        padding-bottom: 64px;
        &::before {
          display: none;
        }
        &::after {
          content: "";
          position: absolute;
          display: block;
          width: 128px;
          height: 20px;
          background: linear-gradient(90deg, #5ad4ff 0%, #008bf7 100%);
          border-radius: 10px;
          opacity: 0.5;
          bottom: 0;
          left: calc(50%);
          transform: translateX(-50%);
        }
      }
    }
    .bgc-box {
      width: 90%;
      height: 1502px;
      margin: 56px auto;
      background-color: #f3f4f8;
      border-radius: 40px;
      position: relative;
      .card {
        width: 90%;
        height: 818px;
        background: #ffffff;
        border-radius: 40px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 64px;
        img {
          width: 790px;
          height: 774px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .content {
        width: 90%;
        font-size: 48px;
        line-height: 2;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>