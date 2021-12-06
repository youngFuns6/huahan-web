<template>
  <div>
    <div class="title">
      <h3>云手机应用场景</h3>
      <p>What we can do for you</p>
    </div>
    <ul>
      <li>
        <div>
          <img src="../../assets/images/service-one.png" alt="" />
        </div>
        <h3>营销推广</h3>
        <p>APP引流推广，微信营销</p>
      </li>
      <li>
        <div>
          <img src="../../assets/images/service-two.png" alt="" />
        </div>
        <h3>手游助手</h3>
        <p>游戏托管，游戏脚本定制</p>
      </li>
      <li>
        <div>
          <img src="../../assets/images/service-three.png" alt="" />
        </div>
        <h3>智能办公</h3>
        <p>管理设备，修改IP定位</p>
      </li>
      <li>
        <div>
          <img src="../../assets/images/service-four.png" alt="" />
        </div>
        <h3>应用多开</h3>
        <p>批量操作，群控管理</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CloudScene",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
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
  p {
    font-size: 24px;
    color: #a7a7a7;
  }
}
ul {
  padding: 120px 150px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0 25px 0 rgb(0 0 0 / 10%);
    padding: 50px 30px;
    transition: all ease-in-out 0.4s;
    background: #fff;
    &:hover {
      transform: translateY(-10px);
    }
    div {
      width: 320px;
      height: 240px;
      overflow: hidden;
      border-radius: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      margin: 10px 0;
      font-size: 26px;
    }
    p {
      font-size: 24px;
      color: #a7a7a7;
    }
  }
}
</style>