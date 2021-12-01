<template>
  <div>
     <div class="pc-container">
    <section id="hero">
      <div class="container"></div>
      <!-- <img id="wx-web" class="wx-web" src="../assets/images/weixin-web.png"> -->
    </section>
    <!-- End Hero -->

    <main id="main">
      <!-- ======= Cliens Section ======= -->
      <section id="cliens" class="cliens section-bg">
        <div class="container">
          <div class="row" data-aos="zoom-in">
            <div>
              <a :href="Congfig.link"
                ><div
                  class="down-wrop"
                  @mouseenter="isShowAdr = true"
                  @mouseleave="isShowAdr = false"
                >
                  <img src="../assets/images/andriod.png" alt="" />
                  <p>手机客户端下载</p>
                  <!-- 安卓下载二维码 -->
                  <div class="adrQr" v-if="isShowAdr">
                    <img src="../assets/images/downloadAdr.png" alt="" />
                  </div></div
              ></a>
            </div>

            <div v-if="false">
              <a :href="Congfig.link"
                ><div
                  class="down-wrop"
                  @mouseenter="isShowApple = true"
                  @mouseleave="isShowApple = false"
                >
                  <img src="../assets/images/ios.png" alt="" />
                  <p>苹果版下载</p>
                  <!-- 下载二维码 -->
                  <div class="appleQr" v-if="isShowApple">
                    <img src="../assets/images/downloadQr.png" alt="" />
                  </div></div
              ></a>
            </div>

            <div>
              <div>
                <a :href="Congfig.qunKong" target="_blank">
                  <div class="down-wrop">
                    <img
                      src="../assets/images/web.png"
                      class="img-fluid"
                      alt=""
                    />

                    <p>群控专业版</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div class="mobile-container" data-aos="zoom-in-up">
    <p>你的智能云端手机</p>
    <p>更安全/更流畅/更多选择</p>
    <div class="img">
      <img src="../assets/images/斜切备份@2x.png" alt="" />
    </div>
    <div class="btn">
      <a :href="Congfig.link">ios下载</a>
      <a :href="Congfig.link">安卓下载</a>
    </div>
    <div class="btn">
      <a :href="Congfig.qunKong" class="qunkong"> 群控专业版(PC端) </a>
    </div>
  </div>
  </div>
</template>

<script>
import Congfig from "../assets/js/settings";
export default {
  name: "download",
  components: {},
  data() {
    return {
      isShowAdr: false,
      isShowApple: false,
      Congfig,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.container {
  min-height: 50vh;
}
#cliens .container .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 300px 300px;
  .down-wrop {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  img {
    max-width: 80%;
    transition: all 0.4s ease-in-out;
    display: inline-block;
    padding: 15px 0;
    filter: grayscale(100);
    cursor: pointer;
    &:hover {
      filter: none;
      transform: scale(1.1);
    }
  }
}

.appleQr,
.adrQr {
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
  bottom: -200px;
  width: 200px;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
}

// 手机端适配
.mobile-container {
  min-height: 85vh;
  display: none;
  p:first-child {
    font-size: 72px;
    margin-top: 128px;
    margin-bottom: 48px;
    text-align: center;
  }
  p:nth-child(2) {
    font-size: 48px;
    color: #029ffc;
    margin-bottom: 44px;
    text-align: center;
  }
  .img {
    height: 954px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 102px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 48px;
      margin: 0 30px;
      width: 520px;
      height: 144px;
      background: #029ffc;
      border-radius: 8px;
    }
  }
}

@media (max-width: 992px) {
  .pc-container {
    display: none;
  }
  .mobile-container {
    display: block;
  }
}
</style>