<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Chỉnh sửa chuyên mục</h1>
    <va-button @click="change" type="primary">Chỉnh sửa</va-button>
    <b-form class="mt-2">
      <b-form-group id="input-group-name" label="Tên chuyên mục:" label-for="input-name">
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

      <b-form-group id="input-group-description" label="Mô tả:" label-for="input-description">
        <b-form-input
          id="input-description"
          type="text"
          :value="selected.description"
          :readonly="boolean"
          @input="updateDescription"
          required
          placeholder="Nhập mô tả"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-slug" label="Slug:" label-for="input-slug">
        <b-form-input
          id="input-slug"
          :value="selected.slug"
          @input="updateSlug"
          type="text"
          required
          :readonly="boolean"
          placeholder="Nhập slug"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-image" label="Ảnh chuyên mục:" label-for="input-image">
        <b-form-file
          id="input-image"
          @change="onFileChange"
          :disabled="boolean"
          accept=".jpg, .png, .gif"
        ></b-form-file>
        <img class="mt-2" style="max-width: 100%; max-height: 500px;" v-if="url" :src="url" />
        <img class="mt-2" style="max-width: 100%; max-height: 500px;" v-else :src="selected.image" />
      </b-form-group>
      <va-button :disabled="check" @click="update" type="primary">Cập nhật</va-button>
      <va-button type="danger" @click="deleteCategory()">Xóa</va-button>
      <b-modal centered hide-header hide-backdrop hide-footer v-model="modalShow">
        <div>
          <div class="text-center">
            Bạn có muốn xóa chuyên mục {{ selected.name }}
          </div>
          <div class="delete-category text-center">
            <va-button class="not-delete" @click="modalShow =! modalShow">Không</va-button>
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
      form: {
        name: '',
        description: '',
        slug: '',
      },
    }
  },
  methods: {
    deleteCategory() {
      this.modalShow =! this.modalShow
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
    },
    change() {
      this.boolean = false
      this.form.name = this.selected.name
      this.form.description = this.selected.description
      // this.form.slug = this.selected.slug
    },
    updateName(value) {
      this.form.name = value
      this.check = false
    },
    updateDescription(value) {
      this.form.description = value
      this.check = false
    },
    updateSlug(value) {
      this.form.slug = value
      this.check = false
    },
    async update() {
      let submit = new Object()
      if (this.form.slug != this.selected.slug) {
        submit.slug = this.form.slug
      }
      if (this.form.name != this.selected.name) {
        submit.name = this.form.name
      }
      if (this.form.description != this.selected.description) {
        submit.description = this.form.description
      }
      this.$http.setHeader('Accept', 'application/json')
      await this.$http.$put(`categories/${this.selected.slug}`, {
        ...submit,
      })
      this.$router.go()
    },
    async deleteCat() {
      await this.$http.delete(`categories/${this.selected.slug}`)
      this.$router.go()
    }
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


