<template>
  <div class="wrapper">
    <div class="left">
      <img :src="author.avatar" class="avatar" />
    </div>
    <div class="right">
      <h3>{{ article.title }}</h3>
      <div class="bottom">
        <span class="time">Đăng {{ article.publishedAt }}</span>
        <span class="middot"></span>
        <span class="seen">{{ article.seen_count }} Lượt xem</span>
        <span class="middot"></span>
        <span class="comment-count">{{ article.comments_count }} Bình luận</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    author() {
      return this.article.author
    },
    category() {
      return this.article.category
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.wrapper {
  margin-bottom: $unit;
  display: flex;
  .left {
    .avatar {
      width: $unit * 2;
      height: $unit * 2;
      object-fit: cover;
      border-radius: $unit;
      @include border;
    }
  }
  .right {
    margin-left: $unit / 2;
  }
}
</style>

