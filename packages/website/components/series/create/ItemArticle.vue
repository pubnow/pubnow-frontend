<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex align-items-lg-center">
      <img
        :src="article.author.avatar ===''?'https://bulma.io/images/placeholders/256x256.png':article.author.avatar"
        alt="avatar"
        class="avatar mr-2"
      />
      <h2 class="title mb-0">{{ article.title }}</h2>
    </div>
    <va-button type="subtle" @click="$refs.deleteModal.open()">
      <va-icon type="trash mr-2" />Xóa
    </va-button>
    <va-modal title="Xóa series" ref="deleteModal" :backdrop-clickable="true">
      <div slot="body">
        <p>Bạn có chắc chắn muốn xóa bài viết này khỏi series không?</p>
      </div>
      <div slot="footer">
        <va-button @click="$refs.deleteModal.close()">Hủy bỏ</va-button>
        <va-button type="danger" @click="deleteArticle(article.id)" icon-before="trash">Xóa</va-button>
      </div>
    </va-modal>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteArticle(id) {
      this.$emit('deleteItem', id)
      this.$refs.deleteModal.close()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 30px;

.title {
  font-size: $unit / 1.3;
}

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}
</style>
