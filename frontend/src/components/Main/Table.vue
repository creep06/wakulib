<template>
<div class="content">
  <h1>Table</h1>

  <table>
    <thead>
      <tr>
        <th class="clm1">名前</th>
        <th class="clm2">著者</th>
        <th class="clm3">巻数</th>
        <th class="clm4">話数</th>
        <th class="clm5">状態</th>
        <th class="clm6">編集</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="b in books" :key="b.id">
        <td class="clm1">{{ b.title }}</td>
        <td class="clm2">{{ b.author }}</td>
        <td class="clm3">{{ b.volume }}</td>
        <td class="clm4">{{ b.chapter }}</td>
        <td class="clm5">{{ b.status }}</td>
        <td class="clm6"><button @click="openEditBook(b.id)">編集</button></td>
      </tr>
    </tbody>
  </table>

  <button @click="openNewBook">本追加</button>

  <modal name="new-book" width="80%" height="80%"
         :delay=100 transition="nice-modal-fade">
    <new-book @close="closeNewBook" @new="getNewBook"/>
  </modal>

  <modal name="edit-book" width="80%" height="80%"
         :delay=100 transition="nice-modal-fade">
    <a @click="closeEditBook">閉じる</a>
    <form @submit.prevent="patchEditBook">
      <label for="title">題名</label>
      <input type="text" id="title" v-model="editTmp.title" required>
      <label for="phonetic">読みがな</label>
      <input type="text" id="phonetic" v-model="editTmp.phonetic">
      <label for="author">作者</label>
      <input type="text" id="author" v-model="editTmp.author">
      <label for="volume">巻数</label>
      <input type="number" id="volume" v-model="editTmp.volume">
      <label for="chapter">話数</label>
      <input type="number" id="chapter" v-model="editTmp.chapter">
      <label for="status">状態</label>
      <input type="text" id="status" v-model="editTmp.status">
      <button type="submit">適用</button>
    </form>
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
      books: [],
      // 編集予定の本のアドレス
      edit: {},
      // 編集中の本の仮情報(deep copy)
      editTmp: {}
    };
  },
  methods: {
    init() {
      this.$axios.get('/api/books/all/' + store.state.userId)
      .then(res => {
        this.books = res.data;
      }).catch(error => {
        console.log(error);
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
    },
    openEditBook(id) {
      this.edit = this.books.find(b => b.id === id);
      this.editTmp = JSON.parse(JSON.stringify(this.edit));
      this.$modal.show('edit-book');

      console.log(this.editTmp);
    },
    closeEditBook() {
      this.$modal.hide('edit-book');
    },
    patchEditBook() {
      this.editTmp.user_id = store.state.userId;
      this.$axios.patch('/api/books/' + this.editTmp.id, this.editTmp).then(res => {
        this.edit.title = res.data.title;
        this.edit.phonetic = res.data.phonetic;
        this.edit.author = res.data.author;
        this.edit.volume = res.data.volume;
        this.edit.chapter = res.data.chapter;
        this.edit.status = res.data.status;
        this.closeEditBook();
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>



<style lang="scss" scoped>
.content {
  width: 100%;
  text-align: center;
}

table {
  color: #d5d5d8;
  width: 95%;
  margin: 0 auto;
  border-collapse: collapse;
  th {
    height: 50px;
    border-style: none solid;
    border-width: 3px;
    border-color: #26262F;
    background-color: #2B2C34;
    table-layout: fixed;
  }
  td {
    @extend th;
    height: 40px;
  }
  .clm1 {
    border-style: none;
    width: 100000px;
  }
  .clm2 {
    width: 20%;
  }
  .clm3 {
    width: 10%;
  }
  .clm4 {
    width: 11%;
  }
  .clm5 {
    width: 12%;
  }
  .clm6 {
    border-style: none;
    width: 17%;
  }
  tr:nth-child(odd) td {
    background-color: #2E2F39;
  }
  thead {
    display: block;
  }
  tbody {
    display: block;
    overflow-y: scroll;
    height: 500px;
  }
}

::v-deep .v--modal {
  background-color: #111111;
}
</style>
