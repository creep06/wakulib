<template>
<div class="navbar">
  <div class="left">
    <span>logo</span>
  </div>
  <div class="right">
    <button @click="addBook">本追加</button>
    <button @click="logout">ログアウト</button>
  </div>
</div>
</template>



<script>
import store from '../../store';
import EventBus from './EventBus';

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
    },
    addBook() {
      EventBus.$emit('addBook');
    }
  }
};
</script>



<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 12px;
  background-color: #282930;
}
</style>
