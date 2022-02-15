<template>
  <div>
    <div class="footer">
      <img class="downlogo" src="../assets/R-logo.jpg" alt="猫咪代售" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  width: 180px;
  height: 180px;
  background-color: #222223;
  border-radius: 50%;
  position: relative;
  top: -90px;

  .downlogo {
    position: absolute;
    top: 15px;
    left: 18px;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    z-index: 99;
  }
}
</style>