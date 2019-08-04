<template>
  <div class="home-page container">
    <no-ssr>
      <FeaturedArea />
    </no-ssr>
    <div class="row mt-2">
      <div class="col-sm-8">
        <Latest />
      </div>
      <div class="col-sm-4">
        <PopularOnPubnow />
      </div>
    </div>
  </div>
</template>

<script>
import { FeaturedArea, Latest, PopularOnPubnow } from '@/components/home'

export default {
  components: {
    FeaturedArea,
    PopularOnPubnow,
    Latest,
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
}
</script>
<style lang="scss" scoped>
.u-maxWidth1032 {
  max-width: 1032px !important;
}
</style>
