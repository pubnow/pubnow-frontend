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
                :excerpt="item.excerpt"
              />
              <va-pagination
                :total="series.length"
                :max="max"
                :per-page="perPage"
                class="mt-3 mb-5"
              ></va-pagination>
            </div>
            <Empty v-else type="series">
              <va-button
                class="mt-3 font-weight-bold"
                icon-before="plus"
                @click="createSeries"
              >Tạo Series</va-button>
            </Empty>
          </div>
        </b-col>
        <b-col md="4" v-if="series.length > 0">
          <va-affix :offset="80">
            <div class="right-side text-center">
              <div class="top">
                <img src="@/assets/images/series.svg" class="image" />
                <div class="count">
                  <span class="number">{{ total }}</span>
                  <br />
                  series
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
import { HeadingText, Empty } from '@/components/common'
import { ItemSeries } from '@/components/series'
import { mapGetters } from 'vuex'
export default {
  components: {
    HeadingText,
    ItemSeries,
    Empty,
  },
  mounted() {
    this.$store.dispatch('series/show').then(() => {
      this.series = this.listSeries
    })
  },
  computed: {
    ...mapGetters({
      listSeries: 'series/listSeries',
      total: 'series/total'
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