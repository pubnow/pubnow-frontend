<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center my-5">Chỉnh sửa chức vụ</h1>
    <b-form class="mt-2">
      <b-form-group label="Tên chức vụ" label-for="input-name">
        <b-form-input
          type="text"
          :value="name"
          @input="updateName"
          required
          :readonly="!editable"
          placeholder="Nhập name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="description" label-for="input-description">
        <b-form-input
          type="text"
          :value="description"
          @input="updateDes"
          required
          :readonly="!editable"
          placeholder="Nhập description"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex">
        <va-button
          @click="editBtn"
          active
          class="mr-2"
          :icon-before="editable ? 'chevron-left' : 'edit'"
        >{{ editable ? 'Hủy bỏ' : 'Chỉnh sửa' }}</va-button>

        <va-button icon-before="trash" class="mr-auto" type="danger" @click="deleteRole()">Xóa</va-button>

        <va-button
          :active="!canUpdate"
          :disabled="!canUpdate"
          @click="update"
          icon-after="check"
          type="primary"
        >Cập nhật</va-button>
      </div>
      <b-modal centered hide-header hide-backdrop hide-footer v-model="modalShow">
        <div>
          <div class="text-center">Bạn có muốn xóa role {{ role.name }}</div>
          <div class="delete-role text-center">
            <va-button class="not-delete" @click="modalShow = !modalShow">Không</va-button>
            <va-button class="btn-delete" type="danger" @click="delRole">Xóa</va-button>
          </div>
        </div>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    role: {
      type: Object,
    },
  },
  data() {
    return {
      modalShow: false,
      editable: false,
      description: '',
      name: '',
    }
  },
  computed: {
    nameChanged() {
      const oldName = this.role.name
      return this.name !== oldName
    },
    descriptionChanged() {
      const oldDes = this.role.description
      return this.description !== oldDes
    },
    canUpdate() {
      return this.nameChanged || this.descriptionChanged
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.role.name
      this.description = this.role.description
    },
    deleteRole() {
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
    updateDes(value) {
      this.description = value
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.descriptionChanged && { description: this.description }),
      }
      await this.$store.dispatch('roles/update', {
        id: this.role.id,
        ...submit,
      })
      this.$router.go()
    },
    async delRole() {
      await this.$store.dispatch('roles/delRole', this.role.id)
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
.delete-role {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>


