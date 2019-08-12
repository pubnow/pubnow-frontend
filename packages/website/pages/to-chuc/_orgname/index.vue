<template>
  <div class="home-page container">
    <no-ssr>
      <FeaturedArea />
    </no-ssr>
    <div class="row mt-2">
      <div class="col-md-8">
        <Latest />
      </div>
      <div class="col-md-4">
        <Popular />
      </div>
    </div>
  </div>
</template>
<script>
import { FeaturedArea, Latest, Popular } from '@/components/organization/home'

export default {
  components: {
    FeaturedArea,
    Latest,
    Popular,
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
    const { orgname } = this.$route.params
    if (!this.ssr) {
      Promise.all([
        this.$store.dispatch('organization/articles', orgname),
        this.$store.dispatch('organization/popular', orgname),
        this.$store.dispatch('organization/featured', orgname),
      ]).catch(e => {
        this.$nuxt.error({
          statusCode: 403,
          message: 'Tổ chức này chưa được kích hoạt.',
        })
      })
    }
  },
  async fetch({ store, params, error }) {
    const { orgname } = params
    await store.dispatch('organization/show', orgname)
    if (process.server) {
      try {
        await store.dispatch('organization/articles', orgname)
        await store.dispatch('organization/popular', orgname)
        await store.dispatch('organization/featured', orgname)
      } catch (e) {
        error({
          statusCode: 403,
          message: 'Tổ chức này chưa được kích hoạt.',
        })
      }
    }
  },
}
</script>
