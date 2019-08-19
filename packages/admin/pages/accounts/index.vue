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
        <va-input placeholder="Tìm kiếm thành viên" v-model="input"></va-input>
      </va-column>
      <va-column :xs="12" :sm="6" :md="3">
        <va-select v-model="type" :options="types" noUncheck></va-select>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table
            :fields="fields"
            :items="filterUsers"
            @row-clicked="rowSelected"
            responsive
            :busy="$wait.is('user.list')"
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
            <template slot="role.name" slot-scope="data">
              <div
                :class="['badge', data.value.toLowerCase() === 'admin' ? 'admin' : 'member']"
              >{{ data.value === 'admin' ? 'Pubnow Staff' :'Member' }}</div>
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
      <EditUser v-if="selected" :user="selected" @close="$refs.myAsideCate.close()" />
    </va-aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EditUser } from '@/components/aside'

export default {
  components: {
    EditUser,
  },
  computed: {
    ...mapGetters({
      users: 'user/users',
      currentPage: 'user/currentPage',
      total: 'user/total',
      perPage: 'user/perPage',
    }),
    filterUsers() {
      return this.users.filter(
        user =>
          user.name.includes(this.input) || user.username.includes(this.input),
      )
    },
  },
  data: () => ({
    input: '',
    breadcrumb: ['Dashboard', 'Thành viên'],
    type: '/',
    types: [
      { value: '/', label: 'Tất cả thành viên' },
      { value: '/admin-members', label: 'Quản trị viên' },
      { value: '/new-members', label: 'Thành viên mới' },
      { value: '/featured-authors', label: 'Tác giả nổi bật' },
    ],
    fields: [
      'checkBox',
      'username',
      { key: 'name', label: 'Tên đầy đủ' },
      'email',
      { key: 'role.name', label: 'Chức vụ' },
    ],
    actionBtnWidth: 0,
    selected: null,
  }),
  methods: {
    ...mapActions({
      changePage: 'user/changePage',
    }),
    change(e) {
      this.input = ''
      this.changePage(e.pageNumber)
    },
    rowSelected(item) {
      this.selected = item
      this.$refs.myAsideCate.open()
    },
    onClose(e) {
      this.selected = null
    },
    onOptionChange(v) {
      this.input = ''
      this.$store.dispatch('user/changeType', v)
    },
  },
  async mounted() {
    await this.$store.dispatch('user/list')
    await this.$store.dispatch('role/list')
  },
  watch: {
    type: {
      immediate: true,
      handler: 'onOptionChange',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.badge {
  background-color: $primary;
  color: $white;
  font-size: 9px;
  text-transform: uppercase;
  padding: $unit/4 $unit;

  &.admin {
    background-color: $primary;
  }

  &.testing,
  &.member {
    background-color: $violet;
  }
}
</style>

