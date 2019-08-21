<template>
  <no-ssr>
    <b-container>
      <div class="d-flex align-items-center">
        <h1 class="mr-auto">Danh sách bài viết</h1>
        <va-button icon-before="plus" active @click="writeArticle">Thêm bài viết</va-button>
      </div>
      <b-row>
        <b-col :xs="12">
          <va-table size="lg">
            <b-table :fields="fields" :items="articles">
              <template slot="HEAD_checkBox">
                <div />
              </template>
              <template slot="checkBox">
                <b-form-checkbox></b-form-checkbox>
              </template>
              <template #title="{ item }">
                <nuxt-link
                  :to="`/to-chuc/${org.slug}/bai-viet/${item.slug}`"
                  class="link"
                >{{ item.title }}</nuxt-link>
              </template>
              <template #author="{ value }">
                <nuxt-link :to="`/nguoi-dung/${value.username}`" class="link">{{ value.name }}</nuxt-link>
              </template>
              <template #category="{ value }">
                <nuxt-link :to="`/danh-muc/${value.slug}`" class="link">{{ value.name }}</nuxt-link>
              </template>
              <template #menu="{ item }">
                <va-dropdown
                  v-if="(org.owner && user.id === org.owner.id) || (item.author.id === user.id)"
                >
                  <div slot="trigger">
                    <va-icon
                      type="ellipsis-h"
                      size="1.25em"
                      class="ml-1 menu"
                      iconStyle="solid"
                      color="#97a0af"
                    />
                  </div>
                  <li>
                    <a @click="editArticle(item.slug)">Chỉnh sửa</a>
                    <a @click="openModal(item)">Xóa</a>
                  </li>
                </va-dropdown>
              </template>
            </b-table>
          </va-table>
        </b-col>
      </b-row>
      <va-modal title="Xóa bài viết" ref="deleteModal" :backdrop-clickable="true">
        <div slot="body">
          <p v-if="current">
            Bạn có chắc chắn muốn xóa bài viết
            <span class="font-weight-bold">{{ current.title }}</span> này không?
          </p>
        </div>
        <div slot="footer">
          <va-button @click="$refs.deleteModal.close()">Hủy bỏ</va-button>
          <va-button
            type="danger"
            @click="deleteArticle"
            icon-before="trash"
            :disable="removing"
            :loading="removing"
          >Xóa</va-button>
        </div>
      </va-modal>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import { HeadingText } from '@/components/common'

export default {
  layout: 'organization',
  components: {
    HeadingText,
  },
  computed: {
    ...mapGetters({
      articles: 'organization/articles',
      org: 'organization/organization',
      user: 'auth/user',
    }),
    removing() {
      return this.$wait.is('article.remove')
    },
  },
  data: () => ({
    fields: [
      'checkBox',
      { key: 'title', label: 'Tên bài viết', tdClass: 'w-50' },
      { key: 'author', label: 'Tác giả' },
      { key: 'category', label: 'Chuyên mục' },
      { key: 'seen_count', label: 'Lượt view' },
      { key: 'publishedAt', label: 'Thời gian đăng' },
      { key: 'menu', label: '' },
    ],
    current: null,
  }),
  mounted() {
    const { orgname } = this.$route.params
    this.$store.dispatch('organization/articles', orgname)
  },
  methods: {
    openModal(article) {
      this.current = article
      this.$refs.deleteModal.open()
    },
    async deleteArticle() {
      const { orgname } = this.$route.params
      const result = await this.$store.dispatch(
        'article/remove',
        this.current.slug,
      )
      this.$refs.deleteModal.close()
      if (result) {
        this.$store.dispatch('organization/articles', orgname)
        this.notification.info({
          title: `Thành công`,
          message: `Xóa bài viết thành công.`,
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
    writeArticle() {
      const { orgname } = this.$route.params
      this.$router.push(`/to-chuc/${orgname}/bai-viet/tao-moi`)
    },
    editArticle(slug) {
      this.$router.push(`/bai-viet/${slug}/edit`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.add-article-container {
  justify-content: flex-end;
  .write-btn {
    margin-left: $unit !important;
    &:hover {
      text-decoration: none !important;
    }
    a {
      cursor: pointer;
    }
  }
}

.link {
  color: #999;
  &:hover {
    color: $n200;
  }
}
</style>
