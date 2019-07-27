<template>
  <div class="mb-5 mt-2">
    <p class="mb-2">{{commentNum}} Bình luận</p>
    <div class="wrap-comment text-dark">
      <!-- Comment -->
      <div class="d-flex align-items-center">
        <img :src="require('@/assets/images/icons/comment.svg')" alt="clap icon" class="icon" />
        <input
          class="comment mx-3"
          v-model="commentInput"
          placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"
        />
        <i class="far fa-smile smile"></i>
        <va-button class="text-uppercase font-weight-bold ml-2" @click="sendComment">Gửi</va-button>
      </div>
      <hr class="my-4" />
      <!-- Tab -->
      <div class="d-flex justify-content-end">
        <nuxt-link to="#" class="ml-4 tab active">Mới nhất</nuxt-link>
      </div>
      <no-ssr>
        <div v-for="(comment, index) in getDataComment" :key="index">
          <view-comment
            :userID="comment.user_id"
            :parentID="comment.id"
            :articleID="articleID"
            :content="comment.content"
            :commentChild="comment.childs"
          />
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import ViewComment from './view'
import { mapGetters } from 'vuex'
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
    articleID: {
      type: String,
      required: true,
    },
    commentNum: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      commentInput: '',
    }
  },
  mounted() {
    this.$store.dispatch('comment/setDataComment', this.comments)
  },
  components: {
    ViewComment,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      arrChildComment: 'comment/dataComment',
    }),
    getDataComment() {
      let arr = this.arrChildComment
      return [...arr.slice().reverse()]
    },
  },
  methods: {
    sendComment() {
      const data = {
        article_id: this.articleID,
        content: this.commentInput,
      }
      this.commentInput = ''
      this.$store.dispatch('comment/create', data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-icon: 20px;

.wrap-comment {
  @include box-shadow;
  padding: $unit * 2;
  .icon {
    width: $size-icon;
    height: $size-icon;
  }
  .comment {
    width: 100%;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  .smile {
    font-size: $unit * 0.9;
  }

  .tab {
    color: $instagram;
  }

  .active {
    color: $primary;
  }
}
</style>
