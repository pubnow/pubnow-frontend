<template>
  <div class="article-h mb-2 mt-md-0 mt-2">
    <div class="overlay" :style="`background-image: url(${article.thumbnail})`"></div>
    <div class="content">
      <nuxt-link :to="link">
        <h2 class="title">{{ article.title }}</h2>
        <div class="additional">
          <nuxt-link :to="`/nguoi-dung/${author.username}`" class="author">{{ author.name }}</nuxt-link>
          <span class="middot"></span>
          <nuxt-link :to="`/danh-muc/${category.slug}`" class="category">{{ category.name }}</nuxt-link>
        </div>
        <div class="time">
          {{ article.publishedAt }}
          <span class="middot"></span>
          {{ article.reading_time | timeRead }}
        </div>
      </nuxt-link>
    </div>
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
  computed: {
    author() {
      return this.article.author
    },
    category() {
      return this.article.category
    },
    link() {
      return `/bai-viet/${this.article.slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

$line-height-title: 28px;
.article-h {
  position: relative;
  background-size: cover;

  @include radius-md;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    &::after {
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    filter: blur(2px);
  }
  .content {
    position: relative;
    z-index: 1;
    padding: $unit / 2;
    .title {
      color: $n10;
      z-index: 9999;
      line-height: $line-height-title;
      max-height: $line-height-title * 2;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
    }
    .additional {
      margin-top: $unit / 2;
      .middot {
        color: $white;
      }
      .author,
      .category {
        color: $n30;
        font-weight: 600;
        &:hover {
          color: $n20;
        }
        img {
          width: $unit;
          height: $unit;
          border-radius: $unit / 2;
          object-fit: cover;
          @include border;
        }
      }
    }
    .time {
      color: $n30;
    }
    a {
      &:hover {
        text-decoration: none !important;
      }
    }
  }
}
</style>
