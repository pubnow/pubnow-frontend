<template>
  <no-ssr>
    <b-container class="profile-setting">
      <b-row>
        <b-col md="8" offset-md="2">
          <h3>
            <va-icon type="user" class="mx-1" />Cài đặt tài khoản
          </h3>
          <hr />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" offset-md="2">
          <div class="avatar-form">
            <legend class="col-form-label pt-0">Ảnh đại diện</legend>
            <div
              class="rounded avatar d-block mb-2"
              :style="`background-image: url(${avatarUrl})`"
            />
            <label for="file-input">
              <va-button
                active
                icon-before="camera"
                :loading="avatarUploading"
                :disabled="avatarUploading"
              >Upload</va-button>
            </label>

            <b-form-file
              class="d-none"
              type="file"
              id="file-input"
              @change="onFileChange"
              accept=".jpg, .png, .gif"
            ></b-form-file>
          </div>
        </b-col>
        <b-col md="6">
          <b-form>
            <b-form-group label="Giới thiệu">
              <b-form-textarea @input="updateBio" :value="me.bio" rows="3"></b-form-textarea>
            </b-form-group>
            <b-form-group label="Tên">
              <b-form-input type="text" :value="me.name" @input="updateName" required></b-form-input>
            </b-form-group>
            <b-form-group label="Tên tài khoản">
              <b-form-input type="text" :value="me.username" disabled />
              <small class="form-text text-muted">
                Trang cá nhân của bạn có đường dẫn là:
                <b>/nguoi-dung/{{me.username}}</b>
              </small>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input type="email" disabled :value="me.email"></b-form-input>
              <small
                class="form-text text-muted"
              >Bạn không thể thay đổi email. Nếu có vấn đề gì vui lòng liên hệ Ban quản trị.</small>
            </b-form-group>
            <b-form-group label="Mật khẩu">
              <div class="form-control change-password" v-b-modal.update-password>
                <va-icon type="key" class="mr-1" />Thay đổi mật khẩu
              </div>
              <b-modal id="update-password" title="Thay đổi mật khẩu" centered ref="updatePwdModal">
                <b-form>
                  <b-form-group label="Mật khẩu cũ">
                    <b-form-input
                      type="password"
                      name="oldPassword"
                      v-model="$v.form.oldPass.$model"
                      :state="$v.form.oldPass.$dirty ? !$v.form.oldPass.$error : null"
                    ></b-form-input>
                    <b-form-invalid-feedback>Bạn vui lòng nhập mật khẩu với độ dài tối thiểu 6 ký tự.</b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group label="Mật khẩu mới">
                    <b-form-input
                      type="password"
                      v-model="$v.form.newPass.$model"
                      :state="$v.form.newPass.$dirty ? !$v.form.newPass.$error : null"
                    ></b-form-input>
                    <b-form-invalid-feedback>Bạn vui lòng nhập mật khẩu khác mật khẩu cũ với độ dài tối thiểu 6 ký tự.</b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group label="Nhập lại mật khẩu mới">
                    <b-form-input
                      type="password"
                      v-model="$v.form.reNewPass.$model"
                      :state="$v.form.reNewPass.$dirty ? !$v.form.reNewPass.$error : null"
                    ></b-form-input>
                    <b-form-invalid-feedback>Mật khẩu không khớp</b-form-invalid-feedback>
                  </b-form-group>
                </b-form>
                <template slot="modal-footer">
                  <va-button @click="closeModal">Hủy</va-button>
                  <va-button
                    type="success"
                    @click="submit"
                    :disabled="$v.$invalid || pwdUpdating"
                    icon-before="check-circle"
                    :loading="pwdUpdating"
                  >Cập nhật</va-button>
                </template>
              </b-modal>
            </b-form-group>
            <div>
              <va-button
                type="success"
                :disabled="!canUpdate || updating"
                :loading="updating"
                @click="update"
                variant="success"
                icon-before="save"
              >Lưu</va-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, sameAs, not } from 'vuelidate/lib/validators'
import { createSnackbar } from '@egoist/snackbar'

export default {
  middleware: ['auth'],
  mixins: [validationMixin],
  data() {
    return {
      name: '',
      bio: '',
      avatar: null,
      form: {
        oldPass: '',
        newPass: '',
        reNewPass: '',
      },
    }
  },
  validations: {
    form: {
      oldPass: {
        required,
        minLength: minLength(6),
      },
      newPass: {
        required,
        minLength: minLength(6),
        notSameAsPassword: not(sameAs('oldPass')),
      },
      reNewPass: {
        required,
        minLength: minLength(6),
        sameAsNewPassword: sameAs('newPass'),
      },
    },
  },
  computed: {
    ...mapGetters({
      me: 'auth/user',
    }),
    avatarUploading() {
      return this.$wait.is('upload.image')
    },
    updating() {
      return this.$wait.is('auth.update')
    },
    pwdUpdating() {
      return this.$wait.is('auth.updatePass')
    },
    avatarUrl() {
      if (this.avatar) {
        return this.avatar.link
      }
      return this.me.avatar
    },
    nameChanged() {
      return this.name !== this.me.name
    },
    bioChanged() {
      return this.bio !== this.me.bio
    },
    avatarChanged() {
      return (
        this.avatar && this.avatar.link && this.avatar.link !== this.me.avatar
      )
    },
    canUpdate() {
      return this.nameChanged || this.bioChanged || this.avatarChanged
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.me.name
      this.bio = this.me.bio
    },
    async onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.avatar = files[0]
        const formImg = new FormData()
        formImg.append('file', files[0])
        this.$wait.start('upload.image')
        const uploadedImage = await this.$http.$post('upload', formImg)
        this.avatar = uploadedImage.data
        this.$wait.end('upload.image')
      }
    },
    updateName(value) {
      this.name = value
    },
    updateBio(value) {
      this.bio = value
    },
    closeModal() {
      this.$refs.updatePwdModal.hide()
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.bioChanged && {
          bio: this.bio,
        }),
        ...(this.avatarChanged && { image_id: this.avatar.id }),
      }
      const result = await this.$store.dispatch('auth/update', { submit })
      if (result) {
        createSnackbar('Cập nhật thông tin thành công', {
          theme: 'light',
          timeout: 1690,
          actions: [
            {
              text: 'OK',
            },
          ],
        })
      } else {
        createSnackbar('Có lỗi xảy ra', {
          theme: 'light',
          timeout: 1690,
          actions: [
            {
              text: 'OK',
              style: {
                color: 'red',
              },
            },
          ],
        })
      }
    },
    async submit() {
      const result = await this.$store.dispatch('auth/updatePass', {
        old_password: this.form.oldPass,
        new_password: this.form.newPass,
      })
      this.$refs.updatePwdModal.hide()
      if (result) {
        createSnackbar('Cập nhật thông tin thành công', {
          theme: 'light',
          timeout: 1690,
          actions: [
            {
              text: 'OK',
            },
          ],
        })
      } else {
        createSnackbar('Có lỗi xảy ra, vui lòng kiểm tra lại mật khẩu', {
          theme: 'light',
          timeout: 1690,
          actions: [
            {
              text: 'OK',
              style: {
                color: 'red',
              },
            },
          ],
        })
      }
      this.form.oldPass = ''
      this.form.newPass = ''
      this.form.reNewPass = ''
      this.$v.$reset()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.profile-setting {
  .avatar {
    width: 140px;
    height: 140px;
    background-size: cover;
    @include border;
    @include box-shadow-sm;
  }

  .form-control {
    &:disabled {
      background: $n20;
    }
  }

  .change-password {
    cursor: pointer;
    user-select: none;
    transition: background 0.25s ease-in;
    &:hover {
      background: $n20;
    }
  }
}
</style>
