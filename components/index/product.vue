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
        <ul>
          <li
            :class="active === index ? 'active' : ''"
            v-for="(item, index) in cateList"
            :key="item.id"
            @click="toggleCate(index, item.type)"
          >
            <span>{{ item.cateName }}</span>
          </li>
          <slot name="moreBtn"></slot>
        </ul>
      </div>
      <div
        class="wrop-right"
        :class="$route.path === '/' ? 'active-i' : 'active-p'"
      >
        <ul>
          <li
            @click="
              $router.push({
                path: `/news/content/${item.id}.html`,
                query: { type: 'goods' },
              })
            "
            v-for="(item, index) in goods"
            :key="index"
          >
            <div class="img">
              <img :src="item.banner" alt="" />
            </div>
            <div class="title">{{ item.title }}</div>
          </li>
        </ul>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="changePage"
            :current-page="
              $route.query.page === undefined ? 1 : parseInt($route.query.page)
            "
          >
          </el-pagination>
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
            path: `/news/content/${item.id}.html`,
            query: { type: 'goods' },
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
        page: 2,
        pageSize: this.$route.path === "/" ? 6 : 12,
      },
      total: this.totalO,
      cateListM: [],
      loading: false,
      finished: true,
      error: false,
    };
  },

  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(newValue) {
        let flag = true;
        if (flag) {
          this.cateList.forEach((item, i) => {
            if (newValue.query.type == item.type) {
              this.active = i;
              this.value = item.type;
            } else {
              flag = false;
            }
          });
        }
      },
    },
  },

  created() {
    if (this.$route.path === "/") {
      this.goods = this.goodsList;
    }
    this.cateListM = this.cate.map((item) => {
      return { text: item.cateName, value: item.type };
    });
    if(this.$route.path === '/prodShow'){
      this.total > this.queryInfo.pageSize
      ? (this.finished = false)
      : (this.finished = true);
    }
  },

  methods: {
    async toggleCate(index, type) {
      this.queryInfo.type = type;
      this.queryInfo.page = 1;
      this.active = index;
      if (index == 0) {
        this.$router.push({
          path: this.$route.path,
          query: { page: this.queryInfo.page },
        });
      } else {
        this.$router.push({
          path: this.$route.path,
          query: this.queryInfo,
        });
      }
      this.getGoods();
    },

    changePage(page) {
      // console.log(JSON.stringify(this.queryInfo.type) == "null")
      this.queryInfo.page = page;
      if (JSON.stringify(this.queryInfo.type) == "null") {
        this.$router.push({
          path: this.$route.path,
          query: { page },
        });
      } else {
        this.$router.push({
          path: this.$route.path,
          query: this.queryInfo,
        });
      }
      this.getGoods();
    },

    getGoods() {
      return new Promise(async (resolve) => {
        let res = await axios.get(Config.BASE_URL + `/goods`, {
          params: this.queryInfo,
        });
        this.goods = res.data.data;
        this.total = res.data.total;
        resolve(res.data.total);
      });
    },

    async change(value) {
      this.value = value;
      this.queryInfo.type = value;
      this.queryInfo.page = 1;
      // this.loading = true;
      // this.finished = false;
      // this.mobileGoods = [];
      // this.onLoad();
      // this.goods = []
      if (value) {
        // console.log('0000')
        this.$router.push({
          path: this.$route.path,
          query: this.queryInfo,
        });
      } else {
        this.$router.push({
          path: this.$route.path,
        });
      }
      this.getGoods().then((total) => {
        // console.log(total);
        this.queryInfo.page = 2
        total > this.queryInfo.pageSize
          ? (this.finished = false)
          : (this.finished = true);
      });
    },

    // 上滑加载事件
    onLoad() {
      if (this.$route.path === "/prodShow") {
        axios
          .get(`${Config.BASE_URL}/goods`, {
            params: this.queryInfo,
          })
          .then((res) => {
            this.total = res.data.total;
            this.goods.push(...res.data.data);
            this.queryInfo.page++;
            this.loading = false;
            if (this.goods.length >= res.data.total) {
              this.finished = true;
            }
          })
          .catch(() => (this.error = true));
      }
    },
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
          .line-text;
          display: block;
          margin: 0 36px;
          padding: 22px 0;
          font-size: 14px;
          color: #133b80;
          border-bottom: 1px solid #ededed;
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
        background: #f6f6f6;
        cursor: pointer;
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
      text-align: center;
      margin: 20px 0;
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