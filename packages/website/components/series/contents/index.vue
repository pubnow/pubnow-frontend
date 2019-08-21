<template>
  <no-ssr>
    <div class="pb-5">
      <HeadingText class="d-flex align-items-end my-2 mt-4">
        <div>Bài viết</div>
      </HeadingText>
      <div>
        <b-list-group v-if="articles.length" class="wrap">
          <b-list-group-item
            v-for="(article, index) in articles"
            :key="`show-${index}`"
            class="wrap-article"
            :to="`/bai-viet/${article.slug}`"
          >
            <h2 class="mt-0">
              <nuxt-link :to="`/bai-viet/${article.slug}`" class="title mb-0">{{ article.title }}</nuxt-link>
            </h2>
            <div class="bottom d-flex">
              <div class="author">
                <span>Đăng bởi</span>
                <nuxt-link :to="`/nguoi-dung/${article.author.username}`" class="author mb-0">
                  <img :src="article.author.avatar" alt="avatar" class="avatar mx-1" />
                  {{article.author.name}}
                </nuxt-link>
                <span class="middot"></span>
                <span>{{ article.publishedAt }}</span>
              </div>
              <div class="additional-info ml-auto d-flex align-items-center">
                <span>{{ article.seen_count }} lượt xem</span>
                <span class="middot"></span>
                <span>{{ article.comments_count }} bình luận</span>
              </div>
            </div>
          </b-list-group-item>
        </b-list-group>
        <Empty v-else />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { HeadingText, Empty } from '@/components/common'

export default {
  components: {
    HeadingText,
    Empty,
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
@import '@pubnow/ui/scss/_fonts.scss';

$size-image: 28px;
.wrap {
  @include radius-md;
  @include box-shadow-sm;
}
.wrap-article {
  &:hover {
    background: $n20;
  }
  .title {
    font-size: 18px;
    color: $n600;
    text-overflow: ellipsis;
    &:hover {
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

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  @include border;
}
.split {
  border-bottom: 1px solid $tumblr;
  width: 55%;
  margin-top: 21px;
}
</style>
