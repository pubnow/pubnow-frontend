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
          <b-table
            :fields="fields"
            :items="articles"
            @row-clicked="rowSelected"
            responsive
            :busy="$wait.is('article.list')"
          >
            <div slot="table-busy" class="text-center my-5">
              <va-loading
                size="lg"
                color="blue"
                fixed
                class="align-middle"
              ></va-loading>
              <strong>Đang tải...</strong>
            </div>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="title" slot-scope="data">{{
              data.item.title | trunc
            }}</template>
            <template slot="slug" slot-scope="data">{{
              data.item.slug | trunc
            }}</template>
            <template slot="author" slot-scope="data">
              <img
                v-if="data.item.author.avatar"
                :src="data.item.author.avatar"
                alt="avatar"
                style="width: 36px; height: 36px; border-radius: 18px;"
              />
              <img
                v-else
                src="~/assets/images/avatar.svg"
                alt="avatar"
                style="width: 36px; height: 36px; border-radius: 18px;"
              />
              <span>{{ data.item.author.name }}</span>
            </template>
            <template slot="category" slot-scope="data">{{
              data.item.category.name
            }}</template>
          </b-table>
        </va-table>
        <va-pagination :total="total" :per-page="perPage" @change="change" />
      </va-column>
    </va-row>
    <va-aside
      style="background-color: #f3f4f6;"
      width="500px"
      placement="right"
      ref="myAsideArticle"
      @hide="onClose"
    >
      <EditArticle v-if="selected" :article="selected" />
    </va-aside>
  </div>
</div>

<script>
import { mapGetters, mapActions } from 'vuex'
import truncate from 'lodash.truncate'
import { Breadcrumb } from '@/components/commons'
import { EditArticle } from '@/components/aside'

export default {
  components: {
    Breadcrumb,
    EditArticle,
  },
  filters: {
    trunc(val) {
      return truncate(val, {
        length: 35,
      })
    },
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Bài viết'],
    fields: [
      'checkBox',
      { key: 'title', label: 'Tên bài viết' },
      'slug',
      { key: 'author', label: 'Tác giả' },
      { key: 'category', label: 'Chuyên mục' },
      { key: 'view', label: 'Lượt view' },
    ],
    selected: null,
  }),
  computed: {
    ...mapGetters({
      articles: 'article/articles',
      currentPage: 'article/currentPage',
      total: 'article/total',
      perPage: 'article/perPage',
    }),
  },
  methods: {
    ...mapActions({
      changePage: 'article/changePage',
    }),
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideArticle.open()
    },
    change(e) {
      this.changePage(e.pageNumber)
    },
    onClose(e) {
      this.selected = null
    },
  },
  async mounted() {
    await this.$store.dispatch('article/list')
  },
}
</script>
