<template>
  <div class="item-container d-flex mt-3 pb-3">
    <div class="desc-container d-flex">
      <img class="author-avatar" :src="url" alt />
      <div class="name">{{name}}</div>
    </div>
    <va-button type="default">Theo dõi</va-button>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
  .desc-container {
    flex-direction: row;
    align-items: center;
    .author-avatar {
      width: 36px;
      border-radius: 18px;
    }
    .name {
      margin-left: 10px;
      font-size: 14px;
      color: #505e77;
    }
  }
}
</style>

