<template>
  <div class="content" v-html="content"></div>
</template>
    
<script>
// import axios from "axios";
import Config from "../assets/js/settings";

export default {
  data() {
    return {
      
    };
  },
 
 async asyncData({$axios, route, store, env, params, query, req, res, redirect, error}) {
     console.log(query.type)
       const detail = await $axios.get(`${Config.BASE_URL}/${query.type}`, {params: {id: query.id}})
       return {
        content: detail.data.data.content
      }
    },
    
};
</script>
    
<style lang='less' scoped>
/deep/ .content {
  img {
    width: 100%;
  }
}
.content {
    padding: 20px;
    margin-bottom: 50px;
}
</style>