<template>
  <div>
    <ul class="more-wrop">
      <li
        v-for="(item, index) in information"
        :key="item.title"
        data-aos="zoom-in-up"
        :data-aos-duration="300 * index"
        @click="getDet(item.id)"
      >
        <p class="info-title">{{ item.title }}</p>
        <p class="info-content" v-html="item.content"></p>
      </li>
    </ul>
    <van-pagination
      v-model="queryInfo.page"
      :page-count="Math.ceil(total / 8)"
      :show-page-size="5"
      force-ellipses
      @change="changePage"
    />
  </div>
</template>

<script>
// import { getNotice } from "~net/contact";
// import * as $ from 'jquery'
import toText from "../assets/js/toText";
import Config from "../assets/js/settings";
export default {
  name: "MoreList",
  components: {},
  data() {
    return {
      // queryInfo: {
      //   type: null,
      //   page: 1,
      //   pageSize: 8
      // },
      // information: [],
      // total: null
      page: parseInt(this.$route.query.page),
    };
  },
  // created(){
  //   // console.log(this.$route.query)
  //   this.queryInfo.type = this.$route.query.type
  //   this.getNoticeRef(this.queryInfo)
  // },
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
    // console.log(query);
    const moreData = await $axios.get(`${Config.BASE_URL}/qunkong/condition`, {
      params: query,
    });
    let information = moreData.data.data;
    let total = moreData.data.total;
    information.forEach((item) => {
      if (item.created) {
        item.created = item.created.slice(0, 10);
      }
      if (item.content) {
        item.content = toText(item.content);
      }
    });
    return {
      information,
      total,
    };
  },
  watchQuery: ["page", "type"],
  methods: {
    // 过滤内容
    // filterContent(content){
    //   return $(content).text()
    // },

    //  async getNoticeRef(query) {
    //   const res = await this.$request({url: '/notice', params: query})
    //   this.information = res.data.data.list;
    //   this.total = res.data.data.total;
    //   this.information.forEach((item) => {
    //     if (item.created) {
    //       item.created = item.created.slice(0, 10);
    //     }
    //     // if (item.content) {
    //     //   item.content = $(item.content).text();
    //     // }
    //   });
    // },
    getDet(id) {
      // console.log(this.emitter)
      // this.emitter.emit('getContent', content)
      // window.sessionStorage.setItem('content', JSON.stringify(content))
      this.$router.push({ path: "/details", query: { id } });
    },
    changePage() {
      this.$router.push({
        path: "/moreList",
        query: {
          page: this.page,
          type: this.$route.query.type,
          pageSize: 8,
        },
      });
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
ul {
  padding: 30px 100px;
  // color: #fff;
  li {
    cursor: pointer;
    padding: 20px 0;
    margin: 30px 0;
    border-bottom: 1px solid #a7a7a7;
    .info-title {
      margin: 20px 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 26px;
      font-weight: 500;
      // color: #333;
    }
    .info-content {
      font-size: 24px;
      // color: #333;
      line-height: 1.5;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
// .van-pagination {
//     /deep/ .van-pagination__item {
//        background: none !important;
//     }
// }

@media (max-width: 992px) {
  .more-wrop {
    padding: 60px 200px;
    min-height: 80vh;
    li {
      padding: 40px 0;
      max-width: 30px 0;
      .info-title {
        margin: 40px 0;
        font-size: 52px;
      }
      .info-content {
        font-size: 48px;
      }
    }
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