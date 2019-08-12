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
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="listFeedback" @row-clicked="rowSelected" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="author" slot-scope="{ item }">
              <div>
                <div v-if="item.user" class="user">
                  <img :src="item.user.avatar" class="avatar" />
                  {{ item.user.name }}
                </div>
                <div v-else>{{ item.username }}</div>
              </div>
            </template>
            <template slot="type" slot-scope="{ value }">
              <div>
                <va-lozenge v-if="value === 0" type="warning">Sự cố kỹ thuật</va-lozenge>
                <va-lozenge v-if="value === 1" type="primary">Tài khoản</va-lozenge>
                <va-lozenge v-if="value === 2" type="success">Gợi ý sản phẩm</va-lozenge>
                <va-lozenge v-if="value === 3" type="danger">Báo cáo nội dung</va-lozenge>
                <va-lozenge v-if="value === 4" type="help">Góp ý nội dung</va-lozenge>
              </div>
            </template>
            <template slot="status" slot-scope="{ item }">
              <div>
                <b-badge variant="success" v-if="item.resolve">Đã giải quyết</b-badge>
                <b-badge variant="warning" v-else>Đang chờ</b-badge>
              </div>
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
      @hide="onClose"
    >
      <EditFeedback v-if="selected" :feedback="selected" @close="$refs.myAsideCate.close()" />
    </va-aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EditFeedback } from '@/components/aside'

export default {
  components: {
    EditFeedback,
  },
  computed: {
    ...mapGetters({
      listFeedback: 'feedback/listFeedback',
    }),
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Feedback'],
    type: 'admin',
    fields: [
      'checkBox',
      {
        key: 'title',
        label: 'Tiêu đề',
        tdClass: 'w-25',
      },
      {
        key: 'reference',
        label: 'Link liên quan',
        tdClass: 'w-25',
      },
      { key: 'author', label: 'Người gửi' },
      { key: 'type', label: 'Loại' },
      { key: 'publishedAt', label: 'Thời gian gửi' },
      { key: 'status', label: 'Tình trạng' },
    ],
    actionBtnWidth: 0,
    selected: null,
  }),
  methods: {
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideCate.open()
    },
    onClose(e) {
      this.selected = null
    },
  },
  async mounted() {
    await this.$store.dispatch('feedback/index')
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.user {
  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 18px;
    @include border;
  }
}
</style>

