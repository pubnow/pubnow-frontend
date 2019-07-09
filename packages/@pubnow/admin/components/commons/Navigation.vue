<template>
  <b-navbar class="nav">
    <img :src="require('@/assets/images/logo.svg')" />
    <b-container fluid>
      <b-navbar-nav>
        <b-nav-item href="#">Dashboard</b-nav-item>
        <b-nav-item href="#">Statistic</b-nav-item>
      </b-navbar-nav>
    </b-container>
    <user-info />
  </b-navbar>
</template>

<script>
import UserInfo from './UserInfo'

export default {
  components: {
    UserInfo,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.nav {
  position: fixed;
  top: 0;
  height: 90px;
  width: 100%;
  padding-left: $side-menu-w;
  z-index: 2;
  background-color: $white;
  @include box-shadow;
}
.container-fluid {
  margin-left: $side-menu-w;
  margin-right: $side-menu-w;
}
</style>
