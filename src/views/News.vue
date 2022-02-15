<template>
  <div>
    <div class="title">猫咪资讯</div>
    <div class="article">
      <router-link :to="'/new' + item.id" v-for="item in text" :key="item.id">
        <el-card shadow="hover">
          <img v-lazy="require(`../assets/A${item.id}.jpg`)" />
          <h2>{{ item.title }}</h2>
          <span class="content1">{{ item.title1 }}</span>
        </el-card></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: this.$store.state.text,
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 82px;
  line-height: 50px;
  letter-spacing: 6px;
}

.article {
  width: 70%;
  margin: 0 auto;

  .el-card {
    width: 100%;
    position: relative;
    cursor: pointer;
    margin-bottom: 15px;

    img {
      width: 272px;
      height: 180px;
    }

    h2 {
      font-size: 18px;
      font-weight: bolder;
      position: absolute;
      top: 20px;
      left: 430px;
      letter-spacing: 0.5px;
    }

    .content1 {
      line-height: 25px;
      width: 400px;
      height: 200px;
      position: absolute;
      top: 65px;
      left: 350px;
      font-size: 15px;
      letter-spacing: 2px;
    }
    .aa {
      left: 480px;
    }
  }
}
</style>