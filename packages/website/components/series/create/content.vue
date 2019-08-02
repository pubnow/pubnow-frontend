<template>
  <div>
    <div class="d-flex justify-content-between mt-4">
      <h2 class="title">Danh sách bài viết</h2>
      <hr class="split mb-0 mt-3" />
    </div>
    <articles-selected :listSelected="listSelected" @deleteItem="deleteItem" />
    <hr class="mt-4 break" />
    <div class="d-flex justify-content-between">
      <va-dropdown>
        <div slot="trigger">
          <va-button icon-after="angle-up">
            <va-icon type="plus" class="mr-2" />Thêm bài viết
          </va-button>
        </div>
        <li>
          <nuxt-link :to="`/series/${slug}/bai-viet/tao-moi`">Tạo mới</nuxt-link>
        </li>
        <li>
          <a href="#" v-b-modal.list-posts>Thêm bài viết có sẵn</a>
        </li>
      </va-dropdown>
      <va-button type="success">
        <va-icon type="check" class="mr-2" />Lưu
      </va-button>
    </div>
    <b-modal id="list-posts" title="Danh sách bài viết" centered ref="updateArticles">
      <search />
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
import Search from './search'
export default {
  data() {
    return {
      slug: 'abcde',
      listSelected: [],
    }
  },
  components: {
    Articles,
    ArticlesSelected,
    Search,
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