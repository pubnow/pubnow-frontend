<template>
  <no-ssr>
    <b-container class="pb-4">
      <b-row>
        <b-col md="8">
          <HeadingText>Series</HeadingText>
          <div class="mt-2">
            <v-wait for="series.index" transition="fade" mode="out-in">
              <template slot="waiting">
                <SeriesPlaceholder v-for="i in 5" :key="i" />
              </template>
              <div v-if="listSeries.length > 0">
                <ItemSeries
                  v-for="(item, index) in listSeries"
                  :key="`series-${index}`"
                  :slug="item.slug"
                  :author="item.author"
                  :title="item.title"
                  :date="item.publishedAt"
                  :articles="item.articles"
                  :excerpt="item.excerpt"
                />
                <infinite-loading @infinite="infiniteHandler">
                  <SeriesPlaceholder slot="spinner" />
                  <div slot="no-more"></div>
                  <div slot="no-results"></div>
                </infinite-loading>
              </div>
              <Empty v-else type="series">
                <va-button
                  class="mt-3 font-weight-bold"
                  icon-before="plus"
                  @click="createSeries"
                >Tạo Series</va-button>
              </Empty>
            </v-wait>
          </div>
        </b-col>
        <b-col md="4" v-if="listSeries.length > 0">
          <va-affix :offset="80">
            <div class="right-side text-center">
              <div class="top">
                <img src="@/assets/images/series.svg" class="image" />
                <div class="count">
                  <span class="number">{{ total }}</span>
                  <br />series
                </div>
              </div>
              <va-button
                class="mt-3 font-weight-bold"
                icon-before="plus"
                @click="createSeries"
              >Tạo Series</va-button>
            </div>
          </va-affix>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import { ItemSeries } from '@/components/series'
import { HeadingText, Empty, SeriesPlaceholder } from '@/components/common'

export default {
  components: {
    HeadingText,
    ItemSeries,
    Empty,
    InfiniteLoading,
    SeriesPlaceholder,
  },
  mounted() {
    this.$store.dispatch('series/index')
  },
  computed: {
    ...mapGetters({
      listSeries: 'series/listSeries',
      total: 'series/total',
      currentPage: 'series/currentPage',
    }),
  },
  data() {
    return {
      max: 2,
      perPage: 2,
      series: [],
    }
  },
  methods: {
    createSeries() {
      this.$router.push('/series/tao-moi')
    },
    infiniteHandler($state) {
      this.$store.commit('series/setCurrentPage', this.currentPage + 1)
      this.$store.dispatch('series/loadMore').then(series => {
        if (series.length) {
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
.right-side {
  .top {
    position: relative;
    .count {
      user-select: none;
      position: absolute;
      color: white;
      left: -10px;
      right: 0;
      bottom: 50px;
      font-size: 16px;
      text-transform: uppercase;
      .number {
        font-size: 24px;
        font-weight: bold;
      }
    }
    .image {
      display: block;
      margin: 0 auto;
      max-width: 250px;
    }
  }
}
</style>