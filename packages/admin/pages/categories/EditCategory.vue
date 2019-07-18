<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Chỉnh sửa chuyên mục</h1>
    <va-button @click="boolean = false" type="primary">Chỉnh sửa</va-button>
    <b-form class="mt-2">
      <b-form-group
        id="input-group-name"
        label="Tên chuyên mục:"
        label-for="input-name"
      >
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

      <b-form-group
        id="input-group-description"
        label="Mô tả:"
        label-for="input-description"
      >
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

      <b-form-group
        id="input-group-latest"
        label="Bài viết mới nhất:"
        label-for="input-latest"
      >
        <b-form-input
          id="input-latest"
          :value="selected.latest"
          @input="updateLatest"
          type="text"
          required
          :readonly="boolean"
          placeholder="Nhập bài viết mới nhất"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-count"
        label="Số lượng bài viết:"
        label-for="input-count"
      >
        <b-form-input
          id="input-count"
          :value="selected.count"
          @input="updateCount"
          type="number"
          required
          :readonly="boolean"
          placeholder="Nhập số lượng"
        ></b-form-input>
      </b-form-group>
      <va-button type="primary">Cập nhật</va-button>
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
      disable: false,
      form: {
        name: '',
        description: '',
        slug: '',
        latest: '',
        count: 0,
      },
    }
  },
  methods: {
    updateName(value) {
      this.form.name = value
    },
    updateDescription(value) {
      this.form.description = value
    },
    updateSlug(value) {
      this.form.slug = value
    },
    updateLatest(value) {
      this.form.latest = value
    },
    updateCount(value) {
      this.form.count = value
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
</style>


