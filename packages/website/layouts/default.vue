<template>
  <div class="wrapper">
    <Navbar />
    <AffixNavbar />
    <FeedbackCat />
    <nuxt class="app" />
  </div>
</template>

<script>
import { Navbar, AffixNavbar, FeedbackCat } from '@/components/common'

export default {
  components: {
    Navbar,
    AffixNavbar,
    FeedbackCat,
  },
  data() {
    return {
      desktopSidebarWidth: 0,
      desktopMinibarWidth: 0,
      desktopTopbarHeight: 60,

      mobileSidebarWidth: 0,
      mobileMinibarWidth: 0,
      mobileTopbarHeight: 50,

      sidebarPriority: false,
      minibarPriority: true,
      rtl: false,
      reverse: false,
      split: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  padding-top: 20px;
}
</style>
