<template>
  <div>
     <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>No.</b-th>
          <b-th>URL</b-th>
          <b-th>Pizzeria name</b-th>
          <b-th>Pizza name</b-th>
          <b-th>Ingredients</b-th>
          <b-th>Price/size</b-th>
        </b-tr>
        <b-tr v-for="(pizza,i) in dreamed" v-bind:key="pizza.id" v-bind:odd="i">
            <b-td>{{i+1}}</b-td>
          <b-td><a v-bind:href="'http://www.pyszne.pl'">Order here!</a></b-td>
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
import config from '../config'

Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-checkbox", BFormCheckbox);
Vue.component("b-form-row", BFormRow);
Vue.component("b-table-simple", BTableSimple);
Vue.component("b-tr", BTr);
Vue.component("b-th", BTh);
Vue.component("b-thead", BThead);

import IngredientsTable from "./IngredientsTable";
Vue.component("ingredients-table", IngredientsTable);

export default {
  props: ["wanted", "notwanted", "postCode"],
  data() {
    return {
      dreamed: null,
    };
  },

  methods: {
    get_result_pizzas: function(current_wanted, current_notwanted) {
      axios
        .post(config.API_URL+"choosen-ingredients", {
          must: current_wanted,
          must_not: current_notwanted,
          code: this.postCode
        })
        .then(res => {
          this.dreamed = res.data;
        });
    },
  },
  watch: {
    wanted: function(wanted) {
      this.get_result_pizzas(wanted, this.notwanted);
    },
    notwanted: function(notwanted) {
      this.get_result_pizzas(this.wanted, notwanted);
    }
  }
};
</script>

