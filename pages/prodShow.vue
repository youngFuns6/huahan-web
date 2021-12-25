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
    const cate = await $axios.get(`${Config.BASE_URL}/goods/cate`, {
      params: { page: 1, pageSize: 7 },
    });
    let cateList = cate.data.data;
    cateList.reverse();
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
      
      const goods = await $axios.get(`${Config.BASE_URL}/goods`, {
        params: {
          type: null,
          page: 1,
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
    console.log(cateList)
    return {
      cateList,
      goodsList: goodsData.data,
      total: goodsData.total,
      
      // goodsM: goodsMData.data
    };
  },
//  created() {
//     this.getGoods(); 
//     console.log(this)
//   },
//   methods: {
//     async getGoods() {
//       const res = await axios.get(Config.BASE_URL + "/goods", {
//         params: this.queryInfo,
//       });
//       this.goods = res.data.data;
//     },

//     change(value) {
//       this.queryInfo.type = value;
//       this.getGoods();
//     },
//   },
};
</script>
    
<style lang='less' scoped>
</style>