<template>
  <div class="hello">
     <v-container>
    <v-row offset-md="4"  md="2">
      
      <v-col md="2" offset-md="5">
        <v-text-field
          label="Post code"
          id="postcode"
          v-model="postcode"
          filled rounded
        ></v-text-field>
          <v-btn rounded large 
            color="primary"
             :to="{name: 'pizza-chooser', params: {postCode:postcode}}">
             Dalej ➡
          </v-btn>
      </v-col>

    </v-row>
  </v-container>
  </div>
</template>


<script>
  /*
    import Vue from "vue";
    import {
        BFormInput,
    } from "bootstrap-vue";
    

    Vue.component("b-form-input", BFormInput); //TODO: sprawdzic
  */



    export default {
        data() {
            return {
                type: 'number',
                postcode: '30-122',
        }
        },

    computed: {
        validatePostcode: function() {
            let re = /^\d{2}-\d{3}$/gm;
            let isValid = re.test(this.postcode);
            return !isValid
        },
    },
    };

</script>


<style scoped>
button {
  margin: 40px 0 0;
  border-radius: 12px;
  background-color: #ffc244;

}

.v-input__slot{
  margin: 0 auto;
}

</style>

