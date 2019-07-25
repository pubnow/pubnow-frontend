<template>
  <b-container>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
        <author :author="article.author" :time="article.createdAt" :category="article.category" />
        <navbar :clap="article.claps" :commentNum="commentNum" :articleID="article.id" />
        <h1 class="title my-4">{{ article.title }}</h1>
        <div class="content-article" v-html="article.content"></div>
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
          <comment :comments="article.comments" :commentNum="commentNum" :articleID="article.id" />
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
    }),
  },
  mounted() {
    this.numComment(this.article.comments)
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
</style>


<style lang="scss">
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.content-article {
  font-size: 18px;
  * {
    font-family: $noto;
  }
  p {
    line-height: $unit * 1.6;
  }
  img {
    max-width: 100%;
  }
}
</style>

