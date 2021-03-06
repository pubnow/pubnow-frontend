<template>
  <div>
    <div class="d-flex wrap-all pt-3">
      <div class="wrap-content">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img
              :src="userInfo.avatar !== '' ? userInfo.avatar : 'https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/46d51270acd511e780947533eda1440e.jpg'"
              alt="avatar"
              class="avatar mr-2"
            />
            <div>
              <nuxt-link :to="`/nguoi-dung/${userInfo.username}`" class="fullname">{{userInfo.name}}</nuxt-link>
              <p class="mt-0 small">{{time}}</p>
            </div>
          </div>
          <div class="d-flex align-items-center report" v-if="userInfo.id !== uID">
            <va-button
              class="ml-2 button"
              type="subtle-link"
              size="xs"
              @click="handleSaveComment"
            >Lưu</va-button>
            <va-button
              class="ml-2 button"
              type="subtle-link"
              size="xs"
              @click="handleReportComment"
            >Báo cáo</va-button>
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
                @click="editComment(commentText)"
              >Sửa</va-button>
              <va-button class="ml-2 button" type="subtle-link" size="xs" @click="showModal">Xóa</va-button>
            </div>
          </div>
        </div>
        <va-modal title="Xác nhận" :backdrop-clickable="backdropClickable" ref="modal">
          <div slot="body">Bạn có chắc chắn muốn xóa bình luận này không?</div>
          <div slot="footer">
            <div>
              <va-button @click="$refs.modal.close()">Hủy</va-button>
              <va-button type="primary" @click="deleteComment(parentID)">Đồng ý</va-button>
            </div>
          </div>
        </va-modal>
        <!-- reply comment -->
        <div v-if="type === 'Gửi'">
          <div>
            <div v-if="!deleted">
              <p>{{ commentText }}</p>
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
          <div v-if="!edit">
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
        v-for="child in childComment"
        :key="child.id"
        class="ml-5"
        :userInfo="child.user"
        :parentID="child.id"
        :articleID="child.article.id"
        :content="child.content"
        :commentChild="child.childs"
        :time="child.publishedAt"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'child',
  props: {
    userInfo: {
      type: Object,
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
    time: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      arrChildComments: 'comment/dataComment',
      count: 'comment/commentCount',
    }),
  },
  data() {
    return {
      reply: false,
      edit: false,
      replyCommentInput: '',
      editCommentInput: '',
      commentText: '',
      backdropClickable: true,
      childComment: [],
      type: '',
      show: true,
      deleted: false,
      uID: -1,
    }
  },
  mounted() {
    let arr = this.commentChild
    if (this.user) {
      this.uID = this.user.id
    }
    this.commentText = this.content
    this.editCommentInput = this.content
    this.childComment = [...arr.slice().reverse()]
  },
  methods: {
    replyComment() {
      if (this.user) {
        this.reply = !this.reply
        this.replyCommentInput = ''
        this.type = 'Gửi'
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    sendReplyComment() {
      this.reply = !this.reply
      const data = {
        article_id: this.articleID,
        content: this.replyCommentInput,
        parent_id: this.parentID,
      }
      this.$store.dispatch('comment/create', data).then(() => {
        let arr = this.childComment
        this.$store.dispatch('comment/count', this.count + 1)
        this.childComment = [this.arrChildComments, ...arr]
      })
    },
    editComment(value) {
      this.edit = !this.edit
      this.type = 'Sửa'
      this.editCommentInput = value
    },
    sendEditComment(id) {
      this.edit = !this.edit
      const updateData = {
        id,
        content: this.editCommentInput,
      }
      this.commentText = this.editCommentInput
      this.$store.dispatch('comment/update', updateData)
    },
    showComment() {
      this.show = !this.show
    },
    deleteComment(id) {
      this.deleted = true
      this.$store.dispatch('comment/delete', id)
      this.$refs.modal.close()
    },
    showModal() {
      this.$refs.modal.open()
    },
    handleSaveComment() {
      if (!this.user) {
        this.$router.push('/dang-nhap')
      }
    },
    handleReportComment() {
      if (!this.user) {
        this.$router.push('/dang-nhap')
      }
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
  object-fit: cover;
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

