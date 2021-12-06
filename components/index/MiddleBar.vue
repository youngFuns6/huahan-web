<template>
  <div>
    <div class="wrop">
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
    
    <div class="mobile-wrop">
      <div class="title">
      <h3>游点电云手机</h3>
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
}

@media (max-width: 992px) {
  .wrop {
    display: none;
  }
  .why-us-wrop {
    display: block;
  }
}
</style>