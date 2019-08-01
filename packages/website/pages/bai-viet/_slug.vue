<template>
  <b-container>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
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
          :commentNum="commentNum"
          :articleID="article.id"
        />
        <h1 class="title my-4">{{ article.title }}</h1>
        <div class="content-article fr-element fr-view" v-html="article.content"></div>
        <no-ssr>
          <nuxt-link v-for="tag in article.tags" :key="tag.id" :to="`/tag/${tag.slug}`">
            <va-button class="ml-2 button mt-2" size="xs">{{ tag.name }}</va-button>
          </nuxt-link>

          <div class="d-flex justify-content-end my-2">{{ article.seen_count }} lượt xem</div>
          <div v-if="user">
            <hr />
            <description
              :fullname="article.author.name"
              :username="article.author.username"
              :avatar="article.author.avatar"
              :category="article.category.name"
              :categorySlug="article.category.slug"
              :description="article.category.description"
              :followUser="article.author.following"
              :followCategory="article.category.following"
            />
          </div>
          <hr />
          <v-wait for="loading comment">
            <template slot="waiting">
              <div>Loading the comment...</div>
            </template>
            <comment :comments="comment" :commentNum="commentNum" :articleID="article.id" />
          </v-wait>
        </no-ssr>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'
import { Author, Navbar, Comment, Description } from '@/components/article'
import SimpleArticleEditor from '@/components/editor/SimpleArticle'

export default {
  components: {
    Author,
    Navbar,
    Comment,
    Description,
    SimpleArticleEditor,
  },
  computed: {
    ...mapGetters({
      article: 'article/article',
      comment: 'comment/comment',
      user: 'auth/user',
    }),
  },
  async mounted() {
    this.$wait.start('loading comment')
    await this.$store.dispatch('comment/show', this.article.slug)
    this.$wait.end('loading comment')
    this.numComment(this.comment)
  },
  fetch({ store, params: { slug } }) {
    return store.dispatch('article/show', slug)
  },
  head() {
    return {
      title: this.article.title || 'Bài viết',
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
