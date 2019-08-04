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
        <nuxt-link :to="`/to-chuc/${item.slug}`" class>
          <img class="organization-avatar" v-if="item.avatar" :src="item.avatar" />
          <div class="organization-name">{{item.name}}</div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/cai-dat/to-chuc">Xem thêm...</nuxt-link>
      </li>
      <hr />
      <li>
        <nuxt-link to="/cai-dat/to-chuc">Quản lý tổ chức</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/bookmark">Danh sách Bookmark</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/series/tao-moi">Tạo mới series</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/danh-sach-theo-doi">Danh sách theo dõi</nuxt-link>
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
  data() {
    return {
      organ: [
        {
          name: 'Vteam',
          slug: 'vteam',
          avatar:
            'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-0/p370x247/15542271_404549096543191_3973274007936829801_n.png?_nc_cat=110&_nc_oc=AQltokaG0AkEpOgNLkaS1LGq6hDoE7tjXNnTgNGeQvlLgy03jmwQHxxK8mVv9-myufs&_nc_ht=scontent.fhan2-4.fna&oh=033b1baa6ad4b16cd028562db20a666a&oe=5DA1B688',
        },
        {
          name: 'SSchedule',
          slug: 'ssschedule',
          avatar:
            'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-0/c0.0.370.370a/p370x247/60350132_459893864768521_5828017917681205248_n.jpg?_nc_cat=100&_nc_oc=AQlCum4cPzYvOC9X6xV6pVFdM7RIO2yHun9g-gZRiDRlJH2FTQkmMStKmBJRJpaP5Bo&_nc_ht=scontent.fhan2-4.fna&oh=a5922cfa60e627319819140610e97ae2&oe=5DB6D84A',
        },
        {
          name: 'Coralo Team',
          slug: 'coralo',
          avatar: 'https://avatars0.githubusercontent.com/u/29174209?s=200&v=4',
          num: '30+',
        },
        {
          name: 'Young Tailor',
          slug: 'yt',
          avatar: 'https://avatars0.githubusercontent.com/u/49083246?s=200&v=4',
        },
      ],
    }
  },
  computed: {
    getGroup() {
      return take(this.organ, 3)
    },
  },
  methods: {
    logout() {
      this.$router.push('/', () => {
        this.$store.commit('auth/clear')
        this.$router.go(0)
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
          border-radius: 12px;
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
