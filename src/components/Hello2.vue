<template>
<div>
    test
        <test title="asf2"></test>

    </div>
</template>



<script>
import Vue from "vue";

import Test from "./Test.vue";
Vue.component("test", Test);

export default {
  components: {
    Test
  },
  name: "Hello2",
  
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