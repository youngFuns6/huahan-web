<template>
  <div class="wrop" v-if="!isMobile">
    <div class="title">
      <h3>COMPANY INTRODUCTION</h3>
      <p>公司介绍</p>
    </div>
    <div
      class="content"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <p>
        江苏华翰环保科技有限公司是专业从事研制、开发和采用高新技术材料制造各种耐腐蚀泵和耐腐蚀阀系列产品的专业制造公司，近有三十年历史．公司拥有一支高科技创新团队和与国际接轨的先进生产设备及自动化检测设备。
      </p>
      <p>
        公司＂礼花＂牌产品：广泛应用于石油化工、冶金、化纤、化肥、造纸、制药、环保、机械、电镀、纺织、水处理和蓄电池隔板等行业性工矿企业，适用于各种工况环境条件下正常使用。其耐腐蚀性、机械稳定性、密封可靠性，使用寿命长等优点得到了市场与客户的认可和好评。产品遍销全国并走向国际市场，在国内市场上享有较高的声誉。
      </p>
      <p>
        三十年来，公司以科技创新为导向，以质量为生命，以优质服务客户为宗旨，你的满意就是我们的追求为目标。．不断吸收国际先进技术，创新研发新材料＂礼花＂牌防腐产品，为发展我国的防腐事业与时俱进，创领新潮流。
      </p>
      <div
        class="banner"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <img :src="$store.state.contactInfo.compImg" alt="" />
      </div>
    </div>
    <div class="honor">
      <div class="title">
        <h3>HONORARY QUALIFICATION</h3>
        <p>荣誉资质</p>
      </div>
      <el-carousel
        :autoplay="false"
        type="card"
        height="296px"
        @change="change"
      >
        <el-carousel-item v-for="(item, index) in img" :key="index">
          <el-image
            style="width: 100%; height: 100%"
            :src="item"
            :preview-src-list="srcList"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

  <div class="mobile" v-else>
    <div class="title">
      <h3>COMPANY INTRODUCTION</h3>
      <p>公司介绍</p>
    </div>
    <div
      class="content"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <p>
        江苏华翰环保科技有限公司是专业从事研制、开发和采用高新技术材料制造各种耐腐蚀泵和耐腐蚀阀系列产品的专业制造公司，近有三十年历史．公司拥有一支高科技创新团队和与国际接轨的先进生产设备及自动化检测设备。
      </p>
      <p>
        公司＂礼花＂牌产品：广泛应用于石油化工、冶金、化纤、化肥、造纸、制药、环保、机械、电镀、纺织、水处理和蓄电池隔板等行业性工矿企业，适用于各种工况环境条件下正常使用。其耐腐蚀性、机械稳定性、密封可靠性，使用寿命长等优点得到了市场与客户的认可和好评。产品遍销全国并走向国际市场，在国内市场上享有较高的声誉。
      </p>
      <p>
        三十年来，公司以科技创新为导向，以质量为生命，以优质服务客户为宗旨，你的满意就是我们的追求为目标。．不断吸收国际先进技术，创新研发新材料＂礼花＂牌防腐产品，为发展我国的防腐事业与时俱进，创领新潮流。
      </p>
      <div
        class="banner"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <img :src="$store.state.contactInfo.compImg" alt="" />
      </div>
    </div>
    <div class="honor">
      <div class="title">
        <h3>HONORARY QUALIFICATION</h3>
        <p>荣誉资质</p>
      </div>
      <ul>
        <li v-for="(item, index) in img" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      img: this.$store.state.contactInfo.honorImgs.split(","),
      srcList: [],
    };
  },
  methods: {
    change(index) {
      this.srcList = [];
      this.srcList.push(this.img[index]);
    },
  },
};
</script>
    
<style lang='less' scoped>
.wrop {
  margin: 64px 20vw;
}
.title {
  text-align: center;
  font-weight: 500;
  h3 {
    font-size: 40px;
    color: #133b80;
    line-height: 56px;
    margin-bottom: 12px;
  }
  p {
    font-size: 36px;
  }
}
.content {
  line-height: 1.5;
  margin-top: 64px;
  p:nth-child(2) {
    margin: 20px 0;
  }
}
.banner {
  margin-top: 50px;
  margin-bottom: 70px;
}
.honor {
  margin-top: 80px;
  .title {
    margin-bottom: 56px;
  }
  // ul {
  //   display: flex;
  //   justify-content: center;
  //   flex-wrap: wrap;
  //   li {
  //     width: 393px;
  //     height: 296px;
  //     margin: 10px;
  //     background: #ffffff;
  //     border: 1px solid #133b80;
  //   }
  // }
}

// 手机端
.mobile {
  padding: 0 0.625rem /* 10/16 */;
  .title {
    h3 {
      margin-bottom: 0;
      font-size: 1.25rem /* 20/16 */;
    }
    p {
      margin-top: 0;
      font-size: 1.125rem /* 18/16 */;
    }
  }
  .content {
    margin-top: 0;
    p {
      font-size: 0.875rem /* 14/16 */;
      line-height: 1.5;
    }
    .banner {
      margin: 0;
    }
  }
  .honor {
    margin-top: 2rem /* 32/16 */;
    .title {
      margin-bottom: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 15rem;
      overflow: scroll;
      li {
        height: 15rem;
        margin: 0 .3125rem /* 5/16 */;
      }
      margin-bottom: 5rem /* 80/16 */ /* 50/16 */;
    }
  }
}
</style>