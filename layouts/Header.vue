<template>
  <div v-if="!isMobile">
    <div class="top">
      <div class="top-left">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="top-right">
        <img src="../assets/img/phone.png" alt="" />
      </div>
    </div>

    <div class="wrop">
      <ul>
        <li v-for="(item, index) in page" :key="index">
          <span
            class="text-span"
            :class="active === index ? 'active-class' : ''"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
          </span>
          <i>{{
            index === page.length - 1 ||
            index === active ||
            index + 1 === active
              ? ""
              : "|"
          }}</i>
        </li>
      </ul>
      <div class="banner" v-if="$route.path === '/detail' ? false : true">
        <img src="../assets/img/banner.png" alt="" />
      </div>
    </div>
  </div>

  <div class="mobile" v-else>
    <div class="top" type="flex" justify="space-between" align="middle">
      <div class="top-left">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="top-right">
        <div :class="showNav ? 'active' : ''" class="hamburger">
          <div @click="toggle_M">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </div>
    </div>
    <div @click="showNav = false" class="mask" :class="showNav ? 'active' : ''">
      <ul class="nav-menu">
        <li class="nav-item" v-for="(item, index) in page" :key="index">
          <a
            :href="item.path"
            :class="index === active ? 'm-active' : ''"
            class="nav-link"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      page: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "产品展示",
          path: "/prodShow/1",
        },
        {
          name: "新闻资讯",
          path: "/news/1/1",
        },
        {
          name: "关于华翰",
          path: "/about",
        },
        {
          name: "联系我们",
          path: "/contact",
        },
      ],
      active: 0,
      isShow: true,
      showNav: false,
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue.path === "/detail") {
          this.isShow = false;
        }
        // console.log(newValue);
        let flag = true;
        this.page.forEach((item, index) => {
          if (flag) {
            if (newValue.path == item.path) {
              // console.log(index);
              this.active = index;
              flag = false;
            }
          }
        });
      },
    },
  },
  created() {
    if (this.$route.path === "/detail") {
      this.isShow = false;
    }
  },
  methods: {
    toggle_M() {
      this.showNav = !this.showNav;
      // console.log("kkk");
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active-class {
  background: #d63025 !important;
}
.top {
  margin: 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;
  .top-left {
    width: 480px;
  }
  .top-right {
    width: 200px;
  }
}
.wrop {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: #133b80;

  ul {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      line-height: 60px;
      font-size: 22px;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
      display: flex;
    }
    span {
      display: block;
      text-align: center;
      transition: all 0.3s ease-in-out;
      a {
        display: block;
        padding: 0 50px;
        color: #fff;
      }
      i {
        color: #bebebe;
      }
    }
  }
}

// 手机端适配
.mobile {
  .top {
    padding: 0.625rem /* 10/16 */ 1rem /* 16/16 */;
    justify-content: space-between !important;
    .top-left {
      width: 12.5rem /* 200/16 */;
    }
    .top-right {
      // justify-content: right !important;
      width: auto;
    }
  }
}

.mask {
  position: absolute;
  right: 0;
  // transform: translateX(300px);
  opacity: 0;
  top: 3.4375rem /* 55/16 */;
  z-index: 9999;
  width: 50%;
  display: none;
  // height: 100%;
  // background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  // overflow: hidden;
  ul {
    width: 100%;
    // box-shadow: 0 .625rem /* 10/16 */ 1.6875rem /* 27/16 */ rgba(0, 0, 0, 0.05);
    border-radius: 0.625rem /* 10/16 */;
    text-align: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 10px 20px 0px rgba(167, 167, 167, 0.5);
    // overflow: hidden;
  }
  .nav-item {
    width: 100%;
    margin: 0;
    border-bottom: 1px solid #f3f4f6;
  }
  .nav-link {
    display: block;
    padding: 1.5rem 0;
    color: #333;
  }
}

.hamburger {
  .bar {
    display: block;
    width: 1.5625rem /* 25/16 */;
    height: 0.1875rem /* 3/16 */;
    margin: 0.3125rem /* 5/16 */ auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #333;
  }
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.active .bar:nth-child(1) {
  -webkit-transform: translateY(0.5rem /* 8/16 */) rotate(45deg);
  transform: translateY(0.5rem /* 8/16 */) rotate(45deg);
}
.hamburger.active .bar:nth-child(3) {
  -webkit-transform: translateY(-0.5rem /* 8/16 */) rotate(-45deg);
  transform: translateY(-0.5rem /* 8/16 */) rotate(-45deg);
}
.mask.active {
  // right: 0;
  opacity: 1;
  display: block;
}

.m-active {
  color: blue !important;
}
</style>