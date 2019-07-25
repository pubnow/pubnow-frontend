<template>
  <div>
    <div class="d-flex wrap-all mt-3">
      <div class="wrap-content">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img
              src="https://avatars2.githubusercontent.com/u/81233322?s=88&v=4"
              alt="avatar"
              class="avatar mr-2"
            />
            <div>
              <nuxt-link to="#" class="fullname">Nguyễn Phú Trọng</nuxt-link>
              <p class="mt-0 small">2 phút trước</p>
            </div>
          </div>
          <div class="d-flex align-items-center report">
            <va-button class="ml-2 button" type="subtle-link" size="xs">Lưu</va-button>
            <va-button class="ml-2 button" type="subtle-link" size="xs">Báo cáo</va-button>
            <va-button class="ml-2 button" type="subtle-link" size="xs">Thu gọn bình luận</va-button>
          </div>
        </div>
        <p>{{ content }}</p>
        <div @click="replyComment" class="reply">Trả lời</div>
        <div class="d-flex align-items-center" v-if="reply">
          <input class="comment mx-3" v-model="commentInput" />
          <va-button type="subtle-link" class="font-weight-bold" @click="sendComment">Gửi</va-button>
        </div>
      </div>
    </div>
    <child
      v-for="(child, index) in childComment"
      :key="index"
      class="ml-5"
      :userComment="child.user_id"
      :parentID="child.id"
      :articleID="articleID"
      :content="child.content"
      :commentChild="child.childs"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'child',
  props: {
    userComment: {
      type: String,
      required: true,
    },
    parentID: {
      type: String,
    },
    articleID: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    commentChild: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  data() {
    return {
      reply: false,
      commentInput: '',
      childComment: [],
    }
  },
  mounted() {
    let arr = this.commentChild
    this.childComment = [...arr.slice().reverse()]
  },
  methods: {
    replyComment() {
      this.reply = !this.reply
    },
    sendComment() {
      const data = {
        article_id: this.articleID,
        content: this.commentInput,
        parent_id: this.parentID,
      }
      const fakeData = {
        id: this.user.id,
        content: this.commentInput,
        user_id: this.user.id,
        article_id: this.articleID,
        childs: [],
      }
      this.reply = !this.reply
      this.childComment = [fakeData, ...this.childComment]
      this.$store.dispatch('comment/write', data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-image: 40px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}

.reply {
  color: #0052cc;
  width: 50px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.comment {
  width: 100%;
}

.wrap-content {
  width: 100%;
}

.report {
  display: none !important;
  &:hover {
    display: flex !important;
  }
  .button {
    height: $unit;
    cursor: pointer;
    &:hover {
      color: #0052cc;
    }
  }
}

.wrap-all {
  padding-left: $unit / 2;
  border-left: 1px solid $gray85;
}
</style>

