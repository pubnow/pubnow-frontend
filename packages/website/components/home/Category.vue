<template>
  <div class="home-category-item mb-4">
    <div class="category-title">
      <nuxt-link :to="`/danh-muc/${category.slug}`" class="title">
        <va-icon type="chevron-right"></va-icon>
        {{ category.name }}
      </nuxt-link>
    </div>
    <b-row class="mt-3">
      <b-col v-for="article in articles" :key="article.id" md="3">
        <CategoryCard :article="article" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { HeadingText } from '@/components/common'
import take from 'lodash.take'
import CategoryCard from './card-article/CategoryCard'

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
  },
  computed: {
    articles() {
      return take(this.category.articles, 4)
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