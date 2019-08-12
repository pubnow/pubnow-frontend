<template>
  <no-ssr>
    <va-affix :offset="70">
      <div class="right">
        <aside class="uiScale name-dec">
          <HeadingText>Phổ biến tại {{org.name}}</HeadingText>
          <div class="mt-4">
            <v-wait for="org.popular" transition="fade" mode="out-in">
              <template slot="waiting">
                <PopularArticlePlaceholder v-for="i in 5" :key="i" />
              </template>
              <ul class="list">
                <li class="d-flex mb-3 item" v-for="(article, index) in articles" :key="index">
                  <div class="counter">0{{index+1}}</div>
                  <div class="flex-grow-1 ml-2">
                    <div>
                      <nuxt-link
                        :to="`/bai-viet/${article.slug}`"
                        class="overflow-hidden flex-grow-0 w-100"
                      >
                        <h2 class="title mb-0">{{ article.title }}</h2>
                      </nuxt-link>
                    </div>
                    <div class="mt-1 colorText">
                      <nuxt-link
                        :to="`/nguoi-dung/${article.author.username}`"
                        class="author mr-1"
                      >{{ article.author.name }}</nuxt-link>tại
                      <nuxt-link
                        :to="`/danh-muc/${article.category.slug}`"
                        class="category"
                      >{{ article.category.name }}</nuxt-link>
                      <div>
                        <span>{{ article.updatedAt | formatDate }}</span>
                        <span class="middot"></span>
                        <span>{{ article.reading_time | timeRead }}</span>
                        <span class="pl-1">
                          <i class="fas fa-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </v-wait>
          </div>
        </aside>
      </div>
    </va-affix>
  </no-ssr>
</template>

<script>
import { HeadingText, PopularArticlePlaceholder } from '@/components/common'
import { mapGetters } from 'vuex'

export default {
  components: {
    HeadingText,
    PopularArticlePlaceholder,
  },
  computed: {
    ...mapGetters({
      articles: 'organization/popular',
      org: 'organization/organization',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.right {
  .list {
    padding-left: 0;
    .item {
      .counter {
        font-size: 34px;
        color: $n50;
        margin-top: $unit / 3;
      }
      a {
        .title {
          font-family: $ale;
          font-weight: 700;
          color: $n800;
        }

        &:hover {
          text-decoration: none;
        }
      }
      .author,
      .category {
        color: rgba(0, 0, 0, 0.84) !important;
        text-decoration: none !important;
      }
    }
  }
}
</style>
