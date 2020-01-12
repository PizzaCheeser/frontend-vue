<template>
  <div id="app2">
    <h2>Choose ingredients</h2>
    <h5>On the pizza:</h5> 
    <autocomplete :search="search"
    placeholder="Search for a ingredient"
    aria-label="Search for a ingredient"></autocomplete>

      <b-form-row label="I would like to have them on my pizza choosen:">
      <b-form-checkbox inline
        v-for="ingredient in result"
        v-model="wanted"
        :key="ingredient"
        :value="ingredient"
        dataClass= 'center aligned'
        switch
        name="buttons-2"

      >
        <b-form-row>{{ ingredient }}</b-form-row>
      </b-form-checkbox>
    </b-form-row>





<!-- 
    <b-form-row label="I would like to have them on my pizza:">
      <b-form-checkbox inline
        v-for="ingredient in ingredients"
        v-model="wanted"
        :key="ingredient"
        :value="ingredient"
        dataClass= 'center aligned'
        switch
        name="buttons-2"

      >
        <b-form-row>{{ ingredient }}</b-form-row>
      </b-form-checkbox>
    </b-form-row> -->
    {{wanted}}
    <br />
    <h5>Not On the pizza:</h5> 

    <b-form-row label="I don't want to have them on my pizza:">
       <b-form-checkbox inline
        v-for="ingredient in ingredients"
        v-model="notwanted"
        :key="ingredient"
        :value="ingredient"
        dataClass= 'center aligned'
        switch
        name="buttons-2"

      >{{ ingredient }}</b-form-checkbox>
    </b-form-row>
    {{notwanted}}
    <br />
    Your dreamed pizzas:
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Pizzeria name</b-th>
          <b-th>Pizza name</b-th>
          <b-th>Ingredients</b-th>
          <b-th>Price/size</b-th>

        </b-tr>
        <b-tr v-for="todo in dreamed" v-bind:key="todo.id">

            <b-th>{{todo["_id"]}}</b-th>
            <b-th>{{todo["_source"]["name"] }}</b-th>
            <b-th>{{todo["_source"]["ingredients"]}}</b-th>
            <b-th>{{todo["_source"]["size_price"]}}</b-th>
            <b-th v-if="todo === 'No matching pizzas'">No pizzas</b-th>
        </b-tr>
      </b-thead>
    </b-table-simple>

    <!-- {{dreamed}} -->
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


import '@trevoreyre/autocomplete-vue/dist/style.css'

import Autocomplete from '@trevoreyre/autocomplete-vue'

Vue.component("autocomplete", Autocomplete);

export default {
  props: ["id"],
  data() {
    return {
      ingredients: null,
      dreamed: null,
      wanted: [], // Must be an array reference!
      testeding: [],
      notwanted: [],
      result : null,
    };
  },

  created: function() {
    axios.get("http://localhost:5000/api/all_ingredients").then(res => {
      this.ingredients = res.data;
            this.result = res.data;

    });
  },
      components: {Autocomplete},
  methods: {
    created2: function(current_wanted, current_notwanted) {
      axios
        .post("http://localhost:5000/api/choosen-ingredients", {
          must: current_wanted,
          must_not: current_notwanted
        })
        .then(res => {
          console.log(res.data);
          this.dreamed = res.data;
        });
    },
     search(input) {
        if (input.length < 1) { this.result = this.ingredients
        }
        this.result = this.ingredients.filter(ingredient => {
            return ingredient.toLowerCase()
            .startsWith(input.toLowerCase())
        })
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
