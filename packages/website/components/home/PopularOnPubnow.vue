<template>
  <no-ssr>
    <div>
      <HeadingText>Đọc nhiều tại Pubnow</HeadingText>
      <div class="mt-3">
        <v-wait for="article.popular" transition="fade" mode="out-in">
          <template slot="waiting">
            <WellReadPlaceholder />
          </template>
          <div v-if="articles.length > 0" class="row no-gutters">
            <b-col md="8" class="pr-md-3 pr-0">
              <carousel :per-page="1" paginationActiveColor="#b3d4ff" paginationColor="#deebff">
                <slide v-for="article in topSeven" :key="article.id">
                  <TopPopularCard :article="article" show-category />
                </slide>
              </carousel>
            </b-col>
            <b-col md="4">
              <PopularRight v-for="article in topThree" :key="article.id" :article="article" />
            </b-col>
          </div>
        </v-wait>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import take from 'lodash.take'
import takeRight from 'lodash.takeright'
import { HeadingText, WellReadPlaceholder } from '../common'
import TopPopularCard from './card-article/TopPopular'
import PopularRight from './card-article/PopularRight'

export default {
  components: {
    HeadingText,
    TopPopularCard,
    PopularRight,
    WellReadPlaceholder,
  },
  computed: {
    ...mapGetters({
      articles: 'article/popular',
    }),
    topSeven() {
      return take(this.articles, 7)
    },
    topThree() {
      return takeRight(this.articles, 3)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
</style>
