<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="8">
          <HeadingText>Series</HeadingText>
          <div class="mt-2">
            <ItemSeries
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
            <va-pagination
              :total="pagedItems.length"
              :max="max"
              :per-page="perPage"
              class="mt-3 mb-5"
            ></va-pagination>
          </div>
        </b-col>
        <b-col md="4">
          <va-affix :offset="80">
            <HeadingText>Top Series nổi bật</HeadingText>
            <div>WIP</div>
          </va-affix>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { HeadingText } from '@/components/common'
import { ItemSeries } from '@/components/series'
import data from '@/components/series/dataFake'

export default {
  components: {
    HeadingText,
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