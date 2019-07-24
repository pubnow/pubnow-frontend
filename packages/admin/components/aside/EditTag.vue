<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Chỉnh sửa thẻ</h1>
    <b-form class="mt-2">
      <b-form-group
        id="input-group-name"
        label="Tên thẻ:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          :value="name"
          @input="updateName"
          type="text"
          required
          :readonly="!editable"
          placeholder="Nhập tên thẻ"
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

      <b-form-group
        id="input-group-image"
        label="Ảnh thẻ:"
        label-for="input-image"
      >
        <b-form-file
          id="input-image"
          @change="onFileChange"
          :disabled="!editable"
          accept=".jpg, .png, .gif"
        ></b-form-file>
        <img
          class="mt-2"
          style="max-width: 100%; max-height: 500px;"
          v-if="url"
          :src="url"
        />
        <img
          class="mt-2"
          style="max-width: 100%; max-height: 500px;"
          v-else
          :src="tag.image"
        />
      </b-form-group>
      <div class="d-flex">
        <va-button
          @click="editBtn"
          active
          class="mr-2"
          :icon-before="editable ? 'chevron-left' : 'edit'"
          >{{ editable ? 'Hủy bỏ' : 'Chỉnh sửa' }}</va-button
        >
        <va-button
          icon-before="trash"
          class="mr-auto"
          type="danger"
          @click="deleteTag()"
          >Xóa</va-button
        >
        <va-button
          :active="!canUpdate"
          :disabled="!canUpdate"
          @click="update"
          icon-after="check"
          type="primary"
          >Cập nhật</va-button
        >
      </div>
      <b-modal
        centered
        hide-header
        hide-backdrop
        hide-footer
        v-model="modalShow"
      >
        <div>
          <div class="text-center">Bạn có muốn xóa thẻ {{ tag.name }}</div>
          <div class="delete-tag text-center">
            <va-button class="not-delete" @click="modalShow = !modalShow"
              >Không</va-button
            >
            <va-button class="btn-delete" type="danger" @click="delTag"
              >Xóa</va-button
            >
          </div>
        </div>
      </b-modal>
    </b-form>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: Object,
    },
  },
  data() {
    return {
      modalShow: false,
      editable: false,
      url: null,
      name: '',
      slug: '',
    }
  },
  computed: {
    nameChanged() {
      const oldName = this.tag.name
      return this.name !== oldName
    },
    slugChanged() {
      const oldSlug = this.tag.slug
      return this.slug !== oldSlug
    },
    canUpdate() {
      return this.nameChanged || this.slugChanged
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.tag.name
      this.slug = this.tag.slug
    },
    deleteTag() {
      this.modalShow = !this.modalShow
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
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
    updateSlug(value) {
      this.slug = value
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.slugChanged && { slug: this.slug }),
      }
      await this.$store.dispatch('tag/update', {
        slug: this.tag.slug,
        submit: submit,
      })
      this.$router.go()
    },
    async delTag() {
      await this.$store.dispatch('tag/delTag', this.tag.slug)
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
.delete-tag {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>
