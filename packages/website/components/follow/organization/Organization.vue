<template>
  <no-ssr>
    <b-row class="mt-4">
      <b-col md="8" class="following-organ">
        <div class="title d-flex mb-3">
          <div class="text">Danh sách tổ chức đang theo dõi</div>
        </div>
        <card-organization
          v-for="(item,id) in followingOrgan"
          :key="id"
          :url="item.url"
          :name="item.name"
          :description="item.description"
        />
      </b-col>
      <b-col md="4" class="suggest-follow">
        <div class="title d-flex mb-3">
          <div class="text">Gợi ý cho bạn</div>
          <div class="text">Xem thêm</div>
        </div>
        <suggest-organization
          v-for="(item,id) in suggestFollow"
          :key="id"
          :url="item.url"
          :name="item.name"
        />
      </b-col>
    </b-row>
  </no-ssr>
</template>

<script>
import CardOrganization from './CardOrganization'
import SuggestOrganization from './SuggestOrganization'
export default {
  components: {
    CardOrganization,
    SuggestOrganization,
  },
  data() {
    return {
      followingOrgan: [
        {
          url: 'https://avatars3.githubusercontent.com/in/254?s=180&v=4',
          name: 'Akali BO3',
          description:
            'Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/23234122?s=88&v=4',
          name: 'Garen BO3',
          description:
            'Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/21234152?s=88&v=4',
          name: 'Ryze BO3',
          description:
            'Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/21234802?s=88&v=4',
          name: 'Teemo BO3',
          description:
            'Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.',
        },
      ],
      suggestFollow: [
        {
          url: 'https://avatars2.githubusercontent.com/u/21234155?s=88&v=4',
          name: 'Yasuo BO3',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/21234332?s=88&v=4',
          name: 'Javan BO3',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/21211122?s=88&v=4',
          name: 'Rengar BO3',
        },
        {
          url: 'https://avatars2.githubusercontent.com/u/21299122?s=88&v=4',
          name: 'Ashe BO3',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.following-organ {
  .title {
    .text {
      font-size: 18px;
      color: #505e77;
      font-weight: 500;
    }
  }
}
.suggest-follow {
  .title {
    justify-content: space-between;
    flex-direction: row;
    .text {
      font-size: 15px;
      color: #505e77;
      font-weight: 500;
    }
  }
}
</style>
