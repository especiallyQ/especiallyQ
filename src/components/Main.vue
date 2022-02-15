<template>
  <div class="downHeader">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      text-color="black"
      active-text-color="red"
      router
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/home/variety">品种简介</el-menu-item>
      <el-menu-item index="/home/select">猫咪知识</el-menu-item>
      <el-menu-item index="/home/deal">买猫卖猫</el-menu-item>
      <el-menu-item index="/home/news" @click="getText">猫咪资讯 </el-menu-item>
      <el-menu-item disabled>加入我们</el-menu-item>
      <el-menu-item index="/home/CallMe">联系我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    getText() {
      this.$axios.get("home/text").then((res) => {
        this.$store.dispatch("text", res.data.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.downHeader {
  margin-top: 15px;
  background-color: red;

  .el-menu-demo {
    height: 59px;
    display: flex;
    justify-content: space-between;
  }
}

.el-menu--horizontal > .el-menu-item {
  height: 59px;
}
</style>