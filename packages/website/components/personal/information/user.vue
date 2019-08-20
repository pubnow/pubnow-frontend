<template>
  <div class="infor-auth text-center" v-if="user">
    <img :src="avatarUrl" alt="avatar" class="avatar mt-2" />
    <h2 class="mt-3 name">{{ user.name }}</h2>
    <p class="mt-0 username">@{{ user.username }}</p>
    <p class="bio" v-if="user.bio">{{ user.bio }}</p>
    <div class="network d-flex justify-content-between">
      <div>
        <p class="number">{{ user.articles }}</p>
        <p class="type">bài viết</p>
      </div>
      <div>
        <p class="number">{{ user.followers }}</p>
        <p class="type">lượt theo dõi</p>
      </div>
    </div>
    <no-ssr>
      <va-button v-if="auth && auth.id === user.id" active @click="editUser">Chỉnh sửa</va-button>
      <va-button v-else-if="followStatus" active @click="followUser(user.username)">Đang theo dõi</va-button>
      <va-button v-else active @click="followUser(user.username)">Theo dõi</va-button>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'

export default {
  data() {
    return {
      demo: {
        network: [
          { name: 'Lượt theo dõi', number: 20 },
          { name: 'bài viết', number: 15 },
        ],
      },
      followStatus: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/author',
      auth: 'auth/user',
      followedUserStatus: 'follow/followUser',
    }),
    avatarUrl() {
      const avatar = get(this, 'user.avatar')
      if (avatar) return avatar
      return 'https://bulma.io/images/placeholders/256x256.png'
    },
  },
  mounted() {
    this.followStatus = this.user.following
  },
  methods: {
    editUser() {
      this.$router.push('/cai-dat/tai-khoan')
    },
    followUser(id) {
      if (this.auth) {
        if (this.followStatus) {
          this.$store.dispatch('follow/unFollowUser', id).then(() => {
            this.followStatus = this.followedUserStatus
          })
        } else {
          this.$store.dispatch('follow/followUser', id).then(() => {
            this.followStatus = this.followedUserStatus
          })
        }
      } else {
        this.$router.push('/dang-nhap')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 100px;

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
}

.infor-auth {
  @include box-shadow;
  @include radius-sm;
  @include border;
  padding: $unit;
  .name {
    color: $b500;
  }
  .username {
    color: $n200;
    font-size: 16px;
  }
  .bio {
    margin-bottom: $unit / 2;
    border: 1px dashed $n50;
    padding: 5px;
  }
  .network {
    border-top: 2px solid $n30;
    border-bottom: 2px solid $n30;
    padding-top: $unit;
    padding-bottom: $unit;
    margin-bottom: $unit;
    margin-top: $unit;

    .number {
      color: $b500;
      font-size: $unit * 1.5;
      user-select: none;
    }
    .type {
      color: $n100;
      text-transform: uppercase;
      user-select: none;
    }
  }
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
    object-fit: cover;
  }
}
</style>