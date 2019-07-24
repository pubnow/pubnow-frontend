<template>
  <div class="item-container d-flex mt-3 pb-3">
    <div class="desc-container d-flex">
      <img class="author-avatar" :src="url" alt />
      <div class="content">
        <div class="name">{{name}}</div>
        <div class="desc">{{description}}</div>
      </div>
    </div>
    <va-button type="primary">Đang theo dõi</va-button>
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
    description: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
  .desc-container {
    flex-direction: row;
    align-items: center;
    .author-avatar {
      width: 50px;
      border-radius: 25px;
    }
    .content {
      margin: 0 10px;
      .name {
        font-size: 14px;
        color: #505e77;
      }
      .desc {
        font-size: 13px;
        color: #505e77;
      }
    }
  }
}
</style>

