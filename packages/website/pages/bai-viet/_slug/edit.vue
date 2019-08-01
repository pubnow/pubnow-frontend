<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="9" class="mx-auto">
          <HtmlEditor :api="api" />
          <hr />
          <Information :slug="article.slug" />
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import { Information } from '@/components/article'
import { HtmlEditor } from '@/components/editor'

export default {
  middleware: ['auth'],
  components: {
    HtmlEditor,
    Information,
  },
  async fetch({ store, params: { slug }, error }) {
    const article = await store.dispatch('article/show', slug)
    const user = store.getters['auth/user']
    if (!article) {
      error({
        statusCode: 404,
        message: 'Bài viết không tồn tài',
      })
    }
    if (user.id !== article.author.id) {
      error({
        statusCode: 403,
        message: 'Bạn không được phép chỉnh sửa bài viết này',
      })
    }
  },
  head() {
    return {
      title: `Chỉnh sửa - ${this.article.title}` || 'Chỉnh sửa bài viết',
    }
  },
  computed: {
    ...mapGetters({
      article: 'article/article',
      api: 'api',
    }),
  },
}
</script>
