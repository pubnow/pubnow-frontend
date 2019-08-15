<template>
  <div class="container">
    <b-row class="my-3">
      <b-col :xs="12" :sm="6" :md="8">
        <div v-if="article">
          <Article :article="article" />
        </div>
        <Empty v-else />
      </b-col>
      <b-col :xs="12" :sm="6" :md="4">
        <User />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Empty } from '@/components/common'
import Article from '../article'
import User from './user'

export default {
  components: {
    Article,
    User,
    Empty,
  },
  computed: {
    ...mapGetters({
      article: 'user/second',
    }),
  },
}
</script>
