<template>
  <b-container>
    <b-row>
      <b-col :sm="8" :offset-sm="2">
        <Author
          :author="article.author"
          :time="article.createdAt"
          :category="article.category"
          :slug="article.slug"
        />
        <Navbar :clap="clap" :comment="comment" />
        <h1 class="title my-4">{{ article.title }}</h1>
        <div class="content-article fr-element fr-view" v-html="article.content"></div>
        <no-ssr>
          <nuxt-link v-for="tag in article.tags" :key="tag.id" :to="`/tag/${tag.slug}`">
            <va-button class="ml-2 button mt-2" size="xs">{{ tag.name }}</va-button>
          </nuxt-link>

          <div class="d-flex justify-content-end">{{ article.see }} lượt xem</div>
          <hr />
          <Description
            :fullname="article.author.name"
            :username="article.author.username"
            :avatar="article.author.avatar"
            :category="article.category.name"
            :description="article.category.description"
          />
          <hr />
          <comment :comments="listComment" />
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
  async fetch({ store, params: { slug }, error }) {
    const article = await store.dispatch('article/show', slug)
    if (!article) {
      error({
        statusCode: 404,
        message: 'Bài viết không tồn tài',
      })
    }
  },
  head() {
    return {
      title: this.article.title || 'Bài viết',
    }
  },
  data() {
    return {
      clap: 125,
      comment: 15,
      view: 1256,
      tags: ['việt nam', 'cộng hòa', 'chủ nghĩa'],
      listComment: [
        {
          clap: 128,
          avatar: 'https://bulma.io/images/placeholders/256x256.png',
          fullname: 'Nguyễn Đắc Sang',
          time: 'Đã chỉnh sửa 20 tháng 3 năm 2019',
          content:
            'Khi một chính sách thất bại, thường sẽ có các nguyên nhân lớn sau, chính sách không thực tế: tức ngay từ đầu bản chất của chính sách đã không phù hợp với văn hóa, tình hình kinh tế, chính trị, xã hội ở địa phương, cho nên áp dụng vào không những không cải thiện tình hình mà còn làm tình hình tồi tệ. Lỗi ở đây là ở người thiết kế và làm chính sách.',
          reply: [
            {
              clap: 124,
              avatar: 'https://bulma.io/images/placeholders/256x256.png',
              fullname: 'Phạm Văn Phong',
              time: 'Đã chỉnh sửa 20 tháng 3 năm 2020',
              content:
                'Mình xin nói qua 1 chút vụ Sừng tê, ngà voi. Cites đã chủ trì bán ngà voi tịch thu công khai: 49 tấn năm 1997, 60 tấn năm 2006, và 108 tấn năm 2008. Và hậu quả thì càng ngày càng nghiêm trọng. Nếu bán rẻ đúng là ai cũng sẽ mua được nhưng cũng nhờ vậy các tay buôn sẽ gom được rất nhiều hàng. Nếu bán đắt thì cũng chỉ các tay buôn mua hàng vì chúng đảm bảo được đầu ra sau khi mua.',
              reply: [],
            },
            {
              clap: 12,
              avatar: 'https://bulma.io/images/placeholders/256x256.png',
              fullname: 'Trần Tuấn Mạnh',
              time: 'Đã chỉnh sửa 20 tháng 3 năm 2020',
              content:
                'Cộng hòa xã hội chủ nghĩa việt nam độc lập tự do hạnh phúc',
              reply: [],
            },
          ],
        },
        {
          clap: 200,
          avatar: 'https://bulma.io/images/placeholders/256x256.png',
          fullname: 'Phạm Ngọc Hòa',
          time: 'Đã chỉnh sửa 20 tháng 3 năm 2019',
          content:
            'Mình xin nói qua 1 chút vụ Sừng tê, ngà voi. Cites đã chủ trì bán ngà voi tịch thu công khai: 49 tấn năm 1997, 60 tấn năm 2006, và 108 tấn năm 2008. Và hậu quả thì càng ngày càng nghiêm trọng. Nếu bán rẻ đúng là ai cũng sẽ mua được nhưng cũng nhờ vậy các tay buôn sẽ gom được rất nhiều hàng. Nếu bán đắt thì cũng chỉ các tay buôn mua hàng vì chúng đảm bảo được đầu ra sau khi mua.',
          reply: [],
        },
      ],
    }
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
