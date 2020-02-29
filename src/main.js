import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import PizzaChooserPage from './components/PizzaChooserPage.vue';
import Home from './components/Home.vue';
import IngredientsTable from './components/IngredientsTable.vue';
import PizzasTable from './components/PizzasTable.vue';
import PostCodeField from './components/PostCodeField';


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: [
    //{ path: '/', name: 'app', component: App },
    { path: '/', component: Home },
    { path: '/choose', component: PizzaChooserPage },
    { path: '/ingredients-table', component: IngredientsTable },
    { path: '/pizzas-table', component: PizzasTable },
    { path: '/postcode', component: PostCodeField },



  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

