<template>
  <va-sidebar>
    <h1 class="site-name va-minibar-item-brand">Publish Now</h1>
    <va-sidebar-group :items="menuItems" />
  </va-sidebar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Thống kê', route: '/', icon: 'chart-line' },
        {
          name: 'Tài khoản',
          route: '/accounts',
          icon: 'user',
        },
        {
          name: 'Bài viết',
          route: '/articles',
          icon: 'file',
        },
        {
          name: 'Chuyên mục',
          route: '/categories',
          icon: 'archive',
        },
        {
          name: 'Thẻ',
          route: '/tags',
          icon: 'tags',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

.site-name {
  margin-left: $unit / 2;
}
</style>
