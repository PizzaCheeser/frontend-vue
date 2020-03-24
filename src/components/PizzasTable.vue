<template>
  <div>
    <div id="pagination-div">
      <b-pagination
        v-model="currentPage"
        align="right"
        pills
        :total-rows="rows"
        :per-page="perPage"
        size="lg"
        class="customPagination"
      ></b-pagination>
    </div>

    <b-table-simple
      hover
      small
      caption-top
      id="pizzas-table"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <b-thead head-variant="dark">
        <b-tr>
          <b-th class="column-name">
            Nr
          </b-th>
          <b-th class="column-name">
            Link
          </b-th>
          <b-th class="column-name">
            Nazwa pizzeri
          </b-th>
          <b-th class="column-name">
            Nazwa pizzy
          </b-th>
          <b-th class="column-name">
            Składniki
          </b-th>
          <b-th class="column-name">
            Cena i rozmiar
          </b-th>
        </b-tr>
        <b-tr
          v-for="(pizza, i) in dreamedSliced"
          v-bind:key="pizza.id"
          v-bind:id="i"
        >
          <b-td>{{ i + 1 + perPage * (currentPage - 1) }}</b-td>
          <b-td>
            <a v-bind:href="pizza['url']">Zamów tutaj!</a>
          </b-td>
          <b-td>{{ pizza["pizzeria_id"] }}</b-td>
          <b-td>{{ pizza["pizzeria_name"] }}</b-td>
          <b-td>{{ pizza["ingredients"] }}</b-td>

          <b-tr v-for="i in pizza.size_price" v-bind:key="i.size">
            <b-td>{{ i.size }}</b-td>
            <b-td>{{ i.price }} PLN</b-td>
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

export default {
  props: ["wanted", "notWanted", "postCode"],
  data() {
    return {
      dreamed: [],
      perPage: 10,
      currentPage: 1
    };
  },

  methods: {
    get_result_pizzas: function(currentWanted, currentNotWanted) {
      axios
        .post(config.API_URL + "get-pizzas", {
          must: currentWanted,
          must_not: currentNotWanted,
          code: this.postCode
        })
        .then(res => {
          this.dreamed = res.data;
        });
    }
  },
  watch: {
    wanted: function(wanted) {
      this.get_result_pizzas(wanted, this.notWanted);
    },
    notWanted: function(notWanted) {
      this.get_result_pizzas(this.wanted, notWanted);
    }
  },
  computed: {
    rows() {
      return this.dreamed.length;
    },
    dreamedSliced() {
      return this.dreamed.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  }
};
</script>
