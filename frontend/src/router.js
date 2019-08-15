import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './components/Main/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
