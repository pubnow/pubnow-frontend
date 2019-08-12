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
              <template slot="delete">
                <va-icon type="trash-alt" size="1.25em" iconStyle="solid" color="#97a0af" />
              </template>
            </b-table>
          </va-table>
        </b-col>
      </b-row>
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
    }),
  },
  data: () => ({
    fields: [
      'checkBox',
      { key: 'title', label: 'Tên bài viết', tdClass: 'w-50' },
      { key: 'author.name', label: 'Tác giả' },
      { key: 'category.name', label: 'Chuyên mục' },
      { key: 'view', label: 'Lượt view' },
      { key: 'delete', label: '' },
    ],
  }),
  mounted() {
    const { orgname } = this.$route.params
    this.$store.dispatch('organization/articles', orgname)
  },
  methods: {
    writeArticle() {
      const { orgname } = this.$route.params
      this.$router.push(`/to-chuc/${orgname}/bai-viet/tao-moi`)
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
</style>
