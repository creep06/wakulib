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
    <label for="completed">完結</label>
    <input type="checkbox" id="completed" v-model="completed">
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
      completed: false
    };
  },
  methods: {
    makeBook() {
      this.$axios.post('/api/books', {
        user_id: store.state.userId,
        title: this.title,
        phonetic: this.phonetic,
        author: this.author,
        volume: this.volume,
        chapter: this.chapter,
        completed: this.completed
      }).then(res => {
        console.log("New book successfully created");
      }).catch(error => {
        //
      });
      this.$emit('close');
    }
  }
};
</script>



<style scoped>
</style>
