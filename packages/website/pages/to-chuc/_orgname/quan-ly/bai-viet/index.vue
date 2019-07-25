<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col :md="4">
          <va-input placeholder="Tìm kiếm bài viết"></va-input>
        </b-col>
        <b-col :md="8" class="add-article-container d-flex">
          <nuxt-link class="write-btn" to="/bai-viet/tao-moi">
            <va-button type="primary" icon-before="plus">Thêm bài viết</va-button>
          </nuxt-link>
        </b-col>
      </b-row>
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
export default {
  layout: 'organization',
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
  async asyncData({ $http }) {
    const temp = await $http.$get('articles')
    const articles = temp.data
    return { articles }
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
