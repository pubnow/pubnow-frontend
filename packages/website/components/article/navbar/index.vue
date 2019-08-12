<template>
  <no-ssr>
    <div class="wrap-affix d-flex flex-column py-2">
      <div>
        <div v-if="clapStatus" class="clap-filter d-flex">
          <img
            :src="require('@/assets/images/icons/clap-filter.svg')"
            @click="clapArticle(articleSlug)"
            alt="clap filter icon"
            class="icon icon-clap icon-large evenodd"
          />
          <div @click="deleteClap(articleSlug)" class="icon-close">
            <va-icon type="times" size="1em" iconStyle="solid" color="#97a0af" />
          </div>
        </div>
        <img
          v-else
          :src="require('@/assets/images/icons/clap.svg')"
          @click="clapArticle(articleSlug)"
          alt="clap icon"
          class="icon icon-large"
        />
      </div>
      <span>{{ clapNum }}</span>
      <img
        :src="require('@/assets/images/icons/comment.svg')"
        alt="clap icon"
        class="icon icon-small mt-3"
      />
      <span>{{ commentNum }}</span>
      <div>
        <img
          v-if="bookmarkStatus"
          :src="require('@/assets/images/icons/bookmark-filter.svg')"
          @click="showModal"
          alt="bookmark filter icon"
          class="icon icon-large mt-3"
        />
        <img
          v-else
          :src="require('@/assets/images/icons/bookmark.svg')"
          @click="bookmarkArticle"
          alt="bookmark icon"
          class="icon icon-large mt-3"
        />
      </div>
      <img
        :src="require('@/assets/images/icons/facebook.svg')"
        alt="facebook icon"
        class="icon icon-small mt-3"
        @click="shareArticle"
      />
      <img
        :src="require('@/assets/images/icons/lock.svg')"
        alt="lock icon"
        class="icon icon-small mt-3"
        @click="feedbackArticle"
      />
      <va-modal title="Feedback bài viết" ref="feedbackModal">
        <div slot="body">
          <va-form type="vertical" ref="form">
            <va-form-item label="Tên của bạn" need>
              <va-input
                name="username"
                v-model="form.username"
                placeholder="Tên của bạn"
                :rules="[{type:'required', tip:'Bạn vui lòng nhập tên của mình.'}]"
                clearable
              />
            </va-form-item>
            <va-form-item label="Email liên hệ" need>
              <va-input
                name="email"
                type="email"
                v-model="form.email"
                placeholder="Email cá nhân"
                :rules="[
                  { type: 'required', tip: 'Bạn vui lòng nhập email.' },
                  { type: 'email', tip: 'Email sai định dạng' }
                ]"
                clearable
              />
            </va-form-item>
            <va-form-item label="Bài viết">
              <va-input :value="article.title" disabled />
            </va-form-item>
            <va-form-item label="Loại feedback">
              <va-select v-model="form.type" :options="options" noUncheck></va-select>
            </va-form-item>
            <va-form-item label="Tiêu đề" need>
              <va-input
                name="title"
                v-model="form.title"
                placeholder="Tiêu đề feedback"
                :rules="[{type:'required', tip:'Bạn vui lòng tiêu đề feedback.'}]"
                clearable
              />
            </va-form-item>
            <va-form-item label="Nội dung" need>
              <va-textarea
                name="content"
                v-model="form.content"
                placeholder="Cung cấp thêm cho chúng tôi về nội dung của bạn"
                :rules="[{type:'required', tip:'Bạn vui lòng nội dung cho feedback.'}]"
              />
            </va-form-item>
          </va-form>
        </div>
        <div slot="footer">
          <div>
            <va-button @click="$refs.feedbackModal.close()">Hủy</va-button>
            <va-button type="primary" icon-before="paper-plane" @click="sendFeedback">Gửi</va-button>
          </div>
        </div>
      </va-modal>
      <va-modal title="Xác nhận" :backdrop-clickable="backdropClickable" ref="modal">
        <div slot="body">Bạn có chắc chắn muốn xóa bookmark khỏi bài viết này không?</div>
        <div slot="footer">
          <div>
            <va-button @click="$refs.modal.close()">Hủy</va-button>
            <va-button type="primary" @click="bookmarkArticle">Đồng ý</va-button>
          </div>
        </div>
      </va-modal>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    clap: {
      type: Number,
      required: true,
    },
    commentNum: {
      type: Number,
      required: true,
    },
    articleSlug: {
      type: String,
      required: true,
    },
    clapped: {
      type: Boolean,
      required: true,
    },
    bookmarked: {
      type: Boolean,
      required: true,
    },
    userClaps: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      clapNum: 0,
      clapStatus: false,
      bookmarkStatus: false,
      backdropClickable: true,
      popupWidth: 600,
      popupHeight: 359,
      options: [
        {
          label: 'Báo cáo nội dung',
          value: 3,
        },
        {
          label: 'Góp ý nội dung',
          value: 4,
        },
      ],
      form: {
        username: '',
        email: '',
        type: 3,
        title: '',
        content: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      numClap: 'clap/clapNum',
      clappedStatus: 'clap/clapped',
      bookmarkedStatus: 'bookmark/bookmarked',
      user: 'auth/user',
      article: 'article/article',
    }),
  },
  mounted() {
    this.clapNum = this.clap
    this.clapStatus = this.clapped
    this.bookmarkStatus = this.bookmarked
    this.$store.commit('clap/setCountClap', {
      count: this.userClaps,
      clap: this.clapNum,
    })
    if (this.user) {
      this.form.username = this.user.name
      this.form.email = this.user.email
    }
  },
  methods: {
    clapArticle(slug) {
      if (this.user) {
        this.$store.dispatch('clap/write', slug).then(() => {
          this.clapNum = this.numClap
          this.clapStatus = this.clappedStatus
        })
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    deleteClap(slug) {
      if (this.user) {
        this.$store.dispatch('clap/delete', slug).then(() => {
          this.clapNum = this.numClap
          this.clapStatus = this.clappedStatus
        })
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    feedbackArticle() {
      this.$refs.feedbackModal.open()
    },
    sendFeedback() {
      this.$refs.form.validateFields(async result => {
        const { isvalid } = result
        if (isvalid) {
          const data = {
            username: this.form.username,
            email: this.form.email,
            reference: window.location.href,
            id_article: this.article.id,
            type: this.form.type,
            title: this.form.title,
            content: this.form.content,
          }
          const result = await this.$store.dispatch(
            'feedback/sendFeedback',
            data,
          )
          this.$refs.feedbackModal.close()
          if (result) {
            this.notification.info({
              title: `Feedback thành công`,
              message: `Cảm ơn bạn đã feedback. Chúng tôi sẽ phản hồi lại sớm nhất có thể.`,
              duration: 1690,
            })
          } else {
            this.notification.danger({
              title: `Feedback thất bại`,
              message: `Có lỗi xảy ra trong quá trình feedback. Vui lòng thử lại sau.`,
              duration: 1690,
            })
          }
        }
      })
    },
    bookmarkArticle() {
      if (this.user) {
        if (this.bookmarkStatus) {
          this.$store
            .dispatch('bookmark/unBookmark', { id: this.articleSlug })
            .then(() => {
              this.bookmarkStatus = this.bookmarkedStatus
            })
          this.$refs.modal.close()
        } else {
          this.$store.dispatch('bookmark/write', this.articleSlug).then(() => {
            this.bookmarkStatus = this.bookmarkedStatus
          })
        }
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    showModal() {
      this.$refs.modal.open()
    },
    shareArticle() {
      if (process.client) {
        const dualScreenLeft =
          window.screenLeft !== undefined ? window.screenLeft : screen.left
        const dualScreenTop =
          window.screenTop !== undefined ? window.screenTop : screen.top
        const width = window.innerWidth
          ? window.innerWidth
          : document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : screen.width
        const height = window.innerHeight
          ? window.innerHeight
          : document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : screen.height
        const left =
          Math.round(width / 2 - this.popupWidth / 2) + dualScreenLeft
        let top = 0
        if (height > this.popupHeight) {
          top = Math.round(height / 3 - this.popupHeight / 2) + dualScreenTop
        }
        const url = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`
        window.open(
          url,
          null,
          'left=' +
            left +
            ',top=' +
            top +
            ',' +
            'width=' +
            this.popupWidth +
            ',height=' +
            this.popupHeight +
            ',personalbar=0,toolbar=0,scrollbars=1,resizable=1',
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

$icon-large: 25px;
$icon-small: 20px;

.wrap-affix {
  width: 40px;
  position: fixed;
  margin-top: 30px;
  margin-left: -60px;
  justify-content: center;
  text-align: center;
  align-items: center;
  .clap-filter {
    align-items: center;
    .icon-clap {
      z-index: 2;
      background-color: #fff;
      border-radius: 50%;
    }
    .icon-close {
      position: absolute;
      left: 16px;
      transition: transform 0.25s cubic-bezier(0.25, 0, 0.6, 1.4) 1s;
      cursor: pointer;
    }
    &:hover {
      .icon-close {
        transform: translateX(-20px);
      }
    }
  }
  .icon {
    cursor: pointer;
  }
  .icon-clap {
    width: $icon-large;
    height: $icon-large;
  }
  .icon-comment {
    width: $icon-small;
    height: $icon-small;
  }
}
</style>
