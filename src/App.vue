<template>
  <div>
    <div class="Nav"></div>
    <index></index>
  </div>
</template>

<script>
import index from "./views/index.vue";
import jwtDecode from "jwt-decode";
import axios from "axios";
export default {
  name: "App",
  components: {
    index,
  },
  created() {
      axios.get("home/query").then((res) => {
        console.log(res);
        this.$store.dispatch("edit", res.data.data);
      });

    axios.get("home/text").then((res) => {
      this.$store.dispatch("text", res.data.data);
    });

    if (sessionStorage.getItem("eleToken")) {
      const decoded = jwtDecode(sessionStorage.eleToken);
      this.$store.dispatch("deposit", decoded);
    }
  },
  updated() {},
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.Nav {
  width: 100%;
  height: 30px;
  background-color: rgb(118, 111, 111);
  font-size: 13px;
  line-height: 30px;
  position: relative;
  color: aliceblue;
}
</style>