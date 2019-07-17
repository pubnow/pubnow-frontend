<template>
  <va-topbar class="nav-wrapper" theme="white">
    <div slot="left">
      <img class="mr-3" :src="require('@/assets/images/logo.svg')" />
      <va-input
        icon="search"
        width="lg"
        placeholder="Tìm kiếm theo nội dung, tác giả hoặc tag"
        iconStyle="solid"
      ></va-input>
    </div>
    <div slot="right">
      <va-icon v-if="user" type="bell" class="icon" iconStyle="regular" color="#97a0af" />
      <va-button type="primary" active class="write-btn" icon-before="feather-alt">
        <nuxt-link to="/bai-viet/tao-moi">Viết bài</nuxt-link>
      </va-button>
      <UserAvatar :user="user" />
    </div>
  </va-topbar>
</template>

<script>
import { mapGetters } from 'vuex'
import UserAvatar from './UserAvatar'

export default {
  components: {
    UserAvatar,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  mounted() {
    document.querySelector('.va-topbar-inner').classList.add('container')
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.nav-wrapper {
  @include box-shadow;
  .icon {
    font-size: 1.25em !important;
    margin-left: $unit !important;
  }

  .write-btn {
    margin-left: $unit !important;
    border: 2px solid $primary;
  }
}
</style>
