<template>
  <no-ssr>
    <b-container>
      <b-row v-if="dataSeries">
        <b-col md="8">
          <information
            :slug="dataSeries.slug"
            :title="dataSeries.title"
            :content="dataSeries.content"
            :date="dataSeries.publishedAt"
            :articles="dataSeries.articles"
            :author="dataSeries.author"
          />
          <contents :articles="dataSeries.articles" />
        </b-col>
        <b-col md="4">
          <va-affix :offset="70">
            <user :author="dataSeries.author" :articles="dataSeries.articles" />
          </va-affix>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import {
  Information,
  Contents,
  ItemSeries,
  Comments,
  User,
} from '@/components/series'
import { mapGetters } from 'vuex'
export default {
  components: {
    Information,
    Contents,
    ItemSeries,
    Comments,
    User,
  },
  async fetch({ store, params: { slug } }) {
    await store.dispatch('series/show', slug)
  },
  mounted() {
    this.dataSeries = this.series
  },
  computed: {
    ...mapGetters({
      series: 'series/series',
    }),
  },
  data() {
    return {
      dataSeries: null,
    }
  },
}
</script>