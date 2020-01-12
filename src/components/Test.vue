<template>
  <div>
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />

    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Wanted</b-th>
          <b-th>All ingredients</b-th>
          <b-th>Not Wanted</b-th>
        </b-tr>

        <b-tr>
          <b-td>
            <li v-for="want in wanted" :key="want" :value="want">
              {{want}}
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
            <li v-for="ingredient in ingredients" :key="ingredient" :value="ingredient">
              {{ingredient}}
              <button
                value="testest"
                type="button"
                v-on:click="add(ingredient)"
                class="btn btn-info btn-circle btn-lg"
              >
                <i class="glyphicon glyphicon-ok"></i>
              </button>
              <button
                type="button"
                v-on:click="remove(ingredient)"
                class="btn btn-warning btn-circle btn-lg"
              >
                <i class="glyphicon glyphicon-remove"></i>
              </button>
            </li>
          </b-td>

          <b-td>
            <li v-for="notwant in notwanted" :key="notwant" :value="notwant">
              {{notwant}}
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
  name: "Test",

  data() {
    return {
      wanted: [], // Must be an array reference!
      notwanted: [],
      ingredients: ["ser", "pomidor", "papryka", "mleko"]
    };
  },
  //props:{ingredients:["mleko", "ser"]},
  methods: {
    add(ingredient) {
      this.wanted.push(ingredient);
      this.ingredients = this.ingredients.filter(function(e) {
        return e !== ingredient;
      });
      console.log(this.wanted);
      return this.wanted;
    },
    remove(ingredient) {
      this.notwanted.push(ingredient);
      //this.ingredients.pop(ingredient)
      this.ingredients = this.ingredients.filter(function(e) {
        return e !== ingredient;
      });
      console.log(this.notwanted);
      return this.notwanted;
    },
    returnToAll(ingredient, arg) {
      this.ingredients.push(ingredient);
      if (arg === "wanted") {
        this.wanted = this.wanted.filter(function(e) {
          return e !== ingredient;
        });
        return this.wanted;
      } else if (arg === "notwanted") {
        this.notwanted = this.notwanted.filter(function(e) {
          return e !== ingredient;
        });
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
  }
};
</script>



<style>
body {
  margin: 40px;
}

.btn.btn-warning {
  color: white;
  background-color: red;
  border-color: red;
}

.btn.btn-info {
  background-color: green;
}

.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circle.btn-lg {
  width: 20px;
  height: 20px;
  padding: 2px 2px;
  font-size: 7px;
  line-height: 0.33;
  border-radius: 30px;
  margin-right: 3px;
  margin-left: 5px;
}
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}
</style>
