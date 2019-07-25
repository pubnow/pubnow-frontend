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
              placeholder="Nhập họ và tên"
              v-model.trim="$v.form.name.$model"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.name.required" class="invalid-feedback">
              Trường bắt buộc
            </div>
          </b-form-group>
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
              placeholder="Nhập email"
              v-model.trim="$v.form.email.$model"
              :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.email.required" class="invalid-feedback">
              Trường bắt buộc
            </div>
            <div v-if="!$v.form.email.email" class="invalid-feedback">
              Email không hợp lệ
            </div>
          </b-form-group>

          <b-form-group
            id="input-group-username"
            label="Username:"
            label-for="input-username"
          >
            <b-form-input
              id="input-username"
              placeholder="Nhập username"
              v-model.trim="$v.form.username.$model"
              :state="$v.form.username.$dirty ? !$v.form.username.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.username.required" class="invalid-feedback">
              Trường bắt buộc
            </div>
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
              v-model.trim="$v.form.password.$model"
              :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.password.required" class="invalid-feedback">
              Trường bắt buộc
            </div>
            <div v-if="!$v.form.password.minLength" class="invalid-feedback">
              Mật khẩu chứa ít nhất 6 kí tự
            </div>
          </b-form-group>

          <b-form-group label="Chức vụ" label-for="input-role">
            <b-form-select
              v-model="$v.form.role.$model"
              :state="$v.form.role.$dirty ? !$v.form.role.$error : null"
              :options="roleOptions"
            ></b-form-select>
            <div v-if="!$v.form.role.required" class="invalid-feedback">
              Trường bắt buộc
            </div>
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
              v-if="image"
              :src="image"
            />
          </b-form-group>
          <va-button
            :active="canCreate"
            :disabled="canCreate"
            @click="create"
            type="primary"
            >Tạo</va-button
          >
        </b-form>
      </b-col>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Thêm Tài Khoản'],
    image: null,
    form: {
      name: '',
      email: '',
      username: '',
      password: '',
      role: null,
      imageUrl: '',
    },
  }),
  validations: {
    form: {
      name: {
        required,
      },
      role: {
        required,
      },
      email: {
        required,
        email,
      },
      username: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
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
    canCreate() {
      return this.$v.form.$anyError
    },
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.form.imageUrl = files[0]
      }
      this.image = URL.createObjectURL(files[0])
    },
    async create() {
      const submit = new FormData()
      submit.append('name', this.form.name)
      submit.append('email', this.form.email)
      submit.append('username', this.form.username)
      submit.append('password', this.form.password)
      submit.append(
        'role_id',
        this.roles.find(role => role.name === this.form.role).id,
      )
      if (this.form.imageUrl) {
        submit.append('avatar', this.form.imageUrl)
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
