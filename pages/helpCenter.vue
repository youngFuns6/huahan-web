<template>
  <div>
    <div class="bar" data-aos="fade-in">常见问题</div>
    <div class="pc-container">
      <div class="help-content">
        <div class="help-left" data-aos="fade-up">
          <!-- <div class="search" @search='search' @clear='clear' show-action>
        <van-search @keydown.enter="search(searchValue)" v-model="searchValue" placeholder="请输入搜索关键词" />
      </div> -->
          <ToggleNav
            @update:activeNav="toggle"
          ></ToggleNav>
        </div>
        <div class="help-right">
          <!-- <router-view :answer='answer'></router-view> -->
          <nuxt-child :answer="answer"></nuxt-child>
          <van-pagination
            v-model="page"
            :page-count="Math.ceil(total / 8)"
            :show-page-size="3"
            force-ellipses
            @change="changePage"
          />
        </div>
      </div>
    </div>
    <div class="mobile-container">
      <section
        class="answer"
        data-aos="zoom-in-up"
        :data-aos-duration="300 * index"
        v-for="(item, index) in mobileData"
        :key="item.id"
      >
        <Explain @showMore="showMore(item.type)">
          <template #title>{{ item.name }}</template>
        </Explain>
        <div class="wrop">
          <ul>
            <li
              @click="getDet(item1.id)"
              v-for="item1 in item.answer"
              :key="item1.id"
            >
              {{ item1.title }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ToggleNav from "../components/nav/ToggleNav.vue";
// import { getNotice } from "~net/contact";
// import QuestionList from "/help/QuestionList";
import Explain from "../components/title/Explain";
import ToText from "../assets/js/toText";
import Config from "../assets/js/settings";
import axios from "axios";
export default {
  name: "helpCenter",
  components: { ToggleNav, Explain },
  data() {
    return {
      // searchValue: "",
      // queryInfo: {
      //   // keywords: '',
      //   type: 8,
      //   page: 1,
      //   pageSize: 5,
      // },
      // answer: [],
      // total: null,
      page: parseInt(this.$route.query.page),
      mobileData: [
        { name: "产品解答", type: 4, answer: [] },
        { name: "新手引导", type: 5, answer: [] },
        { name: "购买指南", type: 6, answer: [] },
        { name: "云手机问题", type: 7, answer: [] },
        { name: "云服务问题", type: 8, answer: [] },
      ],
      // activeAns: 0,
    };
  },

  // watch: {
  //   $route: {
  //     handler: function (val, oldVal) {
  //       // console.log(val);
  //       this.queryInfo.type = parseInt(val.query.type);
  //       // this.queryInfo.keywords = parseInt(val.params.keywords);
  //       this.queryInfo.page = parseInt(val.query.page);
  //       switch (this.queryInfo.type) {
  //         case 8:
  //           this.activeAns = 0;
  //           break;
  //         case 9:
  //           this.activeAns = 1;
  //           break;
  //         case 10:
  //           this.activeAns = 2;
  //           break;
  //         case 7:
  //           this.activeAns = 3;
  //           break;
  //         case 11:
  //           this.activeAns = 4;
  //           break;
  //       }
  //     },
  //     // 深度观察监听
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  created() {
    let getMobileInfo = async (index, type) => {
      let answer = await axios.get(`${Config.BASE_URL}/qunkong/condition`, {
        params: { type, page: 1, pageSize: 4 },
      });
      this.mobileData[index].answer = answer.data.data;
    };
    this.mobileData.forEach((item, index) => {
      getMobileInfo(index, item.type);
      // console.log(store);
    });
  },
  async asyncData({
    $axios,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const answerData = await $axios.get(
      `${Config.BASE_URL}/qunkong/condition`,
      { params: query }
    );
    let answer = answerData.data.data;
    let total = answerData.data.total;
    // console.log(total)
    answer.forEach((item) => {
      if (item.created) {
        item.created = item.created.slice(0, 10);
      }
      if (item.content) {
        item.content = ToText(item.content);
      }
    });
    return {
      answer,
      total,
      // mobileData,
    };
  },
  watchQuery: ["page", "type"],
  methods: {
    toggle(i, type) {
      // window.sessionStorage.setItem('activeNav', i)
      // this.queryInfo.type = type;
      // console.log(this.queryInfo)
      // this.getNoticeRef(this.queryInfo);
      this.$router.push({
        path: "/helpCenter/questionList",
        query: { type, page: 1, pageSize: 8 },
      });
    },

    changePage() {
      this.getNoticeRef(this.queryInfo);
      this.$router.push({
        path: "/helpCenter/questionList",
        query: { type: this.$route.query.type, page: this.page, pageSize: 8 },
      });
    },

    // search(value){
    //   this.queryInfo.keywords = keywords
    //   this.$router.push({
    //     path: `/help/${this.queryInfo.type}/${this.queryInfo.pageSize}/${this.queryInfo.page}`,
    //     query: {
    //       keywords: value
    //     }
    //   });
    // }
    showMore(type) {
      this.$router.push({
        path: "/moreList",
        query: {
          type,
          page: 1,
          pageSize: 8,
        },
      });
    },

    // async getAnswer1(query) {
    //   // console.log('999')
    //   if (query.type == 8) {
    //     const res = await this.$request({ url: "/qunkong/notice", params: query });
    //     this.mobileData[0].answer = res.data.data.list;
    //     this.mobileData[0].answer.forEach((item) => {
    //       if (item.content) {
    //         item.content = $(item.content).text();
    //         // console.log(item.content)
    //       }
    //     });
    //   }
    // },
    // async getAnswer2(query) {
    //   if (query.type == 9) {
    //     const res = await this.$request({ url: "/qunkong/notice", params: query });
    //     this.mobileData[1].answer = res.data.data.list;
    //     this.mobileData[1].answer.forEach((item) => {
    //       if (item.content) {
    //         item.content = $(item.content).text();
    //       }
    //     });
    //   }
    // },
    // async getAnswer3(query) {
    //   if (query.type == 10) {
    //     const res = await this.$request({ url: "/qunkong/notice", params: query });
    //     this.mobileData[2].answer = res.data.data.list;
    //     this.mobileData[2].answer.forEach((item) => {
    //       if (item.content) {
    //         item.content = $(item.content).text();
    //       }
    //     });
    //   }
    // },
    // async getAnswer4(query) {
    //   if (query.type == 7) {
    //     const res = await this.$request({ url: "/qunkong/notice", params: query });
    //     this.mobileData[3].answer = res.data.data.list;
    //     this.mobileData[3].answer.forEach((item) => {
    //       if (item.content) {
    //         item.content = $(item.content).text();
    //       }
    //     });
    //   }
    // },
    // async getAnswer5(query) {
    //   if (query.type == 11) {
    //     const res = await this.$request({ url: "/qunkong/notice", params: query });
    //     this.mobileData[4].answer = res.data.data.list;
    //     this.mobileData[4].answer.forEach((item) => {
    //       if (item.content) {
    //         item.content = $(item.content).text();
    //       }
    //     });
    //   }
    // },

    getDet(id) {
      // console.log(this.emitter);
      // this.emitter.emit('getContent', content)
      // window.sessionStorage.setItem("content", JSON.stringify(content));
      this.$router.push({ path: "/details", query: { id } });
    },
  },
  computed: {},
  setup() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 60px;
  background-color: #029ffc;
  color: #fff;
  font-size: 36px;
  font-weight: 500;
}
.help-content {
  display: flex;
  justify-content: left;
  padding: 64px 318px 100px 318px;
  .help-left {
    width: 280px;
  }
  .help-right {
    width: 80%;
    margin-left: 88px;
    //     .van-pagination {
    //     /deep/ .van-pagination__item {
    //        background: none !important;
    //     }
    // }
  }
}

// 手机端适配

.mobile-container {
  display: none;
}

.mobile-container {
  padding: 100px 100px;
  .answer {
    margin: 100px 0;
  }
  .wrop {
    // height: 624px;
    margin: 50px 0;
    box-shadow: 1px 1px 10px 0px rgba(155, 176, 191, 0.5);
    border-radius: 16px;
    border: 1px solid #e0e0e0;
    ul {
      li {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 58px;
        padding: 60px;
        color: #333;
      }
    }
  }
}

@media (max-width: 992px) {
  .bar {
    height: 400px;
    font-size: 72px;
    margin-top: 100px;
  }
  .pc-container {
    display: none;
  }
  .mobile-container {
    display: block;
    color: #fff;
  }
  .van-pagination {
    font-size: 68px;
    /deep/ li {
      margin: 0 20px;
    }
    /deep/ .van-pagination__item {
      height: auto;
    }
  }
}
</style>