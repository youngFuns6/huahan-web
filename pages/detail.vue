<template>
  <div v-if="!isMobile" class="content" v-html="content"></div>
  <div class="mobile"  v-html="content" v-else>

  </div>
</template>
    
<script>
// import axios from "axios";
import Config from "../assets/js/settings";

export default {
  data() {
    return {
      isMobile: this.$store.state.isMobile,
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
// /deep/ .content {
//   img {
//     width: 100%;
//   }
// }
.content {
    padding: 20px;
    margin-bottom: 50px;
    line-height: 1.5;
}

.mobile {
  
    padding: .625rem /* 10/16 */ /* 20/16 */ /* 10/16 */;
    margin-bottom: 3.125rem /* 50/16 */;
    line-height: 1.5;
  
}
</style>