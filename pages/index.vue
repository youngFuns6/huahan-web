<template>
  <div>
    <div class="img" v-if="isMobile">
      <img src="../assets/img/mobile_banner.png" alt="">
    </div>
    <Product :cateList="cateList" :goodsList="goodsList" :totalO="total">
      <template #moreBtn>
        <div class="more">
          <div @click="$router.push('/prodShow')">更多产品</div>
        </div>
      </template>
      <template #btn>
         <a href="/prodShow" class="btn">更多产品</a>
      </template>
    </Product>
    <Indroduce></Indroduce>
    <Condition :condition="condition"></Condition>
    <Honor></Honor>
  </div>
</template>

<script>
import Product from "../components/index/product.vue";
import Indroduce from "../components/index/indroduce.vue";
import Condition from "../components/index/condition.vue";
import Honor from "../components/index/honor.vue";

import Config from "../assets/js/settings";

export default {
  name: "Home",
  components: {
    Product,
    Indroduce,
    Condition,
    Honor,
  },
  data() {
    return {isMobile: this.$store.state.isMobile,};
  },
  async asyncData({
    $axios,
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const cate = await $axios.get(`${Config.BASE_URL}/goods/cate`, {
      params: { page: 1, pageSize: 7 },
    });
    let cateList = cate.data.data;
    cateList.reverse();
    cateList.unshift(
      {cateName:'全部商品', type: null}
    )
    let goodsData = {};
    if (cateList.length) {
      const goods = await $axios.get(`${Config.BASE_URL}/goods`, {
        params: {
          type: null, // query.type === undefined ? cateList[0].type : query.type,
          page: 1, // query.page === undefined ? 1 : query.page,
          pageSize: 6,
        },
      });
      goodsData = goods.data;
    }
    const condition = await $axios.get(`${Config.BASE_URL}/condition?type=1`, {
      params: { page: 1, pageSize: 4 },
    });

    // console.log(goodsList);
    return {
      cateList,
      goodsList: goodsData.data,
      total: goodsData.total,
      condition: condition.data.data,
    };
  },
  // watchQuery: ["type"],
};
</script>

<style lang='less' scoped>
.more {
  width: 80%;
  height: 50px;
  margin: 35px auto;
  background: #133b80;
  font-size: 14px;
  text-align: center;
  color: #fff;
  line-height: 50px;
  cursor: pointer;
}

.img {
  width: 100%;
}

 .btn {
   display: block;
    margin: 0 auto /* 12/16 */;
    margin-top: .75rem /* 12/16 */;
    width: 90%;
    height: 3rem /* 48/16 */;
    color: #fff;
    text-align: center;
    line-height: 3rem /* 48/16 */;
    background-color: #133B80;
    text-decoration: none;
  }
</style>