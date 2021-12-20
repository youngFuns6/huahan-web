<template>
  <div class="wrop">
    <div class="title">
      <h3>NEWS INFORMATION</h3>
      <p>新闻资讯</p>
    </div>
    <div class="content">
      <div class="toggle">
        <span
          @click="toToggle(index)"
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in toggle"
          :key="item.id"
          >{{ item.name }}</span
        >
      </div>
      <ul>
        <li v-for="item in newsList" :key="item.id">
          <div class="left">
            <img :src="item.banner" alt="" />
          </div>
          <div class="right">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
            <span>{{ item.created }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      toggle: [
        { id: 0, name: "企业动态" },
        { id: 1, name: "新闻资讯" },
      ],
      active: 0,
      newsList: [
        {
          id: 1,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 2,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 3,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 4,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 5,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 6,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 7,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
        {
          id: 8,
          banner: "",
          title: "哈迪哈UHD啊好的等哈等哈",
          content:
            "哈护短厚度爱活动点击按键带哦按季度收结案按季度将的敬爱的旧爱开电风扇宽松收到开发商的看法SDK佛山店",
          created: "2021.10.09",
        },
      ],
    };
  },
  methods: {
    toToggle(i) {
      this.active = i;
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
  }
  .left {
    width: 195px;
    height: 130px;
    margin-right: 32px;
  }
  .right {
    h3 {
      .line-text;
      font-weight: 500;
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