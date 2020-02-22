<template>
  <div class="invitation d-flex">
    <img :src="org.logo" class="logo mr-2" />
    <p class="content mt-0">
      Bạn nhận được lời mời tham gia tổ chức
      <span class="font-weight-bold">{{ org.name }}</span>
      <br />
      {{ item.publishedAt }}
    </p>
    <div class="d-flex align-items-start">
      <va-button class="mr-1" size="sm" type="primary" @click="accept">Đồng ý</va-button>
      <va-button size="sm" @click="deny">Xóa</va-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    org() {
      return this.item.organization
    },
  },
  methods: {
    accept() {
      this.$store.dispatch('notification/interact', {
        id: this.item.id,
        type: 'accept',
      })
    },
    deny() {
      this.$store.dispatch('notification/interact', {
        id: this.item.id,
        type: 'deny',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$logo: 36px;
.invitation {
  .logo {
    width: $logo;
    height: $logo;
    min-width: $logo;
    border-radius: $logo / 2;
    object-fit: cover;
    @include border;
  }
}
</style>
