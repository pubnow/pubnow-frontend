<template>
  <div class="notification">
    <div class="top d-flex align-items-center justify-content-between p-2">
      <h3 class="m-0">Thông báo</h3>
      <div class="mark-as-read" @click="markAsRead">Đánh dấu tất cả là đã đọc</div>
    </div>
    <div v-if="notifications.length">
      <div class="notification-area">
        <NotificationItem v-for="item in notifications" :notification="item" :key="item.id"></NotificationItem>
      </div>
      <div class="view-all p-1">Xem tất cả</div>
    </div>
    <div v-else>
      <p class="px-2 pb-1">Bạn chưa có thông báo nào !!!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'
import InvitationItem from './InvitationItem'
import NotificationItem from './NotificationItem'

export default {
  components: {
    NotificationItem,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
      user: 'auth/user',
    }),
  },
  watch: {
    show: {
      immediate: true,
      handler: 'handleShow',
    },
  },
  methods: {
    handleShow(show) {
      if (show) {
        this.$store.dispatch('notification/list')
      }
    },
    markAsRead() {
      this.$store.dispatch('notification/markAsRead')
    },
  },
  mounted() {
    if (this.user) {
      window.Echo.private('App.Models.User.' + this.user.id).notification(
        item => {
          const isUser = get(item, 'notification.data.type') === 'user'

          if (isUser) {
            this.$store.commit(
              'notification/addNotification',
              item.notification,
            )
            const type = get(item, 'notification.type')
            switch (type) {
              case 'App\\Notifications\\UserFollow': {
                this.notification.info({
                  title: 'Thông báo',
                  message: `<span class="font-weight-bold">${get(
                    item.notification,
                    'data.user.name',
                  )}</span> đã theo dõi bạn.
                    <br />
                    <br />
                    <a href="/nguoi-dung/${get(
                      item.notification,
                      'data.user.username',
                    )}">Xem thêm</a>
                  `,
                  duration: 2000,
                })
                break
              }
              case 'App\\Notifications\\CommentArticle': {
                this.notification.info({
                  title: 'Thông báo',
                  message: `<span class="font-weight-bold">${get(
                    item.notification,
                    'data.comment.user.name',
                  )}</span> đã bình luận trong bài viết <span class="font-weight-bold">${get(
                    item.notification,
                    'data.comment.article.title',
                  )}</span>
                    <br />
                    <br />
                    <a href="/bai-viet/${get(
                      item.notification,
                      'data.comment.article.slug',
                    )}">Xem thêm</a>
                  `,
                  duration: 2000,
                })
                break
              }
              case 'App\\Notifications\\ClapArticle': {
                this.notification.info({
                  title: 'Thông báo',
                  message: `<span class="font-weight-bold">${get(
                    item.notification,
                    'data.clap.user.name',
                  )}</span> đã vỗ tay bài viết <span class="font-weight-bold">${get(
                    item.notification,
                    'data.clap.article.title',
                  )}</span>
                    <br />
                    <br />
                    <a href="/bai-viet/${get(
                      item.notification,
                      'data.clap.article.slug',
                    )}">Xem thêm</a>
                  `,
                  duration: 2000,
                })
                break
              }
            }
          }
        },
      )
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.notification {
  min-width: 400px;

  .top {
    border-bottom: 1px solid $n20;

    .mark-as-read {
      color: $n500;
      cursor: pointer;
    }
  }

  .notification-area {
    max-height: 250px;
    overflow-y: scroll;
    position: relative;
  }

  .view-all {
    width: 100%;
    border-top: 1px solid $n30;
    text-align: center;
    padding: $unit / 4 0;
    font-weight: 700;
    color: $n500;
  }
}
</style>


