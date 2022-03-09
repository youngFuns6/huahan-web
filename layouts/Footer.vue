<template>
  <div>
    <div v-if="!isMobile">
      <div
        class="bgc"
        v-if="
          isShow &&
          !$route.path.match('/news/content') &&
          !$route.path.match('/product/content')
        "
      >
        <img src="../assets/img/map_footer.png" alt="" />
        <!-- <div class="box">
          <p>
            <i>
              <img src="../assets/img/电话.png" alt="" />
            </i>
            <span>155555</span>
          </p>
          <p>
            <i>
              <img src="../assets/img/邮箱.png" alt="" />
            </i>
            <span>155555</span>
          </p>
          <p>
            <i>
              <img src="../assets/img/地址.png" alt="" />
            </i>
            <span>155555</span>
          </p>
          <div class="qr">
            <img :src="$store.state.contactInfo.qrCode" alt="" />
          </div>
        </div> -->
      </div>
      <div class="footer">
        <div>
          <div v-if="info.link" style="margin-bottom:20px">
            友情链接：
            <a
              style="color: #fff"
              v-for="(item, index) in info.link.split('\n')"
              :key="index"
              :href="item.split(',')[0]"
              >{{ item.split(',')[1] }}</a
            >
          </div>
          Copyright2012 江苏华翰环保科技有限公司 &nbsp;&nbsp; 版权所有
          &nbsp;&nbsp; 电话：{{ info.phone.split(",")[0] }} &nbsp;&nbsp;
          传真：{{ info.fax }} &nbsp;&nbsp; Email：{{ info.email }} &nbsp;&nbsp;
          <a
            rel="nofollow"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            >苏ICP备13011262号-1</a
          >
        </div>
      </div>
    </div>

    <div class="mobile" v-else>
      <ul>
        <li>
          <a href="/">
            <i class="iconfont icon-homefill"></i>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a :href="'tel:' + $store.state.contactInfo.phone.split('/')[0]">
            <i class="iconfont icon-dianhuatianchong"></i>
            <span>电话</span>
          </a>
        </li>
        <li @click="navQrCode">
          <a>
            <i class="iconfont icon-message_full"></i>
            <span>微信</span>
          </a>
        </li>
        <li @click="nav($store.state.contactInfo.address)">
          <a>
            <i class="iconfont icon-dizhi"></i>
            <span>导航</span>
          </a>
        </li>
      </ul>
    </div>

    <van-dialog v-model="showVX" title="扫描二维码添加微信" show-cancel-button>
      <img :src="$store.state.contactInfo.qrCode" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  // inject: ['contactInfo'],
  props: {
    contactInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      isMobile: this.$store.state.isMobile,
      info: {},
      isShow: true,
      showVX: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        if (val.path === "/detail" || val.path === "/contact") {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
    },
  },
  created() {
    this.info = this.$store.state.contactInfo;
    // if(this.$route.path === '/detail' || this.$route.path === '/contact' ){
    //   this.isShow = false
    // }
  },
  methods: {
    nav(data) {
      this.$dia
        .alert({
          message: data,
        })
        .then(() => {
          // on close
        });
    },
    navQrCode() {
      this.showVX = true;
    },
  },
};
</script>

<style lang='less' scoped>
.bgc {
  position: relative;
  height: 470px;
  img {
    vertical-align: middle;
    // object-fit: none;
    object-fit: cover;
  }
}
// .box {
//   position: absolute;
//   top: 0;
//   right: 250px;
//   width: 306px;
//   // height: 434px;
//   padding-bottom: 20px;
//   background: #133b80;
//   p {
//     margin: 30px 0;
//     margin-left: 36px;
//     color: #fff;
//     display: flex;
//     align-items: center;
//     i {
//       display: block;
//       width: 28px;
//       height: 28px;
//       margin-right: 12px;
//     }
//     span {
//       font-size: 18px;
//     }
//   }
//   .qr {
//     margin: 0 auto;
//     width: 179px;
//     height: 179px;
//   }
// }

.footer {
  height: 150px;
  background: #484646;
  color: #fff;
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
}

// 手机端
.mobile {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.0625rem /* 49/16 */;
  background: #133b80;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.8rem /* 35/16 */;
    li {
      padding: 0 1.25rem /* 20/16 */ /* 10/16 */;
      span {
        margin-top: 0.125rem /* 2/16 */;
      }
      i {
        font-size: 1.5rem;
      }
      a {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.6875rem /* 11/16 */;
        text-decoration: none;
      }
    }
  }
}
</style>