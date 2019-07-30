<template>
  <b-container>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
        <author :author="article.author" :time="article.createdAt" :category="article.category" />
        <navbar :clap="article.claps" :commentNum="commentNum" :articleID="article.id" />
        <h1 class="title my-4">{{ article.title }}</h1>
        <div class="content-article fr-element fr-view" v-html="article.content"></div>
        <no-ssr>
          <nuxt-link v-for="tag in article.tags" :key="tag.id" :to="`/tag/${tag.slug}`">
            <va-button class="ml-2 button mt-2" size="xs">{{ tag.name }}</va-button>
          </nuxt-link>

          <div class="d-flex justify-content-end">{{ article.seen_count }} lượt xem</div>
          <hr />
          <description
            :fullname="article.author.name"
            :username="article.author.username"
            :avatar="article.author.avatar"
            :category="article.category.name"
            :description="article.category.description"
          />
          <hr />
          <comment :comments="comment" :commentNum="commentNum" :articleID="article.id" />
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
    }),
  },
  mounted() {
    this.numComment(this.comment)
  },
  fetch({ store, params: { slug } }) {
    return Promise.all([
      store.dispatch('article/show', slug),
      store.dispatch('comment/show', slug),
    ])
  },
  head() {
    return {
      title: this.article.title || 'Bài viết',
    }
  },
  data() {
    return {
      tags: ['việt nam', 'cộng hòa', 'chủ nghĩa'],
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
