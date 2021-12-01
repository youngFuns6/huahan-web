<template>
  <div class="content" v-html="content">
    
  </div>
</template>

<script>
  export default {
    name: 'Details',
    components: {

    },
    data(){
      return {
        // content: ''
      }
    },
    async asyncData({$axios, route, store, env, params, query, req, res, redirect, error}) {
       const detail = await $axios.get(`${Config.BASE_URL}/qunkong/condition`, {params: {id: query.id}})
       return {
        content: detail.data.data.content
      }
    },
    // mounted(){
    //   this.emitter.on('getContent', content => {
    //     console.log(content)
    //     this.content = content
    //     // window.sessionStorage.setItem('content', JSON.stringify(content))
    //   })
    // },
    // beforeMount(){
    //   if(window.sessionStorage.getItem('content')){
    //     this.content = JSON.parse(window.sessionStorage.getItem('content'))
    //   }
      
    // },
    // beforeUnmount(){
    //   // this.emitter.off('getContent')
    // },
    methods: {

    },
    computed: {}

}
</script>

<style lang='less' scoped>
.content {
  padding: 100px 100px;
  font-size: 24px;
  line-height: 2;
  min-height: 80vh;
  // color: #fff;
  /deep/ .ql-video {
    width: 100%;
    height: 80vh;
  }
}


  

@media (max-width: 992px) {
  .content {
    padding: 150px 200px;
  font-size: 48px;
  
  }
}
</style>