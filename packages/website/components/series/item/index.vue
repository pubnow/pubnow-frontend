<template>
  <div class="d-flex flex-column mt-3 bg-white p-3 wrap-all">
    <div>
      <nuxt-link :to="`/series/${slug}`" class="title">
        <h2 class="title font-weight-bold cursor-poiter">{{ title }}</h2>
      </nuxt-link>
      <p class="description cursor-poiter mt-0">{{ excerpt | unescape }}</p>
    </div>
    <div class="d-flex justify-content-between mt-2">
      <div class="wrap-left">
        <img :src="author.avatar" alt="avatar" class="avatar mr-1" />
        <nuxt-link :to="`/nguoi-dung/${author.username}`" class="author">{{ author.name }}</nuxt-link>
        <span class="middot"></span>
        {{ date }}
      </div>
      <div class="wrap-right">
        <span class="number">{{ articles.length }} bài viết</span>
        <div class="ml-1 d-flex align-items-center" v-if="articles.length > 0">
          <span class="mr-1">đóng góp bởi</span>
          <div v-for="contributor in top3contributors" :key="contributor.id">
            <va-tooltip :content="contributor.name" arrow>
              <nuxt-link :to="`/nguoi-dung/${contributor.username}`">
                <img :src="contributor.avatar" class="contributor mr-1" />
              </nuxt-link>
            </va-tooltip>
          </div>
          <nuxt-link class="more contributor" :to="`/series/${slug}`" v-if="more">{{ more }}+</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import take from 'lodash.take'
import uniqBy from 'lodash.uniqby'

export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    contributors() {
      return uniqBy(
        this.articles.map(article => article.author),
        contributor => contributor.username,
      )
    },
    top3contributors() {
      if (this.contributors.length > 3) {
        return take(this.contributors, 3)
      }
      return this.contributors
    },
    more() {
      if (this.contributors.length > 3) {
        return this.contributors.length - 3
      }
      return 0
    },
  },
  methods: {
    editSeries(slug) {
      this.$store.dispatch('series/show', slug).then(() => {
        this.$router.push(`series/${slug}/chinh-sua`)
      })
    },
    deleteSeries() {
      console.log('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_fonts.scss';

$size-avatar: 28px;
.wrap-all {
  @include radius-md;
  @include box-shadow-sm;
  @include border;
  .avatar {
    height: $size-avatar;
    width: $size-avatar;
    border-radius: $size-avatar / 2;
    object-fit: cover;
  }
  .title {
    font-family: $ale;
    font-weight: 700;
    color: $b500;
  }
  .description {
    color: $n400;
    font-size: 1rem;
  }
  .author {
    color: $n400;
    font-weight: 600;
    &:hover {
      text-decoration: none;
    }
  }
  .wrap-right {
    display: flex;
    align-items: center;

    .contributor {
      height: $size-avatar;
      width: $size-avatar;
      border-radius: $size-avatar / 2;
      object-fit: cover;
      @include border;
    }
    .more {
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background: $n60;
      border: 0;
    }
  }
}
</style>
