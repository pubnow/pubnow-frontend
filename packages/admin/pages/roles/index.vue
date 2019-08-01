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
        <va-input placeholder="Tìm kiếm chức vụ"></va-input>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="roles" @row-clicked="rowSelected" responsive>
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
      @hide="onClose"
    >
      <EditRole v-if="selected" :role="selected" @close="$refs.myAsideCate.close()" />
    </va-aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EditRole } from '@/components/aside'

export default {
  components: {
    EditRole,
  },
  computed: {
    ...mapGetters({
      roles: 'role/roles',
    }),
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Chức vụ'],
    type: 'admin',
    fields: [
      'checkBox',
      { key: 'name', label: 'Name' },
      { key: 'description', label: 'Chức vụ' },
    ],
    actionBtnWidth: 0,
    selected: null,
  }),
  methods: {
    rowSelected(item) {
      this.selected = item
      console.log(item)
      this.$refs.myAsideCate.open()
    },
    onClose(e) {
      this.selected = null
    },
  },
  async mounted() {
    await this.$store.dispatch('role/list')
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

