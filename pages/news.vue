<template>
  <div class="wrop">
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
        <li v-for="(item, index) in condition" :key="item.id" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" :data-aos-duration="300 * index">
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
        :current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";
import Config from "../assets/js/settings";
import toText from '../assets/js/toText'

export default {
  data() {
    return {
      toggle: [
        { type: 1, name: "企业动态" },
        { type: 2, name: "新闻资讯" },
      ],
      active: 0,
      queryInfo: {
        type: 1,
        page: 1,
        pageSize: 5,
      },
      total: null,
      condition: [],
    };
  },
  filters:  {
    filterContent(val){
      return toText(val)
    }
  },

  created() {
    this.getCondition();
  },

  methods: {
    toToggle(i, type) {
      this.active = i;
      this.queryInfo.type = type;
      this.getCondition();
    },
    async getCondition() {
      const res = await axios.get(`${Config.BASE_URL}/condition`, {
        params: this.queryInfo,
      });
      this.condition = res.data.data;
      this.total = res.data.total;
    },
    changePage(page) {
      this.queryInfo.page = page;
      this.getCondition();
    },
  },
};
</script>
    
<style lang='less' scoped>
.active {
  border-bottom: 4px solid #133b80;
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
</style>