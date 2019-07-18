<template>
  <nuxt-link
    :to="to"
    exact
    class="va-btn va-btn-md va-btn-subtle nav-item"
    active-class="va-btn-active"
  >
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

<style lang="scss" scoped>
.nav-item {
  &:focus {
    box-shadow: none !important;
  }
}
</style>


