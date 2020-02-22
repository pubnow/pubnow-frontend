<template functional>
  <div class="empty-img">
    <img src="@/assets/images/empty_state.png" />
    <span>Chưa có {{ props.type }} nào ở đây.</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'bài viết',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.empty-img {
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 300px;
  }
  span {
    color: $n100;
    font-size: $unit;
    border: 1px dashed $n100;
    padding: $unit / 2;
    margin-top: $unit / 4;
    user-select: none;
  }
}
</style>