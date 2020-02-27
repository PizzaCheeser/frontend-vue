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

    <br />Your dreamed pizzas:
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>nr</b-th>
          <b-th>URL</b-th>
          <b-th>Pizzeria name</b-th>
          <b-th>Pizza name</b-th>
          <b-th>Ingredients</b-th>
          <b-th>Price/size</b-th>
        </b-tr>
        <b-tr v-for="pizza in dreamed" v-bind:key="pizza.id">
          <b-td>1</b-td>
          <b-td>www.pyszne.pl</b-td>
          <b-td>{{pizza["_id"]}}</b-td>       
          <b-td>{{pizza["_source"]["name"] }}</b-td>
          <b-td>{{pizza["_source"]["ingredients"]}}</b-td>
          <b-td>{{pizza["_source"]["size_price"]}}</b-td>
          <b-td v-if="pizza === 'No matching pizzas'">No pizzas</b-td>
        </b-tr>
      </b-thead>
    </b-table-simple>
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

import Test from "./Test";
Vue.component("ingredients-table", Test);

export default {
  props: ["id"],
  data() {
    return {
      ingredients: null,
      dreamed: null,
      wanted: [], // Must be an array reference!
      notwanted: [],
      result: null
    };
  },

  created: function() {
    axios.get("http://localhost:5000/api/all_ingredients").then(res => {
      this.ingredients = res.data;
      this.result = res.data;
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

    created2: function(current_wanted, current_notwanted) {
      axios
        .post("http://localhost:5000/api/choosen-ingredients", {
          must: current_wanted,
          must_not: current_notwanted,
          code: '30-122'
        })
        .then(res => {
          console.log(res.data);
          this.dreamed = res.data;
        });
    },
    search(input) {
      if (input.length < 1) {
        this.result = this.ingredients;
      }
      this.result = this.ingredients.filter(ingredient => {
        return ingredient.toLowerCase().startsWith(input.toLowerCase());
      });
      //return this.result
    }
  },
  watch: {
    wanted: function(x) {
      this.created2(x, this.notwanted);
    },
    notwanted: function(y) {
      this.created2(this.wanted, y);
    }
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
