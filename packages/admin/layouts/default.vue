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
    <!-- See Minibar documentation -->
    <navigation />
    <!-- See Sidebar documentation -->
    <side-menu />

    <va-page>
      <nuxt />
    </va-page>
  </va-app>
</template>

<script>
import { Navigation, SideMenu } from '@/components/commons'
export default {
  middleware: ['auth'],
  data() {
    return {
      desktopSidebarWidth: 240,
      desktopMinibarWidth: 64,
      desktopTopbarHeight: 0,

      mobileSidebarWidth: 0,
      mobileMinibarWidth: 0,
      mobileTopbarHeight: 0,

      sidebarPriority: false,
      minibarPriority: true,
      rtl: false,
      reverse: false,
      split: false,
    }
  },
  components: {
    Navigation,
    SideMenu,
  },
}
</script>


