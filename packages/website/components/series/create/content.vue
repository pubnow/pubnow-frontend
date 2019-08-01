<template>
  <div>
    <div class="d-flex justify-content-between mt-4">
      <h2 class="title">Danh sách bài viết</h2>
      <hr class="split mb-0 mt-3" />
    </div>
    <articles-selected :listSelected="listSelected" @deleteItem="deleteItem" />
    <hr class="mt-4 break" />
    <va-button type="subtle" class="mb-4" v-b-modal.list-posts>
      <va-icon type="plus" class="mr-2" />Thêm bài viết
    </va-button>
    <b-modal id="list-posts" title="Danh sách bài viết" centered ref="updateArticles">
      <articles @addArticle="addArticle" :listSelected="listSelected" />
      <template slot="modal-footer">
        <va-button @click="closeModel">Đóng</va-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Articles from './articles'
import ArticlesSelected from './item'
export default {
  data() {
    return {
      listSelected: [],
    }
  },
  components: {
    Articles,
    ArticlesSelected,
  },
  methods: {
    addArticle(article) {
      if (this.listSelected.includes(article)) {
        this.listSelected = this.listSelected.filter(item => item !== article)
      } else {
        this.listSelected.push(article)
      }
    },
    deleteItem(index) {
      this.listSelected.splice(index, 1)
    },
    closeModel() {
      this.$refs.updateArticles.hide()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
.split {
  border-bottom: 1px solid $tumblr;
  width: 85%;
}
.break {
  border-bottom: 1px solid $tumblr;
}
</style>