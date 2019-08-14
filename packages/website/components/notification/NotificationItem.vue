<template>
  <nuxt-link :to="item.link" :class="['notification-item d-flex', { read }]">
    <img :src="item.avatar" class="logo mr-2" />
    <div>
      <p class="content mt-0" v-html="item.content"></p>
      <div>{{ notification.created_at }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import get from 'lodash.get'

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    read() {
      return this.notification.read_at === null
    },
    item() {
      switch (this.notification.type) {
        case 'App\\Notifications\\UserFollow': {
          return {
            avatar: get(this.notification, 'data.user.avatar'),
            content: `<span class="font-weight-bold">${get(
              this.notification,
              'data.user.name',
            )}</span> đã theo dõi bạn.`,
            link: `/nguoi-dung/${get(this.notification, 'data.user.username')}`,
          }
        }
        case 'App\\Notifications\\CommentArticle': {
          return {
            avatar: get(this.notification, 'data.comment.user.avatar'),
            content: `<span class="font-weight-bold">${get(
              this.notification,
              'data.comment.user.name',
            )}</span> đã bình luận trong bài viết <span class="font-weight-bold">${get(
              this.notification,
              'data.comment.article.title',
            )}</span>`,
            link: `/bai-viet/${get(
              this.notification,
              'data.comment.article.slug',
            )}`,
          }
        }
        case 'App\\Notifications\\ClapArticle': {
          return {
            avatar: get(this.notification, 'data.clap.user.avatar'),
            content: `<span class="font-weight-bold">${get(
              this.notification,
              'data.clap.user.name',
            )}</span> đã vỗ tay bài viết <span class="font-weight-bold">${get(
              this.notification,
              'data.clap.article.title',
            )}</span>`,
            link: `/bai-viet/${get(
              this.notification,
              'data.clap.article.slug',
            )}`,
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$logo: 36px;
.notification-item {
  color: $n400;
  padding-top: $unit / 2;
  padding-left: $unit / 2;
  padding-right: $unit / 2;
  &:hover {
    text-decoration: none;
    background: $n20;
  }
  &.read {
    background: $n30;
    &:hover {
      background: $n40;
    }
  }
  .logo {
    width: $logo;
    height: $logo;
    min-width: $logo;
    border-radius: $logo / 2;
    object-fit: cover;
    @include border;
  }
  &:not(:last-child) {
    border-bottom: 1px solid $n20;
    padding-bottom: $unit / 2;
  }
}
</style>
