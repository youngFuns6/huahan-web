<template>
  <div>
    <div class="bgc">
      <img src="../assets/img/map.png" alt="" />
      <div class="box">
        <p>
          <i>
            <img src="../assets/img/电话.png" alt="" />
          </i>
          <span>155555</span>
        </p>
        <p>
          <i>
            <img src="../assets/img/邮箱.png" alt="" />
          </i>
          <span>155555</span>
        </p>
        <p>
          <i>
            <img src="../assets/img/地址.png" alt="" />
          </i>
          <span>155555</span>
        </p>
        <div class="qr">
          <img src="../assets/img/qr_wx.png" alt="" />
        </div>
      </div>
    </div>
    <div class="footer">
      Copyright2012 江苏华翰环保科技有限公司 &nbsp;&nbsp; 版权所有 &nbsp;&nbsp; 电话：0519-86231154 &nbsp;&nbsp;
      传真：0519-86230933 &nbsp;&nbsp; Email：czhhhb_2013@163.com &nbsp;&nbsp;
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
        >苏ICP备13011262号-1</a
      >
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
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.bgc {
  position: relative;
  // height: 516px;
  // object-fit: cover !important;
}
.box {
  position: absolute;
  top: 0;
  right: 250px;
  width: 306px;
  // height: 434px;
  padding-bottom: 20px;
  background: #133b80;
  p {
    margin: 30px 0;
    margin-left: 36px;
    color: #fff;
    display: flex;
    align-items: center;
    i {
      display: block;
      width: 28px;
      height: 28px;
      margin-right: 12px;
    }
    span {
      font-size: 18px;
    }
  }
  .qr {
    margin: 0 auto;
    width: 179px;
    height: 179px;
  }
}

.footer {
  height: 150px;
  background: #484646;
  color: #fff;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>