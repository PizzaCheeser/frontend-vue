<template>
  <div>
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />

    <div id="pagination-div">
      <b-pagination
        v-model="currentPage"
        align="right"
        pills
        :total-rows="rows"
        :per-page="perPage"
        size="lg"
      ></b-pagination>
    </div>


    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th class="column-name">Wanted</b-th>
          <b-th class="column-name">All ingredients</b-th>
          <b-th class="column-name">Not Wanted</b-th>
        </b-tr>

        <b-tr>
          <b-td>
            <li v-for="want in wanted" :key="want" :value="want">
              {{ want }}
              <button
                type="button"
                v-on:click="returnToAll(want, 'wanted')"
                class="btn btn-warning btn-circle btn-lg"
              >
                <i class="glyphicon glyphicon-remove"></i>
              </button>
            </li>
          </b-td>

          <b-td>
            <ul>
              <li
                v-for="ingredient in SlicedIngredients"
                :key="ingredient"
                :value="ingredient"
              >
                {{ ingredient }}

                <button
                  type="button"
                  v-on:click="remove(ingredient)"
                  class="btn btn-warning btn-circle btn-lg"
                >
                  <i class="glyphicon glyphicon-remove"></i>
                </button>
                <button
                  value="testest"
                  type="button"
                  v-on:click="add(ingredient)"
                  class="btn btn-info btn-circle btn-lg"
                >
                  <i class="glyphicon glyphicon-ok"></i>
                </button>
              </li>
            </ul>
          </b-td>

          <b-td>
            <li v-for="notwant in notwanted" :key="notwant" :value="notwant">
              {{ notwant }}
              <button
                type="button"
                v-on:click="returnToAll(notwant, 'notwanted')"
                class="btn btn-warning btn-circle btn-lg"
              >
                <i class="glyphicon glyphicon-remove"></i>
              </button>
            </li>
          </b-td>
        </b-tr>
      </b-thead>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: "IngredientsTable",
  props: ["ingredients"],

  data() {
    return {
      wanted: [],
      notwanted: [],
      perPage: 60,
      currentPage: 1
    };
  },
  methods: {
    add(ingredient) {
      this.wanted.push(ingredient);
      let localIngredients = this.ingredients.filter(function(e) {
        return e !== ingredient;
      });
      this.$emit("wanted", this.wanted);
      this.$emit("ingredients", localIngredients);

      return this.wanted;
    },
    remove(ingredient) {
      this.notwanted.push(ingredient);
      //this.ingredients.pop(ingredient)
      let localIngredients = this.ingredients.filter(function(e) {
        return e !== ingredient;
      });
      this.$emit("notwanted", this.notwanted);
      this.$emit("ingredients", localIngredients);

      return this.notwanted;
    },
    returnToAll(ingredient, arg) {
      let localIngredients = this.ingredients;
      localIngredients.push(ingredient);
      this.$emit("ingredients", localIngredients);

      if (arg === "wanted") {
        this.wanted = this.wanted.filter(function(e) {
          return e !== ingredient;
        });
        this.$emit("wanted", this.wanted);
        return this.wanted;
      } else if (arg === "notwanted") {
        this.notwanted = this.notwanted.filter(function(e) {
          return e !== ingredient;
        });
        this.$emit("notwanted", this.notwanted);
        return this.notwanted;
      } else return 1;
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
    );
    document.head.appendChild(recaptchaScript);

    let recaptchaScript2 = document.createElement("script");
    recaptchaScript2.setAttribute(
      "src",
      "//code.jquery.com/jquery-1.11.1.min.js"
    );
    document.head.appendChild(recaptchaScript2);
  },
    computed: {
    rows() {
      if (!this.ingredients){
        return 0
      }
      return this.ingredients.length;
    },
    SlicedIngredients() {
      if (!this.ingredients){
        return null;
      }
      return this.ingredients.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  }
};
</script>

