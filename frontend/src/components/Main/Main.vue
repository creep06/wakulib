<template>
<div>
  <main-navbar />
  <main-table />
  <main-navbar-bottom />
</div>
</template>



<script>
import Navbar from './Navbar.vue';
import NavbarBottom from './NavbarBottom.vue';
import Table from './Table.vue';

export default {
  name: 'Table',
  components: {
    'main-navbar': Navbar,
    'main-table': Table,
    'main-navbar-bottom': NavbarBottom
  }
};
</script>



<style scoped>
</style>
