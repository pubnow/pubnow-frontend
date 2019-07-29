<template>
  <div class="detail-tag">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <NameTag />
          <div v-if="tag.articles.length > 0">
            <div v-for="(article, id) in tag.articles" :key="id">
              <LeftDetailCategory :article="article" :categoryName="tag.name" />
            </div>
          </div>
          <h2 v-else class="text-align-center">Không có bài viết nào!</h2>
        </div>
        <div class="col-sm-4">
          <HeaderDetailCategory />
          <RightDetailCategory />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
} from '~/components/category'
import { mapGetters } from 'vuex'
import NameTag from '@/components/tags/NameTag'
export default {
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
    RightDetailCategory,
    NameTag,
  },
  computed: {
    ...mapGetters({
      tag: 'tag/tag',
    }),
  },
  fetch({ store, params: { slug } }) {
    return store.dispatch('tag/show', slug)
  },
}
</script>
<style lang="scss" scoped>
</style>
