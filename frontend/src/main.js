import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import initialState from './initialState';
import VModal from 'vue-js-modal';
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

window.state = store.state;

Vue.prototype.$axios = axios;

Vue.use(Vuex);
Vue.use(VModal);
Vue.use(VueGoodTablePlugin);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

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
