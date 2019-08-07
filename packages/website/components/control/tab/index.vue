<template>
  <no-ssr>
    <ul class="clearfix va-nav-tabs mt-4 mb-3">
      <NavItem :to="`/to-chuc/${param}/quan-ly`" icon="chart-bar">Tổng quan</NavItem>
      <NavItem :to="`/to-chuc/${param}/quan-ly/bai-viet`" icon="newspaper">Bài viết</NavItem>
      <NavItem :to="`/to-chuc/${param}/quan-ly/thanh-vien`" icon="users">Thành viên</NavItem>
      <NavItem :to="`/to-chuc/${param}/quan-ly/cai-dat`" icon="cog">Cài đặt</NavItem>
    </ul>
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
    param() {
      const { orgname } = this.$route.params
      return orgname
    },
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
