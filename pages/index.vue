<template>
  <div>
    <Bgc></Bgc>
    <MiddleBar></MiddleBar>
    <CloudScene></CloudScene>
    <Worth></Worth>
  </div>
</template>

<script>
import Bgc from '../components/index/Bgc.vue'
import MiddleBar from '../components/index/MiddleBar.vue'
import CloudScene from '../components/index/CloudScene.vue'
import Worth from '../components/index/Worth.vue'
export default {
  components: {
    Bgc,
    MiddleBar,
    CloudScene,
    Worth
  },
  data() {
    return {
      moreData: [],
      applicationData: [],
      endData: [],
    };
  },

  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>

</style>