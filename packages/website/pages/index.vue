<template>
  <div class="home-page container">
    <div class="row">
      <FeaturedArea />
    </div>
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
  async fetch({ store }) {
    await store.dispatch('article/index')
    await store.dispatch('article/popular')
    await store.dispatch('article/featured')
  },
}
</script>
<style lang="scss" scoped>
.u-maxWidth1032 {
  max-width: 1032px !important;
}
</style>
