<template>
<div class="content">
  <vue-good-table :columns="columns" :rows="books"
    :fixed-header="true" max-height="calc(100vh - 100px)"
    styleClass="main-table">
    <template slot="table-row" slot-scope="props">
      <button v-if="props.column.field == 'edit'"
        @click="openEditBook(props.row.id)">編集</button>
      <div v-else-if="props.column.field == 'status'">
        <figure class="circle" :class="props.row.status"/>
          {{ props.row.status }}
      </div>
      <span v-else>{{ props.formattedRow[props.column.field] }}</span>
    </template>
  </vue-good-table>

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
import EventBus from './EventBus';

export default {
  name: 'Table',
  components: {
    'new-book': NewBook
  },
  data: function() {
    return {
      columns: [
        {
          label: '名前',
          field: 'title',
          filterOptions: {
            enabled: true
          },
          width: '33%'
        },
        {
          label: '作者',
          field: 'author',
          filterOptions: {
            enabled: true
          },
          width: '22%'
        },
        {
          label: '巻数',
          field: 'volume',
          filterOptions: {
            enabled: true
          },
          width: '5%'
        },
        {
          label: '話数',
          field: 'chapter',
          filterOptions: {
            enabled: true
          },
          width: '5%'
        },
        {
          label: '状態',
          field: 'status',
          filterOptions: {
            enabled: true,
            filterDropdownItems: [
              'active',
              'inactive',
              'complete'
            ]
          },
          width: '12%'
        },
        {
          label: '更新',
          field: 'updated_at',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd HH:mm:ss',
          dateOutputFormat: 'yy/MM/dd HH:mm',
          width: '17%'
        },
        {
          label: '編集',
          field: 'edit',
          width: '5%'
        }
      ],
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
        this.edit.updated_at = res.data.updated_at;
        this.closeEditBook();
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.init();
    EventBus.$on('addBook', () => {
      this.openNewBook();
    });
  }
};
</script>



<style lang="scss" scoped>
.content {
  width: 100%;
  height: calc(100vh - 100px);
}

::v-deep table.main-table {
  color: #d5d5d8;
  margin: 0 auto;
  border-collapse: collapse;
  th {
    border-style: none solid;
    border-width: 3px;
    border-color: #26262F;
    background-color: #2B2C34;
    padding: 12px;
    &:nth-child(1), &:nth-last-child(1) {
      border-style: none;
    }
  }
  td {
    @extend th;
  }
  tr:nth-child(odd) td {
    background-color: #2E2F3B;
  }
}

.circle {
  display: inline-block;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin: 0;
  &.active {
    background: radial-gradient(circle at 40% -35%,#deefef,#78f678 10%,#059405 50%,#064527 100%);
  }
  &.inactive {
    background: radial-gradient(circle at 40% -25%, #efdeef, #f68881 10%, #940505 80%, #333333 100%);
  }
  &.complete {
    background: radial-gradient(circle at 40% -25%, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
  }
}

::v-deep .v--modal {
  background-color: #111111;
}
</style>
