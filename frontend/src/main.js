import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import initialState from './initialState';
import VModal from 'vue-js-modal';

window.state = store.state;

Vue.prototype.$axios = axios;

Vue.use(Vuex);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  created() {
    localStorage.setItem('initialState', JSON.stringify(initialState));
    if (store.state.loggedIn) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token;
    }
  }
}).$mount('#app');
