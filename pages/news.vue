<template>
<div>
    <div class="banner">
    <img src="../assets/images/5g.png" alt="" />
  </div>
  <div class="container">
    <!-- 公告 -->
    <section class="notice" data-aos="fade-up">
      <div class="left" @click="getDet(noticeIndex.id)">
        <div class="img">
          <img :src="noticeIndex.banner" alt="" />
        </div>
        <p class="title">{{ noticeIndex.title }}</p>
        <p class="content" v-html="noticeIndex.content"></p>
      </div>
      <div class="right">
        <Explain @showMore="showMoreNotice">
          <template #title>官方公告</template>
        </Explain>
        <div>
          <p
            class="right-title"
            v-for="item in notice"
            :key="item.id"
            @click="getDet(item.id)"
          >
            <span>{{ item.title }}</span>
            <span>{{ item.created }}</span>
          </p>
        </div>
      </div>
    </section>
    <!-- 资讯 -->
    <section class="infomation">
      <Explain @showMore="showMoreInfo">
        <template #title>推荐资讯</template>
      </Explain>
      <ul>
        <li
          v-for="(item, index) in information"
          :key="item.title"
          data-aos="zoom-in-up"
          :data-aos-duration="500 * index"
          @click="getDet(item.id)"
        >
          <div class="info-img">
            <img :src="item.banner" alt="" />
          </div>
          <div class="info-text">
            <p class="info-title">{{ item.title }}</p>
            <p class="info-content" v-html="item.content"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- 教程 -->
    <section class="course">
      <Explain @showMore="showMoreCourse">
        <template #title>云手机教程</template>
      </Explain>
      <ul>
        <li
          v-for="(item, index) in course"
          :key="item.id"
          data-aos="zoom-in-up"
          :data-aos-duration="500 * index"
          @click="getDet(item.content)"
        >
          <div class="course-img">
            <img :src="item.banner" alt="" />
          </div>
          <div class="course-text">
            <p class="course-title">{{ item.title }}</p>
            <p class="course-content" v-html="item.content"></p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</div>
</template>

<script>
import img5G from "../assets/images/5g.png";
import Explain from "../components/title/Explain.vue";
// import { getNotice } from "~net/contact";
// import * as $ from "jquery";
import toText from "../assets/js/toText";
import Config from "../assets/js/settings";
export default {
  name: "news",
  components: {
    Explain,
  },
  data() {
    return {
      imgs: [img5G, img5G, img5G],
      // queryNotice: {
      //   type: 1,
      //   pageSize: 10,
      // },
      // noticeIndex: {},
      // notice: [],

      // queryInfoInfo: {
      //   type: 2,
      //   pageSize: 4,
      // },
      // information: [],

      // queryInfoCourse: {
      //   type: 3,
      //   pageSize: 6,
      // },
      // course: [],
    };
  },
  // created() {
  //   // console.log(this.$request())
  //   this.getNoticeRef();
  //   this.getInfomationRef();
  //   this.getCourseRef();
  // },

  // fetch({$axios, isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   $axios.get('/contactConfig')
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
    // 获取公告
    const noticeData = await $axios.get(
      `${Config.BASE_URL}/qunkong/condition`,
      {
        params: { type: 1, page: 1, pageSize: 10 },
      }
    );
    let notice = noticeData.data.data;
    // console.log(noticeData)
    notice.forEach((item) => {
      if (item.created) {
        item.created = item.created.slice(0, 10);
      }
      if (item.content) {
        item.content = toText(item.content);
      }
    });
    let noticeIndex = {}
    if(notice.length){
      noticeIndex = notice[0];
      if(noticeIndex.content){
      noticeIndex.content = toText(noticeIndex.content);
    }
    }
    // console.log(noticeIndex)
    // console.log(noticeIndex)

    // 获取资讯
    const infoData = await $axios.get(`${Config.BASE_URL}/qunkong/condition`, {
      params: { type: 2, page: 1, pageSize: 4 },
    });
    let information = infoData.data.data;

    // 获取教程
    const courseData = await $axios.get(
      `${Config.BASE_URL}/qunkong/condition`,
      {
        params: { type: 3, page: 1, pageSize: 6 },
      }
    );
    let course = courseData.data.data;
    return {
      notice,
      noticeIndex,
      information,
      course
    };
  },

  methods: {
    // 过滤内容
    // filterContent(content){
    //   return $(content).text()
    // },

    // async getNoticeRef() {
    //   const res = await this.$request({url:'/qunkong/notice?type=1&pageSize=10'});
    //   this.notice = res.data.data.list;
    //   this.notice.forEach((item) => {
    //     if (item.created) {
    //       item.created = item.created.slice(0, 10);
    //     }

    //     // item.content = $(item.content).text();
    //   });
    //   this.noticeIndex = res.data.data.list[0];
    // },

    // async getInfomationRef() {
    //   const res = await this.$request({url:'/qunkong/notice?type=2&pageSize=4'});
    //   this.information = res.data.data.list;
    //   // this.information.forEach((item) => {
    //   //   item.content = $(item.content).text();
    //   //   // console.log(document(item.content))
    //   // });
    //   // console.log(this.information);
    // },

    // async getCourseRef() {
    //   const res = await this.$request({url:'/qunkong/notice?type=3&pageSize=6'})
    //   this.course = res.data.data.list;
    //   // this.course.forEach((item) => {
    //   //   item.content = $(item.content).text();
    //   //   // console.log(document(item.content))
    //   // });
    //   // console.log(this.information);
    // },
    getDet(id) {
      // console.log(this.emitter);
      // this.emitter.emit('getContent', content)
      // window.sessionStorage.setItem("content", JSON.stringify(content));
      this.$router.push({
        path: "/details",
        query: {
          id,
        },
      });
    },

    showMoreNotice() {
      this.$router.push({
        path: "/moreList",
        query: {
          type: 1,
          page: 1,
          pageSize: 8
        },
      });
    },
    showMoreInfo() {
      this.$router.push({
        path: "/moreList",
        query: {
          type: 2,
          page: 1,
          pageSize: 8
        },
      });
    },
    showMoreCourse() {
      this.$router.push({
        path: "/moreList",
        query: {
          type: 3,
          page: 1,
          pageSize: 8
        },
      });
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.banner {
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
}
.container {
  padding: 75px 210px;
  // color: #fff;
  .notice {
    display: flex;
    justify-content: space-between;
    .left {
      width: 816px;
      cursor: pointer;
      .img {
        width: 816px;
        height: 459px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        font-size: 26px;
        font-weight: 500;
        // color: #333;
        margin: 32px 0;
      }
      .content {
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
    .right {
      width: 600px;
    }
  }
}
.right-title {
  &:nth-child(1) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  cursor: pointer;
  span:first-child {
    width: 420px;
    font-size: 24px;
    // color: #333;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span:last-child {
    color: #a7a7a7;
    font-size: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 30px;
  }
}

.infomation {
  margin: 76px 0;
  ul {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    li {
      width: 350px;
      cursor: pointer;
      .info-img {
        width: 350px;
        height: 197px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info-text {
        width: 350px;
      }
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
}

.course {
  margin-bottom: 164px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 57px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 44px;
      .course-img {
        width: 360px;
        height: 270px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .course-text {
        margin-left: 24px;
        width: 337px;
        .course-title {
          margin-bottom: 24px;
          // color: #333;
          font-size: 26px;
          font-weight: 500;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .course-content {
          font-size: 24px;
          // color: #333;
          line-height: 1.5;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}

// 手机适配
@media (max-width: 992px) {
  .container {
    padding: 75px 100px;
    .notice {
      .left {
        display: none;
      }
      .right {
        width: 100%;
        .right-title span {
          font-size: 48px;
          &:nth-child(1) {
            width: 840px;
          }
        }
        .right-title:nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 50px 0;
          // display: block;
        }
      }
    }
    .infomation {
      margin: 152px 0;
      ul {
        flex-direction: column;
        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: left;
          margin: 30px 0;
          .info-img {
            width: 600px;
            height: 394px;
          }
          .info-title {
            font-size: 52px;
            width: 100%;
            
          }
          .info-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 60%;
            margin-left: 50px;
            // padding: 20px 0;
            border-bottom: 1px solid #D8D8D8;
            overflow: hidden;
            .info-content {
              // height: 65px;
              width: 100%;
              font-size: 48px;
              // text-overflow: ellipsis;
              // white-space: nowrap;
              // overflow: hidden;
            }
          }
        }
      }
    }
    .course {
      ul {
        li {
          width: 100%;
          justify-content: left;
          margin: 50px 0;
          .course-img {
            width: 720px;
            height: 540px;
          }
          .course-text {
            width: 60%;
            margin-left: 48px;
            .course-title {
              font-size: 52px;
            }
            .course-content {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>