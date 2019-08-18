<template>
<div>
  <p v-show="isError">認証に失敗しました。</p>
  <form @submit.prevent="login">
    <h1>ログイン</h1>
    メールアドレス: <input type="email" v-model="email">
    パスワード: <input type="password" v-model="password">
    <button type="submit" class="btn btn-primary">ログイン</button>
  </form>
</div>
</template>



<script>
import store from '../store';

export default {
  name: 'Login',
  data () {
    return {
      isError: false,
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$axios.post('/api/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        const user_id = res.data.user_id;
        const token = res.data.access_token;
        this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        store.commit('LOGIN', {
          user_id: user_id,
          token: token
        });
        this.$router.push({path: '/'});
      // eslint-disable-next-line
      }).catch(error => {
        this.isError = true;
      });
    }
  }
};
</script>



<style scoped>
</style>
