<template>
  <div>
    <div class="title">
      <h3>云手机的体验价值</h3>
      <p>Provide high quality</p>
    </div>
    <div class="content">
      <div class="content-left" data-aos="zoom-in-up">
        <img src="../../assets/images/team-frist.png" alt="" />
      </div>
      <div class="content-right">
        <ul data-aos="zoom-in-up"
          :data-aos-duration="200">
          <li>
            <div class="img">
              <img src="../../assets/images/team-1.png" alt="" />
            </div>
            <p class="title">云端存储，不占空间</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-2.png" alt="" />
            </div>
            <p class="title">无限畅游，永不掉线</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-3.png" alt="" />
            </div>
            <p class="title">数据安全，防止外泄</p>
          </li>
        </ul>
        <ul data-aos="zoom-in-up"
          :data-aos-duration="300">
          <li>
            <div class="img">
              <img src="../../assets/images/team-4.png" alt="" />
            </div>
            <p class="title">真机环境，稳定多开</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-5.png" alt="" />
            </div>
            <p class="title">独立IP，自由调控</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-6.png" alt="" />
            </div>
            <p class="title">内耗虚拟化，杜绝卡机</p>
          </li>
        </ul>
      </div>

      <!-- 手机端 -->
      <div class="content-mobile" data-aos="fade-up">
        <ul>
          <li>
            <div class="img">
              <img src="../../assets/images/team-1.png" alt="" />
            </div>
            <p class="title">云端存储，不占空间</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-2.png" alt="" />
            </div>
            <p class="title">无限畅游，永不掉线</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-3.png" alt="" />
            </div>
            <p class="title">数据安全，防止外泄</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-4.png" alt="" />
            </div>
            <p class="title">真机环境，稳定多开</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-5.png" alt="" />
            </div>
            <p class="title">独立IP，自由调控</p>
          </li>
          <li>
            <div class="img">
              <img src="../../assets/images/team-6.png" alt="" />
            </div>
            <p class="title">内耗虚拟化，杜绝卡机</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Worth",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang='less' scoped>
.title {
  text-align: center;
  h3 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #333333;
    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 40px;
      height: 3px;
      background: linear-gradient(90deg, #5ad4ff 0%, #008bf7 100%);
      bottom: 0;
      left: calc(50% - 20px);
    }
  }
  p {
    font-size: 24px;
    color: #a7a7a7;
  }
}

.content {
  padding: 80px 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content-left {
    width: 547px;
    height: 536px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content-right {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 105px;
        transition: all ease-in-out 0.4s;
        &:hover {
          transform: translateY(-10px);
        }
        .img {
          width: 112px;
          height: 112px;
          border: 1px dashed #333;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          font-size: 22px;
          margin-top: 16px;
          line-height: 1.5;
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .content {
    .content-mobile {
      display: none;
    }
  }
}

@media (max-width: 992px) {
  .title {
    // margin-bottom: 104px;
    margin-top: 160px;
    p {
      display: none;
    }
    h3 {
      font-size: 72px;
      padding-bottom: 64px;

      &::before {
        display: none;
      }
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 128px;
        height: 20px;
        background: linear-gradient(90deg, #5ad4ff 0%, #008bf7 100%);
        border-radius: 10px;
        opacity: 0.5;
        bottom: 0;
        left: calc(50%);
        transform: translateX(-50%);
      }
    }
  }

  .content {
    // justify-content: center;
    .content-left,
    .content-right {
      display: none;
    }
    .content-mobile {
      // display: flex;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          margin: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px 105px;
          transition: all ease-in-out 0.4s;
          width: 35%;
          &:hover {
            transform: translateY(-10px);
          }
          // width: 20%;
          .img {
            width: 224px;
            height: 224px;
            border: 1px dashed #333;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            font-size: 44px;
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>