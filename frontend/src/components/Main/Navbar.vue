<template>
<div>
  <h1>Navbar</h1>
  <button @click="logout">ログアウト</button>
</div>
</template>



<script>
import store from '../../store';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$axios.post('/api/logout').then(res => {
        store.commit('LOGOUT');
        this.$router.push({path: '/login'});
      // eslint-disable-next-line
      }).catch(error => {
        //
      });
    }
  }
};
</script>



<style scoped>
</style>
