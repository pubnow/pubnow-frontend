<template>
  <div class="d-flex">
    <img src="https://bulma.io/images/placeholders/480x480.png" alt="image oranization" class="avatar mr-3" />
    <div class="d-flex flex-column justify-content-center">
      <h2 class="mb-1">Young Tailor</h2>
      <span>
        <i class="far fa-envelope"></i>
        thaycacac@gmail.com
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 60px;

.avatar {
  @include radius-sm;
  width: $size-image;
  height: $size-image;
}
</style>
