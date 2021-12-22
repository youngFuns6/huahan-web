<template>
  <div class="wrop">
    <div class="wrop-left" ref="leftRef" data-aos="zoom-in-right">
      <img
        :src="$store.state.contactInfo.compImg"
        alt=""
      />
    </div>
    <div class="wrop-right" data-aos="zoom-in-left">
      <div class="content">
        <h3>
          <p>GROUP TO INTRODUCE</p>
          <p>公司介绍</p>
        </h3>
        <p class="desc">
          江苏华翰环保科技有限公司是专业从事研制、开发和采用高新技术材料制造各种耐腐蚀泵和耐腐蚀阀系列产品的专业制造公司，近有三十年历史．公司拥有一支高科技创新团队和与国际接轨的先进生产设备及自动化检测设备。
          公司＂礼花＂牌产品：广泛应用于石油化工、冶金、化纤、化肥、造纸、制药、环保、机械、电镀、纺织、水处理和蓄电池隔板等行业性工矿企业，适用于各种工况环境条件下正常使用。其耐腐蚀性、机械稳定性、密封可靠性，使用寿命长等优点得到了市场与客户的认可和好评。产品遍销全国并走向国际市场，在国内市场上享有较高的声誉。
          三十年来，公司以科技创新为导向，以质量为生命，以优质服务客户为宗旨，你的满意就是我们的追求为目标，不断吸收国际先进技术，创新研发新材料＂礼花＂牌防腐产品，为发展我国的防腐事业与时俱进，创领新潮流。
        </p>
        <div class="more" @click="$router.push('/about')">了解更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indroduce",
  components: {},
  data() {
    return {};
  },
  mounted(){
    // this.$nextTick(() => {
    //    window.addEventListener('resize', (e) => {
    //   let BrowserWidth = document.body.clientWidth
    //   // console.log(BrowserWidth)
    //   if(BrowserWidth < 1600){
        
    //     console.log(document.querySelector('.wrop-left').style.top)
    //     document.querySelector('.wrop-left').style.top = parseInt(document.querySelector('.wrop-left').style.top) - BrowserWidth + 1600 + 'px'
    //     // document.querySelector('.wrop-left').style.left + BrowserWidth - 1600 + 'px'
    //   }
    // })
    // })
    
     
    
    
  },
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.wrop {
  background-color: #f6f6f6;
  height: 572px;
  position: relative;
  .wrop-left {
    width: 507px;
    height: 337px;
    position: absolute;
    top: 50%;
    left: 8vw;
    transform: translateY(-50%);
    transition: all 1s ease-in-out;
  }
  .wrop-right {
    width: 832px;
    // height: 460px;
    padding: 36px 0;
    background: #333333;
    position: absolute;
    top: 50%;
    right: 8vw;
    transform: translateY(-50%);
    transition: all 1s ease-in-out;
    .content {
      margin-left: 71px;
    }
    h3 {
      margin-bottom: 10px;
      font-weight: 500;
      p {
        font-size: 36px;
        color: #fff;
        margin-bottom: 12px;
      }
    }
    .desc {
      width: 715px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 24px;
      margin-bottom: 28px;
    }
    .more {
      width: 144px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      background: #133b80;
      cursor: pointer;
    }
  }
}
</style>