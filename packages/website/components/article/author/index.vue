<template>
  <div class="d-flex align-items-center pt-3">
    <img :src="avatar" alt="avatar" class="avatar mr-3" />
    <div>
      <nuxt-link to="#" class="fullname">{{ fullname }}</nuxt-link>
      <p class="mt-0">
        Đăng {{ time }} trong
        <nuxt-link to="#">{{ category }}</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: false,
    },
    fullname: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 60px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}

.fullname {
  font-size: $unit;
}
</style>
