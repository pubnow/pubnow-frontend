<template>
  <div class="organization-create">
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
    <b-row>
      <b-col md="4" offset-md="3">
        <b-form class="mt-2">
          <b-form-group id="input-group-name" label="Tên tổ chức" label-for="input-name">
            <b-form-input
              id="input-name"
              placeholder="Tên tổ chức"
              v-model.trim="$v.form.name.$model"
              :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.name.required" class="invalid-feedback">Trường bắt buộc</div>
          </b-form-group>
          <b-form-group id="input-group-email" label="Email đại diện" label-for="input-email">
            <b-form-input
              id="input-email"
              placeholder="Email đại diện tổ chức"
              type="email"
              v-model.trim="$v.form.email.$model"
              :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
            ></b-form-input>
            <div v-if="!$v.form.email.required" class="invalid-feedback">Trường bắt buộc</div>
            <div v-if="!$v.form.email.email" class="invalid-feedback">Email không hợp lệ</div>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label="Giới thiệu tổ chức"
            label-for="input-description"
          >
            <b-form-input
              id="input-description"
              placeholder="Mô tả ngắn về tổ chức của bạn"
              v-model.trim="form.description"
            ></b-form-input>
          </b-form-group>
          <va-button :active="!canCreate" :disabled="!canCreate" @click="create" type="primary">Tạo</va-button>
        </b-form>
      </b-col>
      <b-col md="2">
        <div class="mt-2">
          <legend class="col-form-label pt-0">Logo tổ chức</legend>
          <div class="rounded avatar d-block mb-2" :style="`background-image: url(${avatarUrl})`" />
          <label for="file-input">
            <va-button
              active
              icon-before="camera"
              :loading="avatarUploading"
              :disabled="avatarUploading"
            >Upload</va-button>
          </label>
          <b-form-file
            class="d-none"
            type="file"
            id="file-input"
            @change="onFileChange"
            accept=".jpg, .png, .gif"
          ></b-form-file>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data: () => ({
    breadcrumb: ['Dashboard', 'Tạo Tổ chức'],
    form: {
      name: '',
      email: '',
      description: '',
    },
    avatar: null,
  }),
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    canCreate() {
      return !this.$v.form.$invalid && !this.avatarUploading
    },
    avatarUploading() {
      return this.$wait.is('upload.image')
    },
    avatarUrl() {
      if (this.avatar) {
        return this.avatar.link
      }
      return ''
    },
  },
  methods: {
    async onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.avatar = files[0]
        const formImg = new FormData()
        formImg.append('file', files[0])
        this.$wait.start('upload.image')
        const uploadedImage = await this.$http.$post('upload', formImg)
        this.avatar = uploadedImage.data
        this.$wait.end('upload.image')
      }
    },
    async create() {
      const data = {
        name: this.form.name,
        email: this.form.email,
        ...(this.form.description && { description: this.form.description }),
        ...(this.avatar && { image_id: this.avatar.id }),
      }
      const result = await this.$store.dispatch('organization/create', data)
      if (result) {
        this.notification.info({
          title: `Success`,
          message: `Tạo Tổ chức thành công`,
          duration: 1690,
          onHide: () => {
            this.$router.push('/organizations')
          },
        })
      } else {
        this.notification.danger({
          title: `Thất bại`,
          message: `Bạn không thể tạo được tổ chức này`,
          duration: 1690,
        })
      }
    },
  },
  async mounted() {
    await this.$store.dispatch('role/list')
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.organization-create {
  .avatar {
    width: 140px;
    height: 140px;
    background-size: cover;
    @include border;
    @include box-shadow-sm;
  }

  .form-control {
    &:disabled {
      background: $n20;
    }
  }

  .change-password {
    cursor: pointer;
    user-select: none;
    transition: background 0.25s ease-in;
    &:hover {
      background: $n20;
    }
  }
}
</style>
