<template>
  <div class="p-2">
    <h3>Thông báo</h3>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
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

