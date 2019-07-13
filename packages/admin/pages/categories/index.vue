<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</va-breadcrumb-item>
        </va-breadcrumb>
      </div>
    </va-page-header>
    <div slot="title">
      <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    </div>
    <va-row :gutter="15">
      <va-column :xs="12" :sm="6" :md="3">
        <va-input placeholder="Tìm kiếm chuyên mục"></va-input>
      </va-column>
    </va-row>
    <va-row>
    <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="categories" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
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
    breadcrumb: ['Dashboard', 'Chuyên mục'],
    fields: [
      'checkBox',
      { key: 'name', label: 'Tên chuyên mục' },
      { key: 'description', label: 'Mô tả' },
      'slug',
      { key: 'latest', label: 'Bài viết mới nhất' },
      { key: 'count', label: 'Số lượng bài viết' },
    ],
    categories: [
      {
        name: 'Khoa học - công nghệ',
        description: 'Khoa học - công nghệ',
        slug: 'khoa-hoc-cong-nghe',
        latest: 'Iphone với 3 camera sắp trình làng trong tháng 10',
        count: '2',
      },
      {
        name: 'Thể thao',
        description: 'Thể thao',
        slug: 'the-thao',
        latest: 'Argentina lách qua khe cửa hẹp',
        count: '2',
      },
      {
        name: 'Du lịch',
        description: 'Du lịch',
        slug: 'du-lich',
        latest: 'Đi khắp thế giới',
        count: '2',
      },
      {
        name: 'Kỹ năng',
        description: 'Khoa học - công nghệ',
        slug: 'ky-nang',
        latest: 'Vitamin dưới dạng thực phẩm chức năng',
        count: '2',
      },
    ],
  }),
}
</script>
