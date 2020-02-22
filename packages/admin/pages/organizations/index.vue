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
        <va-input placeholder="Tìm kiếm tổ chức"></va-input>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table
            :fields="fields"
            :items="organizations"
            @row-clicked="rowSelected"
            responsive
            :busy="$wait.is('org.list')"
          >
            <div slot="table-busy" class="text-center my-5">
              <va-loading size="lg" color="blue" fixed class="align-middle"></va-loading>
              <strong>Đang tải...</strong>
            </div>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="name" slot-scope="data">
              <div>
                <img
                  class="avatar"
                  :src="data.item.logo ? data.item.logo : `https://placehold.jp/16/c0392b/ffffff/100x100.jpg`"
                />
                {{ data.item.name }}
              </div>
            </template>
            <template slot="owner" slot-scope="data">
              <div>
                <img
                  class="avatar"
                  :src="data.value.avatar ? data.value.avatar : `https://placehold.jp/16/c0392b/ffffff/100x100.jpg?text=${data.value.username}`"
                />
                {{ data.value.name }}
              </div>
            </template>
            <template slot="active" slot-scope="{ value }">
              <div class="d-flex flex-1 justify-content-center">
                <va-badge type="primary" v-if="value">Đã kích hoạt</va-badge>
                <va-badge type="danger" v-else>Chờ duyệt</va-badge>
              </div>
            </template>
          </b-table>
        </va-table>
        <va-pagination :total="total" :per-page="perPage" @change="change" />
      </va-column>
    </va-row>
    <va-aside
      style="background-color: #f3f4f6;"
      width="500px"
      placement="right"
      ref="myAsideCate"
      @hide="onClose"
    >
      <EditOrganization
        v-if="selected"
        :organization="selected"
        @close="$refs.myAsideCate.close()"
      />
    </va-aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EditOrganization } from '@/components/aside'

export default {
  components: {
    EditOrganization,
  },
  computed: {
    ...mapGetters({
      organizations: 'organization/organizations',
      currentPage: 'organization/currentPage',
      total: 'organization/total',
      perPage: 'organization/perPage',
    }),
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Tổ chức'],
    type: 'admin',
    fields: [
      'checkBox',
      {
        key: 'name',
        label: 'Tên tổ chức',
      },
      { key: 'email', label: 'Email đại diện' },
      { key: 'description', label: 'Giới thiệu', tdClass: 'w-25' },
      { key: 'owner', label: 'Chủ sở hữu' },
      { key: 'active', label: 'Trạng thái' },
    ],
    actionBtnWidth: 0,
    selected: null,
  }),
  methods: {
    ...mapActions({
      changePage: 'organization/changePage',
    }),
    change(e) {
      this.changePage(e.pageNumber)
    },
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideCate.open()
    },
    onClose(e) {
      this.selected = null
    },
  },
  async mounted() {
    await this.$store.dispatch('organization/list')
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.avatar {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 18px;
  @include border;
}
</style>

