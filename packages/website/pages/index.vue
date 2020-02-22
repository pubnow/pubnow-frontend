<template>
  <div class="home-page">
    <div class="container">
      <no-ssr>
        <PopularOnPubnow />
        <v-wait for="article.home" transition="fade" mode="out-in">
          <template slot="waiting">
            <HomeCategoryPlaceholder v-for="i in 6" :key="i" />
          </template>
          <div v-if="categories.length > 0">
            <Category v-for="category in categories" :key="category.id" :category="category" />
          </div>
        </v-wait>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { mapGetters } from 'vuex'
import { PopularOnPubnow, Category } from '@/components/home'
import { HomeCategoryPlaceholder } from '@/components/common'

export default {
  components: {
    PopularOnPubnow,
    InfiniteLoading,
    Category,
    HomeCategoryPlaceholder,
  },
  computed: {
    ...mapGetters({
      currentPage: 'article/currentPage',
      user: 'auth/user',
      categories: 'article/categories',
    }),
  },
  data() {
    return {
      ssr: false,
    }
  },
  asyncData() {
    if (process.server) {
      return {
        ssr: true,
      }
    }
    return {
      ssr: false,
    }
  },
  mounted() {
    if (!this.ssr) {
      this.$store.dispatch('article/home')
      this.$store.dispatch('article/popular')
    }
  },
  async fetch({ store }) {
    if (process.server) {
      await store.dispatch('article/home')
      await store.dispatch('article/popular')
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$store.commit('article/setCurrentPage', this.currentPage + 1)
      this.$store.dispatch('article/loadMore').then(articles => {
        if (articles.length) {
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  background-color: #fafafa;
  padding-bottom: 30px;
}
</style>