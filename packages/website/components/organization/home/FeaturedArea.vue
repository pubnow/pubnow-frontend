<template>
  <div class="featured mb-3">
    <Heading>Nổi bật</Heading>
    <v-wait for="org.featured" transition="fade" mode="out-in">
      <template slot="waiting">
        <FeaturedPlaceholder />
      </template>
      <div v-if="featuredPosts.length">
        <b-row class="mt-2 no-gutters">
          <b-col :md="5">
            <CardVertical :article="featuredPosts[0]" />
          </b-col>
          <b-col :md="4" v-if="featuredPosts.length === 5">
            <CardVertical class="mx-md-2" :article="featuredPosts[4]" />
          </b-col>
          <b-col :md="3">
            <CardHorizontal v-for="i in top" :article="featuredPosts[i]" :key="i" />
          </b-col>
        </b-row>
      </div>
    </v-wait>
  </div>
</template>

<script>
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import { mapGetters } from 'vuex'
import { FeaturedPlaceholder } from '@/components/common'
import Heading from '@/components/common/HeadingText'
import CardVertical from '@/components/home/card-article/CardVertical'
import CardHorizontal from '@/components/home/card-article/CardHorizontal'

export default {
  computed: {
    ...mapGetters({
      articles: 'organization/featured',
    }),
    featuredPosts() {
      return take(this.articles, 5)
    },
    top() {
      if (this.featuredPosts.length === 5) {
        return 3
      } else {
        return this.featuredPosts.length - 1
      }
    },
  },
  components: {
    Heading,
    CardVertical,
    CardHorizontal,
    FeaturedPlaceholder,
  },
}
</script>
