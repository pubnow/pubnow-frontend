<template>
  <b-tabs content-class="mt-3" class="mt-4">
    <b-tab title="Tổng quan" active title-link-class="icon-overview">
      <p>One</p>
    </b-tab>
    <b-tab title="Bài viết" title-link-class="icon-article">
      <p>Two</p>
    </b-tab>
    <b-tab title="Thành viên" title-link-class="icon-member">
      <p>Three</p>
    </b-tab>
    <b-tab title="Cài đặt" title-link-class="icon-setting">
      <p>Four</p>
    </b-tab>
  </b-tabs>
</template>

<style lang="scss">
.icon-member::before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f007';
  margin-right: 5px;
}

.icon-overview::before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\F0AC';
  margin-right: 5px;
}

.icon-article::before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\F518';
  margin-right: 5px;
}

.icon-setting::before {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\F013';
  margin-right: 5px;
}
</style>
