<template>
  <div id="app2">
        <h2>Choose ingredients</h2>
    <ingredients-table
      v-bind:ingredients="ingredients"
      @ingredients="updateIngredients"
      @wanted="updateWanted"
      @notwanted="updateNotWanted"
    ></ingredients-table>

    {{this.wanted}}
    {{this.notwanted}}
    <h2>Your dreamed pizzas:</h2>
    <pizzas-table
      v-bind:wanted="wanted"
      v-bind:notwanted="notwanted"
    ></pizzas-table>
  </div>
</template>

<script>
import {
  BFormGroup,
  BFormCheckbox,
  BFormRow,
  BTableSimple,
  BTr,
  BTh,
  BThead
} from "bootstrap-vue";
import Vue from "vue";
import axios from "axios";

Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-checkbox", BFormCheckbox);
Vue.component("b-form-row", BFormRow);
Vue.component("b-table-simple", BTableSimple);
Vue.component("b-tr", BTr);
Vue.component("b-th", BTh);
Vue.component("b-thead", BThead);

import IngredientsTable from "./IngredientsTable";
Vue.component("ingredients-table", IngredientsTable);

import PizzasTable from "./PizzasTable";
Vue.component("pizzas-table", PizzasTable);

export default {
  props: ["id"],
  data() {
    return {
      ingredients: null,
      wanted: [],
      notwanted: [],
    };
  },

  created: function() {
    axios.get("http://localhost:5000/api/all_ingredients").then(res => {
      this.ingredients = res.data;
    });
  },
  methods: {
    updateWanted(variable) {
      this.wanted = variable;
    },
    updateNotWanted(variable) {
      this.notwanted = variable;
    },
    updateIngredients(variable) {
      this.ingredients = variable;
    },

    }
};
</script>


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
