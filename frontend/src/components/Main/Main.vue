<template>
<div>
  <h1>メイン画面だ！</h1>
  <main-navbar />
  <main-table />
</div>
</template>



<script>
import Navbar from './Navbar.vue';
import Table from './Table.vue';

export default {
  name: 'Table',
  components: {
    'main-navbar': Navbar,
    'main-table': Table
  }
};
</script>



<style scoped>
</style>
