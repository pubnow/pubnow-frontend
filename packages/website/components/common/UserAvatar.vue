<template>
  <div v-if="user">
    <div class="avatar">
      <img v-if="user.avatar" class="avatar-img" :src="user.avatar" />
      <div v-else class="placeholder">
        <va-icon type="user" size="1.25em" iconStyle="regular" color="#97a0af" />
      </div>
    </div>
  </div>
  <div class="auth-nav" v-else>
    <va-button class="auth-btn" type="subtle">
      <nuxt-link to="/dang-ky">Đăng ký</nuxt-link>
    </va-button>
    <span>|</span>
    <va-button class="auth-btn" type="subtle">
      <nuxt-link to="/dang-nhap">Đăng nhập</nuxt-link>
    </va-button>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.avatar {
  height: $unit * 2;
  width: $unit * 2;
  margin-left: $unit;
  cursor: pointer;
  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fafb;
    border: 2px solid #e0e2e6;
    border-radius: 20px;
  }
}

.auth-nav {
  margin-left: $unit / 2;
  .auth-btn {
    a {
      color: $text-nav;
    }
  }
}
</style>
