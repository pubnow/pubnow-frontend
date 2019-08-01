<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Bài viết</h1>
    <b-form class="mt-2">
      <b-form-group
        id="input-group-name"
        label="Tên thẻ:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          :value="name"
          type="text"
          required
          readonly
          placeholder="Nhập tên thẻ"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-slug" label="Slug:" label-for="input-slug">
        <b-form-input
          id="input-slug"
          :value="slug"
          type="text"
          required
          readonly
          placeholder="Nhập slug"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-author"
        label="Tác giả:"
        label-for="input-author"
      >
        <b-form-input
          id="input-author"
          :value="author"
          type="text"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-category"
        label="Chuyên mục:"
        label-for="input-category"
      >
        <b-form-input
          id="input-category"
          :value="category"
          type="text"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-view"
        label="Lượt view:"
        label-for="input-view"
      >
        <b-form-input
          id="input-view"
          :value="view"
          type="text"
          required
          readonly
        ></b-form-input>
      </b-form-group>

      <div class="d-flex">
        <va-button
          icon-before="trash"
          class="mr-auto"
          type="danger"
          @click="deleteArticle()"
          >Xóa</va-button
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
          <div class="text-center">
            Bạn có muốn xóa bài viết {{ article.title }}
          </div>
          <div class="delete-article text-center">
            <va-button class="not-delete" @click="modalShow = !modalShow"
              >Không</va-button
            >
            <va-button class="btn-delete" type="danger" @click="delArticle"
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
    article: {
      type: Object,
    },
  },
  data() {
    return {
      modalShow: false,
      name: '',
      slug: '',
      author: '',
      category: '',
      view: '',
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.article.title
      this.slug = this.article.slug
      this.author = this.article.author.name
      this.category = this.article.category.name
      this.view = this.article.view
    },
    deleteArticle() {
      this.modalShow = !this.modalShow
    },
    async delArticle() {
      await this.$store.dispatch('article/delArticle', this.article.slug)
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
.delete-article {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>
