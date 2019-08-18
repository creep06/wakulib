<template>
<div>
  <h1>Table</h1>
  <table>
    <thead>
      <tr>
        <th>名前</th>
        <th>著者</th>
        <th>巻数</th>
        <th>話数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="b in books" :key="b.id">
        <th>{{ b.title }}</th>
        <th>{{ b.author }}</th>
        <th>{{ b.volume }}</th>
        <th>{{ b.chapter }}</th>
      </tr>
    </tbody>
  </table>
</div>
</template>



<script>
import store from '../../store';

export default {
  name: 'Table',
  data: function() {
    return {
      books: []
    };
  },
  methods: {
    init() {
      this.$axios.get('/api/books/all/' + store.state.userId)
      .then(res => {
        res.data.forEach(book => {
          this.books.push({
            'id': book.id,
            'title': book.title,
            'phonetic': book.phonetic,
            'author': book.author,
            'volume': book.volume,
            'chapter': book.chapeter,
            'completed': book.completed
          });
        });
      // eslint-disable-next-line
      }).catch(error => {
        //
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>



<style scoped>
</style>
