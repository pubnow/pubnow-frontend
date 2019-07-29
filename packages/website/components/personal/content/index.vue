<template>
  <div class="container">
    <b-row>
      <b-col :xs="12" :sm="6" :md="4" v-for="(article, index) in articles" :key="index">
        <TheArticle :article="article" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TheArticle from '../article'
import { mapGetters } from 'vuex'
export default {
  components: {
    TheArticle,
  },
  computed: {
    ...mapGetters({
      articles: 'user/articles',
    }),
  },
}
</script>

<style lang="scss" scoped>
</style>
