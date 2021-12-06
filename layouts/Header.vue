<template>
  <div class="wrop">
    <div class="left" @click="toIndex">
      <span class="img"><img src="../assets/images/logo.png" alt="" /></span>
      <p>游点电</p>
    </div>
    <div class="right">
      <div class="download-img">
        <img src="../assets/images/downloads.png" alt="">
      </div>
      <ul>
        <li
          @click="toPage(index)"
          v-for="(item, index) in page"
          :key="item"
          :class="active === index ? 'active-class' : ''"
        >
          {{ item }}
        </li>
      </ul>
      <div class="drop-icon">
        <van-icon
          v-if="isShowIcon"
          size="42"
          name="wap-nav"
          @click="isShowIcon = !isShowIcon"
        />
        <van-icon
          v-else
          size="42"
          name="cross"
          @click="isShowIcon = !isShowIcon"
        />
      </div>
    </div>

    <!-- 弹框 -->
    <div class="drop" v-if="!isShowIcon">
        <ul>
        <li
          @click="toPage(index)"
          v-for="(item, index) in page"
          :key="item"
          :class="active === index ? 'active-class' : ''"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Congfig from "../assets/js/settings";
export default {
  name: "Header",
  components: {},
  data() {
    return {
      page: ["首页", "资讯", "帮助中心", "客户端下载", "关于我们"],
      active: 0,
      isShowIcon: true,
      isShowDrop: false,
    };
  },
  beforeMount() {
    if (window.sessionStorage.getItem("active")) {
      this.active = parseInt(window.sessionStorage.getItem("active"));
    }
  },
  methods: {
    toIndex(){
      window.sessionStorage.setItem('active', 0)
      this.$router.push('/')
    },
    toPage(i) {
      this.active = i;
      window.sessionStorage.setItem("active", i);
      // console.log(i);
      switch (i) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/news");
          break;
        case 2:
          this.$router.push({
            path: `/helpCenter/questionList?type=8&page=1&pageSize=5`,
            // query: {
            //   type: window.sessionStorage.getItem('activeNav') ? parseInt(window.sessionStorage.getItem('activeNav')) + 4 : 4,
            //   pageSize: 5
            // }
          });
          break;
        case 3:
          // this.$router.push("/download");
          window.open(`${Congfig.link}`)
          // window.location.href = Congfig.link
          break;
        case 4:
          this.$router.push("/index/inner");
          break;
      }
      this.isShowIcon = true
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active-class {
  color: #029ffc !important;
}
.wrop {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 5px 5px #888888;
  .left {
    display: flex;
    align-items: center;
    margin-left: 500px;
    cursor: pointer;
    span {
      font-size: 28px;
      color: #029ffc;
    }
    .img {
      width: 87px;
      height: 56px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    margin-right: 500px;
    ul {
      display: flex;
      li {
        margin: 0 40px;
        font-size: 22px;
        font-weight: 500;
        color: #333333;
        cursor: pointer;
      }
    }
  }
}

// 手机端适配

.drop-icon {
  // padding: 30px 95px;
  display: none;
}
.drop {
  position: absolute;
  left: 0;
  bottom: -945px;
  z-index: 888;
  width: 100%;
  // height: 300px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(167, 167, 167, 0.5);
  ul {
    li {
      padding: 30px 120px;
      margin: 60px 0;
      border-bottom: 1px solid #a7a7a7;
      font-size: 56px;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}

@media (min-width: 992) {
  .wrop {
    .left {
      p {
        display: none;
      }
    }
    .right {
      .download-img {
        display: none;
      }
    }
  }
}

@media (max-width: 992px) {
  .wrop .left {
    margin-left: 150px;
    p {
        display: block;
        font-size: 56px;
      }
    .img {
      width: 251px;
      height: 168px;
      margin-right: 70px;
    }
    span {
      font-size: 84px;
    }
  }
  .wrop .right {
    margin-right: 150px;
    .download-img {
      display: block;
      width: 88px;
      height: 60px;
      margin-right: 112px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .wrop .right ul {
    display: none;
  }
  .drop-icon {
    display: block;
    i {
      font-size: 120px !important;
    }
  }
}
</style>