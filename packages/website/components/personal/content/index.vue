<template>
  <div class="container">
    <va-row :gutter="gutter">
      <va-column :xs="12" :sm="6" :md="4" v-for="(article, index) in articles" :key="index">
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
    </va-row>
  </div>
</template>

<script>
import Article from '../article'
export default {
  components: {
    Article
  },
  data() {
    return {
      articles: [
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
        {
          image: 'https://bulma.io/images/placeholders/640x360.png',
          category: 'Quan điểm - tranh luận',
          title: 'Có mắt như mù',
          date: '6 tháng 7',
          time: '17 phút đọc',
          description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
          clap: 3556,
          comment: 125
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
