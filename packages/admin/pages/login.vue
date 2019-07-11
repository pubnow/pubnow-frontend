<template>
  <b-container>
    <div class="form-wrapper d-flex align-items-center justify-content-center">
      <form class="login-form">
        <img class="logo" :src="require('@/assets/images/logo.svg')" alt="Pubnow logo" />
        <b-form-group>
          <b-form-input v-model="username" placeholder="Tên tài khoản" class="username" required />
        </b-form-group>
        <b-form-group>
          <b-form-input
            type="password"
            v-model="password"
            placeholder="Mật khẩu"
            class="password"
            required
          />
        </b-form-group>

        <div class="form-footer">
          <a class="forgot" href="#">Bạn quên mật khẩu?</a>
          <b-button
            type="submit"
            class="login-btn"
            variant="primary"
            :disabled="loading"
            @click="login"
          >
            <b-spinner small v-if="loading"></b-spinner>
            <span :class="loading && 'ml-1'">Đăng nhập</span>
          </b-button>
        </div>
      </form>
    </div>
  </b-container>
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
  width: 450px;
  background-color: $white;
  @include box-shadow;
  @include radius-md;
  padding: 48px 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: $side-menu-w;
    height: $side-menu-w;
    margin-bottom: 30px;
  }

  .form-group {
    width: 100%;
    .username,
    .password {
      border-color: $border;
      border-width: 2px;
      @include radius-sm;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;

    .forgot {
      font-weight: 500;
      font-style: normal;
      text-decoration: none;
    }

    .login-btn {
      height: 50px;
      padding-left: 30px;
      padding-right: 30px;
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
