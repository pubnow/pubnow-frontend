<template>
  <no-ssr>
    <div class="wrapper">
      <div class="feedback-cat" id="cat" @click="openModal">
        <img src="@/assets/images/feedback-cat.svg" />
      </div>
      <b-tooltip target="cat">
        Chào mừng bạn đến với
        <strong>Pubnow</strong>. Tôi có thể giúp gì cho bạn?
      </b-tooltip>
      <va-modal title="Gửi ticket hỗ trợ" ref="modal">
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
            <va-form-item label="Link liên quan" need>
              <va-input
                name="reference"
                v-model="form.reference"
                placeholder="Link liên quan tới vấn đề bạn gặp phải"
                :rules="[{ type: 'required', tip: 'Bạn vui lòng nhập link liên quan.' }]"
                clearable
              />
            </va-form-item>
            <div class="text-support">Điều này giúp chúng tôi hỗ trợ bạn nhanh hơn.</div>
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
            <va-button @click="$refs.modal.close()">Hủy</va-button>
            <va-button type="primary" icon-before="paper-plane" @click="sendFeedback">Gửi</va-button>
          </div>
        </div>
      </va-modal>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      options: [
        {
          label: 'Sự cố kỹ thuật',
          value: 0,
        },
        {
          label: 'Tài khoản của tôi',
          value: 1,
        },
        {
          label: 'Gợi ý sản phẩm',
          value: 2,
        },
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
        type: 2,
        reference: '',
        title: '',
        content: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  mounted() {
    this.initForm()
  },
  methods: {
    initForm() {
      if (this.user) {
        this.form.username = this.user.name
        this.form.email = this.user.email
      }
      this.form.reference = window.location.href
      this.form.type = 2
    },
    openModal() {
      this.initForm()
      this.$refs.modal.open()
    },
    sendFeedback() {
      this.$refs.form.validateFields(async result => {
        const { isvalid } = result
        if (isvalid) {
          const data = {
            username: this.form.username,
            email: this.form.email,
            reference: this.form.reference,
            type: this.form.type,
            title: this.form.title,
            content: this.form.content,
          }
          const result = await this.$store.dispatch(
            'feedback/sendFeedback',
            data,
          )
          this.$refs.modal.close()
          this.$refs.form.resetValidation()
          this.form = {
            username: '',
            email: '',
            type: 2,
            reference: '',
            title: '',
            content: '',
          }
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
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size: 59px;
.wrapper {
  .feedback-cat {
    position: fixed;
    z-index: 9999;
    width: $size;
    height: $size;
    border-radius: 12px;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
    @include border;
    @include box-shadow-lg;
    transform: rotate(9deg);
    background: $white;
  }
}
</style>