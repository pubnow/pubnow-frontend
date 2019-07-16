<template>
  <no-ssr>
    <div class="login-form-inner">
      <BackToHome />
      <va-form ref="form" type="vertical">
        <img class="logo mx-auto d-block mb-4" :src="require('@/assets/images/logo.svg')" />
        <va-form-item label="Tài khoản" need>
          <va-input
            name="username"
            v-model="username"
            size="lg"
            placeholder="Tài khoản"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập tài khoản'}]"
          />
        </va-form-item>
        <va-form-item label="Mật khẩu" need>
          <va-input
            name="password"
            v-model="password"
            type="password"
            size="lg"
            placeholder="Mật khẩu"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập mật khẩu'}]"
          />
        </va-form-item>
        <va-form-item>
          <nuxt-link to="#" class="forgot">Bạn quên mật khẩu?</nuxt-link>
        </va-form-item>
        <va-form-item>
          <va-button
            type="primary"
            size="lg"
            block
            @click="submit"
            :disabled="$wait.is('auth.login')"
            :loading="$wait.is('auth.login')"
          >Đăng nhập</va-button>
        </va-form-item>
        <va-form-item>
          <span class="mr-1">Không có tài khoản?</span>
          <nuxt-link to="dang-ky" class="register">Đăng ký ngay</nuxt-link>
        </va-form-item>
      </va-form>
    </div>
  </no-ssr>
</template>

<script>
import { BackToHome } from '@/components/common'

export default {
  layout: 'empty',
  middleware: ['guest'],
  components: {
    BackToHome,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$refs.form.validateFields(async result => {
        if (result.isvalid) {
          const ok = await this.$store.dispatch('auth/login', {
            username: this.username,
            password: this.password,
          })
          if (ok) {
            this.$router.push('/')
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.login-form-inner {
  width: 365px;
  margin: 200px auto;

  .logo {
    height: $side-menu-w;
    width: $side-menu-w;
  }

  .forgot {
    color: $text;
  }
  .forgot,
  .register {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
