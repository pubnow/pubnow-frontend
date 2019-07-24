<template>
  <div class="d-flex">
    <img :src="avatar" alt="image oranization" class="avatar mr-3" />
    <div class="d-flex flex-column justify-content-center">
      <h2 class="mb-1">{{ name }}</h2>
      <span>
        <i class="far fa-envelope"></i>
        {{ email }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 60px;

.avatar {
  @include radius-sm;
  width: $size-image;
  height: $size-image;
}
</style>
