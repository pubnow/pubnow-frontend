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
  middleware: ['auth'],
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

