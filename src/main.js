import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import Ingredients from './components/Ingredients.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: "history",
  routes: [
    { path: '/', name: 'app', component: App },
    { path: '/home', component: Home },
    { path: '/ingredients', component: Ingredients },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

