<template>
  <div id="app2">
    <h2>Wybierz składniki</h2>
    <ingredients-table
      v-bind:ingredients="ingredients"
      @ingredients="updateIngredients"
      @wanted="updateWanted"
      @notWanted="updateNotWanted"
    ></ingredients-table>

    <h2>Znalezione pizze</h2>

    <pizzas-table
      v-bind:wanted="wanted"
      v-bind:notWanted="notWanted"
      v-bind:postCode="postCode"
    ></pizzas-table>
  </div>
</template>

<script>
import IngredientsTable from "./IngredientsTable.vue";
import PizzasTable from "./PizzasTable.vue";
import axios from "axios";
import config from "../config";

export default {
  props: ["id", "postCode"],
  components: {
    IngredientsTable,
    PizzasTable
  },
  data() {
    return {
      ingredients: null,
      wanted: [],
      notWanted: []
    };
  },

  created: function() {
    axios.get(config.API_URL + "all-ingredients/" + this.postCode).then(res => {
      this.ingredients = res.data;
    });
  },
  methods: {
    updateWanted(variable) {
      this.wanted = variable;
    },
    updateNotWanted(variable) {
      this.notWanted = variable;
    },
    updateIngredients(variable) {
      this.ingredients = variable;
    }
  }
};
</script>
