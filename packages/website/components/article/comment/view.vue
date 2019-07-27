<template>
  <div>
    <div class="d-flex wrap-all pt-3">
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
          <div class="d-flex align-items-center report" v-if="userID !== uID">
            <va-button class="ml-2 button" type="subtle-link" size="xs">Lưu</va-button>
            <va-button class="ml-2 button" type="subtle-link" size="xs">Báo cáo</va-button>
            <va-button
              class="ml-2 button"
              type="subtle-link"
              size="xs"
              v-if="childComment.length > 0"
              @click="showComment"
            >{{show ? 'Thu gọn bình luận' : 'Hiển thị bình luận'}}</va-button>
          </div>
          <div class="d-flex align-items-center report" v-else>
            <div v-if="!deleted">
              <va-button
                class="ml-2 button"
                type="subtle-link"
                size="xs"
                @click="editComment(edited ? tempEdit : content)"
              >Sửa</va-button>
              <va-button
                class="ml-2 button"
                type="subtle-link"
                size="xs"
                @click="deleteComment(parentID)"
              >Xóa</va-button>
            </div>
          </div>
        </div>
        <!-- reply comment -->
        <div v-if="type === 'Gửi'">
          <div>
            <div v-if="!deleted">
              <p>{{ edited ? tempEdit : content }}</p>
              <div @click="replyComment" class="reply">Trả lời</div>
            </div>
            <p v-else>Đã xóa</p>
          </div>
          <div class="d-flex align-items-center my-1" v-if="reply">
            <input class="comment mx-2" autofocus v-model="replyCommentInput" />
            <va-button
              type="primary"
              size="xs"
              class="font-weight-bold"
              @click="sendReplyComment"
            >Gửi</va-button>
          </div>
        </div>
        <!-- edit comment -->
        <div v-else>
          <div v-if="!updateComment">
            <div v-if="!deleted">
              <p>{{ editCommentInput }}</p>
              <div @click="replyComment" class="reply">Trả lời</div>
            </div>
            <p v-else>Đã xóa</p>
          </div>
          <div class="d-flex align-items-center my-1" v-if="edit">
            <input class="comment mx-2" autofocus v-model="editCommentInput" />
            <va-button
              type="primary"
              size="xs"
              class="font-weight-bold"
              @click="sendEditComment(parentID)"
            >Sửa</va-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="show">
      <child
        v-for="(child, index) in childComment"
        :key="index"
        class="ml-5"
        :userID="child.user_id"
        :parentID="child.id"
        :articleID="articleID"
        :content="child.content"
        :commentChild="child.childs"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'child',
  props: {
    userID: {
      type: String,
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
      arrChildComments: 'comment/dataComment',
    }),
  },
  data() {
    return {
      reply: false,
      edit: false,
      replyCommentInput: '',
      editCommentInput: '',
      tempEdit: '',
      childComment: [],
      type: 'Gửi',
      show: true,
      deleted: false,
      updateComment: false,
      edited: false,
      uID: -1,
    }
  },
  mounted() {
    let arr = this.commentChild
    this.editCommentInput = this.content
    if (this.user) {
      this.uID = this.user.id
    }
    this.childComment = [...arr.slice().reverse()]
  },
  methods: {
    replyComment() {
      this.reply = !this.reply
      this.replyCommentInput = ''
      this.type = 'Gửi'
    },
    showComment() {
      this.show = !this.show
    },
    editComment(value) {
      this.edit = !this.edit
      this.type = 'Sửa'
      this.editCommentInput = value
      this.tempEdit = value
      this.updateComment = !this.updateComment
    },
    deleteComment(id) {
      this.deleted = true
      this.$store.dispatch('comment/delete', id)
    },
    sendReplyComment() {
      this.reply = !this.reply
      const data = {
        article_id: this.articleID,
        content: this.replyCommentInput,
        parent_id: this.parentID,
      }
      this.$store.dispatch('comment/create', data)
    },
    sendEditComment(id) {
      this.edit = !this.edit
      const updateData = {
        id,
        content: this.editCommentInput,
      }
      console.log('sendEdit', this.editCommentInput)
      this.tempEdit = this.editCommentInput
      this.edited = !this.edited
      this.updateComment = false
      this.$store.dispatch('comment/update', updateData)
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
  background-color: transparent;
  display: block !important;
  &:hover {
    .button {
      height: $unit;
      cursor: pointer;
      &:hover {
        background-color: #f3f4f6;
        color: #0052cc;
      }
    }
  }
}

.wrap-all {
  padding-left: $unit / 2;
  border-left: 1px solid $gray85;
}
</style>

