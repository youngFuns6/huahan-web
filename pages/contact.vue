<template>
  <div class="wrop" v-if="!isMobile">
    <div class="contact-1">
      <div class="title">
        <h3>NEWS INFORMATION</h3>
        <p>新闻资讯</p>
      </div>
      <div class="content">
        <div class="left">
          <p>公司地址：{{ $store.state.contactInfo.address }}</p>
          <p>联系方式：{{ $store.state.contactInfo.phone }}</p>
          <p>电子邮箱：{{ $store.state.contactInfo.email }}</p>
          <p>传真：{{ $store.state.contactInfo.fax }}</p>
          <p>邮编：{{ $store.state.contactInfo.emailNum }}</p>
        </div>
        <div class="right">
          <img src="../assets/img/map.png" alt="" />
        </div>
      </div>
    </div>
    <div class="contact-2">
      <div class="title">
        <h3>ONLINE MESSAGE</h3>
        <p>在线留言</p>
      </div>
      <div class="form">
        <form action="" method="POST">
          <div class="form-top">
            <div class="label">
              <label for="name">姓名</label>
              <input v-model="form.name" type="text" id="name" name="name" />
            </div>
            <div class="label">
              <label for="email">电子邮箱</label>
              <input v-model="form.email" type="text" id="email" name="email" />
            </div>
            <div class="label">
              <label for="phone">手机号码</label>
              <input v-model="form.phone" type="text" id="phone" name="phone" />
            </div>
            <div class="label">
              <label for="address">所在地区</label>
              <input
                v-model="form.address"
                type="text"
                id="address"
                name="address"
              />
            </div>
          </div>
          <div class="form-bottom">
            <div class="label">
              <label for="service">我们能为您做些什么？</label>
              <textarea
                v-model="form.service"
                type="text"
                id="service"
                name="service"
              />
            </div>
          </div>
          <div class="btn">
            <button @click.prevent="sendFeedback" type="submit">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="mobile" v-else>
    <div class="contact-1">
      <div class="title">
        <h3>CONTACT US</h3>
        <p>联系我们</p>
      </div>
      <div class="content">
        <div class="left">
          <p>公司地址：{{ $store.state.contactInfo.address }}</p>
          <p>联系方式：{{ $store.state.contactInfo.phone }}</p>
          <p>电子邮箱：{{ $store.state.contactInfo.email }}</p>
          <p>传真：{{ $store.state.contactInfo.fax }}</p>
          <p>邮编：{{ $store.state.contactInfo.emailNum }}</p>
        </div>
        <div class="right">
          <img src="../assets/img/map.png" alt="" />
        </div>
      </div>
    </div>
    <div class="contact-2">
      <div class="title">
        <h3>ONLINE MESSAGE</h3>
        <p>在线留言</p>
      </div>
      <div class="form">
        <form action="" method="POST">
          <div class="form-top">
            <div class="label">
              <label for="name">姓名</label>
              <input v-model="form.name" type="text" id="name" name="name" />
            </div>
            <div class="label">
              <label for="email">电子邮箱</label>
              <input v-model="form.email" type="text" id="email" name="email" />
            </div>
            <div class="label">
              <label for="phone">手机号码</label>
              <input v-model="form.phone" type="text" id="phone" name="phone" />
            </div>
            <div class="label">
              <label for="address">所在地区</label>
              <input
                v-model="form.address"
                type="text"
                id="address"
                name="address"
              />
            </div>
          </div>
          <div class="form-bottom">
            <div class="label">
              <label for="service">我们能为您做些什么？</label>
              <div class="text">
                <textarea
                  v-model="form.service"
                  type="text"
                  id="service"
                  name="service"
                />
                <div class="btn">
                  <button @click.prevent="sendFeedback" type="submit">
                    提交
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
    
<script>
import Config from "../assets/js/settings";
import axios from "axios";

export default {
  data() {
    return {
      isMobile: this.$store.state.isMobile,
      form: {},
    };
  },
  methods: {
    sendFeedback() {
      if (this.form.phone !== undefined && this.form.service !== undefined) {
        axios
          .post(Config.BASE_URL + "/feedback", this.form)
          .then((res) => {
            alert("提交成功！");
          })
          .catch((err) => {
            console.log(err.response);
            alert(`${err.response.data.message}`);
          });
      }
    },
  },
};
</script>
    
<style lang='less' scoped>
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
  .contact-1 {
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 64px;
      .left {
        p {
          font-size: 18px;
          margin: 15px 0;
        }
      }
      .right {
        width: 520px;
        height: 296px;
        box-shadow: 2px 2px 10px #333;
        margin-left: 88px;
      }
    }
  }
  .contact-2 {
    margin-top: 96px;
    .form {
      margin-top: 64px;
      .form-top {
        display: flex;
        //   width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .label {
        display: flex;
        background: #f3f3f4;
        width: 45%;
        margin-bottom: 24px;
        //   &:nth-child(odd){
        //       margin-right: 8
        //   }
        input {
          width: 100%;
          display: block;
          outline: none;
          border: none;
          background-color: #f3f3f4;
        }
      }
      label {
        display: block;
        width: 120px;
        padding: 0 20px;
        font-size: 18px;
        color: #a7a7a7;
        line-height: 64px;
      }
      .form-bottom {
        .label {
          width: 100%;
          display: block;
          label {
            width: 100%;
          }
          textarea {
            display: block;
            width: 100%;
            max-width: 100%;
            padding: 20px;
            height: 154px;
            box-sizing: border-box;
            outline: none;
            border: none;
            background-color: #f3f3f4;
          }
        }
      }
      .btn {
        text-align: center;
        button {
          margin: 0 auto;
          width: 144px;
          height: 50px;
          background: #133b80;
          border-radius: 25px;
          color: #fff;
          font-size: 18px;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}

// 手机端
.mobile {
  padding: 0 2.625rem /* 42/16 */;
  margin-bottom: 6.25rem /* 100/16 */;
  .title {
    text-align: center;
    h3 {
      color: #133b80;
      font-size: 1.25rem /* 20/16 */;
      margin-bottom: 0.75rem /* 12/16 */;
      margin-top: 2rem /* 32/16 */;
    }
    p {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 1.25rem /* 20/16 */;
    }
  }
  .contact-1 {
    .right {
      box-shadow: 1px 1px 5px #333;
    }
  }
  .contact-2 {
    padding-bottom: 18.75rem /* 300/16 */ /* 100/16 */ !important;
    .form {
      .form-top {
        display: flex;
        //   width: 100%;
        flex-direction: column;
        justify-content: space-between;
      }
      .label {
        display: flex;
        align-items: center;
        background: #f3f3f4;
        width: 100%;
        height: 2.625rem /* 42/16 */;
        margin-bottom: 24px;
        //   &:nth-child(odd){
        //       margin-right: 8
        //   }
        input {
          width: 100%;
          display: block;
          outline: none;
          border: none;
          background-color: #f3f3f4;
        }
      }
      label {
        display: block;
        width: 120px;
        padding: 0 20px;
        font-size: 18px;
        color: #a7a7a7;
        line-height: 64px;
        font-size: .875rem /* 14/16 */;
      }
      .form-bottom {
        .label {
          width: 100%;
          display: block;
          background-color: #f3f3f4 !important;
          label {
            width: 100%;
            display: block;
            line-height: 2.625rem;
          }
          textarea {
            display: block;
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            padding: 20px;
            height: 154px;
            box-sizing: border-box;
            outline: none;
            border: none;
            background-color: #f3f3f4;
          }
          .text {
            position: relative;
            .btn {
              text-align: center;
              // margin-top: 160px;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -4.375rem /* 70/16 */;
              button {
                margin: 0 auto;
                width: 144px;
                height: 50px;
                background: #133b80;
                border-radius: 25px;
                color: #fff;
                font-size: 18px;
                border: none;
                outline: none;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>