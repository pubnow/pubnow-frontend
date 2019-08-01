<template>
  <HeadingText class="d-flex align-items-end my-2">
    <div>Nội dung</div>
    <div class="ml-auto">
      <va-button icon-before="plus">Thêm bài viết</va-button>
    </div>
  </HeadingText>
</template>

<script>
import { HeadingText } from '@/components/common'

export default {
  components: {
    HeadingText,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';

.split {
  border-bottom: 1px solid $tumblr;
  width: 55%;
  margin-top: 21px;
}
</style>
