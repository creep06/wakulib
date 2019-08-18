import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import initialState from './initialState';

Vue.use(Vuex);

const mutations = {
  LOGIN(state, payload) {
    state.loggedIn = true;
    state.userId = payload.user_id;
    state.token = payload.token;
  },
  LOGOUT(state) {
    Object.assign(state, JSON.parse(localStorage.getItem('initialState')));
  }
};

export default new Vuex.Store({
  state: initialState,
  mutations: mutations,
  actions: {},
  getters: {},
  plugins: [createPersistedState({
    key: 'wakulib'
  })]
});
