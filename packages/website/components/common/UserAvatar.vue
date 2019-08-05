<template>
  <div v-if="user" class="user-wrap">
    <router-link class="avatar" :to="`/nguoi-dung/${user.username}`">
      <img v-if="user.avatar" class="avatar-img" :src="user.avatar" />
      <div v-else class="placeholder">
        <va-icon type="user" size="1.25em" iconStyle="regular" color="#97a0af" />
      </div>
    </router-link>
    <va-dropdown class="dropdown-wrapper">
      <div slot="trigger">
        <va-button class="username" icon-after="angle-down" type="subtle-link">{{user.name}}</va-button>
      </div>
      <li v-for="(item, id) in getGroup" :key="id" class="organization-wrapper">
        <nuxt-link :to="`/to-chuc/${item.id}`" class>
          <img class="organization-avatar" v-if="item.logo" :src="item.logo" />
          <div class="organization-name">{{item.name}}</div>
        </nuxt-link>
      </li>
      <li v-if="hasViewMore">
        <nuxt-link to="/cai-dat/to-chuc">Xem thêm...</nuxt-link>
      </li>
      <hr v-if="hasOrgs" />
      <li>
        <nuxt-link to="/cai-dat/to-chuc">Quản lý tổ chức</nuxt-link>
      </li>
      <hr />
      <li>
        <nuxt-link to="/cai-dat/noi-dung">Nội dung của tôi</nuxt-link>
      </li>
      <hr />
      <li>
        <nuxt-link to="/danh-sach-theo-doi">Danh sách theo dõi</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/bookmark">Quản lý bookmark</nuxt-link>
      </li>
      <hr />
      <li>
        <nuxt-link to="/cai-dat/tai-khoan">Cài đặt</nuxt-link>
      </li>
      <li>
        <a @click="logout">Đăng xuất</a>
      </li>
    </va-dropdown>
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
import { mapGetters } from 'vuex'
import take from 'lodash.take'

export default {
  props: {
    user: {
      type: Object,
    },
    organizations: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      orgs: 'organization/userOrgs',
    }),
    getGroup() {
      return take(this.orgs, 3)
    },
    hasViewMore() {
      return this.orgs.length > 3
    },
    hasOrgs() {
      return this.orgs.length
    },
  },
  methods: {
    logout() {
      this.$router.push('/', () => {
        this.$store.commit('auth/clear')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_dropdown.scss';

.user-wrap {
  display: flex;
  align-items: center;
  .avatar {
    height: $unit * 2;
    width: $unit * 2;
    margin-left: $unit;
    cursor: pointer;
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      @include border;
    }
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
  .dropdown-wrapper {
    margin-left: 10px;
    background-color: $white;
    .username {
      cursor: pointer;
    }
    li > a {
      color: $n700;
    }
    .organization-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      a {
        width: 100%;
        justify-content: flex-start;
        .organization-avatar {
          width: 24px;
          height: 24px;
          border-radius: 12px;
          @include border;
        }
        .organization-name {
          margin-left: 5px;
          color: $n700;
          font-size: 14px;
        }
      }
    }
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
