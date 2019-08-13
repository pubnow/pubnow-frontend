<template>
  <div class="p-2 notification">
    <h3>Thông báo</h3>
    <hr />
    <div v-if="notifications.length">
      <NotificationItem v-for="item in notifications" :notification="item" :key="item.id"></NotificationItem>
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
.notification {
  min-width: 400px;
}
</style>


