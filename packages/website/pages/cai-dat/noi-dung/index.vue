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
          <div v-if="isArticle">
            <b-table :items="articles" :fields="fields" :busy="$wait.is('article.user')" striped>
              <div slot="table-busy" class="text-center text-primary my-4">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Đang tải dữ liệu ...</strong>
              </div>
              <template slot="status" slot-scope="{ item }">
                <b-badge variant="warning" v-if="item.private">Không công khai</b-badge>
                <b-badge variant="dark" v-else-if="item.draft">Nháp</b-badge>
                <b-badge variant="success" v-else>Đã xuất bản</b-badge>
              </template>
              <template slot="menu" slot-scope="{ item }">
                <va-dropdown>
                  <div slot="trigger">
                    <va-button type="subtle">
                      <va-icon type="angle-down" />
                    </va-button>
                  </div>
                  <li>
                    <nuxt-link :to="`/bai-viet/${item.slug}/edit`">Chỉnh sửa</nuxt-link>
                  </li>
                  <li @click="openModal">
                    <a href="#">Xóa</a>
                  </li>
                </va-dropdown>
                <va-modal title="Xóa bài viết" ref="deleteModal" :backdrop-clickable="true">
                  <div slot="body">
                    <p>
                      Bạn có chắc chắn muốn xóa bài viết
                      <span
                        class="font-weight-bold"
                      >{{ item.title }}</span> không?
                    </p>
                  </div>
                  <div slot="footer">
                    <va-button @click="$refs.deleteModal.close()">Hủy bỏ</va-button>
                    <va-button
                      type="danger"
                      @click="deleteArticle(item.slug)"
                      icon-before="trash"
                      :disable="removing"
                      :loading="removing"
                    >Xóa</va-button>
                  </div>
                </va-modal>
              </template>
            </b-table>
            <va-pagination :total="total" :per-page="perPage" @change="change" />
          </div>
          <div v-else>
            <b-table :items="[]" :fields="fields" v-if="isSeries" striped>
              <template slot="status" slot-scope="{ item }">
                <b-badge variant="warning" v-if="item.private">Không công khai</b-badge>
                <b-badge variant="dark" v-else-if="item.draft">Nháp</b-badge>
                <b-badge variant="success" v-else>Đã xuất bản</b-badge>
              </template>
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
        {
          key: 'menu',
          label: '',
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
      currentPage: 'article/currentPage',
      total: 'article/total',
      perPage: 'article/perPage',
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
    removing() {
      return this.$wait.is('article.remove')
    },
  },
  methods: {
    ...mapActions({
      changePage: 'article/changeUserPage',
    }),
    change(e) {
      this.changePage(e.pageNumber)
    },
    changeType(type) {
      this.type = type
    },
    newArticle() {
      this.$router.push('/bai-viet/tao-moi')
    },
    newSeries() {
      this.$router.push('/series/tao-moi')
    },
    async deleteArticle(slug) {
      const result = await this.$store.dispatch('article/remove', slug)
      this.$refs.deleteModal.close()
      if (result) {
        this.$store.dispatch('article/user', this.user.username)
        this.notification.info({
          title: `Xóa bài viết thành công`,
          duration: 1690,
        })
      } else {
        this.notification.danger({
          title: `Có lỗi xảy ra`,
          message: `Bạn không thể xóa được bài viết này`,
          duration: 1690,
        })
      }
    },
    openModal() {
      this.$refs.deleteModal.open()
    },
  },
  mounted() {
    this.$store.commit('article/setCurrentPage', 1)
    this.$store.dispatch('article/user')
  },
}
</script>

<style lang="scss" scoped>
.w-40 {
  max-width: 40%;
}
</style>
