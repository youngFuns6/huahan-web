<template>
  <ul>
    <li v-for="(item, index) in answer" :key="index" data-aos="zoom-in-up"
        :data-aos-duration='300 * index' @click="getDet(item.content)">
      <p cl class="title">{{ item.title }}</p>
      <p class="content">{{ item.content }}</p>
      <span>
        <i>{{ item.created }}</i>
        <i>游点电</i>
      </span>
    </li>
  </ul>
</template>

<script>
// import * as $ from "jquery";
export default {
  name: "questionList",
  props: {
    answer: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      // queryInfo: {
      //   page: 1,
      //   pageSize: 5,
      //   type: 4
      // },
      // answer: []
    };
  },
  // created(){
  //   this.getNoticeRef()
  // },
  methods: {
    getDet(content){
      // console.log(this.emitter)
      // this.emitter.emit('getContent', content)
      window.sessionStorage.setItem('content', JSON.stringify(content))
      this.$router.push({path: '/details'})
    },
    // async getNoticeRef(query){
    //   const res = await this.$request({url: '/notice', params: query})
    //   this.answer = res.data.data.list
    // }
  },
  computed: {},
};
</script>

<style lang='less' scoped>
ul {
  margin-bottom: 40px;
  // color: #fff;
}
li {
  border-bottom: 1px solid #ededed;
  cursor: pointer;
  margin: 30px 0;
  span {
    display: inline-block;
    margin: 8px 0 20px 0;
    color: #a7a7a7;
    font-size: 18px;
    i {
      margin-right: 20px;
    }
  }
}
.title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.content {
  font-size: 20px;
  line-height: 1.5;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

@media (max-width: 992px) {
  ul {
    margin-bottom: 80px;
    li {
      span {
        margin: 16px 0 40px 0;
        font-size: 36px;
        i {
          margin-right: 40px;
        }
      }
    }
    .title {
      font-size: 48px;
      margin-bottom: 40px;
    }
    .content {
      font-size: 40px;
    }
  }
}
</style>