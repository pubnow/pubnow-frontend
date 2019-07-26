<template>
  <div>
    <template v-if="articles.length !== 0">
      <the-header />
      <information />
      <the-content />
    </template>
    <div v-else class="container">
      <va-row :gutter="30" class="mt-4">
        <va-column :xs="12" :sm="6" :md="8">
          <h1>There are no articles</h1>
        </va-column>
        <va-column :xs="12" :sm="6" :md="4">
          <User />
        </va-column>
      </va-row>
    </div>
  </div>
</template>

<script>
import { TheHeader, TheContent, Information } from '@/components/personal'
import { User } from '@/components/personal'
import { mapGetters } from 'vuex'
export default {
  components: {
    TheHeader,
    TheContent,
    Information,
    User,
  },
  computed: {
    ...mapGetters({
      articles: 'user/articles',
    }),
  },
  async fetch({ store }) {
    await store.dispatch('user/articles')
  },
}
</script>
