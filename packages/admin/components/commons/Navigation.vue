<template>
  <div>
    <va-minibar class="minibar" theme="white" :top-items="minibarTopItems">
      <div slot="top">
        <img :src="require('@/assets/images/logo.svg')" class="logo va-minibar-item-brand" />
        <div v-for="(item, index) in minibarTopItems" :key="index">
          <va-minibar-item
            v-if="item.method"
            :tooltip="item.tooltip"
            :brand="item.brand"
            @click.native="item.method"
          >
            <va-icon :type="item.icon" :size="item.size" :icon-style="item.iconStyle || 'solid'" />
          </va-minibar-item>
          <va-minibar-item v-else :brand="item.brand" :tooltip="item.tooltip">
            <va-icon :type="item.icon" :size="item.size" :icon-style="item.iconStyle || 'solid'" />
          </va-minibar-item>
        </div>
      </div>
      <div slot="bottom">
        <div v-for="(item, index) in minibarBottomItems" :key="index">
          <va-minibar-item v-if="item.method" @click.native="item.method" :tooltip="item.tooltip">
            <va-icon :type="item.icon" :size="item.size" :icon-style="item.iconStyle || 'solid'" />
          </va-minibar-item>
          <va-minibar-item v-else :tooltip="item.tooltip">
            <va-icon :type="item.icon" :size="item.size" :icon-style="item.iconStyle || 'solid'" />
          </va-minibar-item>
        </div>
        <user-info />
      </div>
    </va-minibar>
    <va-aside placement="left" ref="myAsideCreate">
      <AsideCreate :closeCreate="closeCreate"></AsideCreate>
    </va-aside>
  </div>
</template>

<script>
import NotificationIcon from 'vue-material-design-icons/Bell'
import SearchIcon from 'vue-material-design-icons/Magnify'
import UserInfo from './UserInfo'
import AsideCreate from './AsideCreate'

export default {
  components: {
    UserInfo,
    NotificationIcon,
    SearchIcon,
    AsideCreate
  },
  data() {
    return {
      minibarTopItems: [
        {
          icon: 'search',
          size: '1.5em',
        },
        {
          icon: 'plus',
          size: '1.25em',
          method: this.handleCreate,
        },
      ],
      minibarBottomItems: [
        {
          icon: 'cog',
          size: '1.5em',
          method: this.demoMethod,
        },
      ],
    }
  },
  methods: {
    handleCreate() {
      this.$refs.myAsideCreate.open()
    },
    closeCreate() {
      this.$refs.myAsideCreate.close()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.minibar {
  @include box-shadow;
  .logo {
    width: 36px;
    height: 36px;
  }

  .site-name {
    font-weight: bold;
    font-size: 16px;
    margin-left: $unit / 2;
  }

  i.notification {
    color: $gray85;
    font-size: $unit !important;
    margin-left: $unit !important;
    margin-right: $unit !important;
  }
}
</style>
