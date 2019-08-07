<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="8">
          <HeadingText>Series</HeadingText>
          <div class="mt-2">
            <div v-if="series.length > 0">
              <ItemSeries
                v-for="(item, index) in series"
                :key="`series-${index}`"
                :slug="item.slug"
                :author="item.author"
                :title="item.title"
                :date="item.publishedAt"
                :articles="item.articles"
              />
              <va-pagination
                :total="series.length"
                :max="max"
                :per-page="perPage"
                class="mt-3 mb-5"
              ></va-pagination>
            </div>
            <h2 v-else class="mt-3">Hiện tại không có series nào</h2>
          </div>
        </b-col>
        <b-col md="4">
          <va-affix :offset="80">
            <HeadingText>Top Series nổi bật</HeadingText>
            <div>WIP</div>
          </va-affix>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { HeadingText } from '@/components/common'
import { ItemSeries } from '@/components/series'
import { mapGetters } from 'vuex'
export default {
  components: {
    HeadingText,
    ItemSeries,
  },
  mounted() {
    this.$store.dispatch('series/show').then(() => {
      this.series = this.listSeries
    })
  },
  computed: {
    ...mapGetters({
      listSeries: 'series/listSeries',
    }),
  },
  data() {
    return {
      max: 2,
      perPage: 2,
      series: [],
    }
  },
}
</script>