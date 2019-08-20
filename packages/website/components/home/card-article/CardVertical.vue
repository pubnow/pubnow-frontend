<template>
  <div class="article-v">
    <nuxt-link :to="link">
      <img v-if="article.thumbnail" :src="article.thumbnail" :alt="article.title" class="thumbnail" />
      <div v-else class="thumbnail d-flex align-items-center justify-content-center">
        <img src="@/assets/images/logo.svg" />
      </div>
      <h2 class="title">{{ article.title }}</h2>
    </nuxt-link>
    <p class="description">{{ article.excerpt | unescape }}</p>
    <div class="additional">
      Đăng bởi
      <nuxt-link :to="`/nguoi-dung/${author.username}`" class="author">
        <img v-if="author.avatar" :src="author.avatar" />
        <img v-else src="@/assets/images/logo.svg" />
        {{ author.name }}
      </nuxt-link>trong
      <nuxt-link :to="`/danh-muc/${category.slug}`" class="category">{{ category.name }}</nuxt-link>
    </div>
    <div class="time">
      {{ article.publishedAt }}
      <span class="middot"></span>
      {{ article.reading_time | timeRead }}
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

.article-v {
  &:hover {
    .thumbnail {
      @include box-shadow-lg;
    }
  }
  .thumbnail {
    width: 100%;
    height: 234px;
    object-fit: cover;
    background: $n20;
    @include radius-md;
    @include border;
    @include box-shadow-sm;
    transition: all 0.2s ease-in-out;
    margin-bottom: $unit / 2;

    img {
      user-select: none;
    }
  }

  .title {
    margin-bottom: $unit/ 4;
    color: $b500;
  }

  .description {
    font-size: 16px;
    margin-top: 0;
  }

  .additional {
    margin-top: $unit / 2;
    display: flex;
    .author,
    .category {
      margin: 0px 5px;
      color: $n400;
      &:hover {
        color: $n600;
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
  a {
    &:hover {
      text-decoration: none !important;
    }
  }
}
</style>
