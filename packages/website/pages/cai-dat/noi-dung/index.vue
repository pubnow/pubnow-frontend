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
            <b-table
              :items="articles"
              :fields="articleFields"
              :busy="$wait.is('article.user')"
              striped
            >
              <div slot="table-busy" class="text-center text-primary my-4">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Đang tải dữ liệu ...</strong>
              </div>
              <template #title="{ item }">
                <nuxt-link :to="`/bai-viet/${item.slug}`">{{ item.title }}</nuxt-link>
              </template>
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
            <va-pagination v-if="total > 1" :total="total" :per-page="perPage" @change="change" />
          </div>
          <div v-else>
            <b-table :items="series" :fields="seriesFields" striped>
              <template #title="{ item }">
                <nuxt-link :to="`/series/${item.slug}`">{{ item.title }}</nuxt-link>
              </template>
              <template slot="menu" slot-scope="{ item }">
                <va-dropdown class="pull-right">
                  <div slot="trigger">
                    <va-button type="subtle">
                      <va-icon type="angle-down" />
                    </va-button>
                  </div>
                  <li>
                    <nuxt-link :to="`/series/${item.slug}/chinh-sua`">Chỉnh sửa</nuxt-link>
                  </li>
                  <li @click="openModalSeries">
                    <a href="#">Xóa</a>
                  </li>
                  <va-modal title="Xóa series" ref="deleteSeriesModal" :backdrop-clickable="true">
                    <div slot="body">
                      <p>
                        Bạn có chắc chắn muốn xóa series
                        <span
                          class="font-weight-bold"
                        >{{ item.title }}</span> không?
                      </p>
                    </div>
                    <div slot="footer">
                      <va-button @click="$refs.deleteSeriesModal.close()">Hủy bỏ</va-button>
                      <va-button
                        type="danger"
                        @click="deleteSeries(item.slug)"
                        icon-before="trash"
                        :disable="removingSeries"
                        :loading="removingSeries"
                      >Xóa</va-button>
                    </div>
                  </va-modal>
                </va-dropdown>
              </template>
            </b-table>
            <va-pagination
              v-if="totalSeriesPage > 1"
              :total="totalSeriesPage"
              :per-page="perPageSeries"
              @change="changeSeriesPage"
            />
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
      type: 'article',
      articleFields: [
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
      seriesFields: [
        {
          key: 'title',
          label: 'Tiêu đề',
          tdClass: 'w-title',
        },
        {
          key: 'articles.length',
          label: 'Số bài viết',
        },
        {
          key: 'publishedAt',
          label: 'Thời gian đăng',
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
      series: 'series/userSeries',
      currentPageSeris: 'series/currentPage',
      totalSeriesPage: 'series/total',
      perPageSeries: 'series/perPage',
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
    removingSeries() {
      return this.$wait.is('series.remove')
    },
  },
  methods: {
    ...mapActions({
      changePage: 'article/changeUserPage',
      changePageSeries: 'series/changeUserPage',
    }),
    change(e) {
      this.changePage(e.pageNumber)
    },
    changeSeriesPage(e) {
      this.changePageSeries(e.pageNumber)
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
    async deleteSeries(slug) {
      const result = await this.$store.dispatch('series/delete', slug)
      this.$refs.deleteSeriesModal.close()
      if (result) {
        this.$store.dispatch('series/user', this.user.username)
        this.notification.info({
          title: `Xóa series thành công`,
          duration: 1690,
        })
      } else {
        this.notification.danger({
          title: `Có lỗi xảy ra`,
          message: `Bạn không thể xóa được series này`,
          duration: 1690,
        })
      }
    },
    openModal() {
      this.$refs.deleteModal.open()
    },
    openModalSeries() {
      this.$refs.deleteSeriesModal.open()
    },
  },
  mounted() {
    this.$store.commit('article/setCurrentPage', 1)
    this.$store.commit('series/setCurrentPage', 1)
    this.$store.dispatch('article/user')
    this.$store.dispatch('series/user')
  },
}
</script>

<style lang="scss" scoped>
.w-40 {
  max-width: 40%;
}
</style>
