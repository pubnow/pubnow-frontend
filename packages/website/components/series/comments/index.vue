<template>
  <div class="mb-5 mt-4">
    <HeadingText>Bình luận</HeadingText>
    <va-button type="subtle">Thêm bình luận</va-button>
  </div>
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
  width: 89%;
  margin-top: 21px;
}
</style>
