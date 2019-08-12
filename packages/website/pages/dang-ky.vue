<template>
  <no-ssr>
    <div class="login-form-inner">
      <BackToHome />
      <va-form ref="form" type="vertical">
        <img class="logo mx-auto d-block mb-4" :src="require('@/assets/images/logo.svg')" />
        <va-form-item label="Tên tài khoản" need>
          <va-input
            v-model="username"
            name="username"
            size="lg"
            placeholder="Tên tài khoản"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập tên  tài khoản'}]"
            :custom-validate="checkUsername"
          />
        </va-form-item>
        <va-form-item label="Email" need>
          <va-input
            name="email"
            v-model="email"
            size="lg"
            placeholder="Email"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập email'}, {type:'email', tip:'Bạn vui lòng nhập email'}]"
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
            :rules="[{type:'required', tip:'Bạn vui lòng nhập mật khẩu'}]"
          />
        </va-form-item>
        <va-form-item label="Nhập lại mật khẩu" need>
          <va-input
            name="repassword"
            v-model="repassword"
            type="password"
            size="lg"
            placeholder="Nhập lại mật khẩu"
            :custom-validate="reCheckPassword"
            :rules="[{type:'required', tip:'Bạn vui lòng nhập lại mật khẩu'}]"
          />
        </va-form-item>
        <va-form-item>
          <va-button
            block
            type="primary"
            size="lg"
            @click="submit"
            :disabled="$wait.is('auth.register')"
            :loading="$wait.is('auth.register')"
          >Đăng ký</va-button>
        </va-form-item>
        <va-form-item>
          <span class="mr-1">Bạn đã có tài khoản?</span>
          <nuxt-link to="dang-nhap" class="register">Đăng nhập ngay</nuxt-link>
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
      email: '',
      name: '',
      password: '',
      repassword: '',
    }
  },
  methods: {
    submit() {
      this.$refs.form.validateFields(async result => {
        if (result.isvalid) {
          const ok = await this.$store.dispatch('auth/register', {
            username: this.username,
            password: this.password,
            name: this.name,
            email: this.email,
          })
          if (ok) {
            this.notification.info({
              title: `Đăng ký thành công`,
              message: `Cảm ơn bạn đã sử dụng Pubnow. Bạn đang được chuyển về Trang chủ.`,
              duration: 1690,
              onHide: () => {
                this.$router.push('/')
              },
            })
          } else {
            this.notification.danger({
              title: `Lỗi đăng ký`,
              message: `Vui lòng kiểm tra lại thông tin đăng ký`,
              duration: 2000,
            })
          }
        }
      })
    },
    reCheckPassword(val) {
      if (val !== this.password) {
        return {
          validStatus: 'error',
          tips: 'Mật khẩu không khớp.',
        }
      }
      return {
        validStatus: 'success',
      }
    },
    checkUsername(val) {
      const regex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/g
      if (!regex.test(val)) {
        return {
          validStatus: 'error',
        }
      }
      return {
        validStatus: 'success',
      }
    },
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
