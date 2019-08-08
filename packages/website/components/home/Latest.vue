<template>
  <div class="latest">
    <HeadingText>Mới nhất</HeadingText>
    <div class="mt-4">
      <v-wait for="article.index" transition="fade" mode="out-in">
        <template slot="waiting">
          <LatestArticlePlaceholder v-for="i in 5" :key="i" />
        </template>
        <article class="article mb-5" v-for="article in articles" :key="article.id">
          <div class="article-post flex-grow-1">
            <nuxt-link :to="`/bai-viet/${article.slug}`" class="text-dec">
              <h2 class="title">{{ article.title }}</h2>
              <div class="mt-1 description">{{article.excerpt | unescape}}</div>
            </nuxt-link>
            <div class="mt-2">
              <nuxt-link :to="`/nguoi-dung/${article.author.username}`">{{ article.author.name }}</nuxt-link>
              <span class="ml-1">tại</span>
              <nuxt-link :to="`/danh-muc/${article.category.slug}`">{{ article.category.name }}</nuxt-link>
              <div class="mt-1">
                <span class="d-inline-block">{{ article.updatedAt | formatDate }}</span>
                <span class="middot"></span>
                <span>{{ article.reading_time | timeRead }}</span>
                <span>
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <nuxt-link class="article-image" :to="`/bai-viet/${article.slug}`">
            <div
              v-if="article.thumbnail"
              class="d-block background-cover w-100 h-100"
              :style="`backgroundImage: url(${article.thumbnail})`"
            ></div>
            <div v-else class="placeholder-image w-100 h-100">
              <img src="@/assets/images/logo.svg" />
            </div>
          </nuxt-link>
        </article>
      </v-wait>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { HeadingText, LatestArticlePlaceholder } from '../common'

export default {
  computed: {
    ...mapGetters({
      articles: 'article/articles',
    }),
  },
  components: {
    HeadingText,
    LatestArticlePlaceholder,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.latest {
  .article {
    display: flex;
    align-items: stretch;
    flex: 1 1 auto;
    width: 100%;

    .text-dec {
      .title {
        font-family: $ale !important;
        font-size: 1.3rem;
        font-weight: 700;
        color: $n800;
        letter-spacing: 0.5px;
      }
      .description {
        color: $n100;
        font-size: 1rem;
      }
      :hover {
        text-decoration: none !important;
      }
    }
    .article-image {
      min-width: 152px;
      @include border;

      .placeholder-image {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $n10;
      }
    }
    .background-cover {
      background-position: 50% 50% !important;
      background-position: center !important;
      background-origin: border-box !important;
      background-size: cover !important;
    }
  }
  a {
    color: rgba(0, 0, 0, 0.84) !important;
    text-decoration: none !important;
    :hover {
      color: rgba(0, 0, 0, 0.84) !important;
      text-decoration: none !important;
    }
  }
}
</style>
