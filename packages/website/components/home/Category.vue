<template>
  <div class="home-category-item mb-4" v-if="show">
    <div class="category-title">
      <nuxt-link :to="`/danh-muc/${category.slug}`" class="title">
        <va-icon type="chevron-right"></va-icon>
        {{ category.name }}
      </nuxt-link>
    </div>
    <b-row class="mt-3">
      <!-- <b-col v-for="article in articles" :key="article.id" md="3">
        <CategoryCard :article="article" />
      </b-col>-->
      <b-col class="mb-4" md="12" v-if="one">
        <TopPopular :article="one" show-excerpt />
      </b-col>
      <b-col class="mb-4" md="7" v-if="two">
        <TopPopular :article="two" />
      </b-col>
      <b-col class="mb-4" md="5" v-if="three">
        <TopPopular :article="three" />
      </b-col>
      <b-col class="mb-4" md="5" v-if="four">
        <TopPopular :article="four" />
      </b-col>
      <b-col class="mb-4" md="7" v-if="five">
        <TopPopular :article="five" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { HeadingText } from '@/components/common'
import take from 'lodash.take'
import get from 'lodash.get'
import CategoryCard from './card-article/CategoryCard'
import TopPopular from './card-article/TopPopular'

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  components: {
    HeadingText,
    CategoryCard,
    TopPopular,
  },
  computed: {
    show() {
      return this.category.articles.length > 0
    },
    articles() {
      return take(this.category.articles, 4)
    },
    one() {
      return get(this.category, 'articles[0]')
    },
    two() {
      return get(this.category, 'articles[1]')
    },
    three() {
      return get(this.category, 'articles[2]')
    },
    four() {
      return get(this.category, 'articles[3]')
    },
    five() {
      return get(this.category, 'articles[4]')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.home-category-item {
  .category-title {
    border-bottom: 2px solid $y500;
    font-weight: 500;
    // text-transform: uppercase;
    display: flex;
    font-size: 16px;
    .title {
      color: $white;
      // background-image: linear-gradient(to top, $b200 0%, $b100 100%);
      color: $n500;
      font-weight: 500;
      background: $y200;
      padding: 5px 10px;
    }
  }
}
</style>