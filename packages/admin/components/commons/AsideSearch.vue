<template>
  <div>
    <va-minibar class="minibar" :top-items="minibarTopItem">
      <div slot="top">
        <img :src="require('@/assets/images/logo.svg')" class="logo va-minibar-item-brand" />
        <div v-for="(item, index) in minibarTopItem" :key="index">
          <va-minibar-item
            v-if="item.method"
            :tooltip="item.tooltip"
            :brand="item.brand"
            @click.native="item.method"
          >
            <va-icon :type="item.icon" :size="item.size" :icon-style="item.iconStyle || 'solid'" />
          </va-minibar-item>
        </div>
      </div>
    </va-minibar>
    <va-sidebar style="width: 430px;">
      <div class="d-flex">
        <va-input class="pr-2" placeholder="Tìm kiếm thành viên, bài viết,..."></va-input>
        <va-button type="primary" icon-before="search">Tìm kiếm</va-button>
      </div>
    </va-sidebar>
  </div>
</template>
<script>
export default {
  props: {
    closeSearch: {
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
          method: this.closeSearch,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.minibar {
  background: #f3f4f6;
}
</style>