<template>
  <div>
    <h3>Bài viết của bạn</h3>
    <template v-if="!$wait.is('user.article')">
      <template v-if="articles">
        <div
          v-for="(article, index) in articles"
          :key="`article-${index}`"
          class="wrap-article py-1 px-1 mb-2"
          @click="select(article, index)"
          :class="listSelected.includes(article) ? 'selected' : ''"
        >
          <h2 class="title mb-0">{{ article.title }}</h2>
        </div>
      </template>
      <span v-else>Chưa có bài viết nào ở đây</span>
    </template>
    <p v-else>Đang tải...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    listSelected: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      articles: 'user/articlesAll',
      user: 'auth/user',
    }),
  },
  methods: {
    select(article, index) {
      this.$emit('addArticle', article)
    },
  },
  async mounted() {
    if (!this.articles.length) {
      await this.$store.dispatch('user/articles', this.user.username)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.wrap-article {
  @include border;
  cursor: pointer;
  .title {
    font-size: $unit / 1.3;
  }
}
.selected {
  background: $gray90;
}
</style>
