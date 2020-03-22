<template>
<div>
  <div id="pagination-div" >
        <b-pagination
      v-model="currentPage"
            align="right"
      pills :total-rows="rows"
      :per-page="perPage"
      size="lg"
    ></b-pagination>
  </div>
  
    <b-table-simple hover small caption-top responsive
     id="pizzas-table"
     :per-page="perPage"
     :current-page="currentPage"
     >

      <b-thead head-variant="dark">
        <b-tr>
          <b-th><center>No.</center></b-th>
          <b-th> <center> URL </center> </b-th>
          <b-th> <center> Pizzeria name </center> </b-th>
          <b-th><center>Pizza name</center></b-th>
          <b-th><center>Ingredients</center></b-th>
          <b-th><center>Price and Size </center></b-th>
        </b-tr>
        <b-tr v-for="(pizza,i) in dreamedSliced" v-bind:key="pizza.id" v-bind:id="i">
          <b-td>{{i+1+perPage*(currentPage-1)}}</b-td>
          <b-td>
            <a v-bind:href="pizza['url']">Order here!</a>
          </b-td>
          <b-td>{{pizza["pizzeria_id"]}}</b-td>
          <b-td>{{pizza["pizzeria_name"] }}</b-td>
          <b-td>{{pizza["ingredients"]}}</b-td>
          
          <b-tr v-for="i in pizza.size_price" v-bind:key="i.size">
            <b-td>{{i.size}}</b-td>
            <b-td>{{i.price}} PLN</b-td>
          </b-tr>

          <b-td v-if="pizza === 'No matching pizzas'">No pizzas</b-td>
        </b-tr>
      </b-thead>
    </b-table-simple>
  </div>
</template>


<script>

import axios from "axios";
import config from "../config";
import IngredientsTable from "./IngredientsTable";

export default {
  props: ["wanted", "notwanted", "postCode"],
  components: [IngredientsTable],
  data() {
    return {
      dreamed: [],
      perPage: 15,
      currentPage: 1,
    };
  },

  methods: {
    get_result_pizzas: function(current_wanted, current_notwanted) {
      axios
        .post(config.API_URL + "get-pizzas", {
          must: current_wanted,
          must_not: current_notwanted,
          code: this.postCode
        })
        .then(res => {
          this.dreamed = res.data;
        });
    }
  },
  watch: {
    wanted: function(wanted) {
      this.get_result_pizzas(wanted, this.notwanted);
    },
    notwanted: function(notwanted) {
      this.get_result_pizzas(this.wanted, notwanted);
    }
  },
  computed:{
    rows(){
      return this.dreamed.length
    },
    dreamedSliced(){
      return this.dreamed.slice(
        (this.currentPage -1) * this.perPage,
        this.currentPage * this.perPage
      )
    }
  }
};
</script>

<style scoped>

#pagination-div{
  display: inline-block;
}

.pagination{
  display: flex;
}
</style>