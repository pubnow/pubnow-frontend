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
        <va-input placeholder="Tìm kiếm chuyên mục"></va-input>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table
            :fields="fields"
            :items="categories"
            selectable
            select-mode="range"
            @row-selected="rowSelected"
            responsive
          >
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
    <va-aside
      style="background-color: #f3f4f6;"
      width="500px"
      placement="right"
      ref="myAsideCate"
    >
      <EditCategory
        v-if="selected"
        :bl="boolean"
        :selected="selected[0]"
        @booleanChanged="boolean = $event"
      />
    </va-aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Breadcrumb } from '@/components/commons'
import EditCategory from './EditCategory'

export default {
  components: {
    Breadcrumb,
    EditCategory,
  },
  computed: {
    ...mapGetters({
      categories: 'category/categories',
    }),
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
    selected: '',
    boolean: true,
  }),
  methods: {
    rowSelected(items) {
      this.selected = items
      this.$refs.myAsideCate.open()
      this.boolean = true
    },
  },
  async mounted() {
    await this.$store.dispatch('category/list')
  },
}
</script>
