<template>
  <no-ssr>
    <div class="latest my-2">
      <div v-if="!bookmarks.length" class="empty-img">
        <img src="@/assets/images/empty_state.png" />
        <span>Bạn chưa bookmark bài viết nào !!!</span>
      </div>
      <div v-else>
        <ArticleCard
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :article="bookmark.article"
          :id="bookmark.id"
          @remove="showModal"
        />
      </div>
      <va-modal title="Xác nhận" :backdrop-clickable="backdropClickable" ref="modal">
        <div slot="body">Bạn có chắc chắn muốn xóa bookmark khỏi bài viết này không?</div>
        <div slot="footer">
          <div>
            <va-button @click="$refs.modal.close()">Hủy</va-button>
            <va-button type="danger" icon-before="trash" @click="removeBookmark(idArticle)">Xóa</va-button>
          </div>
        </div>
      </va-modal>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleCard from './article-card'

export default {
  data() {
    return {
      bookmarks: [],
      backdropClickable: true,
      idArticle: '',
    }
  },
  components: {
    ArticleCard,
  },
  computed: {
    ...mapGetters({
      listBookmark: 'bookmark/listBookmark',
    }),
  },
  mounted() {
    this.bookmarks = this.listBookmark
  },
  methods: {
    removeBookmark(id) {
      const index = this.bookmarks.findIndex(item => item.article.id === id)
      let arr = [...this.bookmarks]
      arr.splice(index, 1)
      this.bookmarks = [...arr]
      this.$store.dispatch('bookmark/unBookmark', id, this.bookmarks)
      this.$refs.modal.close()
    },
    showModal(id) {
      this.idArticle = id
      this.$refs.modal.open()
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.empty-img {
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 300px;
  }
  span {
    color: $n100;
    font-size: $unit;
    border: 1px dashed $n100;
    padding: $unit / 2;
    margin-top: $unit / 4;
    user-select: none;
  }
}
</style>
