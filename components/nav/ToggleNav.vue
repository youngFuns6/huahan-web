<template>
  <div class="nav">
    <p class="title">常见问题</p>
    <ul>
      <li
        v-for="(item, index) in nav"
        :key="index"
        @click="toggle(index, item.type)"
      >
        {{ item.name }}
        <i :class="activeNav === index ? 'active-nav' : ''"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToggleNav",
  emits: ["update:activeNav"],
  // props: { activeAns: Number },
  components: {},
  data() {
    return {
      nav: [
        { name: "产品解答", type: 4 },
        { name: "新手引导", type: 5 },
        { name: "购买指南", type: 6 },
        { name: "云手机问题", type: 7 },
        { name: "云服务问题", type: 8 },
      ],
      activeNav: 0,
    };
  },

  methods: {
    toggle(i, type) {
      this.activeNav = i
      this.$emit("update:activeNav", i, type);
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active-nav {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 64px;
  background: linear-gradient(180deg, #17b8e0 0%, #019dfc 100%);
  border-radius: 5px;
}
.nav {
  margin-top: 24px;
  height: 704px;
  border: 1px solid #ededed;
  .title {
    padding: 26px 0;
    margin: 0 20px;
    text-align: center;
    border-bottom: 1px solid #ededed;
    font-size: 26px;
    font-weight: 500;
  }
  ul {
    li {
      width: 280px;
      position: relative;
      text-align: center;
      padding: 28px 0;
      font-size: 24px;
      &:hover {
        background-color: #a7a7a7;
        cursor: pointer;
      }
    }
  }
}
</style>