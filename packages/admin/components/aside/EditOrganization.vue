<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center my-5">Chỉnh sửa Thành viên</h1>
    <b-form class="mt-2">
      <b-form-group label="Logo tổ chức" label-for="input-logo">W.I.P</b-form-group>
      <b-form-group label="Tên tổ chức" label-for="input-name">
        <b-form-input
          v-model="name"
          type="text"
          required
          :readonly="!editable"
          placeholder="Nhập tên tổ chức"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email đại diện" label-for="input-email">
        <b-form-input
          type="email"
          v-model="email"
          required
          placeholder="Nhập email"
          :readonly="!editable"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Giới thiệu" label-for="input-username">
        <b-form-input
          v-model="description"
          type="text"
          required
          :readonly="!editable"
          placeholder="Mô tả ngắn về tổ chức"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label class="d-block">Trạng thái</label>
        <va-toggle v-model="active" :disabled="!editable" />
      </b-form-group>
      <div class="d-flex">
        <va-button
          @click="editBtn"
          active
          class="mr-2"
          :icon-before="editable ? 'chevron-left' : 'edit'"
        >{{ editable ? 'Hủy bỏ' : 'Chỉnh sửa' }}</va-button>

        <va-button icon-before="trash" class="mr-auto" type="danger" @click="deleteOrg">Xóa</va-button>

        <va-button
          :active="!canUpdate"
          :disabled="!canUpdate"
          @click="update"
          icon-after="check"
          type="primary"
        >Cập nhật</va-button>
      </div>
      <b-modal title="Xóa tổ chức" centered v-model="modalShow" hide-footer>
        <div>
          Bạn có chắc chắn muốn xóa tổ chức
          <b>{{ organization.name }}</b>
        </div>
        <div class="pull-right mt-3">
          <va-button @click="modalShow = !modalShow">Không</va-button>
          <va-button type="danger" @click="removeOrg" icon-before="trash">Xóa</va-button>
        </div>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    organization: {
      type: Object,
    },
  },
  data() {
    return {
      modalShow: false,
      editable: false,
      name: '',
      email: '',
      description: '',
      active: false,
    }
  },
  computed: {
    nameChanged() {
      return this.name !== this.organization.name
    },
    emailChanged() {
      return this.email !== this.organization.email
    },
    descriptionChanged() {
      return this.description !== this.organization.description
    },
    activeChanged() {
      return this.active !== this.organization.active
    },
    canUpdate() {
      return (
        this.nameChanged ||
        this.emailChanged ||
        this.descriptionChanged ||
        this.activeChanged
      )
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.organization.name
      this.email = this.organization.email
      this.description = this.organization.description
      this.active = this.organization.active
    },
    deleteOrg() {
      this.modalShow = !this.modalShow
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
        ...(this.emailChanged && {
          email: this.email,
        }),
        ...(this.descriptionChanged && { description: this.description }),
        ...(this.activeChanged && { active: this.active }),
      }
      await this.$store.dispatch('organization/update', {
        id: this.organization.id,
        ...submit,
      })
      this.$router.go()
    },
    async removeOrg() {
      await this.$store.dispatch('organization/remove', this.organization.id)
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
.delete-user {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>


