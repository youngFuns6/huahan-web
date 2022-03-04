<template>
  <div>
      <Product
      :cateList="cateList"
      :goodsList="goodsList"
      :totalO="total"
    ></Product>
  </div>
 
</template>
    
<script>
import Product from "../components/index/product.vue";
import Config from "../assets/js/settings";
// import axios from "axios";

export default {
  name: 'ProdShow',
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      // value: null,
      // goods: [],
      queryInfo: {
        page: 1,
        pageSize: 12,
        type: null,
      },
      // cateListM: []
    };
  },
  head() {
    return {
      title: '资讯-华翰产品展示-泵阀-专业泵阀厂家',
    };
  },
  components: {
    Product,
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
    const cate = await $axios.get(`${Config.BASE_URL}/goods/cate`
    );
    let cateList = cate.data.data;
    console.log(cateList)
    // cateList.reverse();
    cateList.unshift(
      {cateName:'全部商品', type: null}
    )
  //  console.log(cateList)
    let goodsData = {};
    // let goodsMData = []
    if (cateList.length) {
      // let type = null 
      // if(req.url === '/prodShow' && req.url !== undefined){
      //   type = null
      // }else {
      //   type = 1
      // }
      // console.log(query)
      const goods = await $axios.get(`${Config.BASE_URL}/goods`, {
        params: {
          type: params.type === undefined  ? null : parseInt(params.type),
          page: params.page === undefined ? 1 : params.page,
          pageSize: 12,
        },
      });
      // console.log(goods)
      // const goodsM = await $axios.get(`${Config.BASE_URL}/goods`, {
      //   params: {
      //     page: 1,
      //     pageSize: 12,
      //   },
      // });
      goodsData = goods.data;
      // goodsMData = goodsM.data
    }
    return {
      cateList,
      goodsList: goodsData.data,
      total: goodsData.total,
      
      // goodsM: goodsMData.data
    };
  },
  watchQuery: ['type', 'page']
};
</script>
    
<style lang='less' scoped>
</style>