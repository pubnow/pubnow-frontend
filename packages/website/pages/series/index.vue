<template>
  <b-container>
    <h1>Series</h1>
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
    <p>
      <va-pagination :total="pagedItems.length" :max="max" :per-page="perPage" class="my-5"></va-pagination>
    </p>
  </b-container>
</template>

<script>
import { ItemSeries } from '@/components/series'
import data from '@/components/series/dataFake'
export default {
  components: {
    ItemSeries,
  },
  data() {
    let pagedItems = []
    for (let i = 0; i < 150; i++) {
      pagedItems.push(i + 1)
    }
    return {
      max: 5,
      perPage: 10,
      pagedItems: pagedItems,
      activePagedItems: [],
      series: data,
    }
  },
}
</script>