<template>
  <div class="heading">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.heading {
  font-size: $unit;
  font-weight: 700;
  color: $n800;
  padding-bottom: $unit / 2;
  border-bottom: 1px solid $n40;
}
</style>
