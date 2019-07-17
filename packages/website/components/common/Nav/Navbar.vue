<template>
  <nav class="nav-wrapper navbar navbar-expand-lg navbar-light bg-white">
    <b-container>
      <b-navbar-nav class="d-flex align-items-center">
        <nuxt-link to="/">
          <img class="mr-2" :src="require('@/assets/images/logo.svg')" />
        </nuxt-link>
        <va-input
          icon="search"
          width="xl"
          placeholder="Tìm kiếm theo nội dung, tác giả hoặc tag"
          iconStyle="solid"
        ></va-input>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto d-flex align-items-center">
        <va-icon v-if="user" type="bell" class="icon" iconStyle="regular" color="#97a0af" />
        <nuxt-link class="write-btn" to="/bai-viet/tao-moi">
          <va-button type="primary" icon-before="feather-alt">Viết bài</va-button>
        </nuxt-link>
        <UserAvatar :user="user" />
      </b-navbar-nav>
    </b-container>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import UserAvatar from '../UserAvatar'

export default {
  components: {
    UserAvatar,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      categories: 'category/categories',
    }),
    randomCategories() {
      return take(shuffle(this.categories), 6)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.nav-wrapper {
  .icon {
    font-size: 1.25em !important;
    margin-left: $unit !important;
    cursor: pointer;
  }

  .write-btn {
    margin-left: $unit !important;
    &:hover {
      text-decoration: none !important;
    }
    a {
      cursor: pointer;
    }
  }
}
</style>
