<template>
  <no-ssr>
    <b-row class="mt-4">
      <b-col md="8" class="following-author">
        <div class="title d-flex mb-3">
          <div class="text">Danh sách những người đang theo dõi</div>
        </div>
        <card-author
          v-for="(item,id) in followingUser"
          :key="id"
          :url="item.avatar"
          :name="item.name"
          :description="item.bio"
        />
      </b-col>
      <b-col md="4" class="suggest-follow">
        <div class="title d-flex mb-3">
          <div class="text">Gợi ý cho bạn</div>
          <div class="text">Xem thêm</div>
        </div>
        <suggest-author
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
import { mapGetters, mapActions } from 'vuex'
import CardAuthor from './CardAuthor'
import SuggestAuthor from './SuggestAuthor'

export default {
  components: {
    CardAuthor,
    SuggestAuthor,
  },
  computed: {
    ...mapGetters({
      followingUser: 'following/followingUser',
    }),
  },
  async mounted() {
    await this.$store.dispatch(
      'following/getFollowingUser',
      this.$store.getters['auth/user'].username,
    )
  },
  data() {
    return {
      suggestFollow: [
        {
          url:
            'https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/e22f6990295011e7a999e7b5135b7d88.jpg',
          name: 'Yasuo BO3',
        },
        {
          url:
            'https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/e22f6990295011e7a999e7b5135b7d88.jpg',
          name: 'Javan BO3',
        },
        {
          url:
            'https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/e22f6990295011e7a999e7b5135b7d88.jpg',
          name: 'Rengar BO3',
        },
        {
          url:
            'https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/e22f6990295011e7a999e7b5135b7d88.jpg',
          name: 'Ashe BO3',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.following-author {
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
