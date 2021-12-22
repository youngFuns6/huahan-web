<template>
  <div class="wrop">
    <div class="wrop-left" data-aos="zoom-in-right">
      <h3>
        <p>ENTERPRISE DYNAMIC</p>
        <p>企业动态</p>
      </h3>
      <ul>
        <li v-for="(item, index) in condition" :key="index" @click="$router.push({path: '/detail', query: {type: 'condition', id:item.id}})">
          <p class="title">{{ item.title }}</p>
          <p class="created">{{ item.created }}</p>
        </li>
      </ul>
      <div class="btn" @click="$router.push('/news')">更多动态</div>
    </div>
    <div class="wrop-right" data-aos="zoom-in-left">
      <img src="../../assets/img/1.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "condition",
  props: {
    condition: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    // getDet(id){
    //   this.$router.push({path: '/detail', query: {type: 'condition', id}})
    // }
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.wrop {
  margin: 105px 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  .wrop-left {
    width: 840px;
    // height: 509px;
    h3 {
      margin-bottom: 10px;
      font-weight: 500;
      p {
        font-size: 36px;
        margin-bottom: 12px;
      }
      p:first-child {
        color: #133b80;
      }
      p:last-child {
        color: #333;
      }
    }
    ul {
      li {
        font-size: 14px;
        padding: 24px 0;
        border-bottom: 1px solid #dddddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: #a7a7a7;
        }
        .title {
          .line-text;
          width: 60%;
          padding-left: 16px;
          position: relative;
          &::before {
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            margin-right: 16px;
            background-color: #d63025;
          }
        }
        .created {
          color: #a7a7a7;
        }
      }
    }
    .btn {
      text-align: center;
      line-height: 50px;
      color: #fff;
      width: 144px;
      height: 50px;
      margin-top: 28px;
      // position: absolute;
      float: right;
      background: #133b80;
      cursor: pointer;
    }
  }
  .wrop-right {
    width: 442px;
    height: 509px;
    margin-left: 32px;
  }
}
</style>