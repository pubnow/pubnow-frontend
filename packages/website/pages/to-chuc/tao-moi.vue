<template>
  <div class="form-register">
    <b-row>
      <b-col cols="8">
        <va-form ref="form" type="vertical">
          <va-form-item label="Tên tổ chức" need>
            <va-input
              v-model="name"
              name="name"
              size="lg"
              placeholder="Tên tổ chức"
              :rules="[{type:'required', tip:'Bạn vui lòng nhập tên tổ chức'}]"
            />
          </va-form-item>
          <va-form-item label="Email công khai" need>
            <va-input
              name="email"
              v-model="email"
              size="lg"
              placeholder="Email công khai"
              :rules="[{type:'required', tip:'Bạn vui lòng nhập email'}, {type:'email', tip:'Bạn vui lòng nhập email'}]"
            />
          </va-form-item>
          <va-form-item label="Mô tả">
            <va-textarea :resize="false" v-model="description" />
          </va-form-item>
          <va-form-item>
            <va-button block type="primary" size="lg" @click="submit">Đăng ký</va-button>
          </va-form-item>
        </va-form>
      </b-col>
      <b-col cols="4" class="text-center">
        <p class="text-profile mt-0">Profile picture</p>
        <img
          :src="imageUrl === '' ? 'https://bulma.io/images/placeholders/256x256.png': imageUrl"
          alt="avatar to chuc"
          class="avatar"
        />
        <span class="btn btn-outline-dark btn-file mt-3">
          <input type="file" accept="image/*" @change="onFilePicked" />Upload new picture
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      description: '',
      image: '',
      imageUrl: '',
    }
  },
  methods: {
    submit() {
      console.log('register')
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
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-image: 235px;

.form-register {
  width: 765px;
  margin: 0 auto;
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
  }
  .text-profile {
    font-weight: 600;
    color: #5d6b83;
    font-size: 12px;
    margin-bottom: 8px;
  }
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
</style>
