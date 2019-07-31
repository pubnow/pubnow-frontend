<template>
  <div class="latest">
    <div class="my-2">
      <article class="article mt-3" v-for="dataBookmark in bookmarks" :key="dataBookmark.id">
        <div>
          <div class="article-post flex-grow-1">
            <div class="text-dec">
              <nuxt-link
                :to="`/bai-viet/${dataBookmark.article.slug}`"
                class="overflow-hidden w-100"
              >
                <h2 class="title">{{ dataBookmark.article.title }}</h2>
                <div class="mt-1 description">{{dataBookmark.article.excerpt}}</div>
              </nuxt-link>
            </div>
            <div class="mt-2">
              <nuxt-link
                :to="`/nguoi-dung/${dataBookmark.article.author.username}`"
              >{{ dataBookmark.article.author.name }}</nuxt-link>
              <span class="ml-1">tại</span>
              <nuxt-link
                :to="`/danh-muc/${dataBookmark.article.category.slug}`"
              >{{ dataBookmark.article.category.name }}</nuxt-link>
              <div class="mt-1">
                <span class="d-inline-block">{{ dataBookmark.article.updatedAt | formatDate }}</span>
                <span>.</span>
                <span>{{ dataBookmark.article.content | timeRead }}</span>
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
              v-bind:style="{ backgroundImage: `url(${dataBookmark.article.thumbnail})` }"
            ></a>
          </div>
        </div>
        <no-ssr>
          <va-button
            class="mt-3 btn-remove px-3"
            type="primary"
            @click="removeBookmark(dataBookmark.article.id)"
          >
            <i class="far fa-trash-alt mr-2"></i>
            Xóa
          </va-button>
        </no-ssr>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      bookmarks: [],
    }
  },
  computed: {
    ...mapGetters({
      listBookmark: 'bookmark/listBookmark',
    }),
  },
  mounted() {
    this.bookmarks = this.listBookmark
  },
  methods: {
    removeBookmark(id) {
      const index = this.bookmarks.findIndex(item => item.article.id === id)
      let arr = [...this.bookmarks]
      arr.splice(index, 1)
      this.bookmarks = [...arr]
      this.$store.dispatch('bookmark/delete', id)
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';

.latest {
  .article {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    background: white;
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
    color: rgba(0, 0, 0, 0.85) !important;
    text-decoration: none !important;
  }
  .btn-remove {
    color: #fff !important;
    cursor: pointer;
  }
}
</style>
