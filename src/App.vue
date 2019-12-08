<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import Ingredients from "./components/Ingredients.vue";
//import User from "./components/User.vue";
//import Pizzas from "./components/Pizzas.vue";
//import TempIngredients from "./components/TempIngredients.vue";


export default {
  name: "app",
  components: {
 //   Ingredients,
 //   User
  //  Pizzas,
  //  TempIngredients
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
