import Vue from 'vue';
import VueRouter from 'vue-router';
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
    if (!store.state.loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }

  // ログイン済みなのにログイン画面開いたらメイン画面に飛ばす
  if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (store.state.loggedIn) {
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
