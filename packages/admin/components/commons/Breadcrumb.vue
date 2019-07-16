<template>
  <div class="breadcrumb-wrapper">
    <div v-for="(item, index) in items" :key="index" class="item-breadcrumb">
      <span>{{item}}</span>
      <arrow-icon v-if="index < items.length - 1" class="icon-2x icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
  display: flex;
  align-items: center;
  .item-breadcrumb {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: #ccc;
    .icon {
      margin: -5px 5px 0px 5px;
    }
  }
}
</style>


