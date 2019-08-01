<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">
            {{
            item
            }}
          </va-breadcrumb-item>
        </va-breadcrumb>
      </div>
    </va-page-header>
    <div slot="title">
      <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    </div>
    <div>
      <b-col md="6" offset-md="3">
        <b-form class="mt-2">
          <b-form-group id="input-group-name" label="Tên:" label-for="input-name">
            <b-form-input
              id="input-name"
              placeholder="Nhập tên chức vụ"
              v-model.trim="$v.form.name.$model"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.name.required" class="invalid-feedback">Trường bắt buộc</div>
          </b-form-group>
          <b-form-group id="input-group-description" label="Mô tả:" label-for="input-description">
            <b-form-input
              id="input-description"
              placeholder="Nhập mô tả"
              v-model.trim="$v.form.description.$model"
              :state="$v.form.description.$dirty ? !$v.form.description.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.description.required" class="invalid-feedback">Trường bắt buộc</div>
          </b-form-group>
          <va-button :active="canCreate" :disabled="canCreate" @click="create" type="primary">Tạo</va-button>
        </b-form>
      </b-col>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Thêm Chức Vụ'],
    form: {
      name: '',
      description: '',
    },
  }),
  validations: {
    form: {
      name: {
        required,
      },
      description: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters({
      roles: 'role/roles',
    }),
    canCreate() {
      return this.$v.form.$anyError
    },
  },
  methods: {
    async create() {
      const submit = new FormData()
      submit.append('name', this.form.name)
      submit.append('description', this.form.description)
      await this.$store.dispatch('role/create', {
        submit: submit,
      })
      this.$router.push('/roles')
    },
  },
}
</script>
