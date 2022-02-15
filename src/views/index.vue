<template>
  <div class="box">
    <div class="app">
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </div>
    <el-footer><Footer></Footer></el-footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "index",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;

  .app {
    width: 1200px;
    margin: 0 auto;
  }
  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-bottom: 40px;
  }
}
.el-footer {
  margin-top: 100px;
  width: 100%;
  height: 180px !important;
  background-color: #222223;
}
</style>