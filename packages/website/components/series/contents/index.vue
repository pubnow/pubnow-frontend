<template>
  <no-ssr>
    <div>
      <HeadingText class="d-flex align-items-end my-2 mt-4">
        <div>Nội dung</div>
      </HeadingText>
      <div>
        <div v-if="articles.length">
          <div
            v-for="(article, index) in articles"
            :key="`show-${index}`"
            class="wrap-article py-1 px-1 mb-2 d-flex justify-content-between"
          >
            <div class="d-flex align-items-lg-center">
              <img
                :src="article.author.avatar ===''?'https://bulma.io/images/placeholders/256x256.png':article.author.avatar"
                alt="avatar"
                class="avatar mr-2"
              />
              <nuxt-link :to="`/bai-viet/${article.slug}`" class="title mb-0">{{ article.title }}</nuxt-link>
            </div>
          </div>
        </div>
        <p
          v-else
          class="text-center"
        >Chưa có bài viết nào. Vui lòng thêm bài viết vào loạt bài này để làm cho nó được hiển thị trên trang chủ!</p>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { HeadingText } from '@/components/common'

export default {
  components: {
    HeadingText,
  },
  props: {
    articles: {
      typs: Object,
      required: true,
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 30px;
.wrap-article {
  @include border;
  cursor: pointer;
  .title {
    font-size: $unit;
    color: #172c4f;
    &:hover {
      color: #172c4f;
      text-decoration: none;
    }
  }
}

.avatar {
  width: $size-image * 1.5;
  height: $size-image * 1.5;
  border-radius: $size-image * 1.5 / 2;
}
.split {
  border-bottom: 1px solid $tumblr;
  width: 55%;
  margin-top: 21px;
}
</style>
