<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <SimpleArticleEditor />
          <hr />
          <Information />
        </b-col>
      </b-row>
    </b-container>
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
