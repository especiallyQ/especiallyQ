<template>
  <div>
    <div class="upMain"> <Main></Main></div>
      <router-view></router-view>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
export default {
  components: {
    Main,
  },
};
</script>

<style>
.upMain{
  margin-top: -35px;
  margin-bottom: 35px;
}

</style>