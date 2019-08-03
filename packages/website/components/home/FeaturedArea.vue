<template>
  <div class="featured mb-3">
    <Heading>Nổi bật</Heading>
    <b-row class="mt-2 no-gutters">
      <b-col :md="5" class="order-md-1">
        <CardVertical :article="featuredPosts[0]" />
      </b-col>
      <b-col :md="3" class="order-md-2 order-first">
        <CardHorizontal v-for="i in 3" :article="featuredPosts[i]" :key="i" />
      </b-col>
      <b-col :md="4" class="order-md-3">
        <CardVertical :article="featuredPosts[4]" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import { mapGetters } from 'vuex'
import Heading from '../common/HeadingText'
import CardVertical from './card-article/CardVertical'
import CardHorizontal from './card-article/CardHorizontal'

export default {
  computed: {
    ...mapGetters({
      articles: 'article/featured',
    }),
    featuredPosts() {
      return take(this.articles, 5).reverse()
    },
  },
  components: {
    Heading,
    CardVertical,
    CardHorizontal,
  },
}
</script>
