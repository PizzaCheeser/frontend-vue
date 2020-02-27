<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DetailedText msg="Welcome to Pizza Cheeser!" />    
    <router-link to="/choose" tag="button">Choose ingredients!</router-link>
  </div>
</template>

<script>
import DetailedText from "./DetailedText.vue";

export default {
  name: "app",
  components: {
    DetailedText
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
