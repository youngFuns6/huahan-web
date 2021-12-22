<template>
  <!-- <div class="wrop">
    <div class="title">
      <h3>PRODUCT DISPLAY</h3>
      <p>产品展示</p>
    </div>
    <div class="wrop-content">
      <div class="wrop-left">
        <h3>
          <i class="icon">
            <img src="../../assets/img/cate_icon.png" alt="" />
          </i>
          <span>产品分类</span>
        </h3>
        <ul>
          <li
            :class="active === index ? 'active' : ''"
            v-for="(item, index) in cate"
            :key="item.id"
            @click="toggleCate(index, item.type)"
          >
            <span>{{ item.cateName }}</span>
          </li>
          <slot name='moreBtn'></slot>
        </ul>
      </div>
      <div class="wrop-right">
        <ul>
          <li v-for="(item, index) in goods" :key="index">
            <div class="img">
              <img :src="item.banner" alt="" />
            </div>
            <div class="title">{{ item.title }}</div>
          </li>
        </ul>
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="total">
        </el-pagination>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <div class="wrop">
      <div class="title">
        <h3>PRODUCT DISPLAY</h3>
        <p>产品展示</p>
      </div>
      <div class="wrop-content">
        <el-row type="flex" justify="center">
          <el-col
            class="wrop-left"
            :xs="0"
            :sm="5"
            :md="5"
            :lg="4"
            :xl="4"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="300"
          >
            <h3>
              <i class="icon">
                <img src="../../assets/img/cate_icon.png" alt="" />
              </i>
              <span>产品分类</span>
            </h3>
            <ul>
              <li
                :class="active === index ? 'active' : ''"
                v-for="(item, index) in cate"
                :key="item.id"
                @click="toggleCate(index, item.type)"
              >
                <span>{{ item.cateName }}</span>
              </li>
              <slot name="moreBtn"></slot>
            </ul>
          </el-col>
          <el-col
            class="wrop-right"
            :xs="24"
            :sm="18"
            :md="18"
            :lg="18"
            :xl="18"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            <el-row>
              <el-col
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
                :xl="8"
                v-for="(item, index) in goods"
                :key="index"
                data-aos="fade-down"
                data-aos-easing="linear"
                :data-aos-duration="(index + 1) * 300"
                @click="getDet(id)"
              >
                <div class="bgc">
                  <div class="img">
                    <img :src="item.banner" alt="" />
                  </div>
                  <div class="title">{{ item.title }}</div>
                </div>
              </el-col>
            </el-row>
            <div class="page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :current-change="changePage"
              >
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../../assets/img/1.png";
import axios from "axios";
import Config from "../../assets/js/settings";

export default {
  name: "product",
  components: {},
  props: {
    cateList: {
      type: Array,
      default() {
        return [];
      },
    },
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
    totalO: Number,
  },
  data() {
    return {
      active: 0,
      cate: this.cateList,
      goods: this.goodsList,
      queryInfo: {
        page: 1,
        pageSize: this.$route.path === "/" ? 6 : 12,
      },
      total: this.totalO,
    };
  },
  methods: {
    async toggleCate(index, type) {
      this.active = index;
      let res = await axios.get(Config.BASE_URL + `/goods`, {
        params: { type, ...this.queryInfo },
      });
      this.goods = res.data.data;
      this.total = res.data.total;
      // console.log(this.goods);
    },

    changePage(page) {
      this.queryInfo.page = page;
      this.toggleCate();
    },

    getDet(id){
      console.log(id)
    }
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active {
  background-color: #eeeeef;
}
// .wrop {
//   margin: 64px 18vw;
//   .title {
//     text-align: center;
//     font-weight: 500;
//     h3 {
//       font-size: 40px;
//       color: #133b80;
//       line-height: 56px;
//       margin-bottom: 12px;
//     }
//     p {
//       font-size: 36px;
//     }
//   }

//   .wrop-content {
//     margin-top: 58px;
//     display: flex;
//     justify-content: center;
//   }
//   .wrop-left {
//     width: 296px;
//     min-height: 620px;
//     background-color: #fafafa;
//     h3 {
//       font-size: 28px;
//       color: #133b80;
//       padding: 24px 0 24px 36px;
//       display: flex;
//       align-items: center;
//       span {
//         margin-left: 8px;
//       }
//       .icon {
//         display: block;
//         width: 24px;
//         height: 24px;
//       }
//     }
//     ul {
//       li {
//         cursor: pointer;
//         transition: all 0.3s linear;
//         &:hover {
//           background-color: #eeeeef;
//         }
//         span {
//           .line-text;
//           display: block;
//           margin: 0 36px;
//           padding: 22px 0;
//           font-size: 14px;
//           color: #133b80;
//           border-bottom: 1px solid #ededed;
//         }
//       }
//       .more {
//         width: 224px;
//         height: 50px;
//         margin: 35px 36px;
//         background: #133b80;
//         font-size: 14px;
//         text-align: center;
//         color: #fff;
//         line-height: 50px;
//         cursor: pointer;
//       }
//     }
//   }

//   .wrop-right {
//     min-height: 620px;
//     margin-left: 32px;
//     background: #fafafa;
//     ul {
//       width: 900px;
//       display: flex;
//       justify-content: space-around;
//       flex-wrap: wrap;
//       li {
//         margin-top: 26px;
//         background: #f6f6f6;
//         cursor: pointer;
//         img {
//           width: 236px;
//           height: 174px;
//           margin: 12px 12px 14px 12px;
//         }
//         .title {
//           .line-text;
//           text-align: left;
//           margin-left: 26px;
//           line-height: 1.2;
//           padding-bottom: 24px;
//         }
//       }
//     }
//     .page {
//       text-align: center;
//       margin-top: 20px;
//     }
//   }
// }

.wrop {
  margin: 64px auto;
  .title {
    text-align: center;
    font-weight: 500;
    h3 {
      font-size: 40px;
      color: #133b80;
      line-height: 56px;
      margin-bottom: 12px;
    }
    p {
      font-size: 36px;
    }
  }

  .wrop-content {
    margin-top: 58px;
  }
  .wrop-left {
    min-height: 620px;
    background-color: #fafafa;
    h3 {
      font-size: 28px;
      color: #133b80;
      padding: 24px 0 24px 36px;
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
      .icon {
        display: block;
        width: 24px;
        height: 24px;
      }
    }
    ul {
      li {
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover {
          background-color: #eeeeef;
        }
        span {
          .line-text;
          display: block;
          margin: 0 36px;
          padding: 22px 0;
          font-size: 14px;
          color: #133b80;
          border-bottom: 1px solid #ededed;
        }
      }
    }
  }

  .wrop-right {
    min-height: 620px;
    margin-left: 32px;
    background: #fafafa;
    position: relative;
    .el-row {
      padding: 20px 20px;
      .el-col {
        padding: 12px;
        margin-bottom: 26px;
        cursor: pointer;
        &:hover {
          .title {
            color: #133b80;
          }
        }
        .bgc {
          background: #f6f6f6;
          padding-top: 12px;
        }
        .img {
          width: 100%;
          height: 174px;
        }
        .title {
          .line-text;
          text-align: center;
          line-height: 1.2;
          padding-bottom: 24px;
          margin-top: 20px;
          font-weight: 600;
        }
      }
    }
    .page {
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      bottom: 20px;
    }
  }
}
</style>