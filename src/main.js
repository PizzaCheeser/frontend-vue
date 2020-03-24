import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import PizzaChooserPage from "./components/PizzaChooserPage.vue";
import Home from "./components/Home.vue";
import IngredientsTable from "./components/IngredientsTable.vue";
import PizzasTable from "./components/PizzasTable.vue";
import PostCodeField from "./components/PostCodeField";
import Logo from "./components/Logo";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuetify from "vuetify";
import vuetify from "./plugins/vuetify";

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: Home },
    {
      path: "/choose/:postCode",
      component: PizzaChooserPage,
      name: "pizza-chooser",
      props: true
    },
    { path: "/ingredients-table", component: IngredientsTable },
    { path: "/pizzas-table", component: PizzasTable },
    { path: "/postcode", component: PostCodeField },
    { path: "/logo", component: Logo }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

