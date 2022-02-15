<template>
  <div class="standard">
    <div class="use">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>会员登录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="title">会员登录</div>

    <el-card class="log">
      <el-form
        :model="LoginForm"
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="LoginForm"
        ><div class="LTitle">密码登录</div>
        <div class="regM">
          <el-form-item label="账号:" prop="number">
            <el-input
              placeholder="请输入绑定手机号"
              prefix-icon="el-icon-mobile-phone"
              v-model.trim="LoginForm.number"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              placeholder="请输入6-15位内的登录密码"
              prefix-icon="el-icon-lock"
              type="password"
              v-model.trim="LoginForm.password"
              show-password
            >
            </el-input>
          </el-form-item>
          <p class="login">
            还没有账号？立即去<router-link to="/register" class="font"
              >注册</router-link
            >
          </p>
          <el-button
            type="primary"
            class="LoginBtn"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Message } from "element-ui";
import jwtDecode from "jwt-decode";
import resetMessage from "../resetMessage";
export default {
  data() {
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
      LoginForm: {
        number: "",
        password: "",
      },

      rules: {
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
      },
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.$axios
            .post("api/login", this.LoginForm)
            .then((res) => {
              if (res.data.status === 1) {
                //email或密码错误
                resetMessage({
                  message: "登录失败，请检查账号或密码是否正确",
                  type: "error",
                  duration: 1000,
                });
              } else {
                //|登陆成功
                Message({
                  message: "身份验证成功",
                  type: "success",
                  duration: 1000,
                });
                //获取token
                const { token } = res.data;
                //在 localStorage中存储token
                sessionStorage.setItem("eleToken", token);
                //解析token
                const decoded = jwtDecode(token);
                this.$store.dispatch("deposit", decoded);
                this.$router.push("/home");
              }
            });
        }
      });
    },
  },
};
</script>

<style lang="less">
.standard {
  height: 500px;

  .log {
    width: 35%;
    height: 350px;
    position: relative;
    top: 0px;
    .LTitle {
      width: 100px;
      text-align: center;
      line-height: 0px;
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      top: 45px;
      left: 40px;
      cursor: pointer;
    }

    .regM {
      width: 350px;
      height: 200px;
      margin: auto;
      position: absolute;
      top: 90px;
      left: 10px;

      .LoginForm {
        .el-input {
          width: 280px;
          margin-top: 30px;
          margin-left: 40px;
          line-height: 45px;
        }
      }
      .login {
        position: absolute;
        font-size: 12px;
        top: 130px;
        left: 60%;

        .font {
          margin-left: 1px;
          font-size: 14px;
          color: red;
        }
      }

      .LoginBtn {
        width: 80%;
        position: absolute;
        top: 170px;
        left: 60px;
      }
    }
  }
}

.el-input--prefix .el-input__inner {
  height: 45px;
  width: 280px;
  background-color: #f7f7f7;
}
.el-input {
  width: 280px;
}

.use {
  margin-left: 220px;
  width: 200px;
}
</style>