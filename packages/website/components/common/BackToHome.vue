<template>
  <div class="back-area">
    <va-tooltip content="Quay lại" placement="right" effect="tooltip-fade-right" arrow>
      <va-button icon-before="chevron-left" @click="back">Quay lại</va-button>
    </va-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>

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
