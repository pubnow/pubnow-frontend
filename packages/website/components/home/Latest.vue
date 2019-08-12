<template>
  <div class="latest">
    <HeadingText>Mới nhất</HeadingText>
    <div class="mt-4">
      <v-wait for="article.index" transition="fade" mode="out-in">
        <template slot="waiting">
          <LatestArticlePlaceholder v-for="i in 5" :key="i" />
        </template>
        <LatestCard v-for="article in articles" :article="article" :key="article.id" />
      </v-wait>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { HeadingText, LatestArticlePlaceholder } from '../common'
import LatestCard from './card-article/LatestCard'

export default {
  computed: {
    ...mapGetters({
      articles: 'article/articles',
    }),
  },
  components: {
    HeadingText,
    LatestArticlePlaceholder,
    LatestCard,
  },
  methods: {
    articleLink() {},
  },
}
</script>
