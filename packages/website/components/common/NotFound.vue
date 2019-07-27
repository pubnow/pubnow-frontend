<template>
  <div>
    <img src="@/assets/images/404.svg" />
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
      default: 'Trang bạn tìm kiếm không tồn tại !!!',
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';

h1 {
  font-family: $ale;
  font-size: 2em;
  text-transform: uppercase;
}

.back-btn {
  text-decoration: none !important;
  a {
    cursor: pointer;
  }
}
</style>
