<template>
  <div>
    <div class="title">帮助中心</div>
    <div class="I1"><img src="../assets/I2.jpg" alt="" /></div>
    <div class="ipt">
      <el-input v-model.trim="input" placeholder="请输入内容"></el-input>
      <el-button class="btn" type="primary" @click="dialogV">搜索</el-button>
    </div>
    <div>
      <el-card class="card"
        ><div class="title">交易流程</div>
        <div class="together">
          <div class="content" @click="sell">如何出售</div>
          <el-divider></el-divider>
          <div class="content" @click="buy">如何购买</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      dialogVisible: false,
      input: "",
    };
  },
  methods: {
    dialogV() {
      if (!this.input) {
        this.$message({
          message: "请输入您所遇到的问题",
          type: "warning",
          duration: 1500,
        });
      } else {
        MessageBox("抱歉,无搜索结果！请更换关键字重新搜索", "提示", {
          type: "warning",
        });
      }
    },

    sell() {
      MessageBox("请登录猫咪代售后台管理系统", "提示", {
        confirmButtonText: "确定",
      });
    },
    buy() {
      MessageBox(
        "本站不提供任何真实有效的交易信息服务，资源均来源于网络，如有侵权，请联系删除！",
        "提示",
        {
          confirmButtonText: "确定",
        }
      );
    },
  },
};
</script>

<style lang="less">
div {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .title {
    width: 100%;

    letter-spacing: 2px;
    width: 100%;
    height: 100px;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
  }

  .I1 {
    width: 100%;
    img {
      width: 100%;
      height: 280px;
    }
  }
  .ipt {
    width: 300px;
    position: absolute;
    top: 210px;
    left: 400px;

    .el-input {
      width: 300px;
    }

    .btn {
      position: absolute;
    }
  }
  .card {
    margin: 35px auto 25px;
    width: 500px;
    height: 200px;
    position: relative;

    .title {
      width: 500px;
      height: 40px;
      background-color: rgb(85, 83, 83);
      color: blanchedalmond;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      font-weight: bold;
    }
    .together {
      margin-top: 60px;
      .content {
        width: 80%;
        height: 15px;
        line-height: 15px;
        font-size: 20px;
        cursor: pointer;
        color: black;
      }
      .content:hover {
        color: red;
      }
    }
  }
}

.el-message-box {
  width: 330px;
}

.el-message-box__content {
  width: 300px;
  float: left;
}
.el-message-box__btns {
  width: 300px;
  float: left;
}

.el-message--success {
  top: 80px !important;
}

.el-message .el-icon-success {
  font-size: 18px;
}

.el-message {
  width: 200px;
}
</style>