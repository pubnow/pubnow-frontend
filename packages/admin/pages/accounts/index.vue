<template>
  <div class="container">
    <breadcrumb :items="breadcrumb" />
    <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    <div class="panel">
      <div class="panel-header">
        <div class="action-btn" ref="actionBtn">
          <b-button variant="primary">Tạo thành viên</b-button>
        </div>
        <div class="actions">
          <b-form-checkbox name="checkbox-1"></b-form-checkbox>
          <account-icon class="icon-2x" />
          <restore-icon class="icon-2x" />
          <compare-icon class="icon-2x" />
          <delete-icon class="icon-2x" />
        </div>
        <div class="search-bar">
          <input placeholder="Tìm kiếm" />
          <search-icon class="icon-2x" />
        </div>
        <div class="setting-btn">
          <setting-icon class="icon-2x" />
        </div>
      </div>
      <div class="panel-body">
        <div class="panel-left" :style="`width: ${actionBtnWidth}px`">
          <ul class="menu-group">
            <li class="menu-item" v-for="type in types" :key="type">{{ type }}</li>
          </ul>
        </div>
        <div class="panel-right">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Breadcrumb } from '@/components/commons'
import AccountIcon from 'vue-material-design-icons/AccountCircle'
import RestoreIcon from 'vue-material-design-icons/RestoreClock'
import CompareIcon from 'vue-material-design-icons/ArrowDecision'
import DeleteIcon from 'vue-material-design-icons/Delete'
import SearchIcon from 'vue-material-design-icons/Magnify'
import SettingIcon from 'vue-material-design-icons/Settings'

export default {
  components: {
    Breadcrumb,
    AccountIcon,
    RestoreIcon,
    CompareIcon,
    DeleteIcon,
    SearchIcon,
    SettingIcon,
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Thành viên'],
    types: [
      'Quản trị viên',
      'Tất cả thành viên',
      'Thành viên mới',
      'Thành viên tích cực',
      'Tác giả nổi bật',
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
  mounted() {
    this.actionBtnWidth = this.$refs['actionBtn'].clientWidth + 2
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.panel {
  background-color: $white;
  margin-top: $unit * 2;
  @include radius-md;
  @include box-shadow;
  &-header {
    display: flex;
    border-bottom: 1px solid $border;
    .action-btn {
      padding: $unit;
      border-right: 2px solid $border;
    }
    .actions {
      padding: $unit;
      display: flex;
      align-items: center;
      border-right: 2px solid $border;
    }
    .search-bar {
      display: flex;
      flex: 1;
      padding-left: $unit * 2;
      padding-right: $unit * 2;
      border-right: 2px solid $border;
      input {
        border: 0;

        flex: 1;
        &:focus {
          outline: 0;
        }
      }
    }
    .setting-btn {
      padding-left: $unit * 1.5;
      padding-right: $unit * 1.5;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-2x {
        margin-left: 0;
      }
    }
  }
  &-body {
    display: flex;
    border-top: 1px solid $border;
    .panel-left {
      border-right: 2px solid $border;
      .menu-group {
        .menu-item {
          padding: $unit / 2 $unit;
          cursor: pointer;
          &:hover {
            background-color: $hover;
          }
          &:not(:last-child) {
            border-bottom: 2px solid $border;
          }
        }
      }
    }
    .panel-right {
      flex: 1;

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
    }
  }
  .icon-2x {
    color: $gray85;
    margin-left: $unit;
  }
}
</style>

