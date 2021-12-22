<template>
  <div class="wrop">
    <div
      class="wrop-title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h3>
        <p>Honorary</p>
        <p>QUALIFICATION</p>
        <p>荣誉资质</p>
      </h3>
    </div>
    <ul>
      <li
        data-aos="fade-left"
       
        data-aos-duration="2000"
      >
        <img src="../../assets/img/honor-1.png" alt="" />
      </li>
      <li
        data-aos="fade-left"
        
        data-aos-duration="3000"
      >
        <img src="../../assets/img/honor-2.png" alt="" />
      </li>
    </ul>
  </div>
</template>
    
<script>
export default {
  name: "honor",
  data() {
    return {};
  },
  methods: {},
};
</script>
    
<style lang='less' scoped>
.wrop {
  height: 303px;
  background: #333333;
  position: relative;
  .wrop-title {
    width: 376px;
    height: 340px;
    background: #133b80;
    position: absolute;
    left: 8vw;
    bottom: 68px;
    &::after {
      content: "";
      display: block;
      width: inherit;
      height: 12px;
      position: absolute;
      left: 0;
      bottom: -28px;
      background-color: #d63025;
    }
    h3 {
      font-weight: 500;
      color: #ffffff;
      font-size: 36px;
      margin-top: 134px;
      margin-left: 32px;
      p {
        margin: 12px 0;
      }
    }
  }
  ul {
    display: flex;
    position: absolute;
    top: 50%;
    left: calc(8vw + 500px);
    transform: translateY(-50%);
    li {
      width: 188px;
      height: 141px;
      margin: 0 10px;
      background: #ffffff;
    }
  }
}
</style>