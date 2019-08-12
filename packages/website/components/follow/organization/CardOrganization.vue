<template>
  <div class="item-container d-flex mt-3 pb-3">
    <div class="desc-container d-flex mr-auto">
      <img class="organ-avatar" :src="url" alt />
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
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.item-container {
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
  .desc-container {
    flex-direction: row;
    align-items: center;
    .organ-avatar {
      width: 50px;
      height: 50px;
      object-fit: cover;
      @include border;
      @include radius-md;
    }
    .content {
      margin-left: 10px;
      .name {
        font-size: 16px;
        color: $b500;
        font-weight: 700;
        margin-bottom: $unit / 4;
      }
      .desc {
        font-size: 14px;
        color: $n300;
      }
    }
  }
}
</style>

