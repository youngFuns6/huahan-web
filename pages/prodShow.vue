<template>
  <div>
    <Product :cateList="cateList" :goodsList="goodsList" :totalO='total'></Product>
  </div>
</template>
    
<script>
import Product from '../components/index/product.vue'
import Config from '../assets/js/settings'

  export default {
    data() {
      return {}
    },
    components: {
        Product
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
    let goodsData = {};
    if (cateList.length) {
      const goods = await $axios.get(`${Config.BASE_URL}/goods`, {
        params: {
          type: 1, 
          page: 1, 
          pageSize: 12,
        },
      });
      goodsData = goods.data;
    }
    return {
      cateList,
      goodsList: goodsData.data,
      total: goodsData.total
    };
  },
    
  }
</script>
    
<style lang='less' scoped>
</style>