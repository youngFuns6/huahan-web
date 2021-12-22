<template>
  <div>
    <div class="top">
      <div class="top-left">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="top-right hidden-sm-and-down">
        <img src="../assets/img/phone.png" alt="" />
      </div>
    </div>
    <div class="wrop" >
      <ul class="hidden-sm-and-down">
        <li
          @click="$router.push(`${item.path}`)"
          v-for="(item, index) in page"
          :key="index"
        >
          <span
            class="text-span"
            :class="active === index ? 'active-class' : ''"
            >{{ item.name }}</span
          >
          <i>{{
            index === page.length - 1 ||
            index === active ||
            index + 1 === active
              ? ""
              : "|"
          }}</i>
        </li>
      </ul>
      <div class="banner" v-if="isShow">
        <img src="../assets/img/banner.png" alt="" />
      </div>
      <div class="drop-icon">
        <van-icon
          v-if="isShowIcon"
          size="42"
          name="wap-nav"
          @click="
            isShowIcon = false;
            isShowDrop = true;
          "
        />
      </div>

      <!-- 手机弹框 -->
      <div
        class="mask"
        v-if="!isShowIcon"
        @click="
          isShowIcon = true;
          isShowDrop = false;
        "
      >
        <div class="drop">
          <ul>
            <div class="close-icon">
              <van-icon
                size="30"
                name="cross"
                @click="
                  isShowIcon = true;
                  isShowDrop = false;
                "
              />
            </div>
            <li
              v-for="(item, index) in page"
              :key="index"
              :class="active === index ? 'active-class' : ''"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      page: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "产品展示",
          path: "/prodShow",
        },
        {
          name: "新闻资讯",
          path: "/news",
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
      isShowIcon: true,
      isShowDrop: false,
      isShow: true
    };
  },
  
  watch: {
    $route: {
      immediate: true,
      handler(newValue, oldValue) {
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
  created(){
    if(this.$route.path === '/detail'){
      this.isShow = false
    }
  },
  methods: {},
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
  z-index: 9999;
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
      color: #fff;
      cursor: pointer;
      display: flex;
      span {
        display: block;
        padding: 0 50px;
        text-align: center;
        transition: all 0.3s ease-in-out;
      }
      i {
        color: #bebebe;
      }
    }
  }
}

// 手机端适配
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.drop-icon {
  // padding: 30px 95px;
  display: none;
}
.drop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50px;
  top: 270px;
  z-index: 888;
  width: 80%;
  // height: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(167, 167, 167, 0.5);
  ul {
    position: relative;
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

@media (min-width: 992px) {
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
      font-size: 72px;
    }
    .img {
      width: 251px;
      height: 158px;
      margin-right: 70px;
    }
    // span {
    //   font-size: 96px !important;
    // }
  }
  .wrop .right {
    margin-right: 150px;
    .download-img {
      display: block;
      width: 130px;
      height: 90px;
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
      font-size: 150px !important;
    }
  }
  .close-icon {
    position: absolute;
    right: -130px;
    top: -300px;
    height: 200px;
    color: #fff;
  }
}
</style>