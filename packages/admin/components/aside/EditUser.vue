<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center my-5">Chỉnh sửa Thành viên</h1>
    <b-form class="mt-2">
      <b-form-group label="Tên đầy đủ" label-for="input-name">
        <b-form-input
          :value="name"
          @input="updateName"
          type="text"
          required
          :readonly="!editable"
          placeholder="Nhập name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email" label-for="input-email">
        <b-form-input
          type="text"
          :value="user.email"
          :readonly="true"
          required
          placeholder="Nhập email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Username" label-for="input-username">
        <b-form-input
          :value="user.username"
          type="text"
          required
          :readonly="true"
          placeholder="Nhập username"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Chức vụ" label-for="input-role">
        <b-form-select
          :value="role"
          @input="updateRole"
          :options="roleOptions"
          :disabled="!editable"
        ></b-form-select>
      </b-form-group>
      <div class="d-flex">
        <va-button
          @click="editBtn"
          active
          class="mr-auto"
          :icon-before="editable ? 'chevron-left' : 'edit'"
        >{{ editable ? 'Hủy bỏ' : 'Chỉnh sửa'}}</va-button>
        <va-button
          :active="!canUpdate"
          :disabled="!canUpdate"
          @click="update"
          icon-after="check"
          type="primary"
        >Cập nhật</va-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      editable: false,
      role: '',
      name: '',
    }
  },
  computed: {
    ...mapGetters({
      roles: 'role/roles',
    }),
    roleOptions() {
      return this.roles.map(role => ({
        value: role.name,
        text: role.description,
      }))
    },
    nameChanged() {
      const oldName = this.user.name
      return this.name !== oldName
    },
    roleChanged() {
      const oldRole = this.user.role ? this.user.role.name : 'member'
      return this.role !== oldRole
    },
    canUpdate() {
      return this.nameChanged || this.roleChanged
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.user.name
      this.role = this.user.role ? this.user.role.name : 'member'
    },
    editBtn() {
      if (this.editable) {
        this.close()
      } else {
        this.change()
      }
    },
    close() {
      this.$emit('close')
    },
    change() {
      this.editable = !this.editable
    },
    updateName(value) {
      this.name = value
    },
    updateRole(value) {
      this.role = value
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.roleChanged && {
          role_id: this.roles.find(role => role.name === this.role).id,
        }),
      }
      await this.$store.dispatch('user/update', {
        username: this.user.username,
        ...submit,
      })
      this.$router.go()
    },
  },
}
</script>
<style lang="scss" scoped>
.wrap-edit {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.delete-category {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>


