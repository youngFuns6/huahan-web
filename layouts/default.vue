<template>
  <div :class="isMobile ? '' : 'size'">
    <Header></Header>
      <Nuxt  keep-alive :keep-alive-props="{ include:['ProdShow', 'Home', 'News','Condition', 'About', 'Contact'] }" />
    <Aside v-if="isMobile ? false : true"></Aside>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Aside from "./Aside.vue";
// import useMobile from "../assets/js/useMobile";
export default {
  name: "default",
  components: {
    Header,
    Footer,
    Aside,
  },
  data() {
    return {
      title: this.$store.state.contactInfo.webTitle,
      description: this.$store.state.contactInfo.webDesc,
      keywords: this.$store.state.contactInfo.webKeyWords,
      isMobile: this.$store.state.isMobile,
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
        {
          name: "baidu-site-verification",
          content: "code-nEjTMglEme"
        },
      ],
    };
  },

  //   beforeMount() {
  //   this.isMobile = useMobile();
  // },
};
</script>

<style lang='less' scoped>
.size {
  min-width: 1420px;
}
</style>