<template>
  <no-ssr>
    <nav class="wrap-control navbar-expand-lg py-2 mt-3">
      <b-navbar-nav>
        <NavItem :to="`/to-chuc/${param}/quan-ly`" class="icon-overview">Tổng quan</NavItem>
        <NavItem :to="`/to-chuc/${param}/quan-ly/bai-viet`" class="icon-article">Bài viết</NavItem>
        <NavItem :to="`/to-chuc/${param}/quan-ly/thanh-vien`" class="icon-member">Thành viên</NavItem>
        <NavItem :to="`/to-chuc/${param}/quan-ly/cai-dat`" class="icon-setting">Cài đặt</NavItem>
      </b-navbar-nav>
    </nav>
  </no-ssr>
</template>

<script>
import NavItem from './NavItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    NavItem,
  },
  computed: {
    ...mapGetters({
      param: 'organization/param',
    }),
  },
}
</script>


<style lang="scss">
@import '@pubnow/ui/scss/_colors.scss';

.wrap-control {
  border-bottom: 1px solid $gray90;
}

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
