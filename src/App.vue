<template>
  <v-app>
  <div id="app">
      <router-view/>
  </div>
  </v-app>
</template>

<script>


export default {
  name: "app",
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 60px 0 60px;
}
</style>

<style>

.page-item.active .page-link{
  background-color: #ffc244 !important;
}

.table .thead-dark th{
  background-color: #ffc244 !important;
}

body {
  margin: 40px;
}

ul.pagination {
  display: flex ;
}

.column-name{
  text-align: center;
}

#pagination-div {
  display: inline-block;
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
  width: 15px;
  height: 15px;
  padding: 1px 1px;
  font-size: 7px;
  line-height: 0.33;
  border-radius: 30px;
  margin-right: 2px;
  margin-left: 1px;
  float: right;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

ul {
  column-count: 3;
  column-gap: 1px;
  list-style-type: none;
  text-align: left;
  width: 100%;
}

li {
  width: 80%;
  margin: 0px;
}

</style>