<template>
  <div v-if="user" class="user-wrap">
    <router-link class="avatar" :to="`/nguoi-dung/${user.username}`">
      <img v-if="user.avatar" class="avatar-img" :src="user.avatar" />
      <div v-else class="placeholder">
        <va-icon type="user" size="1.25em" iconStyle="regular" color="#97a0af" />
      </div>
    </router-link>
    <b-dropdown :text="user.name" :right="true" type="text" variant="white">
      <b-dropdown-item v-for="(item, id) in organ" :key="id">
        <div v-if="id < 3" class="organization-wrapper">
          <img class="organization-avatar" v-if="item.avatar" :src="item.avatar" />
          <div class="organization-name">{{item.name}}</div>
        </div>
        <div v-if="id === 3">Xem thêm...</div>
      </b-dropdown-item>
      <b-dropdown-item href=" /cai-dat/to-chuc">Danh sách Tổ chức</b-dropdown-item>
      <b-dropdown-item href="/cai-dat">Cài đặt</b-dropdown-item>
      <b-dropdown-item @click="logout">Đăng xuất</b-dropdown-item>
    </b-dropdown>
  </div>
  <div class="auth-nav" v-else>
    <va-button class="auth-btn" type="subtle">
      <nuxt-link to="dang-ky">Đăng ký</nuxt-link>
    </va-button>
    <span>|</span>
    <va-button class="auth-btn" type="subtle">
      <nuxt-link to="dang-nhap">Đăng nhập</nuxt-link>
    </va-button>
  </div>
</template>

<script>
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
          avatar:
            'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-0/p370x247/15542271_404549096543191_3973274007936829801_n.png?_nc_cat=110&_nc_oc=AQltokaG0AkEpOgNLkaS1LGq6hDoE7tjXNnTgNGeQvlLgy03jmwQHxxK8mVv9-myufs&_nc_ht=scontent.fhan2-4.fna&oh=033b1baa6ad4b16cd028562db20a666a&oe=5DA1B688',
        },
        {
          name: 'SSchedule',
          avatar:
            'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-0/c0.0.370.370a/p370x247/60350132_459893864768521_5828017917681205248_n.jpg?_nc_cat=100&_nc_oc=AQlCum4cPzYvOC9X6xV6pVFdM7RIO2yHun9g-gZRiDRlJH2FTQkmMStKmBJRJpaP5Bo&_nc_ht=scontent.fhan2-4.fna&oh=a5922cfa60e627319819140610e97ae2&oe=5DB6D84A',
        },
        {
          name: 'Coralo Team',
          avatar: 'https://avatars0.githubusercontent.com/u/29174209?s=200&v=4',
          num: '30+',
        },
        {
          name: 'Young Tailor',
          avatar: 'https://avatars0.githubusercontent.com/u/49083246?s=200&v=4',
        },
      ],
    }
  },
  methods: {
    logout() {
      this.$store.commit('auth/clear')
      this.$router.push('/dang-nhap')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_dropdown.scss';

.user-wrap {
  display: flex;
  align-items: center;
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
  .dropdown {
    margin-left: 10px;
    .organization-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      .organization-avatar {
        width: 24px;
        border-radius: 12px;
      }
      .organization-name {
        margin-left: 5px;
        color: #333;
        font-size: 13px;
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
