<template>
  <div>
    <Header></Header>

    <Nuxt />

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "default",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: 'kkk',
      description: 'kkk',
      keywords: 'kkkk',
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