<template>
  <div>
    <va-minibar class="minibar" theme="white" :top-items="minibarTopItems">
      <div slot="top">
        <img
          :src="require('@/assets/images/logo.svg')"
          class="logo va-minibar-item-brand"
        />
        <div v-for="(item, index) in minibarTopItems" :key="index">
          <va-minibar-item
            v-if="item.method"
            :tooltip="item.tooltip"
            :brand="item.brand"
            @click.native="item.method"
          >
            <va-icon
              :type="item.icon"
              :size="item.size"
              :icon-style="item.iconStyle || 'solid'"
            />
          </va-minibar-item>
          <va-minibar-item v-else :brand="item.brand" :tooltip="item.tooltip">
            <va-icon
              :type="item.icon"
              :size="item.size"
              :icon-style="item.iconStyle || 'solid'"
            />
          </va-minibar-item>
        </div>
      </div>
      <div slot="bottom">
        <div v-for="(item, index) in minibarBottomItems" :key="index">
          <va-minibar-item
            v-if="item.method"
            @click.native="item.method"
            :tooltip="item.tooltip"
          >
            <va-icon
              :type="item.icon"
              :size="item.size"
              :icon-style="item.iconStyle || 'solid'"
            />
          </va-minibar-item>
          <va-minibar-item v-else :tooltip="item.tooltip">
            <va-icon
              :type="item.icon"
              :size="item.size"
              :icon-style="item.iconStyle || 'solid'"
            />
          </va-minibar-item>
        </div>
        <user-info />
      </div>
    </va-minibar>
    <va-aside
      style="background-color: #f3f4f6;"
      width="500px"
      placement="left"
      ref="myAside"
    >
      <AsideSearch :closeSearch="closeSearch"></AsideSearch>
    </va-aside>
    <va-aside placement="left" ref="myAsideCreate">
      <AsideCreate :closeCreate="closeCreate"></AsideCreate>
    </va-aside>
  </div>
</template>

<script>
import UserInfo from './UserInfo'
import AsideSearch from './AsideSearch'
import AsideCreate from './AsideCreate'

export default {
  components: {
    UserInfo,
    AsideSearch,
    AsideCreate,
  },
  data() {
    return {
      minibarTopItems: [
        {
          icon: 'search',
          size: '1.5em',
          tooltip: 'Search',
          method: this.handleSearch,
        },
        {
          icon: 'plus',
          size: '1.25em',
          tooltip: 'Create',
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
    handleSearch() {
      this.$refs.myAside.open()
    },
    closeSearch() {
      this.$refs.myAside.close()
    },
    handleCreate() {
      this.$refs.myAsideCreate.open()
    },
    closeCreate() {
      this.$refs.myAsideCreate.close()
    },
  },
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
