<template>
  <va-app
    :desktop-sidebar-width="desktopSidebarWidth"
    :desktop-minibar-width="desktopMinibarWidth"
    :desktop-topbar-height="desktopTopbarHeight"
    :mobile-sidebar-width="mobileSidebarWidth"
    :mobile-minibar-width="mobileMinibarWidth"
    :mobile-topbar-height="mobileTopbarHeight"
    :sidebar-priority="sidebarPriority"
    :minibar-priority="minibarPriority"
    :reverse="reverse"
    :split="split"
    :rtl="rtl"
  >
    <Navbar />
    <nuxt class="app" />
  </va-app>
</template>

<script>
import { Navbar } from '@/components/common'

export default {
  components: {
    Navbar,
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
  padding-top: 80px;
}
</style>
