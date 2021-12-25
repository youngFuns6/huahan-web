<template>
  
 
    <div class="wrop" v-if="!isMobile">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @mouseenter="mouse(index)"
        @mouseleave="
          active = -1;
          item.isShow = true;
        "
        :class="index === active ? 'active' : ''"
        @click="toTop(index)"
      >
        <div class="img">
          <img :src="item.icon_active" alt="" v-show="item.isShow" />
          <img :src="item.icon" alt="" v-show="!item.isShow" />
        </div>
      </li>
    </ul>
  </div>

  <div class="mobile" v-else></div>
 
</template>
    
<script>
import icon_phone_active from "../assets/img/icon_phone_active.png";
import icon_phone from "../assets/img/icon_phone.png";
import icon_email_active from "../assets/img/icon_email_active.png";
import icon_email from "../assets/img/icon_email.png";
import icon_top_active from "../assets/img/icon_top_active.png";
import icon_top from "../assets/img/icon_top.png";
import icon_vx_active from "../assets/img/icon_vx_active.png";
import icon_vx from "../assets/img/icon_vx.png";
import icon_edit_active from "../assets/img/icon_edit_active.png";
import icon_edit from "../assets/img/icon_edit.png";

export default {
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      list: [
        // { icon_active: icon_phone_active, icon: icon_phone, isShow: true },
        // { icon_active: icon_email_active, icon: icon_email, isShow: true },
        { icon_active: icon_vx_active, icon: icon_vx, isShow: true },
        // { icon_active: icon_edit_active, icon: icon_edit, isShow: true },
        { icon_active: icon_top_active, icon: icon_top, isShow: true },
      ],
      active: -1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    mouse(i) {
      this.active = i;
      this.list.forEach((item, index) => {
        if (index === i) {
          item.isShow = false;
        } else {
          item.isShow = true;
        }
      });
    },
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop(i) {
      if (i === this.list.length - 1) {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果
        const timeTop = setInterval(() => {
          document.body.scrollTop =
            document.documentElement.scrollTop =
            top -=
              50;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 10);
      }
    },
  },
};
</script>
    
<style lang='less' scoped>
.active {
  background-color: #d63025;
}
.wrop {
  ul {
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px #dddddd;
    position: fixed;
    bottom: 20%;
    right: 40px;
    z-index: 99999;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 64px;
      border-bottom: 1px solid #a7a7a7;
      cursor: pointer;
      position: relative;
      &:last-child {
        border-bottom: none;
      }
      &:nth-child(1).active::after {
        display: block;
        content: "微信号：15995073668";
        user-select: text;
        text-align: center;
        line-height: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -160px;
        width: 160px;
        height: 160px;
        background: #ffffff;
        box-shadow: 1px 1px 8px 0px #dddddd;
      }

      .img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>