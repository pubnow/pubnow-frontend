<template>
  <div class="card-statistic" :class="type">
    <div class="icon">
      <va-icon :type="iconName" />
    </div>
    <div class="number">{{ number }}</div>
    <div class="type">{{ typeStr }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    typeStr() {
      switch (this.type) {
        case 'user':
          return 'Tài khoản'
        case 'article':
          return 'Bài viết'
        case 'category':
          return 'Danh mục'
        case 'tag':
          return 'Thẻ'
      }
    },
    iconName() {
      switch (this.type) {
        case 'user':
          return 'user'
        case 'article':
          return 'file'
        case 'category':
          return 'archive'
        case 'tag':
          return 'tags'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$icon: 48px;

.card-statistic {
  @include border;
  @include radius-md;
  @include box-shadow-sm;
  padding: $unit;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $icon;
    height: $icon;
    border-radius: 50%;
    color: $white;
    font-size: 20px;
  }
  .number {
    margin-top: $unit;
    color: $white;
    font-size: 40px;
    font-weight: 500;
  }
  .type {
    margin-top: $unit;
    color: $white;
    font-size: 22px;
  }
  &.user {
    background: $b200;
    .icon {
      background: $b100;
    }
  }
  &.article {
    background: $y300;
    .icon {
      background: $y200;
    }
  }
  &.category {
    background: $p300;
    .icon {
      background: $p200;
    }
  }
  &.tag {
    background: $g300;
    .icon {
      background: $g200;
    }
  }
}
</style>