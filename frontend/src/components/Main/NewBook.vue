<template>
<div>
  <a @click="$emit('close')">閉じる</a>
  <form @submit.prevent="makeBook">
    <label for="title">題名</label>
    <input type="text" id="title" v-model="title" required>
    <label for="phonetic">読みがな</label>
    <input type="text" id="phonetic" v-model="phonetic">
    <label for="author">作者</label>
    <input type="text" id="author" v-model="author">
    <label for="volume">巻数</label>
    <input type="number" id="volume" v-model="volume">
    <label for="chapter">話数</label>
    <input type="number" id="chapter" v-model="chapter">
    <label for="status">状態</label>
    <input type="text" id="status" v-model="status">
    <button type="submit">作成</button>
  </form>
</div>
</template>



<script>
import store from '../../store';

export default {
  name: 'NewBook',
  data: function() {
    return {
      title: '',
      phonetic: '',
      author: '',
      volume: 1,
      chapter: 1,
      status: 'active'
    };
  },
  methods: {
    makeBook() {
      const book = {
        user_id: store.state.userId,
        title: this.title,
        phonetic: this.phonetic,
        author: this.author,
        volume: this.volume,
        chapter: this.chapter,
        status: this.status
      };
      this.$axios.post('/api/books', book).then(res => {
        this.$emit('new', res.data);
        this.$emit('close');
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>



<style scoped>
</style>
