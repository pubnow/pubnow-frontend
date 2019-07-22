<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Chỉnh sửa Thành viên</h1>
    <va-button @click="change" type="primary">Chỉnh sửa</va-button>
    <b-form class="mt-2">
      <b-form-group id="input-group-name" label="Tên đầy đủ:" label-for="input-name">
        <b-form-input
          id="input-name"
          :value="selected.name"
          @input="updateName"
          type="text"
          required
          :readonly="boolean"
          placeholder="Nhập tên chuyên mục"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-email" label="Email:" label-for="input-email">
        <b-form-input
          id="input-email"
          type="text"
          :value="selected.email"
          :readonly="true"
          required
          placeholder="Nhập email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-slug" label="Username:" label-for="input-username">
        <b-form-input
          id="input-slug"
          :value="selected.username"
          type="text"
          required
          :readonly="true"
          placeholder="Nhập username"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-role" label="Chức vụ:" label-for="input-role">
        <b-form-select id="input-role" @input="updateRold" v-model="temp" :options="roleOptions" :disabled="boolean"></b-form-select>
      </b-form-group>
      <va-button :disabled="check" @click="update" type="primary">Cập nhật</va-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    selected: {
      type: Object,
    },
    boolean: {
      type: Boolean,
    },
  },
  data() {
    return {
      modalShow: false,
      check: true,
      url: null,
      disable: false,
      temp: '',
      form: {
        name: '',
        role: '',
      },
    }
  },
  updated() {
    this.updateRole()
  },
  mounted() {
    this.updateRole()
  },
  computed: {
    ...mapGetters({
      roles: 'role/roles'
    }),
    roleOptions() {
      return this.roles.map(role => ({
        value: role.name,
        text: role.description
      }))
    }
  },
  methods: {
    updateRole() {
      this.form.role = this.selected.role ? this.selected.role.name : 'member'
    },
    change() {
      this.boolean = false
      this.form.name = this.selected.name
    },
    updateName(value) {
      this.form.name = value
      this.check = false
    },
    updateRold(value) {
      this.form.role = value
      this.check = false
    },
    async update() {
      let submit = new Object()
      this.roles.forEach(element => {
        if(element.name == this.temp) {
          submit.role_id = element.id
        }
      });
      if (this.form.name != this.selected.name) {
        submit.name = this.form.name
      }
      this.$http.setHeader('Accept', 'application/json')
      await this.$http.$put(`users/${this.selected.username}`, {
        ...submit,
      })
      this.$router.go()
    },
  },
}
</script>
<style lang="scss" scoped>
.wrap-edit.mt-3 {
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


