<template>
  <div class="side-menu d-flex flex-column align-items-center">
    <nuxt-link to="/" class="menu" active-class="active" exact>
      <app-icon class="icon-2x" />
    </nuxt-link>
    <nuxt-link to="/statistic" class="menu" active-class="active">
      <timeline-icon class="icon-2x" />
    </nuxt-link>
    <nuxt-link to="/accounts" class="menu" active-class="active">
      <account-icon class="icon-2x" />
    </nuxt-link>
    <nuxt-link to="/articles" class="menu" active-class="active">
      <file-icon class="icon-2x" />
    </nuxt-link>
    <nuxt-link to="/categories" class="menu" active-class="active">
      <folder-icon class="icon-2x" />
    </nuxt-link>
    <nuxt-link to="/tags" class="menu" active-class="active">
      <attach-icon class="icon-2x" />
    </nuxt-link>
  </div>
</template>

<script>
import AppIcon from 'vue-material-design-icons/Apps'
import TimelineIcon from 'vue-material-design-icons/ChartTimelineVariant'
import AccountIcon from 'vue-material-design-icons/AccountCircle'
import FileIcon from 'vue-material-design-icons/File'
import FolderIcon from 'vue-material-design-icons/Folder'
import AttachIcon from 'vue-material-design-icons/Attachment'

export default {
  components: {
    AppIcon,
    TimelineIcon,
    AccountIcon,
    FileIcon,
    FolderIcon,
    AttachIcon,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: $side-menu-w;
  padding-top: $side-menu-w * 1.5;
  height: 100vh;
  background-color: $white;
  @include box-shadow;

  .menu {
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 10px;
    color: $gray85;
    transition: all 0.3s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    &.active {
      color: $primary;
      &:before {
        transform: scale(1);
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      transform: scale(0);
      background: $primary;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
