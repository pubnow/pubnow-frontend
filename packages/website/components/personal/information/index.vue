<template>
  <div class="container">
    <va-row :gutter="30" class="mt-4">
      <va-column :xs="12" :sm="6" :md="8">
        <Article
          :image="article.image"
          :category="article.category"
          :title="article.title"
          :date="article.date"
          :time="article.time"
          :description="article.description"
          :clap="article.clap"
          :comment="article.comment"
        />
      </va-column>
      <va-column :xs="12" :sm="6" :md="4">
        <author />
      </va-column>
    </va-row>
  </div>
</template>

<script>
import Article from '../article'
import Author from './author'
export default {
  components: {
    Article,
    Author,
  },
  data() {
    return {
      article: {
        image: 'https://bulma.io/images/placeholders/720x240.png',
        category: 'Quan điểm - tranh luận',
        title: 'Có mắt như mù',
        date: '6 tháng 7',
        time: '17 phút đọc',
        description:
          'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
        clap: 3556,
        comment: 125,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
}
</style>
