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
      <no-ssr>
        <view-comment
          v-for="comment in dataComment"
          :key="comment.id"
          :userInfo="comment.user"
          :parentID="comment.id"
          :articleID="comment.article.id"
          :content="comment.content"
          :commentChild="comment.childs"
          :time="comment.publishedAt"
        />
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
      dataComment: [],
    }
  },
  components: {
    ViewComment,
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      arrChildComment: 'comment/comment',
      arrChildComments: 'comment/dataComment',
      count: 'comment/commentCount',
    }),
  },
  mounted() {
    this.dataComment = this.arrChildComment
  },
  methods: {
    sendComment() {
      const data = {
        article_id: this.articleID,
        content: this.commentInput,
      }
      this.commentInput = ''
      if (this.user) {
        this.$store.dispatch('comment/create', data).then(() => {
          let arr = this.dataComment
          this.$store.dispatch('comment/count', this.count + 1)
          this.dataComment = [this.arrChildComments, ...arr]
        })
      } else {
        this.$router.push('/dang-nhap')
      }
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
