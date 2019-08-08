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
            <div class="wrapper d-flex py-1 px-1 align-items-lg-center">
              <img
                :src="article.author.avatar ===''?'https://bulma.io/images/placeholders/256x256.png':article.author.avatar"
                alt="avatar"
                class="avatar mr-2"
              />
              <div class="wrapper-item d-flex flex-column">
                <nuxt-link :to="`/bai-viet/${article.slug}`" class="title mb-0">{{ article.title }}</nuxt-link>
                <nuxt-link
                  :to="`/nguoi-dung/${article.author.username}`"
                  class="author mb-0"
                >{{article.author.name}}</nuxt-link>
              </div>
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .wrapper {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .wrapper-item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .title {
        font-size: $unit * 0.85;
        color: #172c4f;
        text-overflow: ellipsis;
        &:hover {
          color: #172c4f;
          text-decoration: none;
        }
      }
      .author {
        font-size: $unit * 0.7;
        color: #505e77;
        text-overflow: ellipsis;
        &:hover {
          color: #505e77;
          text-decoration: none;
        }
      }
    }
  }
}

.avatar {
  width: $size-image * 1.25;
  height: $size-image * 1.25;
  border-radius: $size-image * 1.25 / 2;
}
.split {
  border-bottom: 1px solid $tumblr;
  width: 55%;
  margin-top: 21px;
}
</style>
