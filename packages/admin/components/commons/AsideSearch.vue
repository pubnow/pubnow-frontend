<template>
  <va-minibar class="minibar" theme="white" :top-items="minibarTopItem">
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
          size: '1.5em',
          method: this.closeSearch,
        },
      ],
    }
  },
}
</script>
