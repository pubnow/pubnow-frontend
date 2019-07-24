<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">
            {{ item }}
          </va-breadcrumb-item>
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
          <b-table
            :fields="fields"
            :items="tags"
            @row-clicked="rowSelected"
            responsive
            :busy="$wait.is('tag.list')"
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
            <template slot="latestArticle" slot-scope="data">{{
              data.value | trunc
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
      ref="myAsideTag"
      @hide="onClose"
    >
      <EditTag
        v-if="selected"
        :tag="selected"
        @close="$refs.myAsideTag.close()"
      />
    </va-aside>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import truncate from 'lodash.truncate'
import { Breadcrumb } from '@/components/commons'
import { EditTag } from '@/components/aside'

export default {
  components: {
    Breadcrumb,
    EditTag,
  },
  filters: {
    trunc(val) {
      return truncate(val, {
        length: 60,
      })
    },
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
      { key: 'latestArticle', label: 'Bài viết mới nhất' },
      { key: 'articlesCount', label: 'Số lượng bài viết' },
    ],
    selected: null,
  }),
  computed: {
    ...mapGetters({
      tags: 'tag/tags',
      currentPage: 'tag/currentPage',
      total: 'tag/total',
      perPage: 'tag/perPage',
    }),
  },
  methods: {
    ...mapActions({
      changePage: 'tag/changePage',
    }),
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideTag.open()
    },
    change(e) {
      this.changePage(e.pageNumber)
    },
    onClose(e) {
      this.selected = null
    },
  },
  async mounted() {
    await this.$store.dispatch('tag/list')
  },
}
</script>
