<template>
  <nuxt-link :to="to" exact class="va-nav-tab" active-class="active" tag="li">
    <a>
      <va-icon :type="icon" />
      <slot />
    </a>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
    icon: {
      type: String,
      default: 'home',
    },
  },
}
</script>

<style lang="scss">
@import '@pubnow/ui/scss/_colors.scss';

.va-nav-tab {
  a {
    color: $n300 !important;
    font-weight: 600;
    padding-bottom: 6px;
    position: relative;
    &::before {
      content: '';
      height: 2px;
      width: 0;
      opacity: 0;
      transition: all 0.25s ease-in-out;
    }
  }
}
.va-nav-tab {
  &.active {
    a {
      color: $b400 !important;
      &::before {
        content: '';
        height: 2px;
        width: 100%;
        opacity: 1;
        background: $b400;
        position: absolute;
        left: 0;
        bottom: -2px;
      }
    }
  }
}
</style>


