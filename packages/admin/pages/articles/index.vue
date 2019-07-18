<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">{{
            item
          }}</va-breadcrumb-item>
        </va-breadcrumb>
      </div>
    </va-page-header>
    <div slot="title">
      <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    </div>
    <va-row :gutter="15">
      <va-column :xs="12" :sm="6" :md="3">
        <va-input placeholder="Tìm kiếm bài viết"></va-input>
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
          </b-table>
        </va-table>
      </va-column>
    </va-row>
  </div>
</template>

<script>
import { Breadcrumb } from '@/components/commons'

export default {
  components: {
    Breadcrumb,
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Bài viết'],
    fields: [
      'checkBox',
      { key: 'name', label: 'Tên bài viết' },
      'slug',
      { key: 'avatarauthor', label: 'Tác giả' },
      { key: 'article', label: 'Chuyên mục' },
      { key: 'view', label: 'Lượt view' },
    ],
  }),
  async asyncData({ $http }) {
    const temp = await $http.$get('articles')
    const articles = temp.data
    return { articles }
  },
}
</script>
