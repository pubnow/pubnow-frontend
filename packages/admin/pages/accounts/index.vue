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
        <va-input placeholder="Tìm kiếm thành viên"></va-input>
      </va-column>
      <va-column :xs="12" :sm="6" :md="3">
        <va-select v-model="type" :options="types"></va-select>
      </va-column>
    </va-row>
    <va-row>
      <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="members" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="role" slot-scope="data">
              <div :class="['badge', data.value.toLowerCase()]">{{ data.value }}</div>
            </template>
          </b-table>
        </va-table>
      </va-column>
    </va-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Thành viên'],
    type: 'admin',
    types: [
      { value: 'all', label: 'Tất cả thành viên' },
      { value: 'admin', label: 'Quản trị viên' },
      { value: 'newbie', label: 'Thành viên mới' },
      { value: 'positive', label: 'Thành viên tích cực' },
      { value: 'featured', label: 'Tác giả nổi bật' },
    ],
    fields: [
      'checkBox',
      { key: 'fullname', label: 'Tên đầy đủ' },
      'email',
      'username',
      { key: 'role', label: 'Chức vụ' },
    ],
    members: [
      {
        fullname: 'Nguyễn Đắc Sang',
        email: 'sang@pubnow.co',
        username: 'dacsang97',
        role: 'Admin',
      },
      {
        fullname: 'Phạm Văn Tuấn',
        email: 'tuan@pubnow.co',
        username: 'aupous',
        role: 'Admin',
      },
      {
        fullname: 'Nguyễn Doãn Tú',
        email: 'tu@pubnow.co',
        username: 'idfc',
        role: 'Admin',
      },
      {
        fullname: 'Phạm Văn Phong',
        email: 'phong@pubnow.co',
        username: 'picapoca',
        role: 'Admin',
      },
      {
        fullname: 'Trần Tuấn Mạnh',
        email: 'manh@pubnow.co',
        username: 'phyvanty',
        role: 'Admin',
      },
      {
        fullname: 'Administrator',
        email: 'sang@pubnow.co',
        username: 'admin',
        role: 'Testing',
      },
    ],
    actionBtnWidth: 0,
  }),
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

  &.testing {
    background-color: $violet;
  }
}
</style>

