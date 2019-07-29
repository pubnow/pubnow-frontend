<template>
  <div>
    <TheHeader />
    <Information />
    <TheContent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TheHeader, TheContent, Information } from '@/components/personal'

export default {
  components: {
    TheHeader,
    TheContent,
    Information,
  },
  computed: {
    ...mapGetters({
      articles: 'user/articles',
    }),
  },
  async fetch({ store, params: { username } }) {
    await store.dispatch('user/articles', username)
    await store.dispatch('user/author', username)
  },
}
</script>
