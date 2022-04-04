<template>
  <div ref="floatRef" class="float-window" v-if="isShow">
    <h2>
      <i>留言板</i>
      <i class="el-icon-close" @click="isShow = false"></i>
    </h2>
    <div class="content">
      <h3>江苏华翰环保科技有限公司</h3>
      <el-form
        :model="form"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="service">
          <el-input
            rows="5"
            type="textarea"
            v-model="form.service"
            placeholder="请在此输入留言内容，我们将尽快与您联系。（必填）"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model="form.name"
            placeholder="姓名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-phone"
            v-model="form.phone"
            placeholder="电话（必填）"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-message"
            v-model="form.email"
            placeholder="邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-office-building"
            v-model="form.address"
            placeholder="地址"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <div v-else class="slider" @click="isShow = true">
    <i class="el-icon-message"></i> 留言
  </div>
</template>
  
<script>
import axios from "axios";
import Config from "@/assets/js/settings";

export default {
  data() {
    return {
      isShow: true,
      form: {},
      rules: {
        service: [
          { required: true, message: "请输入留言内容", trigger: "blur" },
          {
            min: 1,
            max: 200,
            message: "长度在 1 到 200 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "长度在 6 到 11 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.$refs.floatRef.style.transform = "translateX(0)";
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return;
        axios
          .post(Config.BASE_URL + "/feedback", this.form)
          .then((res) => {
            alert("提交成功！");
            this.form = {}
          })
          .catch((err) => {
            console.log(err.response);
            alert('提交失败');
          });
      });
    },
  },
};
</script>
  
<style lang='less' scoped>
.float-window {
  position: fixed;
  left: 10px;
  bottom: 20%;
  z-index: 9999;
  width: 300px;
  box-shadow: 0 0 10px #333;
  background-color: #fff;
  transform: translateX(-320px);
  transition: all linear 1.5s;
  h2 {
    height: 50px;
    padding: 0 10px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(54, 107, 253);
    color: #fff;
    i:last-child {
      cursor: pointer;
      &:hover {
        color: #a7a7a7;
      }
    }
  }
  .content {
    padding: 10px;
    .el-button {
      width: 100%;
    }
  }
}
.slider {
  position: fixed;
  left: 10px;
  bottom: 50%;
  z-index: 9999;
  padding: 5px;
  font-size: 20px;
  color: #fff;
  box-shadow: 0 0 10px #333;
  background: linear-gradient(to bottom right, #00b4db, #0083b0);
  cursor: pointer;
}
</style>