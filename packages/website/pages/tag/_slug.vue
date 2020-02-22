<template>
  <div class="detail-tag">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div v-if="tag.articles.length > 0">
            <NameTag :tagName="tag.name" />
            <div v-for="article in tag.articles" :key="article.id">
              <LeftDetailTag :article="article" :tagName="tag.name" />
            </div>
          </div>
          <h2 v-else class="text-align-center">Không có bài viết nào!</h2>
        </div>
        <div class="col-sm-4">
          <HeaderDetailTag :name="tag.name" :following="tag.following" :slug="tag.slug" />
          <RightDetailTag />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HeaderDetailTag,
  LeftDetailTag,
  RightDetailTag,
  NameTag,
} from '~/components/tags'
import { mapGetters } from 'vuex'
export default {
  components: {
    HeaderDetailTag,
    LeftDetailTag,
    RightDetailTag,
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
