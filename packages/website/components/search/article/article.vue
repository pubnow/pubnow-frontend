<template>
  <div class="d-flex flex-column mt-4 bg-white px-4 py-4 wrap-all">
    <div class="d-flex align-items-center mb-3">
      <img :src="avatarUrl" alt="avatar" class="avatar mr-2" />

      <div>
        <nuxt-link
          :to="`/nguoi-dung/${author.username}`"
          class="font-weight-bold author"
        >{{ author.name }}</nuxt-link>
        <span>trong</span>
        <nuxt-link :to="`/danh-muc/${category.slug}`" class="category">{{ category.name }}</nuxt-link>
        <p class="mt-0 font-weight-lighter small">
          Đăng {{ article.publishedAt }}
          <span class="middot"></span>
          {{ article.reading_time | timeRead }}
        </p>
      </div>
    </div>
    <nuxt-link :to="`/bai-viet/${article.slug}`">
      <img :src="thumbnailUrl" alt="hot post" class="image cursor-poiter" />
    </nuxt-link>
    <h1 class="title font-weight-bold cursor-poiter mt-3">
      <span
        v-for="(character, index) in titleArray"
        :key="index"
        :class="textSearhArray.includes(character.toLowerCase()) ? 'selected' : ''"
      >{{ character }}</span>
    </h1>
    <p class="cursor-poiter description">{{ article.excerpt | unescape }}</p>
    <div class="d-flex justify-content-between mt-4">
      <div>
        <img :src="require('@/assets/images/icons/clap.svg')" alt="clap icon" class="cursor-poiter" />
        <span class="clap">{{ article.claps }}</span>
      </div>
      <div>
        <span class="link mr-1">{{ article.seen_count }} lượt xem</span>
      </div>
    </div>
  </div>
</template>

<script>
import hasDate from '@/mixins/hasDate'

export default {
  mixins: [hasDate],
  props: {
    keyword: {
      type: String,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    author() {
      return this.article.author
    },
    avatarUrl() {
      return this.author.avatar
        ? this.author.avatar
        : require('@/assets/images/logo.svg')
    },
    thumbnailUrl() {
      return this.article.thumbnail
        ? this.article.thumbnail
        : 'https://i.imgur.com/nUSXOIF.png'
    },
    category() {
      return this.article.category
    },
    titleArray() {
      return this.article.title.split(' ')
    },
    textSearhArray() {
      return this.keyword.toLowerCase().split(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 50px;

.cursor-poiter {
  cursor: pointer;
}

.wrap-all {
  @include radius-md;
  @include box-shadow-sm;
  @include border;
}

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  object-fit: cover;
  @include border;
}

.author,
.category {
  color: $n300 !important;

  &:hover {
    color: $n500 !important;
    text-decoration: none !important;
  }
}

.title {
  color: $b500;
  span {
    font-family: $ale;
    font-weight: 700;
    &:after {
      content: ' ';
      background: white;
    }
    &.selected {
      background: gray;
      color: white;
    }
  }
}

.description {
  font-family: $noto;
  color: $n400;
  font-size: 16px;
}

.clap {
  color: $text;
  font-size: $unit * 0.75;
  vertical-align: bottom;
}

.image {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
}
</style>
