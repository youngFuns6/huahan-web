<template>
  <div class="contatiner">
    <div class="bar"></div>
    <div class="right-text">
      <h3>
        <slot name="title"></slot>
      </h3>
      <div class="more" @click="showMore">查看更多 ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explain",
  emits: ['showMore'],
  components: {},
  data() {
    return {};
  },
  methods: {
    showMore(){
      this.$emit('showMore')
    }
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.contatiner {
  position: relative;
  .right-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 31px;
    height: 64px;
    box-sizing: border-box;
    border-bottom: 1px solid #d7f0ff;
  }
  .bar {
    width: 10px;
    height: 64px;
    background: linear-gradient(180deg, #17b8e0 0%, #019dfc 100%);
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
  }
  h3 {
    color: #029ffc;
    font-size: 28px;
    font-weight: 600;
  }
  .more {
    color: #a7a7a7;
    font-size: 24px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

@media (max-width: 992px) {
  .contatiner .right-text {
    margin-left: 64px;
    height: 128px;
  }
  .contatiner .bar {
    width: 20px;
    height: 128px;
  }
  .contatiner h3 {
    font-size: 56px;
  }
  .contatiner .more {
    font-size: 48px;
  }
}
</style>