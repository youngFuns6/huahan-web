<template>
  <div class="wrop">
    <div class="title">
      <h3>COMPANY INTRODUCTION</h3>
      <p>公司介绍</p>
    </div>
    <div class="content">
      <p>
        江苏华翰环保科技有限公司是专业从事研制、开发和采用高新技术材料制造各种耐腐蚀泵和耐腐蚀阀系列产品的专业制造公司，近有三十年历史．公司拥有一支高科技创新团队和与国际接轨的先进生产设备及自动化检测设备。
      </p>
      <p>
        公司＂礼花＂牌产品：广泛应用于石油化工、冶金、化纤、化肥、造纸、制药、环保、机械、电镀、纺织、水处理和蓄电池隔板等行业性工矿企业，适用于各种工况环境条件下正常使用。其耐腐蚀性、机械稳定性、密封可靠性，使用寿命长等优点得到了市场与客户的认可和好评。产品遍销全国并走向国际市场，在国内市场上享有较高的声誉。
      </p>
      <p>
        三十年来，公司以科技创新为导向，以质量为生命，以优质服务客户为宗旨，你的满意就是我们的追求为目标。．不断吸收国际先进技术，创新研发新材料＂礼花＂牌防腐产品，为发展我国的防腐事业与时俱进，创领新潮流。
      </p>
      <div class="banner">
        <img src="../assets/img/222.jpeg" alt="">
    </div>
    </div>
    <div class="honor">
        <div class="title">
      <h3>HONORARY QUALIFICATION</h3>
      <p>荣誉资质</p>
    </div>
    <ul>
        <li>
            <img src="" alt="">
        </li>
    </ul>
    </div>
    
  </div>
</template>
    
<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
    p:nth-child(2){
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
    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
            width: 393px;
height: 296px;
margin: 10px;
background: #FFFFFF;
border: 1px solid #133B80;
        }
    }
}
</style>