<template>
  <div>
    <Header></Header>

    <Nuxt />

    <Aside></Aside>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Aside from "./Aside.vue"
export default {
  name: "default",
  components: {
    Header,
    Footer,
    Aside
  },
  data() {
    return {
      title: this.$store.state.contactInfo.webTitle,
      description: this.$store.state.contactInfo.webDesc,
      keywords: this.$store.state.contactInfo.webKeyWords,
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
      ],
    };
  },
};
</script>

<style lang='less' scoped>
  
</style>