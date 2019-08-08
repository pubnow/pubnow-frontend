<template>
  <div class="home-page container">
    <no-ssr>
      <FeaturedArea />
    </no-ssr>
    <div class="row mt-2">
      <div class="col-sm-8">
        <Latest />
        <no-ssr>
          <infinite-loading @infinite="infiniteHandler">
            <LatestArticlePlaceholder slot="spinner" />
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </infinite-loading>
        </no-ssr>
      </div>
      <div class="col-sm-4">
        <PopularOnPubnow />
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { mapGetters } from 'vuex'
import { FeaturedArea, Latest, PopularOnPubnow } from '@/components/home'
import { LatestArticlePlaceholder } from '@/components/common'

export default {
  components: {
    FeaturedArea,
    PopularOnPubnow,
    Latest,
    InfiniteLoading,
    LatestArticlePlaceholder,
  },
  computed: {
    ...mapGetters({
      currentPage: 'article/currentPage',
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
      this.$store.dispatch('article/index')
      this.$store.dispatch('article/popular')
      this.$store.dispatch('article/featured')
    }
  },
  async fetch({ store }) {
    if (process.server) {
      await store.dispatch('article/index')
      await store.dispatch('article/popular')
      await store.dispatch('article/featured')
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
.u-maxWidth1032 {
  max-width: 1032px !important;
}
</style>
