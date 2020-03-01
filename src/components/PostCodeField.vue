<template>
  <div class="hello">
     <b-container>
        <label>Post code:</label>
    <p>
    <b-row>
      <b-col md="2" offset-md="5">
        <b-form-input type="text" id="postcode" name="postcode" v-model="postcode"></b-form-input>
      </b-col>
    </b-row>
    </p>
    
    <p>
    <b-row>
        <b-col md="2" offset-md="5">
         <router-link :disabled="validatePostcode" :to="{name: 'pizza-chooser', params: {postCode:postcode}}" tag="button" >
                Choose ingredients!
         </router-link>
        </b-col>
    </b-row>
    </p>
  </b-container>
  </div>
</template>


<script>
    import Vue from "vue";
    import {
        BFormInput,
    } from "bootstrap-vue";

    Vue.component("b-form-input", BFormInput); //TODO: sprawdzic

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

<style scoped lang="scss">
button {
  margin: 40px 0 0;
  border-radius: 12px;
  background-color: #ffc244;

}


</style>