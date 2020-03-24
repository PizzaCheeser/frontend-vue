<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Znajdź swoją ulubioną pizzę! Wybierz składniki, które chciałbyś na niej
      znaleźć, a następnie zaznacz te, za którymi nie przepadasz. <br />
      Pizza Cheeser pokaże Ci wszystkie pizze spełniające Twoje kryteria, które
      mogą zostać dostarczone do Twojego mieszkania.
      <br />Smacznego!
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


