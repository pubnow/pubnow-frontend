<template>
  <div class="form-wrapper d-flex align-items-center justify-content-center">
    <va-card class="login-form" :elevation="3">
      <va-form type="vertical">
        <img class="logo" :src="require('@/assets/images/logo.svg')" alt="Pubnow logo" />
        <div class="form-body">
          <va-form-item label="Tên tài khoản" need>
            <va-input v-model="username" class="username" required />
          </va-form-item>
          <va-form-item label="Mật khẩu" need>
            <va-input type="password" v-model="password" class="password" required />
          </va-form-item>
        </div>

        <div class="form-footer va-col-sm-12">
          <va-button class="forgot" href="#">Bạn quên mật khẩu?</va-button>
          <va-button type="primary" :disabled="loading" :loading="loading" @click="login">
            <span>Đăng nhập</span>
          </va-button>
        </div>
      </va-form>
    </va-card>
  </div>
</template>

<script>
import { delay } from 'bluebird'
import Cookie from 'js-cookie'

export default {
  middleware: 'guest',
  layout: 'empty',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      await delay(1000)
      const auth = {
        user: this.username,
        token: 'kh@banh',
      }
      Cookie.set('auth', auth)
      this.$store.commit('auth/setAuth', auth)
      this.loading = false
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.form-wrapper {
  height: 100vh;
}

.login-form {
  width: 365px;
  background-color: $white;
  .logo {
    display: block;
    width: 3 * $unit;
    height: 3 * $unit;
    margin: $unit auto;
  }

  form {
    width: 100%;
  }

  .form-body {
    width: 100%;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: $unit * 1.5 auto $unit;
    width: 100%;

    .forgot {
      font-weight: 500;
      font-style: normal;
      text-decoration: none;
    }

    .login-btn {
      font-weight: 900;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}

::placeholder {
  color: $text;
}
</style>
