<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">{{
            item
          }}</va-breadcrumb-item>
        </va-breadcrumb>
      </div>
    </va-page-header>
    <div slot="title">
      <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    </div>
    <div>
      <b-col md="6" offset-md="3">
        <b-form class="mt-2">
          <b-form-group
            id="input-group-name"
            label="Tên đầy đủ:"
            label-for="input-name"
          >
            <b-form-input
              id="input-name"
              type="text"
              required
              placeholder="Nhập họ và tên"
              v-model="form.name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              type="email"
              required
              placeholder="Nhập email"
              v-model="form.email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-username"
            label="Username:"
            label-for="input-username"
          >
            <b-form-input
              id="input-username"
              type="text"
              required
              placeholder="Nhập username"
              v-model="form.username"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-password"
            label="Mật khẩu:"
            label-for="input-password"
          >
            <b-form-input
              id="input-password"
              type="password"
              required
              placeholder="Nhập mật khẩu"
              v-model="form.password"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Chức vụ" label-for="input-role">
            <b-form-select
              v-model="form.role"
              :options="roleOptions"
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-image"
            label="Avatar:"
            label-for="input-image"
          >
            <b-form-file
              id="input-image"
              @change="onFileChange"
              accept=".jpg, .png, .gif"
            ></b-form-file>
            <img
              class="mt-2"
              style="max-width: 100%; max-height: 500px;"
              v-if="form.imageUrl"
              :src="form.imageUrl"
            />
          </b-form-group>
          <va-button
            :active="!canUpdate"
            :disabled="!canUpdate"
            @click="create"
            type="primary"
            >Tạo</va-button
          >
          {{ form }}
        </b-form>
      </b-col>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Thêm Tài Khoản'],
    image: '',
    form: {
      name: '',
      email: '',
      username: '',
      password: '',
      role: null,
      imageUrl: '',
    },
  }),
  computed: {
    ...mapGetters({
      roles: 'role/roles',
    }),
    roleOptions() {
      let roles = this.roles.map(role => ({
        value: role.name,
        text: role.description,
      }))
      let arr1 = [
        {
          value: null,
          text: 'Hãy chọn một chức vụ',
        },
      ]
      Array.prototype.push.apply(arr1, roles)
      return arr1
    },
    nameChanged() {
      return this.form.name.trim() !== ''
    },
    emailChanged() {
      return this.form.email.trim() !== ''
    },
    usernameChanged() {
      return this.form.username.trim() !== ''
    },
    passwordChanged() {
      return this.form.password.trim() !== ''
    },
    roleChanged() {
      return this.form.role !== null
    },
    canUpdate() {
      return (
        this.nameChanged &&
        this.emailChanged &&
        this.usernameChanged &&
        this.passwordChanged &&
        this.roleChanged
      )
    },
  },
  methods: {
    onFileChange() {
      const files = event.target.files
      const fileName = files[0].name
      this.image = files[0]
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.form.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
    },
    async create() {
      let submit = new Object()
      submit.name = this.form.name
      submit.email = this.form.email
      submit.username = this.form.username
      submit.password = this.form.password
      submit.role_id = this.roles.find(role => role.name === this.form.role).id
      if (this.form.imageUrl) {
        submit.imageUrl = this.form.imageUrl
      }
      await this.$store.dispatch('user/create', {
        submit: submit,
      })
      this.$router.push('/accounts')
    },
  },
  async mounted() {
    await this.$store.dispatch('role/list')
  },
}
</script>
