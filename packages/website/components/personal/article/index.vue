<template>
  <div class="d-flex flex-column mb-4 article">
    <nuxt-link class="link" :to="`/bai-viet/${article.slug}`">
      <img v-if="article.thumbnail" :src="article.thumbnail" alt="hot post" class="image" />
      <div class="placeholder-image" v-else>
        <img src="@/assets/images/logo.svg" />
      </div>
      <h2 class="title mb-0">{{ article.title }}</h2>
    </nuxt-link>
    <span class="additional">
      Đăng {{ article.publishedAt }} trong
      <nuxt-link
        :to="`/danh-muc/${article.category.slug}`"
        class="text-uppercase mt-2"
      >{{ article.category.name }}</nuxt-link>
      &nbsp; · &nbsp; {{ article.content | timeRead }}
    </span>
    <p class="text-body">{{ article.excerpt | unescape }}</p>
    <div class="d-flex justify-content-between mt-4">
      <div>
        <img src="@/assets/images/icons/clap.svg" alt="clap icon" />
        <span class="clap">{{ article.claps }}</span>
      </div>
      <div class="d-flex wrap-right">
        <nuxt-link to="#" class="link">Bình luận</nuxt-link>
        <nuxt-link class="mx-3 link" to="#">Chia sẻ</nuxt-link>
        <img src="@/assets/images/icons/bookmark.svg" alt="bookmark icon" />
      </div>
    </div>
  </div>
</template>

<script>
import get from 'lodash.get'

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.article {
  .link {
    margin-bottom: $unit / 2;
    &:hover {
      text-decoration: none !important;
    }
    .title {
      font-size: $unit * 1.1;
      color: $b500;
      font-family: $ale;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-top: $unit / 2;
    }
    .placeholder-image {
      min-height: 180px;
      background: $n20;
      display: flex;
      align-items: center;
      justify-content: center;
      @include radius-md;
    }
  }

  .additional {
    color: $n200;
    a {
      color: $n500;
      font-weight: 600;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .clap {
    color: $text;
    font-size: $unit * 0.75;
    vertical-align: bottom;
  }

  .wrap-right {
    line-height: 25px;
    .link {
      color: $text !important;
    }
  }

  .image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .text-body {
    font-size: 16px;
    line-height: 1.5;
    word-break: break-word;
    color: $n500 !important;
  }
}
</style>
