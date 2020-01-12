
import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import Ingredients from './components/Ingredients.vue';
import Home from './components/Home.vue';
import Test from './components/Test.vue';
import Hello2 from './components/Hello2.vue';


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  //mode: "history",
  routes: [
    { path: '/', name: 'app', component: App },
    { path: '/home', component: Home },
    { path: '/ingredients', component: Ingredients },
    { path: '/test', component: Test },
    { path: '/hello2', component: Hello2 },


  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

