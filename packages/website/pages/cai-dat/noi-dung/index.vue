<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="2">
          <va-button
            block
            type="subtle"
            :active="isArticle"
            class="mt-1"
            icon-before="file"
            @click="changeType('article')"
          >
            Bài viết
            <b-badge variant="primary" class="ml-auto">{{articles.length}}</b-badge>
          </va-button>
          <va-button
            block
            type="subtle"
            :active="isSeries"
            class="mt-1"
            icon-before="clone"
            @click="changeType('series')"
          >
            Series
            <b-badge variant="primary" class="ml-auto">{{series.length}}</b-badge>
          </va-button>
        </b-col>
        <b-col md="10">
          <HeadingText v-if="isArticle" class="d-flex align-items-center">
            Bài viết của tôi
            <va-button active class="ml-auto" @click="newArticle">+ Thêm mới</va-button>
          </HeadingText>
          <HeadingText v-if="isSeries" class="d-flex align-items-center">
            Series của tôi
            <va-button active class="ml-auto" @click="newSeries">+ Thêm mới</va-button>
          </HeadingText>
          <b-table
            :items="articles"
            :fields="fields"
            v-if="isArticle"
            :busy="$wait.is('article.user')"
            striped
          >
            <div slot="table-busy" class="text-center text-primary my-4">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Đang tải dữ liệu ...</strong>
            </div>
            <template slot="status" slot-scope="{ item }">
              <b-badge variant="warning" v-if="item.private">Không công khai</b-badge>
              <b-badge variant="dark" v-else-if="item.draft">Nháp</b-badge>
              <b-badge variant="success" v-else>Đã xuất bản</b-badge>
            </template>
          </b-table>
          <b-table :items="[]" :fields="fields" v-if="isSeries" striped>
            <template slot="status" slot-scope="{ item }">
              <b-badge variant="warning" v-if="item.private">Không công khai</b-badge>
              <b-badge variant="dark" v-else-if="item.draft">Nháp</b-badge>
              <b-badge variant="success" v-else>Đã xuất bản</b-badge>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import { HeadingText } from '@/components/common'

export default {
  middleware: ['auth'],
  data() {
    return {
      series: [],
      type: 'article',
      fields: [
        {
          key: 'title',
          label: 'Tiêu đề',
          tdClass: 'w-title',
        },
        {
          key: 'claps',
          label: 'Lượt vỗ tay',
        },
        {
          key: 'seen_count',
          label: 'Lượt xem',
        },
        {
          key: 'publishedAt',
          label: 'Thời gian đăng',
        },
        {
          key: 'status',
          label: 'Trạng thái',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Nội dung của tôi',
    }
  },
  components: {
    HeadingText,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      articles: 'article/userArticles',
      // TODO: SERIES
      // series: 'article/userArticles',
    }),
    isArticle() {
      return this.type === 'article'
    },
    isSeries() {
      return this.type === 'series'
    },
    dataTable() {
      if (this.isArticle) {
        return this.articles
      }
      return this.series
    },
  },
  methods: {
    changeType(type) {
      this.type = type
    },
    newArticle() {
      this.$router.push('/bai-viet/tao-moi')
    },
    newSeries() {
      this.$router.push('/series/tao-moi')
    },
  },
  mounted() {
    this.$store.dispatch('article/user', this.user.username)
  },
}
</script>

<style lang="scss" scoped>
.w-40 {
  max-width: 40%;
}
</style>
