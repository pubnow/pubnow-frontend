<template>
  <div class="d-flex justify-content-between mt-4">
    <h2 class="title">Nội dung</h2>
    <hr class="split mb-0" />
    <va-button type="subtle">
      <va-icon type="pen" class="mr-2" />Thêm bài viết của tôi vào series này
    </va-button>
  </div>
</template>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';

.split {
  border-bottom: 1px solid $tumblr;
  width: 55%;
  margin-top: 21px;
}
</style>
