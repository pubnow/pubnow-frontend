<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="9" class="mx-auto">
          <HtmlEditor :api="api" />
          <hr />
          <Information />
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Information } from '@/components/article'
import { HtmlEditor } from '@/components/editor'

export default {
  middleware: ['auth'],
  head: {
    title: 'Viết bài',
  },
  components: {
    Information,
    HtmlEditor,
  },
  computed: {
    ...mapGetters(['api']),
  },
}
</script>
