<template>
  <div class="d-flex wrap-all">
    <div class="d-flex flex-column mr-2">
      <img :src="require('@/assets/images/icons/clap.svg')" alt="clap icon" class="icon" />
      <span>{{ clap }}</span>
    </div>
    <div class="wrap-content">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img :src="avatar" alt="avatar" class="avatar mr-2" />
          <div>
            <nuxt-link to="#" class="fullname">{{ fullname }}</nuxt-link>
            <p class="mt-0 small">{{ time }}</p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <va-button class="ml-2 button" size="xs">Lưu</va-button>
          <va-button class="ml-2 button" size="xs">Báo cáo</va-button>
          <va-button class="ml-2 button" size="xs">Thu gọn bình luận</va-button>
        </div>
      </div>
      <p>{{ content }}</p>
      <nuxt-link to="#">Trả lời</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clap: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-image: 40px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}

.wrap-content {
  width: 100%;
}

.button {
  height: $unit;
}

.wrap-all {
  padding-left: $unit / 2;
  border-left: 1px solid $gray70;
}
</style>

