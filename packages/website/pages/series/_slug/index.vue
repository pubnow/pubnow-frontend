<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="8">
          <information />
          <contents />
          <div>
            <item-series
              v-for="(item, index) in series"
              :key="`series-${index}`"
              :avatar="item.avatar"
              :author="item.author"
              :title="item.title"
              :date="item.date"
              :tags="item.tags"
              :views="item.views"
              :clips="item.clips"
              :comments="item.comments"
              :posts="item.posts"
              :claps="item.claps"
            />
          </div>
          <comments />
        </b-col>
        <b-col md="4">
          <va-affix :offset="70">
            <user />
          </va-affix>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import {
  Information,
  Contents,
  ItemSeries,
  Comments,
  User,
} from '@/components/series'
import data from '@/components/series/dataFake'
export default {
  components: {
    Information,
    Contents,
    ItemSeries,
    Comments,
    User,
  },
  data() {
    return {
      series: data,
    }
  },
}
</script>