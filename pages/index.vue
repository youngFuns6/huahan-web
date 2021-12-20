<template>
  <div>
    <Product></Product>
    <Indroduce></Indroduce>
    <Condition></Condition>
  </div>
</template>

<script>
import Product from '../components/index/product.vue'
import Indroduce from '../components/index/indroduce.vue'
import Condition from '../components/index/condition.vue'

  export default {
    name: 'Home',
    components: {
      Product,
      Indroduce,
      Condition
    },
    data(){
      return {

      }
    },
    methods: {

    },
    computed: {}

}
</script>

<style lang='less' scoped>

</style>