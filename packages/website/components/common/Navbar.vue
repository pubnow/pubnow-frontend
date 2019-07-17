<template>
  <va-topbar class="nav-wrapper" theme="white">
    <div slot="left">
      <nuxt-link to="/">
        <img class="mr-3" :src="require('@/assets/images/logo.svg')" />
      </nuxt-link>

      <va-input
        icon="search"
        width="lg"
        placeholder="Tìm kiếm theo nội dung, tác giả hoặc tag"
        iconStyle="solid"
      ></va-input>
    </div>
    <div slot="right">
      <va-icon v-if="user" type="bell" class="icon" iconStyle="regular" color="#97a0af" />
      <nuxt-link class="write-btn" to="/bai-viet/tao-moi">
        <va-button type="primary" active icon-before="feather-alt">Viết bài</va-button>
      </nuxt-link>
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
    cursor: pointer;
  }

  .write-btn {
    margin-left: $unit !important;
    border: 1px solid $primary;
    border-radius: 5px;
    &:hover {
      text-decoration: none !important;
    }
    a {
      cursor: pointer;
    }
  }
}
</style>
