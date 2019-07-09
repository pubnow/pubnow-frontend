<template>
  <div>
    <side-menu />
    <navigation />
    <nuxt class="wrapper" />
  </div>
</template>

<script>
import { Navigation, SideMenu } from '@/components/commons'
export default {
  components: {
    Navigation,
    SideMenu,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 125px;
}
</style>

