<template>
  <no-ssr>
    <b-container>
      <b-row class="mt-3">
        <b-col cols="3" offset="1" class="text-center">
          <p class="text-profile mt-0">Logo đại diện</p>
          <img
            :src="imageUrl === '' ? 'https://bulma.io/images/placeholders/256x256.png': imageUrl"
            alt="avatar to chuc"
            class="avatar"
          />
          <span class="va-btn va-btn-md va-btn-success btn-file mt-3">
            <input type="file" accept="image/*" @change="onFilePicked" />
            <div class="va-btn-text-fade" style="padding-left: 26px">
              <va-icon type="upload" style="position: absolute;left: 3px;" />Upload ảnh
            </div>
          </span>
        </b-col>
        <b-col cols="md-7">
          <va-form ref="form" type="vertical">
            <va-form-item label="Tên tổ chức">
              <va-input
                :value="name"
                @input="updateName"
                name="name"
                size="lg"
                placeholder="Tên tổ chức"
                :rules="[{type:'required', tip:'Bạn vui lòng nhập tên tổ chức'}]"
              />
            </va-form-item>
            <va-form-item label="Email công khai">
              <va-input
                name="email"
                :value="email"
                @input="updateEmail"
                size="lg"
                placeholder="Email công khai"
                :rules="[{type:'required', tip:'Bạn vui lòng nhập email'}, {type:'email', tip:'Bạn vui lòng nhập email'}]"
              />
            </va-form-item>
            <va-form-item label="Mô tả">
              <va-textarea :resize="false" :value="description" @input="updateDescription" />
            </va-form-item>
            <div class="va-form-group">
              <div class="va-col-sm-12 va-flex justify-content-end">
                <va-button
                  :active="!canUpdate"
                  :disabled="!canUpdate"
                  type="primary"
                  @click="submit"
                  class="mr-1"
                  icon-before="pen"
                >Chỉnh sửa</va-button>
                <va-button type="danger" @click="removeOrgan" icon-before="trash">Xóa tổ chức</va-button>
              </div>
            </div>
          </va-form>
        </b-col>
        <va-modal
          title="Thông báo"
          class="modal-container"
          :backdrop-clickable="backdropClickable"
          ref="customModal"
        >
          <div slot="body" class="mb-3">
            <p class="content-rm">Bạn có chắc chắn muốn xóa tổ chức này không?</p>
          </div>
          <div slot="footer">
            <div>
              <va-button type="primary" @click="acceptRemove">Đồng ý</va-button>
              <va-button @click="$refs.customModal.close()">Hủy bỏ</va-button>
            </div>
          </div>
        </va-modal>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
export default {
  layout: 'organization',
  data() {
    return {
      backdropClickable: true,
      name: 'Young Tailor',
      email: 'youngtailor@gmail.com',
      description:
        'Young Tailor là một tổ chức phi chính phủ, đem lại nhiều công việc có ích cho xã hội :v',
      image: '',
      imageUrl: 'https://avatars0.githubusercontent.com/u/49083246?s=200&v=4',
      editable: false,
    }
  },
  methods: {
    submit() {
      console.log('change')
    },
    acceptRemove() {
      console.log('remove')
      this.$refs.customModal.close()
    },
    removeOrgan() {
      this.$refs.customModal.open()
    },
    onFilePicked(event) {
      const files = event.target.files
      const fileName = files[0].name
      this.image = files[0]
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
    },
    updateName(value) {
      this.name = value
    },
    updateEmail(value) {
      this.email = value
    },
    updateDescription(value) {
      this.description = value
    },
    change() {
      this.editable = !this.editable
    },
  },
  computed: {
    nameChanged() {
      return this.name !== 'Young Tailor'
    },
    emailChanged() {
      return this.email !== 'youngtailor@gmail.com'
    },
    descriptionChanged() {
      return (
        this.description !==
        'Young Tailor là một tổ chức phi chính phủ, đem lại nhiều công việc có ích cho xã hội :v'
      )
    },
    canUpdate() {
      return this.nameChanged || this.descriptionChanged || this.emailChanged
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 235px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  @include box-shadow;
}
.text-profile {
  font-weight: 600;
  color: #5d6b83;
  font-size: 12px;
  margin-bottom: 8px;
}

.btn-file {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.btn-file input[type='file'] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
  display: block;
}

.modal-container {
  .content-rm {
    color: #5d6b83;
    font-size: 20px;
  }
}
</style>
