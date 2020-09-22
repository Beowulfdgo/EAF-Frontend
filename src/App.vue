<template>
  <div id="app">
    <ReproduceEAF></ReproduceEAF>
  </div>
</template>

<script>
import ReproduceEAF from "./components/ReproduceEAF.vue";

export default {
  name: "App",
  components: {
    ReproduceEAF,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
