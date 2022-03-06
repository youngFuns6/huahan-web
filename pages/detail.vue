<template>
  <div v-if="!isMobile" class="content">
    <div  v-html="news.res.content"></div>
    <div class="btn">
      <button :disabled="!news.behindId">
        <router-link
          :class="news.behindId ? '' : 'disabled'"
          :to="news.behindId ? `/news/content/${$route.params.type}/${news.behindId}.html` : ''"
          >上一篇</router-link
        >
      </button>
      <button :disabled="!news.front">
        <router-link :class="news.frontId ? '' : 'disabled'" :to="news.frontId ? `/news/content/${$route.params.type}/${news.frontId}.html` : ''"
          >下一篇</router-link
        >
      </button>
    </div>
  </div>
  <div class="mobile" v-html="news.res.content" v-else></div>
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

  async asyncData({
    $axios,
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
    console.log(params.type);
    const detail = await $axios.get(`${Config.BASE_URL}/${params.type}`, {
      params: { id: params.id },
    });
    return {
      news: detail.data.data,
    };
  },
  head() {
    return {
      title: this.news.res.title,
    };
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
  margin: 0 auto 50px auto;
  line-height: 1.5;
  max-width: 1200px;
  min-height: 80vh;
   .btn {
    text-align: center;
    margin: 50px;
    .disabled {
      color: #a7a7a7;
    }
    a {
      color: #333;
    }
  }
}

.mobile {
  padding: 0.625rem /* 10/16 */ /* 20/16 */ /* 10/16 */;
  margin-bottom: 3.125rem /* 50/16 */;
  line-height: 1.5;
}
</style>