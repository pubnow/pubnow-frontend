<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="login-form-inner">
        <b-form-input v-model="email" placeholder="Enter your email" class="email" />
        <b-form-input v-model="password" placeholder="Enter your password" class="password" />
        <b-button block variant="info">Login</b-button>
        <span>You have not an account yet? <router-link to="/register">Register</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  height: 100vh;
}
.login-form-inner {
  max-width: 420px;
  padding: 200px 20px 20px 20px;
  margin: 0 auto;
}
.email, .password {
  margin-bottom: 12px;
}
</style>
