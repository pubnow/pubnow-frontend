<template>
  <no-ssr>
    <div class="container">
      <SimpleArticleEditor />
      <hr />
      <Information />
    </div>
  </no-ssr>
</template>

<script>
import { Information } from '@/components/article'
import SimpleArticleEditor from '@/components/editor/SimpleArticle'

export default {
  middleware: ['auth'],
  head: {
    title: 'Viết bài',
  },
  components: {
    Information,
    SimpleArticleEditor,
  },
}
</script>
