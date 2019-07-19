<template>
  <va-affix :offset="0">
    <nav class="nav-wrapper navbar-expand-lg bg-white py-2">
      <b-container>
        <b-navbar-nav>
          <NavItem to="/">Trang chủ</NavItem>
          <NavItem to="/nguoi-dung/noi-bat">Thành viên nổi bật</NavItem>
          <NavItem
            v-for="category in randomCategories"
            :key="category.id"
            :to="`/danh-muc/${category.slug}`"
          >{{category.name}}</NavItem>
          <NavItem to="/danh-muc">Tất cả chuyên mục</NavItem>
        </b-navbar-nav>
      </b-container>
    </nav>
  </va-affix>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import NavItem from './NavItem'

export default {
  components: {
    NavItem,
  },
  computed: {
    ...mapGetters({
      categories: 'category/categories',
    }),
    randomCategories() {
      return take(shuffle(this.categories), 5)
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

.nav-wrapper {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
}
</style>
