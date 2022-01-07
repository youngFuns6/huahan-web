<template>
  <div class="wrop-pc" v-if="!isMobile">
    <div
      class="wrop-title"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h3>
        <p>HONORARY</p>
        <p>QUALIFICATION</p>
        <p>荣誉资质</p>
      </h3>
    </div>
    <el-carousel :autoplay="false" type="card" height="12rem" @change='change'>
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <el-image
          style="width: 100%; height: 100%"
          :src="item"
          :preview-src-list="srcList"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="mobile" v-else>
    <h3>
      <p>HONORARY QUALIFICATION</p>
      <p>荣誉资质</p>
    </h3>
    <ul>
      <li v-for="(item,index) in img" :key="index">
        <img :src="item" alt="" />
      </li>
    </ul>
    <div class="footer">
      Copyright2012 江苏华翰环保科技有限公司 &nbsp;&nbsp; 版权所有
      <div>电话：{{ $store.state.contactInfo.phone }}</div>
      <div>传真：{{ $store.state.contactInfo.fax }}</div>

      <div>Email：{{ $store.state.contactInfo.email }}</div>
      <div>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
          >苏ICP备13011262号-1</a
        >
      </div>
    </div>
  </div>
</template>
    
<script>
import img from "../../assets/img/honor-1.png";

export default {
  name: "honor",
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      img: this.$store.state.contactInfo.honorImgs.split(','),
      srcList: [],
    };
  },
  methods: {
    change(index){
      this.srcList = []
      this.srcList.push(this.img[index])
    }
  },
};
</script>
    
<style lang='less' scoped>
.wrop-pc {
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

// 手机端
.mobile {
  margin-top: 5rem /* 40/16 */;
  // margin: 2.5rem /* 40/16 *//* 40/16 */;
  padding-top: 2.5rem /* 10/16 */ /* 5/16 */;
  padding-bottom: 0;
  box-sizing: border-box;
  h3 {
    margin-bottom: 2rem /* 5/16 */;
    box-sizing: border-box;
    text-align: center;
    p {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0.75rem /* 12/16 */;
    }
    p:first-child {
      font-weight: 600;
      color: #133b80;
    }
    p:last-child {
      font-weight: normal;
      color: #333;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 0.375rem /* 6/16 */;
    height: 8rem;
    overflow: scroll;
    li {
      width: 8.3125rem /* 133/16 */;
      height: 7.0625rem /* 113/16 */;
      margin: 0 .3125rem /* 5/16 */;
    }
  }
  .footer {
    box-sizing: border-box;
    margin-top: 2.5rem /* 40/16 */;
    margin-bottom: 3.0625rem /* 49/16 */;
    padding: 1.25rem /* 20/16 */ 2rem /* 35/16 */;
    box-sizing: content-box;
    background: #484646;
    color: #fff;
    font-size: 0.875rem /* 14/16 */;
    line-height: 2;
    // text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    div {
      text-align: center;
    }
    a {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.el-carousel {
  width: 40%;
  position: absolute;
  left: 45vw;
  top: 50%;
  transform: translateY(-50%);
}

/deep/ .el-carousel .el-carousel__item {
  width: 18.8rem /* 133/16 */;
  // height: 12rem /* 113/16 */;
}
/deep/ .el-carousel {
  ul {
    display: none;
  }
  .el-carousel__mask {
    display: none;
  }
}
</style>