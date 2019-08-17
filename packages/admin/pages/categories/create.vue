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
          <b-form-group id="input-group-name" label="Tên chuyên mục:" label-for="input-name">
            <b-form-input
              id="input-name"
              placeholder="Nhập tên chuyên mục"
              v-model.trim="$v.form.name.$model"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.name.required" class="invalid-feedback">Trường bắt buộc</div>
          </b-form-group>

          <b-form-group id="input-group-description" label="Mô tả:" label-for="input-description">
            <b-form-input
              id="input-description"
              type="text"
              placeholder="Nhập mô tả"
              v-model="form.description"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-image" label="Ảnh chuyên mục:" label-for="input-image">
            <b-form-file id="input-image" @change="onFileChange" accept=".jpg, .png, .gif"></b-form-file>
            <img class="mt-2" style="max-width: 100%; max-height: 500px;" v-if="url" :src="url" />
            <img class="mt-2" style="max-width: 100%; max-height: 500px;" v-else />
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
import { errorProcess } from '../../utils/notification'

export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Thêm Chuyên Mục'],
    url: null,
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
    },
  },
  computed: {
    canCreate() {
      return this.$v.form.$anyError
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
    },
    async create() {
      let submit = new Object()
      submit.name = this.form.name
      if (this.form.description) {
        submit.description = this.form.description
      }
      try {
        await this.$store.dispatch('category/create', {
          submit: submit,
        })
        this.$router.push('/categories')
      } catch (e) {
        if (e.response.status === 422) {
          const message = await errorProcess(e)
          this.notification.danger({
            title: 'Có lỗi xảy ra',
            message,
            duration: 1690,
          })
        } else {
          this.notification.danger({
            title: 'Có lỗi xảy ra',
            message: 'Bạn không thể tạo tài khoản vào lúc này.',
            duration: 1690,
          })
        }
      }
    },
  },
}
</script>
