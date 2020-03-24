<template>
  <div class="hello">
    <v-container>
      <v-row offset-md="4" md="2">
        <v-col md="2" offset-md="5">
          <v-text-field
            label="Kod pocztowy"
            id="postcode"
            class="postcode"
            v-model="postcode"
            :error="validatePostcode"
            filled
            rounded
          ></v-text-field>
          <v-btn
            rounded
            large
            color="primary"
            :disabled="validatePostcode"
            :to="{ name: 'pizza-chooser', params: { postCode: postcode } }"
          >
            Dalej ➡
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "number",
      postcode: "30-122"
    };
  },

  computed: {
    validatePostcode: function() {
      let re = /^\d{2}-\d{3}$/gm;
      let isValid = re.test(this.postcode);
      return !isValid;
    }
  }
};
</script>
