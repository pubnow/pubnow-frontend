<template>
  <b-tabs content-class="mt-3" class="mt-4">
    <b-tab
      title="Tổng quan"
      title-link-class="icon-overview"
      @click="overview"
      active
    />
    <b-tab
      title="Bài viết"
      title-link-class="icon-article"
      @click="article"
    />
    <b-tab
      title="Thành viên"
      title-link-class="icon-member"
      @click="member"
    />
    <b-tab
      title="Cài đặt"
      title-link-class="icon-setting"
      @click="setting"
    />
  </b-tabs>
</template>

<script>
export default {
  methods: {
    overview() {
    },
    article() {
      this.$router.push('bai-viet')
    },
    member() {
      this.$router.push('thanh-vien')
    },
    setting() {
      this.$router.push('cai-dat')
    }
  }
}
</script>

<style lang="scss">
@import '@pubnow/ui/scss/_colors.scss';

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
