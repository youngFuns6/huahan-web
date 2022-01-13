<template>
  <div class="wrop" v-if="!isMobile">
    <div class="title">
      <h3>NEWS INFORMATION</h3>
      <p>新闻资讯</p>
    </div>
    <div class="content">
      <div class="toggle">
        <span
          @click="toToggle(index, item.type)"
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in toggle"
          :key="item.type"
          >{{ item.name }}</span
        >
      </div>
      <ul>
        <li
          @click="
            $router.push({
              path: '/detail',
              query: { type: 'condition', id: item.id },
            })
          "
          v-for="(item, index) in condition"
          :key="item.id"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          :data-aos-duration="300 * index"
        >
          <div class="left">
            <img :src="item.banner" alt="" />
          </div>
          <div class="right">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content | filterContent }}</p>
            <span>{{ item.created }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>

  <div class="mobile" v-else>
    <div class="content">
      <div class="toggle">
        <span
          @click="toToggle(index, item.type)"
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in toggle"
          :key="item.type"
          >{{ item.name }}</span
        >
      </div>
      <van-list
        class="n-ul"
        v-model="loading"
        :error.sync="error"
        :finished="finished"
        finished-text="没有更多了"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
        :offset="0"
      >
        <van-cell
          class="n-li"
          v-for="item in mobileCondition"
          :key="item.id"
          data-aos="fade-up"
          @click="
            $router.push({
              path: '/detail',
              query: { type: 'condition', id: item.id },
            })
          "
        >
          <div class="left">
            <img :src="item.banner" alt="" />
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

export default {
  name: 'News',
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      toggle: [
        { type: 1, name: "企业动态" },
        { type: 2, name: "新闻资讯" },
      ],
      active: 0,
      queryInfo: {
        type: 1,
        page: 1,
        pageSize: this.$store.state.isMobile ? 12 : 5,
      },
      total: null,
      condition: [],
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

  created() {
    if(!this.isMobile){
      this.getCondition();
    }
  },

  methods: {
    toToggle(i, type) {
      this.active = i;
      this.queryInfo.type = type;
      this.queryInfo.page = 1
      if(!this.isMobile){
        this.getCondition();
      }else {
        this.mobileCondition = []
        this.loading = true;
        this.finished = false
        this.onLoad()
      }
    },
    async getCondition() {
      const res = await axios.get(`${Config.BASE_URL}/condition`, {
        params: this.queryInfo,
      });
      this.condition = res.data.data;
      this.total = res.data.total;
    },
    changePage(page) {
      console.log(page)
      this.queryInfo.page = page;
      this.getCondition();
    },

    onLoad() {
      axios
        .get(`${Config.BASE_URL}/condition`, {
          params: this.queryInfo,
        })
        .then((res) => {
          this.mobileCondition.push(...res.data.data);
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
          if (this.mobileCondition.length >= res.data.total) {
            this.finished = true;
          }
        }).catch(() => (this.error = true));
      

      // console.log(this.queryInfo.page);
      // console.log(this.goods.length, this.total);
      // if (this.condition.length < this.total) {
      //   this.queryInfo.page += 1;
      //   axios
      //     .get(Config.BASE_URL + `/condition`, {
      //       params: this.queryInfo,
      //     })
      //     .then((res) => {
      //       // console.log(res.data.data);
            
      //       this.total = res.data.total;
      //       this.loading = false;
      //     })
      //     .catch(() => (this.error = true));
      // } else {
      //   this.finished = true;
      // }
    },
  },
};
</script>
    
<style lang='less' scoped>
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
    display: flex;
    align-items: center;
    margin: 16px 0;
    cursor: pointer;
    &:hover {
      .right h3 {
        color: #133b80;
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
  text-align: center;
  margin-top: 20px;
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
          width: 6.203125rem /* 99.25/16 */;
          height: 4.0625rem /* 65/16 */;
        }
        .right {
          margin-left: 1rem /* 30/16 */;
          h3 {
            .line-text;
            font-size: 1rem /* 16/16 */;
            font-weight: normal;
            width: 16.25rem /* 260/16 */;
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