<template>
  <div class="container">
    <va-row class="mt-4">
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
        <div class="infor-auth text-center">
          <p class="text-body font-weight-bold mt-0">About me</p>
          <img
            :src="user.avatar"
            alt="avatar"
            class="avatar mt-3"
          >
          <p class="text-dark">{{ user.fullname }}</p>
          <p class="mt-0 small">@{{ user.username }}</p>
          <p>{{ user.bio }}</p>
          <hr class="bg-dark">
          <div class="network d-flex justify-content-between mx-4">
            <div v-for="(item, index) in user.network" :key="index">
              <p class="number">{{ item.number }}</p>
              <p class="small">{{ item.name }}</p>
            </div>
          </div>
          <va-button type="subtle mt-4">Theo dõi</va-button>
        </div>
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
      user: {
        avatar: 'https://bulma.io/images/placeholders/256x256.png',
        fullname: 'Phatto Phạm',
        username: 'thaycacac',
        bio: 'Hãy sống để có thể chết một lần',
        network: [
          { name: 'followers', number: '6611' },
          { name: 'following', number: 12 },
          { name: 'spiders', number: 8404 }
        ]
      },
      article: {
        image: 'https://bulma.io/images/placeholders/720x240.png',
        category: 'Quan điểm - tranh luận',
        title: 'Có mắt như mù',
        date: '6 tháng 7',
        time: '17 phút đọc',
        description: 'Tựa đề bài viết này mình viết theo đúng nghĩa đen, tức con người ta có mắt nhưng người ta không thấy thứ ở trước mặt họ....',
        clap: 3556,
        comment: 125
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 60px;

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
}

.infor-auth {
  @include box-shadow;
  @include radius-sm;
  background: $gray94;
  border: 1px solid $gray85;
  padding: $unit;
  .avatar {
    width: $size-image;
    height: $size-image;
    border-radius: $size-image / 2;
  }
  .number {
    color: $primary;
    font-size: $unit * 1.5;
  }
}
</style>
