<template>
  <div class="container">
    <va-row :gutter="30" class="mt-4">
      <va-column :xs="12" :sm="6" :md="8">
        <Article
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
      <va-column :xs="12" :sm="6" :md="4">
        <User />
      </va-column>
    </va-row>
  </div>
</template>

<script>
import Article from '../article'
import User from './user'
import { mapGetters } from 'vuex'
export default {
  components: {
    Article,
    User,
  },
  computed: {
    ...mapGetters({
      article: 'user/second',
    }),
  },
}
</script>

