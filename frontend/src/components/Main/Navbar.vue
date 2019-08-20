<template>
<div class="navbar">
  <div class="left">
    <span>logo</span>
  </div>
  <div class="right">
    <a @click="addBook"><font-awesome-icon icon="plus" size="2x"/></a>
    <a @click="logout"><font-awesome-icon icon="cog" size="2x"/></a>
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
  .right {
    vertical-align: middle;
    a {
      margin: auto 0 auto 12px;
    }
  }
}
</style>
