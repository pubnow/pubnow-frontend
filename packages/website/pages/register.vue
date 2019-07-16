<template>
  <no-ssr>
    <div class="login-form-inner">
      <back-to-home />
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
        <va-form-item label="Email" need>
          <va-input
            name="email"
            v-model="email"
            size="lg"
            placeholder="Email"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập email'}]"
          />
        </va-form-item>
        <va-form-item label="Tên đầy đủ" need>
          <va-input
            name="name"
            v-model="name"
            size="lg"
            placeholder="Tên đầy đủ"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập tên'}]"
          />
        </va-form-item>
        <va-form-item label="Mật khẩu" need>
          <va-input
            name="password"
            v-model="password"
            type="password"
            size="lg"
            placeholder="Mật khẩu"
            :rules="[{type:'required', tip:'Sorry, I need to know your name'}]"
          />
        </va-form-item>
        <va-form-item label="Nhập lại mật khẩu" need :custom-validate="reCheckPassword">
          <va-input
            name="repassword"
            v-model="repassword"
            type="password"
            size="lg"
            placeholder="Nhập lại mật khẩu"
          />
        </va-form-item>
        <va-form-item>
          <va-button block type="primary" size="lg" @click="submit">Đăng ký</va-button>
        </va-form-item>
        <va-form-item>
          <span class="mr-1">Bạn đã có tài khoản?</span>
          <nuxt-link to="login" class="register">Đăng nhập ngay</nuxt-link>
        </va-form-item>
      </va-form>
    </div>
  </no-ssr>
</template>

<script>
import { BackToHome } from '@/components/common'

export default {
  layout: 'empty',
  components: {
    BackToHome,
  },
  data() {
    return {
      username: '',
      email: '',
      name: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    submit() {
      this.$refs.form.validateFields(result => {
        console.log(result)
      })
    },
    reCheckPassword(val) {},
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.login-form-inner {
  width: 365px;
  margin: 150px auto;

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
