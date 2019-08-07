<template>
  <no-ssr>
    <b-container>
      <editor-create status="edit" :dataSeries="series" v-if="series" />
      <content-create />
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import { EditorCreate, ContentCreate } from '@/components/series'
export default {
  middleware: 'auth',
  components: {
    EditorCreate,
    ContentCreate,
  },
  fetch({ store, params: { slug } }) {
    if (process.server) {
      return store.dispatch('series/index', slug)
    }
  },
  computed: {
    ...mapGetters({
      series: 'series/series',
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>

