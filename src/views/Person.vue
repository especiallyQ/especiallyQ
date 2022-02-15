<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title">个人中心</div>
    <div class="person_list">
      <el-descriptions
        class="margin-top"
        title="个人信息"
        :column="3"
        size="medium"
        border
      >
        <template slot="extra">
          <el-button
            type="primary"
            size="small"
            @click="checkVisible = true"
            class="operation"
            >操作</el-button
          >
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ this.$store.state.user.username }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ this.$store.state.user.number }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ this.$store.state.user.place }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small">{{ this.$store.state.user.remark }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ this.$store.state.user.address }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <!-- 身份验证 -->
    <el-dialog
      title="身份验证"
      :visible.sync="checkVisible"
      width="500px 
    "
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <el-form :model="userData" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" label-width="100px" prop="number">
          <el-input
            v-model.trim="userData.number"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入绑定手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px" prop="password">
          <el-input
            v-model.trim="userData.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入6-15位内的登录密码"
            show-password
            type="password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkUser('ruleForm')" class="oneBtn"
          >确 定</el-button
        >
        <el-button @click="changeCheck('ruleForm')" class="oneBtn"
          >取 消</el-button
        >
      </div>
    </el-dialog>

    <!-- 分页 -->
    <div class="upDialog">
      <el-dialog
        title="编辑信息"
        :visible.sync="dialogFormVisible"
        width="500px 
    "
      >
        <el-form :model="msg" :rules="dialogRules" ref="formRef">
          <el-form-item
            label="用户名"
            :label-width="formLabelWidth"
            prop="username"
          >
            <el-input
              v-model.trim="msg.username"
              placeholder="请输入用户名"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="现居省份"
            :label-width="formLabelWidth"
            prop="place"
          >
            <el-select v-model.trim="msg.place" placeholder="请选择居住省份">
              <el-option label="北京" value="北京"></el-option>
              <el-option label="上海" value="上海"></el-option>
              <el-option label="广东" value="广东"></el-option>
              <el-option label="深圳" value="深圳"></el-option>
              <el-option label="杭州" value="杭州"></el-option>
              <el-option label="南京" value="南京"></el-option>
              <el-option label="重庆" value="重庆"></el-option>
              <el-option label="西安" value="西安"></el-option>
              <el-option label="辽宁" value="辽宁"></el-option>
              <el-option label="内蒙古" value="内蒙古"></el-option>
              <el-option label="吉林" value="吉林"></el-option>
              <el-option label="黑龙江" value="黑龙江"></el-option>
              <el-option label="河北" value="河北"></el-option>
              <el-option label="河南" value="河南"></el-option>
              <el-option label="山东" value="山东"></el-option>
              <el-option label="福建" value="福建"></el-option>
              <el-option label="安徽" value="安徽"></el-option>
              <el-option label="湖南" value="湖南"></el-option>
              <el-option label="湖北" value="湖北"></el-option>
              <el-option label="江苏" value="江苏"></el-option>
              <el-option label="江西" value="江西"></el-option>
              <el-option label="甘肃" value="甘肃"></el-option>
              <el-option label="陕西" value="陕西"></el-option>
              <el-option label="新疆" value="新疆"></el-option>
              <el-option label="西藏" value="西藏"></el-option>
              <el-option label="宁夏" value="宁夏"></el-option>
              <el-option label="青海" value="青海"></el-option>
              <el-option label="四川" value="四川"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="备注"
            :label-width="formLabelWidth"
            prop="remark"
          >
            <el-select v-model.trim="msg.remark" placeholder="备注">
              <el-option label="无" value="无"></el-option>
              <el-option label="家" value="家"></el-option>
              <el-option label="学校" value="学校"></el-option>
              <el-option label="公司" value="公司"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="联系地址"
            :label-width="formLabelWidth"
            prop="address"
          >
            <el-input
              v-model.trim="msg.address"
              placeholder="请输入联系地址"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="changeVisible('formRef')"
            class="twoBtn"
            >确 定</el-button
          >
          <el-button @click="FormVisible" class="twoBtn"> 取 消</el-button>
        </div>
      </el-dialog>
    </div>
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
      formLabelWidth: "100px",
      checkVisible: false,
      dialogFormVisible: false,

      userData: {
        number: "",
        password: "",
      },

      msg: {
        username: this.$store.state.user.username,
        address: this.$store.state.user.address,
        remark: this.$store.state.user.remark,
        place: this.$store.state.user.place,
        id: this.$store.state.user.id,
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
        address: [
          {
            min: 0,
            max: 24,
            message: "长度在0到24个字符之间",
            trigger: "blur",
          },
        ],
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
    //取消二级dialog
    FormVisible() {
      this.dialogFormVisible = false;
      this.$router.go(0);
    },
    //取消一级dialog
    changeCheck(ruleForm) {
      this.checkVisible = false;
      this.$refs[ruleForm].resetFields();
    },

    checkUser(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.$axios
            .post(`api/login`, this.userData)
            .then((res) => {
              if (res.data.status === 1) {
                //email或密码错误
                resetMessage({
                  message: "验证失败，请检查账号或密码是否正确",
                  type: "error",
                  duration: 1000,
                });
              } else {
                this.checkVisible = false;
                Message({
                  message: "验证成功",
                  type: "success",
                  duration: 1000,
                });

                this.dialogFormVisible = true;
              }
            });
        }
      });
    },

    changeVisible(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("api/update", this.msg).then(() => {
            this.$axios
              .post(`api/login`, this.userData)
              .then((res) => {
                //获取token
                const { token } = res.data;
                //在 localStorage中存储token
                sessionStorage.setItem("eleToken", token);
                //解析token
                const decoded = jwtDecode(token);
                this.$store.dispatch("deposit", decoded);
                this.dialogFormVisible = false;
                this.$router.go(0);
                Message({
                  message: "编辑成功",
                  type: "success",
                  duration: 1000,
                });
              });
          });
        }
      });
    },
  },
};
</script>

<style lang="less">
.title {
  width: 100%;
  height: 82px;
  line-height: 50px;
}

.upDialog {
  .el-dialog {
    width: 600px;
  }
}
.el-select {
  left: -160px;
}

.el-select-dropdown {
  width: 280px;
  min-width: 280px !important;
  background-color: rgb(242, 241, 241);
  margin-left: 45px;
}

.el-select-dropdown__item {
  width: 250px;
}

.el-dialog__header {
  text-align: center;
  padding: 18px 0;
}

.operation {
  margin-left: 500px;
}

.oneBtn {
  margin-right: 100px;
}
.twoBtn {
  margin-right: 100px;
}

.el-select .el-input__inner {
  margin-left: 160px;
  width: 300px;
}

.person_list {
  margin-bottom: 160px;
  margin-top: 30px;
}
.el-input--prefix .el-input__inner {
  width: 300px !important;
}

.perIpt {
  width: 300px;
}

.el-input__inner {
  width: 300px;
}

.el-input{
  width: 280px;
}

.el-select .el-input__inner{
  margin-left: 50px;
}
</style>