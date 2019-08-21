<template>
<div class="navbar">
  <div class="left">
    <span>logo</span>
  </div>
  <div class="right">
    <a @click="addBook" title="本の追加"><i class="fas fa-plus icon"></i></a>
    <a @click="logout" title="設定"><i class="fas fa-cog icon"></i></a>
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
  a {
    cursor: pointer;
    i.icon {
      font-size: 40px;
      margin-left: 12px;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
}
</style>
