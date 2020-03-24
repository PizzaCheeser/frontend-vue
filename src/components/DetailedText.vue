<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Znajdź swoją ulubioną pizzę!
      Wybierz składniki, które chciałbyś na niej znaleźć, a następnie zaznacz te, za którymi nie przepadasz. <br>
      Pizza Cheeser pokaże Ci wszystkie pizze spełniające Twoje kryteria, które mogą zostać dostarczone do Twojego mieszkania.
      <br>Smacznego!
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailedText",
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
