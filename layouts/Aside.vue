<template>
  <div class="wrop">
    <div class="qr-wrop">
      <div id="qr" ref="qrRef">
        <img :src="$store.state.contactInfo.qrCode" alt="" />
      </div>
      <div class="logo">
        <img src="../assets/img/logo_mobile.png" alt="" />
      </div>
    </div>

    <div class="qrTitle">
      扫描二维码添加微信
      <div class="qq">
        <div class="qq-wrop" v-for="(item, index) in phone" :key="index">
          <p>联系电话：</p>
          <i>{{ item }}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "floatSlide",
  components: {},
  data() {
    return {
      // qrcodeObj: {}, // 二维码配置
      phone: [],
    };
  },
  created() {
    this.phone = this.$store.state.contactInfo.phone
      .replace(" ", "")
      .split("/");
  },
  // beforeMount() {
  //   this.$nextTick(() => {
  //     this.qrcodeObj = new QRCode(this.$refs.qrRef, {
  //       text: this.$store.state.contactInfo.QrCode,
  //       width: 110,
  //       height: 110,
  //       colorDark: "#333",
  //       colorLight: "#fff",
  //       correctLevel: QRCode.CorrectLevel.H,
  //     });
  //   });
  //   // this.updateQr();
  // },
  methods: {
    // updateQr() {
    //   this.qrcodeObj.makeCode(this.$store.state.contactInfo.QrCode);
    // },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.wrop {
  // background: url(../assets/images/float-code-bg.png) 0 0 no-repeat;
  // background-size: contain;
  background-image: linear-gradient(to bottom right, #00b4db, #0083b0);
  position: fixed;
  z-index: 99999;
  bottom: 15%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 150px;
  min-height: 300px;
  right: 10px;
  #qr {
    width: 110px;
    height: 110px;
  }
  .qr-wrop {
    background-color: #fff;
    padding: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 333;
    top: 0.3125rem /* 5/16 */;
    // height: 100%;
    .logo {
      background-color: #fff;
      width: 25%;
      // height: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .qrTitle {
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    // max-width: 160px;
    text-align: center;
    line-height: 1.5;
    border-bottom: 1px dashed #fff;
    box-sizing: border-box;
    top: 140px;
    width: 100%;
    padding: 5px;
    font-size: 14px;
  }
  .qq {
    color: #fff;
    text-align: center;
    line-height: 1.5;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 35px;
    div {
      margin-bottom: 5px;
      font-size: 13px;
    }
    p {
      margin: 0;
    }
    p,
    i {
      color: #ffff00;
      font-weight: bold !important;
    }
  }
}
</style>