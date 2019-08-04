<template>
  <div>
    <template v-if="listSelected.length">
      <div
        v-for="(article, index) in listSelected"
        :key="`show-${index}`"
        class="wrap-article py-1 px-1 mb-2 d-flex justify-content-between"
      >
        <div class="d-flex align-items-lg-center">
          <img :src="avatarUrl" alt="avatar" class="avatar mr-2" />
          <h2 class="title mb-0">{{ article.title }}</h2>
        </div>
        <va-button type="subtle" @click="deleteItem(index)">
          <va-icon type="trash mr-2" />Xóa
        </va-button>
      </div>
    </template>
    <p
      v-else
      class="text-center"
    >Chưa có bài viết nào. Vui lòng thêm bài viết vào loạt bài này để làm cho nó được hiển thị trên trang chủ!</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'

export default {
  props: {
    listSelected: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      user: 'user/author',
    }),
    avatarUrl() {
      const avatar = get(this, 'user.avatar')
      if (avatar) return avatar
      return 'https://bulma.io/images/placeholders/256x256.png'
    },
  },
  methods: {
    deleteItem(index) {
      this.$emit('deleteItem', index)
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
