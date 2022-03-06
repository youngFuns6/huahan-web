<template>
  <div class="wrop" v-if="!isMobile">
    <div class="title">
      <h3>PRODUCT DISPLAY</h3>
      <p>产品展示</p>
    </div>
    <div class="wrop-content">
      <div class="wrop-left">
        <h3>
          <span class="icon">
            <img src="../../assets/img/cate_icon.png" alt="" />
          </span>
          <span>产品分类</span>
        </h3>
        <ul class="ul-wrop">
          <li v-for="(item, index) in cateList" :key="item.id">
            <span>
              <router-link
                :to="index == 0 ? '/prodShow/1' : `/prodShow/1/${item.type}`"
                :class="active === index ? 'active' : ''"
                >{{ item.cateName }}</router-link
              >
            </span>
          </li>
          <slot name="moreBtn"></slot>
        </ul>
      </div>
      <div
        class="wrop-right"
        :class="$route.path === '/' ? 'active-i' : 'active-p'"
      >
        <ul>
          <li v-for="(item, index) in goods" :key="index">
            <router-link :to="`/news/content/goods/${item.id}.html`">
              <div class="img">
                <img :src="item.banner" alt="" />
              </div>
              <div class="title">{{ item.title }}</div>
            </router-link>
          </li>
        </ul>
        <div class="page" v-if="$route.path != '/'">
          <div class="main">
            <router-link
              :to="`/prodShow/${$route.params.page - 1}/${
                $route.params.type === undefined ? '' : $route.params.type
              }`"
              class="prev"
              v-if="+$route.params.page != 1"
              >上一页</router-link
            >
            <ul>
              <li
                v-for="item in Math.ceil(total / queryInfo.pageSize) <= 8
                  ? Math.ceil(total / queryInfo.pageSize)
                  : 8"
                :key="item"
              >
                <router-link
                  :class="$route.params.page == item ? 'active-page' : ''"
                  :to="`/prodShow/${item}/${
                    $route.params.type === undefined ? '' : $route.params.type
                  }`"
                  >{{ item }}</router-link
                >
              </li>
            </ul>
            <router-link
              :to="`/prodShow/${+$route.params.page + 1}/${
                $route.params.type === undefined ? '' : $route.params.type
              }`"
              class="last"
              v-if="Math.ceil(total / queryInfo.pageSize) != $route.params.page"
              >下一页</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile" v-else>
    <van-dropdown-menu v-if="$route.path === '/' ? false : true">
      <van-dropdown-item
        @change="change(value)"
        v-model="value"
        :options="cateListM"
      />
    </van-dropdown-menu>

    <div class="title">
      <h3>PRODUCT DISPLAY</h3>
      <p>产品展示</p>
    </div>
    <van-list
      class="l-ul"
      v-model="loading"
      :finished="finished"
      :finished-text="$route.path === '/prodShow' ? '没有更多了' : ''"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
      :offset="0"
    >
      <van-cell
        class="l-li"
        @click="
          $router.push({
            path: `/news/content/goods/${item.id}.html`,
          })
        "
        v-for="(item, index) in goods"
        :key="index"
      >
        <div class="bgc">
          <div class="img">
            <img :src="item.banner" alt="" />
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </van-cell>
    </van-list>
    <slot name="btn"> </slot>
  </div>
</template>

<script>
// import banner from "../../assets/img/1.png";
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
      value: null,
      isMobile: this.$store.state.isMobile,
      active: 0,
      cate: this.cateList,
      goods: this.goodsList,
      queryInfo: {
        type: null,
        page: 1,
        pageSize: this.$route.path === "/" ? 6 : 12,
      },
      total: this.totalO,
      cateListM: [],
      loading: false,
      finished: false,
      error: false,
    };
  },

  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(newValue) {
          this.cateList.forEach((item, i) => {
            if (newValue.params.type == item.type) {
              this.active = i;
              // this.value = item.type
            } 
          });
        
      },
    },
  },

  created() {
    console.log(this.total)
    console.log(this.$route)
    if (this.$route.path === "/") {
      this.finished = true
      this.goods = this.goodsList;
    }
    this.cateListM = this.cate.map((item) => {
      return { text: item.cateName, value: item.type };
    });
    if (this.$route.path.match("/prodShow")) {
      console.log('777')
      // this.getGoods()
      // this.total > this.queryInfo.pageSize
      //   ? (this.finished = false)
      //   : (this.finished = true);
    }
    console.log(this.finished)
  },

  methods: {
    getGoods() {
      return new Promise(async (resolve) => {
        let ret = await axios.get(Config.BASE_URL + `/goods`, {
          params: this.queryInfo,
        });
        this.goods = ret.data.data.res;
        this.total = ret.data.total;
        resolve(ret.data.total);
      });
    },

    async change(value) {
      this.value = value;
      this.queryInfo.type = value;
      this.queryInfo.page = 1;
      // if (value) {
      //   // console.log('0000')
      //   this.$router.push({
      //     path: `/prodShow/${value}/1`,
      //   });
      // } else {
      //   this.$router.push({
      //     path: '/prodShow/1',
      //   });
      // }
      this.getGoods().then((total) => {
        // console.log(total);
        this.queryInfo.page = 2;
        total > this.queryInfo.pageSize
          ? (this.finished = false)
          : (this.finished = true);
      });
    },

    // 上滑加载事件
    onLoad() {
      console.log('999')
      // if (this.$route.path === "/prodShow") {
        axios
          .get(`${Config.BASE_URL}/goods`, {
            params: this.queryInfo,
          })
          .then((res) => {
            this.total = res.data.total;
            this.goods.push(...res.data.data.res);
            this.queryInfo.page++;
            this.loading = false;
            if (this.goods.length >= res.data.total) {
              this.finished = true;
            }
          })
          .catch(() => (this.error = true));
      }
    // },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active-p {
  min-height: 1182px;
}

.active-i {
  min-height: 620px;
}

.active {
  background-color: #eeeeef;
}
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
    display: flex;
    justify-content: center;
  }
  .wrop-left {
    width: 296px;
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
        &:first-child {
          font-weight: 600;
        }
        span {
          display: block;
          a {
            display: block;
            padding: 20px;
            color: #133b80;
            .line-text;

            font-size: 14px;
            border-bottom: 1px solid #ededed;
          }
        }
      }
      .more {
        width: 224px;
        height: 50px;
        margin: 35px 36px;
        background: #133b80;
        font-size: 14px;
        text-align: center;
        color: #fff;
        line-height: 50px;
        cursor: pointer;
      }
    }
  }

  .wrop-right {
    margin-left: 32px;
    background: #fafafa;
    ul {
      width: 900px;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      li {
        margin: 26px 13px;
        a {
          display: block;
          background: #f6f6f6;
          cursor: pointer;
          color: #333;
        }
        .img {
          width: 236px;
          height: 174px;
          margin: 12px 12px 14px 12px;
        }
        .title {
          .line-text;
          width: 220px;
          margin: 0 auto;
          text-align: center;
          // margin-left: 26px;
          line-height: 1.2;
          padding-bottom: 24px;
        }
      }
    }
    .page {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      .main {
        height: 50px;
        display: flex;
        justify-content: center;
        // margin-left: 60px;
        align-items: center;
        a {
          color: #a7a7a7;
        }
        input {
          outline: none;
          padding: 0;
          margin: 0;
          border: 0;
          width: 40px;
          text-align: center;
          padding: 6px 10px;
          margin-left: 10px;
          border: 1px solid #b4b4b4;
        }
        .first,
        .main .prev,
        .main .next,
        .main .last {
          padding: 5px 10px;
          border: 1px solid #b4b4b4;
          margin: 0 5px;
          background-color: #ffffff;
        }
        ul {
          width: auto !important;
          margin: 0;
          padding: 0;
          display: flex;
          li {
            width: 35px;
            height: 20px;
            list-style: none;
            border: 1px solid #b4b4b4;
            margin: 0 5px;
            margin: 0 5px;
            a {
              width: 100%;
              height: 100%;
              text-align: center;
              display: block !important;
            }
          }
        }
      }
      .active-page {
        background: linear-gradient(125deg, #060145 0%, #133b80 100%);
        color: #ffffff;
        a {
          color: #ffffff;
        }
      }
    }
  }
}

.mobile {
  padding-bottom: 6.25rem /* 100/16 */;
  .title {
    text-align: center;
    font-weight: 500;
    h3 {
      font-size: 1.25rem /* 20/16 */;
      color: #133b80;
      // line-height: 1.5;
      margin-bottom: 0.375rem /* 6/16 */;
    }
    p {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0;
    }
  }
  .l-ul {
    // padding: 0 .75rem /* 12/16 */ /* 24/16 */;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    background: #fff;
    position: relative;
    .l-li {
      .bgc {
        background-color: #fff;
        padding-top: 0.1rem /* 5/16 */;
      }
      box-sizing: border-box;
      // flex: 1;
      // width: 60%;
      width: 12rem /* 180/16 */;
      max-width: 40%;
      // width: 10.5rem !important /* 200/16 */ /* 170/16 */;
      // width: 7.875rem /* 126/16 */;
      // padding: 0.5rem /* 12/16 */;
      // width: 10.625rem /* 170/16 */;

      // height: 10.375rem /* 166/16 */;
      padding: 0.6125rem /* 13/16 */ 0.8125rem /* 13/16 */;
      margin: 0.77rem /* 5/16 */;
      background: #f6f6f6;
      cursor: pointer;
      .img {
        box-sizing: border-box;
        height: 5.625rem !important /* 170/16 */;
        // width: 100% /* 118/16 */;
        // height: 174px;
        margin: 0.75rem /* 12/16 */ 0.75rem /* 12/16 */ 0.875rem /* 14/16 */
          0.75rem /* 12/16 */;
      }
      .title {
        .line-text;
        width: 95%;
        text-align: center;
        margin: 0 auto;
        // margin-left: 26px;
        // margin: 0 0.625rem /* 10/16 */;
        line-height: 1.2;
        padding-bottom: 1.5rem /* 24/16 */;
      }
    }
  }
}

/deep/ .van-list {
  .van-list__finished-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2.5rem /* 40/16 */ /* 30/16 */ /* 10/16 */ /* 20/16 */;
  }
}

/deep/ .van-dropdown-menu {
  .van-dropdown-menu__title::after {
    border: 5px solid;
    border-color: transparent transparent #333 #333;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 50%;
    margin-top: -3px;
    transform: translateY(-50%) rotate(-45deg);
    -webkit-transform: translateY(-50%) rotate(-45deg);
  }
  .van-dropdown-menu__title--active::after {
    border: 5px solid;
    border-color: transparent transparent #ee0a24 #ee0a24;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    top: 50%;
    margin-top: 3px;
    transform: translateY(-50%) rotate(135deg);
    -webkit-transform: translateY(-50%) rotate(135deg);
  }
}
</style>