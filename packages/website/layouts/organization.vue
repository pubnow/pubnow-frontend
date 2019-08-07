<template>
  <div class="wrapper">
    <Navbar />
    <AffixNavbar />
    <b-container>
      <information class="app" />
      <tab />
    </b-container>
    <nuxt />
  </div>
</template>

<script>
import { Navbar, AffixNavbar } from '@/components/common'
import { Information, Tab } from '@/components/control'

export default {
  middleware: ['auth'],
  components: {
    Navbar,
    AffixNavbar,
    Information,
    Tab,
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
  mounted() {
    const { orgname } = this.$route.params
    this.$store.dispatch('organization/show', orgname)
  },
}
</script>

<style lang="scss" scoped>
.app {
  padding-top: 20px;
}
</style>
