import Vue from 'vue'
import VueRouter from 'vue-router'

require('./bootstrap');

Vue.use(VueRouter)

Vue.component('navbar', require('./components/Navbar.vue'))

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('./components/Index.vue')
    },
    {
      path: '/main',
      component: require('./components/Main/Main.vue')
    }
  ]
})

const app = new Vue({
  el: '#app',
  router
});
