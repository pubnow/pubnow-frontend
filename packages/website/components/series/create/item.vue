<template>
  <no-ssr>
    <div>
      <div v-if="listArticles.length">
        <div
          v-for="(article, index) in listArticles"
          :key="`show-${index}`"
          class="wrap-article py-1 px-1 mb-2"
        >
          <item-article :article="article" @deleteItem="deleteItem" />
        </div>
      </div>
      <p
        v-else
        class="text-center"
      >Chưa có bài viết nào. Vui lòng thêm bài viết vào loạt bài này để làm cho nó được hiển thị trên trang chủ!</p>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemArticle from './ItemArticle'
import get from 'lodash.get'

export default {
  components: {
    ItemArticle,
  },
  props: {
    listArticles: {
      type: Array,
    },
  },
  data() {
    return {
      dataID: [],
    }
  },
  mounted() {
    this.series.articles.forEach(item => this.dataID.push(item.id))
  },
  computed: {
    ...mapGetters({
      user: 'user/author',
      series: 'series/series',
    }),
  },
  methods: {
    deleteItem(id) {
      const index = this.dataID.findIndex(item => item === id)
      this.dataID.splice(index, 1)
      let data = {
        articles: [...this.dataID],
        slug: this.series.slug,
      }
      this.$store.dispatch('series/edit', data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 30px;
.wrap-article {
  @include border;
  cursor: pointer;
  .title {
    font-size: $unit / 1.3;
  }
}
.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}
</style>
