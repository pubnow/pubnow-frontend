<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">
            {{
            item
            }}
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
          <b-table :fields="fields" :items="tags" @row-clicked="rowSelected" responsive>
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
    <va-aside style="background-color: #f3f4f6;" width="500px" placement="right" ref="myAsideTag">
      <EditTag
        v-if="selected"
        :bl="boolean"
        :selected="selected"
        @booleanChanged="boolean = $event"
      />
    </va-aside>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Breadcrumb } from '@/components/commons'
import EditTag from './EditTag'

export default {
  components: {
    Breadcrumb,
    EditTag,
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
    selected: '',
    boolean: true,
  }),
  computed: {
    ...mapGetters({
      tags: 'tag/tags',
    }),
  },
  methods: {
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideTag.open()
      this.boolean = true
    },
  },
  async mounted() {
    await this.$store.dispatch('tag/list')
  },
}
</script>
