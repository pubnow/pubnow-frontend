<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="login-form-inner">
        <b-form-input v-model="username" placeholder="Enter username" class="email" />
        <b-form-input v-model="fullname" placeholder="Enter full name" class="email" />
        <b-form-input v-model="dob" placeholder="MM/dd/YYYY" class="email" />
        <b-form-input v-model="email" placeholder="Enter your email" class="email" />
        <b-form-input v-model="password" placeholder="Enter your password" class="password" />
        <b-button block variant="info">Register</b-button>
        <span>You have an account yet? <router-link to="/login">Login</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      fullname: '',
      dob: '',
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
