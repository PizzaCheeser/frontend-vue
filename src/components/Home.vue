<template>
  <div id="app">
    <Logo />
    <DetailedText msg="PIZZA CHEESER" />
    <PostCodeField />
  </div>
</template>

<script>
import DetailedText from "./DetailedText.vue";
import PostCodeField from "./PostCodeField.vue";
import Logo from "./Logo.vue";

export default {
  name: "app",
  components: {
    DetailedText,
    PostCodeField,
    Logo
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
