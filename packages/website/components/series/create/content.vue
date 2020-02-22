<template>
  <div>
    <div class="d-flex justify-content-between mt-4">
      <h2 class="title">Danh sách bài viết</h2>
      <hr class="split mb-0 mt-3" />
    </div>
    <articles-selected v-if="series" :listArticles="series.articles" />
    <hr class="mt-4 break" />
    <div class="d-flex justify-content-between">
      <va-dropdown>
        <div slot="trigger">
          <va-button icon-after="angle-up">
            <va-icon type="plus" class="mr-2" />Thêm bài viết
          </va-button>
        </div>
        <li>
          <nuxt-link :to="`/series/${series.slug}/bai-viet/tao-moi`">Tạo mới</nuxt-link>
        </li>
        <li>
          <a href="#" v-b-modal.list-posts>Thêm bài viết có sẵn</a>
        </li>
      </va-dropdown>
    </div>
    <b-modal id="list-posts" title="Danh sách bài viết" centered ref="updateArticles">
      <articles @closeModel="closeModel" />
      <template slot="modal-footer">
        <va-button @click="closeModel">Đóng</va-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Articles from './articles'
import ArticlesSelected from './item'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      series: 'series/series',
    }),
  },
  data() {
    return {
      listSelected: null,
    }
  },
  components: {
    Articles,
    ArticlesSelected,
  },
  methods: {
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