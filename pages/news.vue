<template>
  <div class="wrop" v-if="!isMobile">
    <div class="title">
      <h3>NEWS INFORMATION</h3>
      <p>新闻资讯</p>
    </div>
    <div class="content">
      <div class="toggle">
        <span
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in toggle"
          :key="item.type"
        >
          <!-- {{ item.name }} -->
          <router-link :to="`/news/${item.type}/1`">{{
            item.name
          }}</router-link>
        </span>
      </div>
      <ul>
        <li
          v-for="(item, index) in condition"
          :key="item.id"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          :data-aos-duration="300 * index"
        >
          <router-link
            :to="`/news/condition/${item.id}.html`"
          >
            <div class="left">
              <img :src="item.banner" :alt="item.imgDesc" />
            </div>
            <div class="right">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content | filterContent }}</p>
              <span>{{ item.created }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="page">
      <div class="main">
        <div>共{{ total }}条</div>
        <router-link
          :to="`/news/${$route.params.type}/1`"
          class="first"
          v-if="$route.params.page != 1"
        >
          首页
        </router-link>
        <router-link
          :to="`/news/${$route.params.type}/${$route.params.page - 1}`"
          class="prev"
          v-if="+$route.params.page != 1"
          >上一页</router-link
        >
        <ul>
          <li
            v-for="item in Math.ceil(total / 5) <= 8
              ? Math.ceil(total / 5)
              : 8"
            :key="item"
            :class="$route.params.page == item ? 'active-page' : ''"
          >
            <router-link :to="`/news/${$route.params.type}/${item}`">{{ item }}</router-link>
          </li>
        </ul>
        <router-link
          :to="`/news/${$route.params.type}/${Math.ceil(total / 5)}`"
          v-if="Math.ceil(total / 12) != $route.params.page"
          class="next"
          >尾页</router-link
        >
        <router-link
          :to="`/news/${$route.params.type}/${+$route.params.page + 1}`"
          class="last"
          v-if="Math.ceil(total / 5) != $route.params.page"
          >下一页</router-link
        >
        <input v-model="page" />
        <router-link :to="`/news/${$route.params.type}/${page}`">跳转</router-link>
      </div>
    </div>
    <FloatWindows />
  </div>

  <div class="mobile" v-else>
    <div class="content">
      <div class="toggle">
        <span
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in toggle"
          :key="item.type"
          @click="toToggle(item.type)"
          >
          <router-link :to="`/news/${item.type}/1`">{{
            item.name
          }}</router-link>
          </span
        >
      </div>
      <van-list
        class="n-ul"
        v-model="loading"
        :error.sync="error"
        :finished="finished"
        finished-text="没有更多了"
        error-text="请求失败，点击重新加载"
        @load="onLoad()"
        :offset="0"
      >
        <van-cell
          class="n-li"
          v-for="item in mobileCondition"
          :key="item.id"
          data-aos="fade-up"
          @click="
            $router.push({
              path: `/news/condition/${item.id}.html`,
            })
          "
        >
          <div class="left">
            <img :src="item.banner" :alt="item.imgDesc" />
          </div>
          <div class="right">
            <h3>{{ item.title }}</h3>
            <span>{{ item.created }}</span>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
import Config from "../assets/js/settings";
import toText from "../assets/js/toText";
import FloatWindows from "../components/index/floatWindows.vue";

export default {
  name: "News",
  components: {
    FloatWindows
  },
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      toggle: [
        { type: 1, name: "企业动态" },
        { type: 2, name: "新闻资讯" },
      ],
      active: 0,
      page: this.$route.params.page,
      queryInfo: {
        type: 1,
        page: 1,
        pageSize: 12,
      },
      error: false,
      loading: false,
      error: false,
      finished: false,
      mobileCondition: [],
    };
  },
  filters: {
    filterContent(val) {
      return toText(val);
    },
  },
  head() {
    return {
      title: "资讯-华翰新闻资讯-公司资讯-行业资讯-泵阀",
    };
  },

  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios,
  }) {
    if(store.state.isMobile) return
    console.log('7878')
    const news = await $axios.get(`${Config.BASE_URL}/condition`, {
      params: {
        type: params.type,
        page: params.page,
        pageSize: store.state.isMobile ? 12 : 5,
      },
    });
    let condition = news.data.data.res;
    let total = news.data.total;
    return {
      condition,
      total,
    };
  },
  watchQuery: ["page", "type"],

  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.toggle.forEach((item, index) => {
          if (item.type == newVal.params.type) {
            this.active = index;
          }
        });
      },
    },
  },

  methods: {
    toToggle(type) {
      this.queryInfo.page = 1
      this.queryInfo.type = type
      this.mobileCondition = [];
      this.loading = true;
      this.finished = false;
      this.onLoad();
    },

    onLoad() {
      axios
        .get(`${Config.BASE_URL}/condition`, {
          params: {type: this.$route.params.type, page: this.queryInfo.page, pageSize: this.queryInfo.pageSize},
        })
        .then((ret) => {
          this.mobileCondition.push(...ret.data.data.res);
          this.mobileCondition.forEach((item) => {
            if (item.created !== undefined) {
              item.created =
                item.created
                  .slice(0, 10)
                  .replace("-", "年")
                  .replace("-", "月") + "日";
            }
          });
          this.queryInfo.page++;
          this.loading = false;
          if (this.mobileCondition.length >= ret.data.data.total) {
            this.finished = true;
          }
        })
        .catch((err) => (this.error = true));
    },
  },
};
</script>
    
<style lang='less' scoped>
a {
  color: #333;
}
.active {
  border-bottom: 4px solid #133b80;
  color: #133b80;
}
.wrop {
  margin: 64px 20vw;
  .title {
    text-align: center;
    font-weight: 500;
    margin-bottom: 100px;
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
  .content {
    .toggle {
      // line-height: 2;
      span {
        padding: 5px 0;
        cursor: pointer;
      }
      span:first-child {
        margin-right: 56px;
      }
    }
  }
}

ul {
  li {
    margin: 16px 0;
    cursor: pointer;
    a {
      display: flex;
      align-items: center;
      h3,
      p {
        color: #333;
      }
      &:hover {
        .right h3 {
          color: #133b80;
        }
      }
    }
  }
  .left {
    width: 195px;
    height: 130px;
    margin-right: 32px;
  }
  .right {
    width: 879px;
    h3 {
      .line-text;
      font-weight: 600;
    }
    p {
      .line2-text;
      margin: 16px 0;
      line-height: 1.5;
    }
    span {
      font-size: 14px;
      color: #a7a7a7;
    }
  }
}
.page {
  .main {
    height: 50px;
    display: flex;
    justify-content: center;
    // margin-left: 60px;
    align-items: center;
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

// 手机端
.mobile {
  padding: 1.25rem /* 20/16 */ 1rem /* 16/16 */;
  padding-bottom: 3.125rem /* 50/16 */;
  .content {
    .toggle {
      span {
        font-size: 0.875rem /* 14/16 */;
        margin-right: 2rem /* 32/16 */;
        padding: 0.3125rem /* 5/16 */ 0 /* 5/16 */;
      }
    }
    .n-ul {
      margin-top: 0.875rem /* 14/16 */;
      .n-li {
        padding: 0;
      }
      /deep/ .n-li .van-cell__value {
        display: flex;
        justify-content: left;
        align-items: center;
        flex-wrap: nowrap;
        .left {
          width: 30% /* 99.25/16 */;
          height: 4.0625rem /* 65/16 */;
        }
        .right {
          width: 70%;
          margin-left: 1rem /* 30/16 */;
          h3 {
            .line-text;
            width: 100% !important;
            font-size: 1rem /* 16/16 */;
            font-weight: normal;
          }
          span {
            color: #a7a7a7;
          }
        }
      }
    }
  }
}
</style>