<template>
  <div class="wrap-all d-flex bg-white mt-4 px-3 py-2 align-items-center">
    <img :src="avatar" alt="avatar user" class="avatar mr-2" />
    <div>
      <nuxt-link to="#">{{ fullname }}</nuxt-link>
      <p class="small mt-0">{{ follower }} theo dõi</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    follower: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 45px;
.wrap-all {
  @include box-shadow;
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
  }
}
</style>
