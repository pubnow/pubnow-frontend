<template>
  <div :class="['card', type]">
    <div class="icon">
      <va-icon :type="icon" />
    </div>
    <div class="content">
      <div class="number">{{ number }}</div>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$avatar: 54px;

.card {
  @include border;
  @include radius-md;
  padding: $unit / 2;
  display: flex;
  flex-direction: row;
  margin-bottom: $unit / 2;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: $unit / 2;
    .number {
      color: $n500;
      font-size: 36px;
      line-height: 36px;
    }

    .name {
      font-size: 16px;
      line-height: 16px;
      color: $n100;
    }
  }

  &.article {
    .icon {
      background: $p100;
    }
  }
  &.member {
    .icon {
      background: $r100;
    }
  }
  .icon {
    width: $avatar;
    height: $avatar;
    border-radius: $avatar / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    font-size: 24px;
  }
}
</style>
