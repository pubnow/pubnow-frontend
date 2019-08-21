<template>
  <div class="container footer pb-3">
    <hr />
    <b-row>
      <b-col md="6">
        <img src="@/assets/images/logo.svg" />
        <span class="title">ublish your content</span>
      </b-col>
      <b-col md="6">
        <b-nav class="justify-content-end">
          <b-nav-item>Wiki</b-nav-item>
          <b-nav-item>Điều khoản sử dụng</b-nav-item>
          <b-nav-item>Fanpage</b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <p>
          Người chịu trách nhiệm nội dung: Trần Tuấn Mạnh
          <span class="middot"></span> © 2019 Pubnow Team
          <br />Điện thoại: 0963590255
          <br />Email: tuanmanh97x@gmail.com
          <br />Địa chỉ: Đại học FPT - KM29 Đại lộ Thăng Long - Hòa Lạc - Thạch Thất - Hà Nội
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  .title {
    font-size: 20px;
    color: #3c61ad;
  }
}
</style>