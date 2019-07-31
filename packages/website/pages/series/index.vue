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
      series: [
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Cộng hòa xã hội chủ nghĩa việt nam độc lập tự do hạnh phúc',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam', 'độc lập'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: [
            'cộng hòa',
            'xã hội',
            'chủ nghĩa',
            'việt nam',
            'độc lập',
            'tự do',
            'hạnh phúc',
            'tôi',
            'nói',
            'đồng bào',
            'có nghe',
            'rõ không',
            'hả',
            'nếu không',
            'nghe',
            'rõ',
          ],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          author: 'Nguyễn Roãn Tú',
          date: '13 tháng 9 năm 2019',
          title: 'Có mắt như mù',
          tags: ['cộng hòa', 'xã hội', 'chủ nghĩa', 'việt nam'],
          views: 12,
          clips: 25,
          comments: 153,
          posts: 12,
          claps: 1563,
        },
      ],
    }
  },
}
</script>