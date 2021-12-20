<template>
  <div class="wrop">
    <div class="title">
      <h3>PRODUCT DISPLAY</h3>
      <p>产品展示</p>
    </div>
    <div class="wrop-content">
      <div class="wrop-left">
        <h3>
          <i class="icon">
            <img src="../../assets/img/cate_icon.png" alt="" />
          </i>
          <span>产品分类</span>
        </h3>
        <ul>
          <li
            :class="active === index ? 'active' : ''"
            v-for="(item, index) in cate"
            :key="item.id"
            @click="toggleCate(index)"
          >
            <span>{{ item.cateName }}</span>
          </li>
          <slot name='moreBtn'></slot>
        </ul>
      </div>
      <div class="wrop-right">
        <ul>
          <li v-for="(item, index) in product" :key="index">
            <div class="img">
              <img :src="item.banner" alt="" />
            </div>
            <div class="title">{{ item.title }}</div>
          </li>
        </ul>
        <div class="page">
          <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../../assets/img/1.png";

export default {
  name: "product",
  components: {},
  data() {
    return {
      cate: [
        { id: 1, cateName: "基地家多久sjdklajdl ISO阿的机啊科技大楼会" },
        { id: 2, cateName: "基地家多久" },
        { id: 3, cateName: "基地家多久" },
        { id: 4, cateName: "基地家多久" },
        { id: 5, cateName: "基地家多久" },
        { id: 6, cateName: "基地家多久" },
        { id: 7, cateName: "基地家多久" },
      ],
      active: 0,
      product: [
        { title: "好苏啊的好的话", banner },
        { title: "好苏啊的好的话", banner },
        { title: "好苏啊的好的话", banner },
        { title: "好苏啊的好的话", banner },
        { title: "好苏啊的好的话", banner },
        { title: "好苏啊的好的话", banner },
      ],
    };
  },
  methods: {
    toggleCate(index) {
      this.active = index;
    },
  },
  computed: {},
};
</script>

<style lang='less' scoped>
.active {
  background-color: #eeeeef;
}
.wrop {
  margin: 64px 18vw;
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

  .wrop-content {
    margin-top: 58px;
    display: flex;
    justify-content: center;
  }
  .wrop-left {
    width: 296px;
    min-height: 620px;
    background-color: #fafafa;
    h3 {
      font-size: 28px;
      color: #133b80;
      padding: 24px 0 24px 36px;
      display: flex;
      align-items: center;
      span {
        margin-left: 8px;
      }
      .icon {
        display: block;
        width: 24px;
        height: 24px;
      }
    }
    ul {
      li {
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover {
          background-color: #eeeeef;
        }
        span {
          .line-text;
          display: block;
          margin: 0 36px;
          padding: 22px 0;
          font-size: 14px;
          color: #133b80;
          border-bottom: 1px solid #ededed;
        }
      }
      .more {
        width: 224px;
        height: 50px;
        margin: 35px 36px;
        background: #133b80;
        font-size: 14px;
        text-align: center;
        color: #fff;
        line-height: 50px;
        cursor: pointer;
      }
    }
  }

  .wrop-right {
    min-height: 620px;
    margin-left: 32px;
    background: #fafafa;
    ul {
      width: 900px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        margin-top: 26px;
        background: #f6f6f6;
        cursor: pointer;
        img {
          width: 236px;
          height: 174px;
          margin: 12px 12px 14px 12px;
        }
        .title {
          .line-text;
          text-align: left;
          margin-left: 26px;
          line-height: 1.2;
          padding-bottom: 24px;
        }
      }
    }
    .page {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>