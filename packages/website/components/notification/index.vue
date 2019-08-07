<template>
  <div class="p-2 notification">
    <h3>Thông báo</h3>
    <hr />
    <div v-if="invitations.length">
      <InvitationItem v-for="item in invitations" :item="item" :key="item.id" />
    </div>
    <div v-else>
      <p>Bạn chưa có thông báo nào !!!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InvitationItem from './InvitationItem'

export default {
  components: {
    InvitationItem,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      invitations: 'notification/invitations',
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
        this.$store.dispatch('notification/listInvitations')
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


