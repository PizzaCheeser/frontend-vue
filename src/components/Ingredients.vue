<template>
  <div id="app2">
    <h2>Choose ingredients</h2>

      <b-form-group label="I would like to have them on my pizza:">
        <b-form-checkbox
          v-for="ingredient in ingredients"
          v-model="wanted"
          :key="ingredient"
          :value="ingredient"
          name="flavour-3a"
        >
          {{ ingredient }}
        </b-form-checkbox>
      </b-form-group>
      {{wanted}}
      <br>  

      <b-form-group label="I don't want to have them on my pizza:">
        <b-form-checkbox
          v-for="ingredient in ingredients"
          v-model="notwanted"
          :key="ingredient"
          :value="ingredient"
          name="flavour-3a"
        >
          {{ ingredient }}
        </b-form-checkbox>
      </b-form-group>
      {{notwanted}}
    <br>
    Your dreamed pizzas:
    {{dreamed}}
  </div>
</template>

<script>
import { BFormGroup, BFormCheckbox } from 'bootstrap-vue'
import Vue from 'vue'
import axios from "axios";

Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-checkbox', BFormCheckbox)

export default {
  props: ["id"],
      data() {
      return {
        ingredients: null,
        dreamed: null,
        wanted: [], // Must be an array reference!
        testeding: [],
        notwanted: [],
      }
    },
    
      created: function() {
        axios
      .get("http://localhost:5000/api/all_ingredients")
      .then(res => {
        this.ingredients = res.data;
                   }    
            )
      }      ,
      methods:{

      created2: function(current_wanted,current_notwanted){
           axios
      .post("http://localhost:5000/api/choosen-ingredients", {must: current_wanted, must_not: current_notwanted})
      .then(res => {
        console.log(res.data);
        this.dreamed = res.data;
      }    
      )
      }
    },
      watch:{
        wanted: function(x){  
            this.created2(x,this.notwanted)    
      },
        notwanted: function(y){  
            this.created2(this.wanted,y)   
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
