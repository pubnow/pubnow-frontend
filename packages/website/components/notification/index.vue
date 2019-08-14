<template>
  <div class="notification">
    <div class="top d-flex align-items-center justify-content-between p-2">
      <h3 class="m-0">Thông báo</h3>
      <div class="mark-as-read">Đánh dấu tất cả là đã đọc</div>
    </div>
    <div v-if="notifications.length">
      <div class="notification-area">
        <NotificationItem v-for="item in notifications" :notification="item" :key="item.id"></NotificationItem>
      </div>
      <div class="view-all p-1">Xem tất cả</div>
    </div>
    <div v-else>
      <p>Bạn chưa có thông báo nào !!!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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


