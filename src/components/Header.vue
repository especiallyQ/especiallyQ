<template>
  <div>
    <div class="upHeader">
      <div class="leftHeader">
        <img class="logo" src="../assets/R-logo.jpg" />
        <span class="left">猫咪代售</span>
      </div>
      <div class="rightHeader">
        <div class="jurisdiction">
          <div v-if="!this.$store.state.user">
            <router-link to="/login">
              <span class="right">登录</span></router-link
            >
            <router-link to="/register">
              <span class="right">注册</span></router-link
            >
          </div>

          <div class="number" v-if="this.$store.state.user">
            <el-dropdown trigger="click">
              <span class="Num"> {{ this.$store.state.user.number }}</span>
              <img class="down" src="../assets/向下.png" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="out">
                  <span @click="exit">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <router-link to="/person">
          <span class="right">个人中心</span></router-link
        >

        <router-link to="/home/help">
          <span class="right">帮助中心</span></router-link
        >
        <span class="right" @click="centerDialogVisible = true">下载APP</span>
      </div>
    </div>

    <el-dialog
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      top="39vh"
      :show-close="false"
    >
      <span class="Time">APP正在研发中，敬请期待!</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods: {
    exit() {
      this.$router.go(0);
      sessionStorage.removeItem("eleToken");
      this.$store.dispatch("deposit", "");
    },
  },
};
</script>

<style lang="less" >
.upHeader {
  width: 100%;

  .leftHeader {
    height: 100%;
    width: 300px;
    float: left;
    display: inline-block;
    position: relative;

    .logo {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      float: left;
      margin-left: 4px;
      margin-top: 3px;
    }

    .left {
      font-size: 25px;
      letter-spacing: 3px;
      margin-right: 34px;
      position: absolute;
      top: 8px;
      left: 100px;
      line-height: 75px;
    }
  }

  .rightHeader {
    width: 550px;
    height: 100%;
    float: right;
    line-height: 80px;
    .jurisdiction {
      width: 100px;
      position: absolute;
      left: 62px;
    }
    .number {
      position: absolute;
      top: 0;
      left: -8px;

      .Num {
        color: red;
        font-size: 14px;
        cursor: pointer;
      }

      .down {
        width: 12px;
        position: absolute;
        top: 35px;
        left: 97px;
      }
    }

    .right {
      margin-left: 20px;
      font-size: 14px;
      cursor: pointer;
      color: black;
    }
    .right:hover {
      color: red;
    }
  }
}

.Time {
  font-size: 23px;
  position: relative;
  top: -10px;
  left: 100px;
}

.el-dropdown {
  height: 50px;
}

.out {
}
</style>