<template>
  <div>
    <va-minibar class="minibar" theme="default" :top-items="minibarTopItem">
      <div slot="top">
        <img
          :src="require('@/assets/images/logo.svg')"
          class="logo va-minibar-item-brand"
        />
        <div v-for="(item, index) in minibarTopItem" :key="index">
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
        </div>
      </div>
    </va-minibar>
    <va-sidebar>
      <h1 class="site-name va-minibar-item-brand">Publish Now</h1>
      <p class="txt-create">Create</p>
      <va-sidebar-group :items="menuItems" />
    </va-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    closeCreate: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      minibarTopItem: [
        {
          icon: 'arrow-left',
          size: '1.2em',
          method: this.closeCreate,
        },
      ],
      menuItems: [
        {
          name: 'Tài khoản',
          route: '/create-acount',
          icon: 'user',
        },
        {
          name: 'Chuyên mục',
          route: '/create-category',
          icon: 'archive',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

.site-name {
  margin-left: $unit / 2;
}
.txt-create {
  margin-left: $unit / 2;
  text-transform: uppercase;
}
</style>