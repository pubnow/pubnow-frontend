<template>
  <div class="infor-auth text-center" v-if="user">
    <img :src="avatarUrl" alt="avatar" class="avatar mt-2" />
    <h2 class="mt-3 name">{{ user.name }}</h2>
    <p class="mt-0 username">@{{ user.username }}</p>
    <p class="bio" v-if="user.bio">{{ user.bio }}</p>
    <div class="network d-flex justify-content-between">
      <div v-for="(item, index) in demo.network" :key="index">
        <p class="number">{{ item.number }}</p>
        <p class="type">{{ item.name }}</p>
      </div>
    </div>
    <no-ssr>
      <va-button active>Theo dõi</va-button>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'

export default {
  data() {
    return {
      user: {
        name: 'Pham Ngoc Hoa',
        username: 'thaycacac',
        bio: 'Cong hoa xa hoi chu nghia viet nam',
      },
      demo: {
        network: [
          { name: 'Lượt theo dõi', number: 20 },
          { name: 'bài viết', number: 15 },
        ],
      },
    }
  },
  computed: {
    avatarUrl() {
      const avatar = get(this, 'user.avatar')
      if (avatar) return avatar
      return 'https://bulma.io/images/placeholders/256x256.png'
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