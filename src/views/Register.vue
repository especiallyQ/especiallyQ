<template>
  <div class="standard-log">
    <div class="use">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>免费注册</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title">免费注册</div>

    <el-card class="log"
      ><div class="RTitle">注册</div>
      <el-form
        :model="registerUser"
        :rules="dialogRules"
        ref="formRef"
        label-width="80px"
        class="registerForm"
      >
        <div class="regL">
          <el-form-item label="用户名:" prop="username">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model.trim="registerUser.username"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="账号:" prop="number">
            <el-input
              placeholder="请输入绑定手机号"
              prefix-icon="el-icon-mobile-phone"
              v-model.trim="registerUser.number"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              placeholder="请输入6-15位内的登录密码"
              prefix-icon="el-icon-lock"
              v-model.trim="registerUser.password"
              show-password
              type="password"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="password2">
            <el-input
              placeholder="请再次输入6-15位内的登录密码"
              prefix-icon="el-icon-lock"
              type="password"
              v-model.trim="registerUser.password2"
              show-password
            >
            </el-input>
          </el-form-item>
          <p class="login">
            已有账号？现在去<router-link to="/login" class="font"
              >登录</router-link
            >
          </p>
          <el-button
            type="primary"
            class="loginBtn"
            @click="submitForm('formRef')"
            >注册</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Message } from "element-ui";
import resetMessage from "../resetMessage";
export default {
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入不一致，请重新输入"));
      } else {
        callback();
      }
    };

    const checkNum = (rule, value, callback) => {
      if (value) {
        const reg = /^[0-9]+$/;
        if (!reg.test(value)) {
          return callback(new Error("手机号格式不正确"));
        }
      }
      callback();
    };

    return {
      registerUser: {
        username: "",
        number: "",
        password: "",
        password2: "",
        
      },

      dialogRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在2到10个字符之间",
            trigger: "blur",
          },
        ],

        number: [
          {
            required: true,
            min: 11,
            max: 11,
            message: "手机号格式不正确",
            trigger: "blur",
          },
          { validator: checkNum, trigger: "blur" },
        ],

        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6至15之间", trigger: "blur" },
        ],

        password2: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6至15之间", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("api/register", this.registerUser)
            .then((res) => {
              switch (res.data.status) {
                case 1:
                 resetMessage({
                    message: "手机号已被注册",
                    type: "error",
                    duration: 1500,
                  });
                  break;

                case 0:
                  Message({
                    message: res.data.message,
                    type: "success",
                    duration: 1500,
                  });
                  this.$router.push("/login");
                  break;
              }
            });
        }
      });
    },
  },
};
</script>

<style lang="less">
.standard-log {
  height: 650px;
  .log {
    width: 35%;
    height: 500px;
    position: relative;
    top: 0px;
    .RTitle {
      width: 100px;
      text-align: center;
      line-height: 0px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      top: 45px;
      left: 25px;
      cursor: pointer;
    }

    .regL {
      width: 390px;
      margin: auto;
      position: absolute;
      top: 90px;
      left: 10px;

      .login {
        position: absolute;
        font-size: 12px;
        top: 270px;
        left: 58%;
        .font {
          margin-left: 1px;
          font-size: 14px;
          color: red;
        }
      }

      .loginBtn {
        width: 80%;
        position: absolute;
        top: 310px;
        left: 80px;
        width: 280px;
      }
    }
  }
}

.el-input--prefix .el-input__inner {
  height: 45px;
  background-color: #f7f7f7;
  width: 283px;
}

.el-form-item__label {
  font-size: 13px;
}


</style>