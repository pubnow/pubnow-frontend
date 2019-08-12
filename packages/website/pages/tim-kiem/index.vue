<template>
  <div class="container mb-4 py-5">
    <b-row>
      <b-col cols="8" offset="2">
        <no-ssr>
          <div v-if="keyword">
            <NotFound
              v-if="!$wait.is('search/article') && articles.length === 0"
              :reason="`Không có kết quả nào phù hợp với từ khóa '${keyword}'`"
            />
            <div v-else>
              <p class="text-search">
                Kết quả tìm kiếm của
                <b>"{{ keyword }}"</b>
              </p>
              <va-tabs @changed="onTabChange" :cache-lifetime="5" class="mt-4">
                <va-tab name="Bài đăng">
                  <Article :keyword="keyword" />
                </va-tab>
              </va-tabs>
            </div>
          </div>
          <NotFound v-else reason="Bạn chưa nhập từ khóa tìm kiếm !!!" />
        </no-ssr>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Article, Users, Tags } from '@/components/search'
import { NotFound } from '@/components/common'

export default {
  watchQuery: ['keyword'],
  asyncData({ query }) {
    const { keyword } = query
    return {
      keyword,
    }
  },
  key(route) {
    return route.fullPath
  },
  data() {
    return {
      keyword: '',
      rowsArticle: 100,
      currentPageArticle: 1,
      rowsUser: 100,
      currentPageUser: 1,
      users: [
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Nguyễn Đắc Sang',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Nguyễn Phương Hồng Thủy',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Đỗ Quang Hiệp',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
      ],
      rowsTag: 100,
      currentPageTag: 1,
    }
  },
  components: {
    Article,
    Users,
    Tags,
    NotFound,
  },
  computed: {
    ...mapGetters({
      articles: 'search/articles',
    }),
  },
  mounted() {
    if (this.keyword) {
      this.$store.dispatch('search/article', { keyword: this.keyword })
    }
  },
  methods: {
    onTabChange() {
      console.log('Tab changed')
    },
  },
}
</script>
