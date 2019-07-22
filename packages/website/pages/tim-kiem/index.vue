<template>
  <div class="container mb-4 py-5">
    <p class="text-search">
      Kết quả tìm kiếm của
      <b>"{{ textSearch }}"</b>
    </p>
    <va-tabs @changed="onTabChange" :cache-lifetime="5" class="mt-4">
      <va-tab name="Bài đăng">
        <articles
          v-for="(article, index) in articles"
          :key="index"
          :avatar="article.avatar"
          :textSearch="textSearch"
          :fullname="article.fullname"
          :category="article.category"
          :date="article.date"
          :time="article.time"
          :title="article.title"
          :description="article.description"
          :image="article.image"
          :clap="article.clap"
          :comment="article.comment"
        />
        <b-pagination
          v-model="currentPageArticle"
          :total-rows="rowsArticle"
          size="sm"
          class="mt-4 justify-content-center"
        />
      </va-tab>
      <va-tab name="Người dùng">
        <div class="demoTabContent">
          <users :users="users" />
          <b-pagination
            v-model="currentPageUser"
            :total-rows="rowsUser"
            size="sm"
            class="mt-4 justify-content-center"
          />
        </div>
      </va-tab>
      <va-tab name="Tags">
        <div class="demoTabContent">
          <tags
            v-for="(article, index) in articles"
            :key="index"
            :avatar="article.avatar"
            :textSearch="textSearch"
            :fullname="article.fullname"
            :category="article.category"
            :date="article.date"
            :time="article.time"
            :title="article.title"
            :description="article.description"
            :image="article.image"
            :clap="article.clap"
            :comment="article.comment"
            :tags="article.tags"
          />
          <b-pagination
            v-model="currentPageTag"
            :total-rows="rowsTag"
            size="sm"
            class="mt-4 justify-content-center"
          />
        </div>
      </va-tab>
    </va-tabs>
  </div>
</template>

<script>
import { Articles, Users, Tags } from '@/components/search'
export default {
  data() {
    return {
      textSearch: 'Khóc trong mưa',
      rowsArticle: 100,
      currentPageArticle: 1,
      articles: [
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          fullname: 'Phạm Ngọc Hòa',
          category: 'Quan điểm - Chính trị',
          date: '21 tháng 10',
          time: '14 phút',
          title: 'Xe bus trong mưa',
          description:
            '          Ngoài phố trời đang mưa, những dáng người chạy vội vã, một vài chiếc xe dừng bên lề để chủ nhân của chúng khoác thêm một lớp áo, cả những...',
          image: 'https://bulma.io/images/placeholders/720x240.png',
          clap: 125,
          comment: 14,
          tags: ['khóc', 'cộng hòa', 'xã hội', 'chủ nghĩa'],
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          fullname: 'Đỗ Quang Hiệp',
          category: 'Quan điểm - Chính trị',
          date: '21 tháng 10',
          time: '14 phút',
          title: 'Khóc cho người mất hay khóc cho mình',
          description:
            '          Ngoài phố trời đang mưa, những dáng người chạy vội vã, một vài chiếc xe dừng bên lề để chủ nhân của chúng khoác thêm một lớp áo, cả những...',
          image: 'https://bulma.io/images/placeholders/720x240.png',
          clap: 125,
          comment: 14,
          tags: ['buồn', 'xã hội', 'mưa', 'khóc'],
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          fullname: 'Nguyễn Đắc Sang',
          category: 'Quan điểm - Chính trị',
          date: '21 tháng 10',
          time: '14 phút',
          title: 'Mình muốn khóc quá',
          description:
            '          Ngoài phố trời đang mưa, những dáng người chạy vội vã, một vài chiếc xe dừng bên lề để chủ nhân của chúng khoác thêm một lớp áo, cả những...',
          image: 'https://bulma.io/images/placeholders/720x240.png',
          clap: 125,
          comment: 14,
          tags: ['mrsiro', 'khóc'],
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          fullname: 'Phạm Ngọc Hòa',
          category: 'Quan điểm - Chính trị',
          date: '21 tháng 10',
          time: '14 phút',
          title: 'Ngồi khóc trên cây',
          description:
            '          Ngoài phố trời đang mưa, những dáng người chạy vội vã, một vài chiếc xe dừng bên lề để chủ nhân của chúng khoác thêm một lớp áo, cả những...',
          image: 'https://bulma.io/images/placeholders/720x240.png',
          clap: 125,
          comment: 14,
          tags: [
            'khóc',
            'cộng hòa',
            'xã hội',
            'chủ nghĩa',
            'độc lập',
            'hạnh phúc',
          ],
        },
        {
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          fullname: 'Phạm Ngọc Hòa',
          category: 'Quan điểm - Chính trị',
          date: '21 tháng 10',
          time: '14 phút',
          title: 'Đau thì nên khóc',
          description:
            '          Ngoài phố trời đang mưa, những dáng người chạy vội vã, một vài chiếc xe dừng bên lề để chủ nhân của chúng khoác thêm một lớp áo, cả những...',
          image: 'https://bulma.io/images/placeholders/720x240.png',
          clap: 125,
          comment: 14,
          tags: [
            'khóc',
            'cộng hòa',
            'xã hội',
            'chủ nghĩa',
            'độc lập',
            'hạnh phúc',
          ],
        },
      ],
      rowsUser: 100,
      currentPageUser: 1,
      users: [
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Nguyễn Đắc Sang',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Nguyễn Phương Hồng Thủy',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Đỗ Quang Hiệp',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
        {
          fullname: 'Phạm Ngọc Hòa',
          avatar: 'https://bulma.io/images/placeholders/128x128.png',
          follower: 125,
        },
      ],
      rowsTag: 100,
      currentPageTag: 1,
    }
  },
  components: {
    Articles,
    Users,
    Tags,
  },
  methods: {
    onTabChange() {
      console.log('Tab changed')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.container {
  max-width: 750px;
  .text-search {
    font-size: $unit;
  }
}
</style>
