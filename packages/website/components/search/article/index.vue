<template>
  <div class="mt-3">
    <div v-if="$wait.is('search.article')">
      <ArticleLargePlaceholder v-for="i in 2" :key="i" />
    </div>
    <div v-else>
      <Article
        v-for="article in articles"
        :key="article.id"
        :keyword="keyword"
        :title="article.title"
        :fullname="article.author.name"
        :image="article.thumbnail"
        :category="article.category.name"
        :description="article.excerpt | unescape"
        :clap="article.claps"
        :comment="0"
        :date="article.createdAt"
        time="5 phút"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ArticleLargePlaceholder } from '@/components/common'
import Article from './article'

export default {
  components: {
    Article,
    ArticleLargePlaceholder,
  },
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      articles: 'search/articles',
    }),
  },
}
</script>

