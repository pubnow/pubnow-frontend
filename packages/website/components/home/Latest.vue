<template>
  <div class="latest">
    <HeadingText>Mới nhất</HeadingText>
    <div class="mt-4">
      <article class="article mb-5" v-for="(article, index) in articles" :key="article.id">
        <div class="article-post flex-grow-1">
          <div class="text-dec">
            <nuxt-link :to="`/bai-viet/${article.slug}`" class="overflow-hidden w-100">
              <h2 class="title">{{ article.title }}</h2>
            </nuxt-link>
            <a href="#" class="w-100">
              <div class="mt-1 description">{{article.excerpt}}</div>
            </a>
          </div>
          <div class="mt-2">
            <nuxt-link to="/nguoi-dung/dacsang97">{{ article.author.name }}</nuxt-link>
            <span class="ml-1">tại</span>
            <nuxt-link to="/danh-muc/quan-diem-tranh-luan">{{ article.category.name }}</nuxt-link>
            <div class="mt-1">
              <span class="d-inline-block">19 tháng 6</span>
              <span>.</span>
              <span>6 phút đọc</span>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="article-image">
          <a
            href="#"
            class="d-block background-cover w-100 h-100"
            v-bind:style="{ backgroundImage: `url(${article.thumbnail})` }"
          ></a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeadingText from '../common/HeadingText'

export default {
  computed: {
    ...mapGetters({
      articles: 'article/articles',
    }),
  },
  components: {
    HeadingText,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';

.latest {
  .article {
    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 100%;

    .text-dec {
      a {
        .title {
          font-family: $ale !important;
          font-size: 1.3rem;
          font-weight: 700;
          color: $n800;
        }
        .description {
          color: $n100;
          font-weight: 300;
          font-size: 1rem;
        }
        :hover {
          text-decoration: none !important;
        }
      }
    }
    .article-image {
      min-width: 152px;
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
