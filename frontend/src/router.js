import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import axios from 'axios';
import Main from './components/Main/Main.vue';
import Login from './components/Login.vue';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresNoAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // ログインしてないのにメイン開こうとしたら認証
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isLogin === false) {
      if (VueCookies.isKey('TOKEN')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('TOKEN');
        store.state.isLogin = true;
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        });
      }
    } else {
      next();
    }
  } else {
    next();
  }

  // ログイン済みなのにログイン画面開いたらメイン画面に飛ばす
  if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (VueCookies.isKey('TOKEN')) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + VueCookies.get('TOKEN');
      store.state.isLogin = true;
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }

});

export default router;
