<template>
  <div>
    <img src="@/assets/images/oops.svg" />
    <div class="d-flex flex-column align-items-center">
      <h1 class="mb-4">{{ reason }}</h1>
      <nuxt-link class="back-btn" to="/">
        <va-button active icon-before="home">Quay lại Trang chủ</va-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reason: {
      type: String,
      default: 'Bạn không được phép vào khu vực này',
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';

h1 {
  font-size: 2em;
}

.back-btn {
  text-decoration: none !important;
  a {
    cursor: pointer;
  }
}
</style>
