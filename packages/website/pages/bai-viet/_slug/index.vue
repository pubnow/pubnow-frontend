<template>
  <b-container>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
        <v-wait for="article.show" transition="fade" mode="out-in">
          <template slot="waiting">
            <ArticleContentPlaceholder />
          </template>
          <div v-if="article">
            <author
              :author="article.author"
              :time="article.createdAt"
              :category="article.category"
              :slug="article.slug"
            />
            <navbar
              :clap="article.claps"
              :clapped="article.clapped"
              :bookmarked="article.bookmarked"
              :commentNum="count"
              :slug="article.slug"
            />
            <h1 class="title my-4">{{ article.title }}</h1>
            <div class="content-article fr-element fr-view" v-html="article.content"></div>
            <no-ssr>
              <nuxt-link v-for="tag in article.tags" :key="tag.id" :to="`/tag/${tag.slug}`">
                <va-button class="ml-2 button mt-2" size="xs">{{ tag.name }}</va-button>
              </nuxt-link>

              <div class="d-flex justify-content-end my-2">{{ article.seen_count }} lượt xem</div>
              <hr />
              <description
                :fullname="article.author.name"
                :username="article.author.username"
                :userID="article.author.id"
                :avatar="article.author.avatar"
                :category="article.category.name"
                :categorySlug="article.category.slug"
                :description="article.category.description"
                :followUser="article.author.following"
                :followCategory="article.category.following"
              />
              <hr />
            </no-ssr>
          </div>
        </v-wait>
      </b-col>
    </b-row>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
        <no-ssr>
          <v-wait for="loading comment">
            <template slot="waiting" transition="fade" mode="out-in">
              <CommentPlaceholder />
            </template>
            <comment
              v-if="article"
              :comments="comment"
              :commentNum="count"
              :articleID="article.id"
            />
          </v-wait>
        </no-ssr>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'
import {
  ArticleContentPlaceholder,
  CommentPlaceholder,
} from '@/components/common'
import { Author, Navbar, Comment, Description } from '@/components/article'
import SimpleArticleEditor from '@/components/editor/SimpleArticle'

export default {
  components: {
    Author,
    Navbar,
    Comment,
    Description,
    SimpleArticleEditor,
    ArticleContentPlaceholder,
    CommentPlaceholder,
  },
  data() {
    return {
      ssr: false,
    }
  },
  computed: {
    ...mapGetters({
      article: 'article/article',
      comment: 'comment/comment',
      user: 'auth/user',
      count: 'comment/commentCount',
    }),
  },
  async mounted() {
    const { slug } = this.$route.params
    if (!this.ssr) {
      this.$store.dispatch('article/show', slug)
    }
    this.$wait.start('loading comment')
    await this.$store.dispatch('comment/show', slug)
    this.$wait.end('loading comment')
    this.numComment(this.comment)
    this.$store.dispatch('comment/count', this.commentNum)
  },
  asyncData() {
    if (process.server) {
      return {
        ssr: true,
      }
    }
    return {
      ssr: false,
    }
  },
  fetch({ store, params: { slug } }) {
    if (process.server) {
      return store.dispatch('article/show', slug)
    }
  },
  head() {
    return {
      title: (this.article && this.article.title) || 'Bài viết',
      meta: [
        {
          property: 'og:title',
          content: (this.article && this.article.title) || 'Bài viết',
        },
        {
          property: 'og:description',
          content: (this.article && this.article.excerpt) || 'Tóm tắt bài viết',
        },
        {
          property: 'og:image',
          content:
            (this.article && this.article.thumbnail) ||
            'https://i.imgur.com/nUSXOIF.png',
        },
        {
          property: 'og:type',
          content: 'article',
        },
      ],
    }
  },
  data() {
    return {
      commentNum: 0,
    }
  },
  methods: {
    numComment(data) {
      data.forEach(element => {
        this.commentNum += 1
        if (element.childs.length > 0) {
          this.numComment(element.childs)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';

.title {
  font-family: $ale;
  font-size: 30px;
  font-weight: 700;
}

.content-article {
  color: #111;
  div {
    font-family: $noto;
  }
}
</style>
