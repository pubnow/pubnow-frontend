<template>
  <b-navbar class="nav">
    <img :src="require('@/assets/images/logo.svg')" />
    <b-container fluid>
      <b-navbar-nav>
        <b-nav-item href="#">Dashboard</b-nav-item>
        <b-nav-item href="#">Statistic</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-form>
          <search-icon class="icon-2x" />
          <input placeholder="Tìm kiếm" />
        </b-nav-form>
        <b-nav-item to="/notifications">
          <notification-icon class="icon-2x notification" />
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
    <user-info />
  </b-navbar>
</template>

<script>
import NotificationIcon from 'vue-material-design-icons/Bell'
import SearchIcon from 'vue-material-design-icons/Magnify'
import UserInfo from './UserInfo'

export default {
  components: {
    UserInfo,
    NotificationIcon,
    SearchIcon,
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
  margin-right: $side-menu-w / 2;
}

.form-inline {
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid $border;
  overflow: hidden;
  padding-left: 20px;
  display: flex;

  .material-design-icon {
    color: $gray85;
  }
  input {
    border: 0;

    &:focus {
      outline: 0;
    }
  }
  ::placeholder {
    color: $text;
    font-size: 12px;
    font-weight: 500;
  }
}

.notification {
  margin-top: 3px;
  margin-left: 20px;
  color: $gray85;
}
</style>
