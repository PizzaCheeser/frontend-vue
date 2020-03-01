<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DetailedText msg="Welcome to Pizza Cheeser!" /> 

     <br><br>


    <PostCodeField></PostCodeField>


    <!-- <router-link to="/choose" tag="button">Choose ingredients!</router-link> -->
  </div>
</template>

<script>
import DetailedText from "./DetailedText.vue";
import PostCodeField from "./PostCodeField"

export default {
  name: "app",
  components: {
    DetailedText,
    PostCodeField
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
