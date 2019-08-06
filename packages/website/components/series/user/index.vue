<template>
  <no-ssr>
    <div class="infor-auth text-center">
      <img
        :src="author.avatar == ''?'https://bulma.io/images/placeholders/256x256.png':author.avatar"
        alt="avatar"
        class="avatar mt-2"
      />
      <h2 class="mt-3 name">{{ author.name }}</h2>
      <p class="mt-0 username">@{{ author.username }}</p>
      <p class="bio" v-if="author.bio">{{ author.bio }}</p>
      <div v-if="user">
        <div v-if="user.id !== author.id" class="mt-3 network">
          <va-button active @click="followUser(author.username)">Theo dõi</va-button>
        </div>
        <div v-else class="mt-3 network">
          <va-button active @click="editUser">Chỉnh sửa</va-button>
        </div>
      </div>
      <div v-else class="mt-3 network">
        <va-button active @click="followUser(author.username)">Theo dõi</va-button>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    author: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    editUser() {
      this.$router.push('/cai-dat/tai-khoan')
    },
    followUser(username) {
      if (this.user) {
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
    padding-top: $unit/2;
  }
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
    object-fit: cover;
  }
}
</style>