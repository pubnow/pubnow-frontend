<template>
  <div class="search-row my-2 d-flex align-items-center">
    <img class="avatar" :src="user.avatar" />
    <div class="info">
      <div class="name">{{ user.name }}</div>
      <div>{{ user.email }}</div>
    </div>
    <div class="ml-auto">
      <va-badge v-if="isMember">Thành viên</va-badge>
      <va-badge v-else-if="isInvited">Đã mời</va-badge>
      <va-button
        icon-before="paper-plane"
        :disabled="isInviting"
        :loading="isInviting"
        v-else
        @click="invite"
      >Mời</va-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMember() {
      return this.user.status === 'accepted'
    },
    isInvited() {
      return this.user.status === 'pending'
    },
    isInviting() {
      return this.$wait.is(`org.invite.${this.user.id}`)
    },
  },
  methods: {
    invite() {
      this.$emit('invite', this.user.id)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$avatar: 40px;
.search-row {
  border: 2px dashed $n30;
  padding: $unit / 2;
  border-radius: $unit / 2;
  .avatar {
    width: $avatar;
    height: $avatar;
    object-fit: cover;
    border-radius: $avatar / 2;
    @include border;
    margin-right: 5px;
  }
  .info {
    .name {
      font-weight: 700;
    }
  }
}
</style>

