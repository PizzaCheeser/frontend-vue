<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     If you always have a problem to choose your dream pizza and perfect pizzeria which deliver it to you, you are on the right place!
    </p>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>