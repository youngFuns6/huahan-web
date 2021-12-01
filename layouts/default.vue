<template>
  <div>
    <Header></Header>

    <Nuxt />

    <Footer :contactInfo="contactInfo"></Footer>
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
      contactInfo: this.$store.state.contactInfo,
      title: this.$store.state.contactInfo.webTitle,
    };
  },
  // beforeCreate(){
  //   console.log(this.$store.state.contactInfo.webTitle)
  // },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>

<style lang='less' scoped>
.el-main,
.el-header,
.el-footer {
  padding: 0;
  overflow: hidden;
  height: 100% !important;
}
</style>