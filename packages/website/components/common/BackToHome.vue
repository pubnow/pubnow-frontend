<template>
  <div class="back-area">
    <va-tooltip content="Quay lại trang chủ!" placement="right" effect="tooltip-fade-right" arrow>
      <va-button icon-before="home">
        <nuxt-link class="back-btn" to="/">Trang chủ</nuxt-link>
      </va-button>
    </va-tooltip>
  </div>
</template>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.back-area {
  position: fixed;
  top: $unit;
  left: $unit;
}

.back-btn {
  color: #505e77 !important;
  &:hover {
    text-decoration: none;
  }
}
</style>
