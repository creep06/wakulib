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

  <button @click="openNewBook">本追加</button>

  <modal name="new-book" width="80%" height="80%"
         :delay=100 transition="nice-modal-fade">
    <new-book @close="closeNewBook" @new="getNewBook"/>
  </modal>
</div>
</template>



<script>
import store from '../../store';
import NewBook from './NewBook.vue';

export default {
  name: 'Table',
  components: {
    'new-book': NewBook
  },
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
            'chapter': book.chapter,
            'completed': book.completed
          });
        });
      // eslint-disable-next-line
      }).catch(error => {
        //
      });
    },
    openNewBook() {
      this.$modal.show('new-book');
    },
    closeNewBook() {
      this.$modal.hide('new-book');
    },
    getNewBook(book) {
      this.books.push(book);
    }
  },
  mounted() {
    this.init();
  }
};
</script>



<style scoped>
/deep/ .v--modal {
  background-color: #111111;
}
</style>
