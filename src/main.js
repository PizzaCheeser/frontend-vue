import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";

import PizzaChooserPage from "./components/PizzaChooserPage.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/choose/:postCode",
      component: PizzaChooserPage,
      name: "pizza-chooser",
      props: true
    }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
