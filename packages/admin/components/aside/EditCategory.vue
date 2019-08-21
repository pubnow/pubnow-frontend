<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center my-5">Chỉnh sửa chuyên mục</h1>
    <b-form class="mt-2">
      <b-form-group id="input-group-name" label="Tên chuyên mục:" label-for="input-name">
        <b-form-input
          id="input-name"
          :value="name"
          @input="updateName"
          type="text"
          required
          :readonly="!editable"
          placeholder="Nhập tên chuyên mục"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-description" label="Mô tả:" label-for="input-description">
        <b-form-input
          id="input-description"
          type="text"
          :value="description"
          :readonly="!editable"
          @input="updateDescription"
          required
          placeholder="Nhập mô tả"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-slug" label="Slug:" label-for="input-slug">
        <b-form-input
          id="input-slug"
          :value="slug"
          @input="updateSlug"
          type="text"
          required
          :readonly="!editable"
          placeholder="Nhập slug"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-image" label="Ảnh chuyên mục:" label-for="input-image">
        <b-form-file
          id="input-image"
          @change="onFileChange"
          :disabled="!editable"
          accept=".jpg, .png, .gif"
        ></b-form-file>
        <img
          class="mt-2"
          style="max-width: 100%; max-height: 500px;"
          v-if="imageUrl"
          :src="imageUrl"
        />
        <img class="mt-2" style="max-width: 100%; max-height: 500px;" v-else :src="category.image" />
      </b-form-group>
      <div class="d-flex">
        <va-button
          @click="editBtn"
          active
          class="mr-2"
          :icon-before="editable ? 'chevron-left' : 'edit'"
        >{{ editable ? 'Hủy bỏ' : 'Chỉnh sửa' }}</va-button>
        <va-button icon-before="trash" class="mr-auto" type="danger" @click="deleteCategory()">Xóa</va-button>
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
          <div class="text-center">Bạn có muốn xóa chuyên mục {{ category.name }}</div>
          <div class="delete-category text-center">
            <va-button class="not-delete" @click="modalShow = !modalShow">Không</va-button>
            <va-button class="btn-delete" type="danger" @click="deleteCat">Xóa</va-button>
          </div>
        </div>
      </b-modal>
    </b-form>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
  data() {
    return {
      modalShow: false,
      editable: false,
      url: null,
      name: '',
      description: '',
      slug: '',
      image: null,
    }
  },
  computed: {
    nameChanged() {
      const oldName = this.category.name
      return this.name !== oldName
    },
    descriptionChanged() {
      const oldDescription = this.category.description
      return this.description !== oldDescription
    },
    slugChanged() {
      const oldSlug = this.category.slug
      return this.slug !== oldSlug
    },
    imageUploading() {
      return this.$wait.is('upload.image')
    },
    canUpdate() {
      return (
        this.nameChanged ||
        this.descriptionChanged ||
        this.slugChanged ||
        this.image
      )
    },
    imageUrl() {
      if (this.image) {
        return this.image.link
      }
      return this.url
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.category.name
      this.description = this.category.description
      this.slug = this.category.slug
      this.url = this.category.image
    },
    deleteCategory() {
      this.modalShow = !this.modalShow
    },
    async onFileChange(e) {
      const file = e.target.files[0]
      this.image = file
      const formImg = new FormData()
      formImg.append('file', file)
      this.$wait.start('upload.image')
      const uploadedImage = await this.$http.$post('upload', formImg)
      this.image = uploadedImage.data
      this.$wait.end('upload.image')
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
    updateDescription(value) {
      this.description = value
    },
    updateSlug(value) {
      this.slug = value
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.descriptionChanged && { description: this.description }),
        ...(this.slugChanged && { slug: this.slug }),
        ...(this.image && { image_id: this.image.id }),
      }
      await this.$store.dispatch('category/update', {
        slug: this.category.slug,
        submit: submit,
      })
      this.$router.go()
    },
    async deleteCat() {
      await this.$store.dispatch('category/deleteCat', this.category.slug)
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
