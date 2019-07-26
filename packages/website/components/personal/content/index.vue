<template>
  <div class="container">
    <va-row :gutter="30">
      <va-column :xs="12" :sm="6" :md="4" v-for="(article, index) in articles" :key="index">
        <the-article
          :image="article.thumbnail"
          :category="article.category.name"
          :title="article.title"
          :date="article.updatedAt"
          :content="article.content"
          :description="article.excerpt"
          :clap="article.claps"
          :comment="article.comments.length"
        />
      </va-column>
    </va-row>
  </div>
</template>

<script>
import TheArticle from '../article'
import { mapGetters } from 'vuex'
export default {
  components: {
    TheArticle,
  },
  computed: {
    ...mapGetters({
      articles: 'user/articles',
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>
