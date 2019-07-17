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
        <va-input placeholder="Tìm kiếm thẻ"></va-input>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="tags" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="special" slot-scope="data">
              <va-icon
                v-if="data.value"
                :size="size"
                :bg-color="bgColor"
                :padding="padding + 'px'"
                type="check"
              ></va-icon>
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
    breadcrumb: ['Dashboard', 'Thẻ'],
    size: '1em',
    bgColor: 'transparent',
    padding: 0,
    fields: [
      'checkBox',
      { key: 'name', label: 'Tên thẻ' },
      'slug',
      { key: 'special', label: 'Thẻ nổi bật' },
      { key: 'latest', label: 'Bài viết mới nhất' },
      { key: 'count', label: 'Số lượng bài viết' },
    ],
  }),
  async asyncData({ $http }) {
    const temp = await $http.$get('tags')
    const tags = temp.data
    return { tags }
  },
}
</script>
