<template>
  <div class="infor-auth text-center">
    <p class="text-body font-weight-bold mt-0">About me</p>
    <img
      :src="user.avatar ? user.avatar : 'https://bulma.io/images/placeholders/256x256.png'"
      alt="avatar"
      class="avatar mt-3"
    />
    <p class="text-dark">{{ user.name }}</p>
    <p class="mt-0 small">@{{ user.username }}</p>
    <p>{{ user.bio }}</p>
    <hr class="bg-dark" />
    <div class="network d-flex justify-content-between mx-4">
      <div v-for="(item, index) in demo.network" :key="index">
        <p class="number">{{ item.number }}</p>
        <p class="small">{{ item.name }}</p>
      </div>
    </div>
    <va-button type="subtle mt-4">Theo dõi</va-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      demo: {
        network: [
          { name: 'followers', number: '6611' },
          { name: 'following', number: 12 },
          { name: 'spiders', number: 8404 },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 60px;

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
}

.infor-auth {
  @include box-shadow;
  @include radius-sm;
  background: $gray94;
  border: 1px solid $gray85;
  padding: $unit;
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
  }
  .number {
    color: $primary;
    font-size: $unit * 1.5;
  }
}
</style>