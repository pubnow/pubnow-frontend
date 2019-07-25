<template>
  <nuxt-link :to="to" exact class="va-btn va-btn-md va-btn-subtle nav-item-control">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style lang="scss">
@import '@pubnow/ui/scss/_colors.scss';
.nav-item-control {
  &:focus {
    box-shadow: none !important;
    border-top: 1px solid $gray90;
    border-left: 1px solid $gray90;
    border-right: 1px solid $gray90;
    border-radius: 0;
  }
}
</style>


