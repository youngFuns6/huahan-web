<template>
  <div class="wrop-pc" v-if="!isMobile">
    <div class="wrop-left" data-aos="zoom-in-right">
      <h3>
        <p>ENTERPRISE DYNAMIC</p>
        <p>企业动态</p>
      </h3>
      <ul>
        <li
          v-for="(item, index) in condition"
          :key="index"
          @click="
            $router.push({
              path: `/news/content/${item.id}.html`,
              query: { type: 'condition' },
            })
          "
        >
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

  <div class="mobile" v-else>
    <div class="wrop">
      <h3>
        <p>ENTERPRISE DYNAMIC</p>
        <p>企业动态</p>
      </h3>
      <ul>
        <li
          v-for="(item, index) in condition"
          :key="index"
          @click="
            $router.push({
              path: `/news/content/${item.id}.html`,
              query: { type: 'condition' },
            })
          "
        >
          <p class="title">{{ item.title }}</p>
          <p class="created">{{ item.created }}</p>
        </li>
      </ul>
      <div class="btn" @click="$router.push('/news')">更多动态</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  props: {
    condition: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      isMobile: this.$store.state.isMobile,
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
.wrop-pc {
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

// 手机端
.mobile {
  height: auto;
  .wrop {
    padding: 0 .625rem /* 10/16 */;
      h3 {
        margin-bottom: 0.3125rem /* 5/16 */;
        
        text-align: center;
        p {
          font-size: 1.125rem /* 18/16 */;
          margin-bottom: 12px;
        }
        p:first-child {
          font-weight: 600;
          color: #133b80;
        }
        p:last-child {
          font-weight: normal;
          color: #333;
        }
      }
      ul {
        li {
          font-size: .875rem /* 14/16 */ /* 12/16 */;
          padding: 0.75rem /* 12/16 */ 0;
          border-bottom: 1px solid #dddddd;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          // align-items: center;
          cursor: pointer;
          &:hover {
            color: #a7a7a7;
          }
          .title {
            .line-text;
            // width: 60%;
            padding-left: 0.875rem /* 14/16 */;
            position: relative;
            &::before {
              content: "";
              display: block;
              width: 0.3125rem /* 5/16 */;
              height: 0.3125rem /* 5/16 */;
              position: absolute;
              left: 0px;
              top: 50%;
              transform: translateY(-50%);
              margin-right: 0.75rem /* 12/16 */;
              background-color: #d63025;
            }
          }
          .created {
            color: #a7a7a7;
            margin: 0;
            margin-left: .625rem /* 10/16 */;
          }
        }
      }
      .btn {
        text-align: center;
        line-height: 3.125rem /* 50/16 */;
        color: #fff;
        width: 100%;
        height: 3.125rem /* 50/16 */;
        margin-top: 28px;
        // position: absolute;
        float: right;
        background: #133b80;
        cursor: pointer;
      }
    
  }
}
</style>