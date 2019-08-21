<template>
  <div class="wrapper d-flex">
    <img :src="member.avatar" class="avatar" />
    <div class="info ml-2">
      <h4>{{ member.name }}</h4>
      <div>{{ member.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.wrapper {
  margin-bottom: $unit / 2;
  .avatar {
    width: $unit * 2;
    height: $unit * 2;
    object-fit: cover;
    border-radius: $unit;
    @include border;
  }
}
</style>
