<template>
  <div class="detail-category">
    <b-container>
      <b-row>
        <b-col :sm="8">
          <div v-if="category.articles.length > 0">
            <div v-for="(article, id) in category.articles" :key="id">
              <LeftDetailCategory :article="article" :categoryName="category.name" />
            </div>
          </div>
          <h2 v-else class="text-align-center">Không có bài viết nào!</h2>
        </b-col>
        <b-col :sm="4">
          <no-ssr>
            <va-affix :offset="70">
              <CardCategory
                class="mb-2"
                :title="category.name"
                :slug="category.slug"
                :following="category.following"
                :image="category.image"
                :articles="category.articles_count"
                :followers="category.followers_count"
              />
              <RightDetailCategory :description="category.description" />
            </va-affix>
          </no-ssr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
  CardCategory,
} from '~/components/category'

export default {
  scrollToTop: true,
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
    RightDetailCategory,
    CardCategory,
  },
  computed: {
    ...mapGetters({
      category: 'category/category',
    }),
  },
  fetch({ store, params: { slug } }) {
    return store.dispatch('category/show', slug)
  },
}
</script>
<style scoped>
.right {
  padding-left: 40px !important;
}
</style>
