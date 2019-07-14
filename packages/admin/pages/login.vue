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
import { mapActions } from 'vuex'
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
      const user = await this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      })
      this.loading = false
      if (user) {
        if (user.isAdmin) {
          this.$router.push('/')
        } else {
          this.notification.danger({
            title: `Lỗi xác thực`,
            message: `Bạn không được phép truy cập khu vực này.`,
            duration: 2000,
          })
        }
      } else {
        this.notification.danger({
          title: `Lỗi xác thực`,
          message: `Vui lòng kiểm tra lại tài khoản và mật khẩu.`,
          duration: 2000,
        })
      }
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
