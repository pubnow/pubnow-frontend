<template>
  <va-container>
    <va-row :gutter="15">
      <va-column :md="4">
        <va-input placeholder="Tìm kiếm bài viết"></va-input>
      </va-column>
      <va-column :md="8" class="add-article-container d-flex">
        <nuxt-link class="write-btn" to="/bai-viet/tao-moi">
          <va-button type="primary" icon-before="feather-alt">Thêm bài viết</va-button>
        </nuxt-link>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="articles" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="avatarauthor" slot-scope="data">
              <img
                :src="data.item.avatar"
                alt="avatar"
                style="width: 36px; height: 36px; border-radius: 18px;"
              />
              <span>{{ data.item.author }}</span>
            </template>
            <template slot="delete">
              <va-icon type="trash-alt" size="1.25em" iconStyle="solid" color="#97a0af" />
            </template>
          </b-table>
        </va-table>
      </va-column>
    </va-row>
  </va-container>
</template>

<script>
export default {
  data: () => ({
    fields: [
      'checkBox',
      { key: 'name', label: 'Tên bài viết' },
      'slug',
      { key: 'avatarauthor', label: 'Tác giả' },
      { key: 'article', label: 'Chuyên mục' },
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
