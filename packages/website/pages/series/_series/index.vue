<template>
  <b-container class="bg-white">
    <b-row>
      <b-col cols="9">
        <information />
        <contents />
        <b-container>
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
        </b-container>
        <comments />
      </b-col>
      <p-col cols="3">
        <author />
      </p-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  Information,
  Contents,
  ItemSeries,
  Comments,
} from '@/components/series'
import Author from '@/components/personal/information/author'
import data from '@/components/series/dataFake'
export default {
  components: {
    Information,
    Contents,
    ItemSeries,
    Comments,
    Author,
  },
  data() {
    return {
      series: data,
    }
  },
}
</script>