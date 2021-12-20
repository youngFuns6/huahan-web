<template>
  <div>
    <Product>
      <template #moreBtn>
        <div class="more">更多产品</div>
      </template>
    </Product>
    <Indroduce></Indroduce>
    <Condition></Condition>
    <Honor></Honor>
  </div>
</template>

<script>
import Product from '../components/index/product.vue'
import Indroduce from '../components/index/indroduce.vue'
import Condition from '../components/index/condition.vue'
import Honor from '../components/index/honor.vue'

  export default {
    name: 'Home',
    components: {
      Product,
      Indroduce,
      Condition,
      Honor
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