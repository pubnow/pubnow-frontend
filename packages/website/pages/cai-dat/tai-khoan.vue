<template>
  <no-ssr>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="form row">
            <b-col class="avatar d-inline-block" sm="2">
              <div class="image-upload">
                <img
                  :src="changeAvatar()"
                  class="rounded-circle z-depth-0 image position-relative"
                  width="85px"
                  height="85px"
                  alt
                />
                <label for="file-input">
                  <span class="position-absolute st-camera">
                    <i class="fas fa-camera"></i>
                  </span>
                </label>
                <input id="file-input" type="file" @change="onFileChange($event)" />
              </div>
            </b-col>
            <b-col sm="10" class="d-inline-block">
              <b-form-textarea
                id="textarea"
                @input="updateBio"
                :value="me.bio"
                rows="3"
                max-rows="5"
              ></b-form-textarea>
            </b-col>
          </div>
          <b-form class="pt-4 ip-form row">
            <b-form-group id="input-group-1" class="form-cell col-6">
              <label for class="name">User Name</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope-o">
                      <i class="far fa-user"></i>
                    </i>
                  </div>
                </div>
                <input type="text" class="form-control" placeholder :value="me.username" disabled />
              </div>
            </b-form-group>
            <b-form-group class="form-cell col-6">
              <label for class="w-100">Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope-o">
                      <i class="far fa-envelope"></i>
                    </i>
                  </div>
                </div>
                <b-form-input disabled type="email" class="form-control" :value="me.email"></b-form-input>
              </div>
            </b-form-group>
            <b-form-group id="input-group-1" class="form-cell col-6">
              <label for>Tên</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope-o">
                      <i class="far fa-user"></i>
                    </i>
                  </div>
                </div>
                <b-form-input
                  type="text"
                  class="form-control"
                  :value="me.name"
                  @input="updateName"
                  required
                  placeholder="Nhập tên"
                ></b-form-input>
              </div>
            </b-form-group>
            <b-form-group
              :class="['form-cell', 'w-100', 'change-pas', 'pt-4',disPas===true ? 'border': '' ]"
            >
              <label for class="d-block">
                <a class="change1 pt-4 pl-3" @click="change(!disPas)">
                  <i class="fa fa-key"></i>
                  Thay Đổi Password
                </a>
              </label>
              <div :class="['float-left' ,'col-6', disPas===true ? '': 'd-none']">
                <label for>Mật Khẩu Cũ</label>
                <b-form-input
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                  :v-model="oldPass"
                ></b-form-input>
              </div>
              <div :class="['float-right' ,'col-6', disPas===true ? '': 'd-none']">
                <label for>Mật Khẩu Mới</label>
                <b-form-input
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                  :v-model="newPass"
                ></b-form-input>
              </div>
              <div :class="['float-right', 'mb-4','mt-4','col-6', disPas===true ? '': 'd-none']">
                <label for class="name">Nhập Lại Mật Khẩu Mới</label>
                <b-form-input
                  type="password"
                  class="form-control"
                  placeholder="Nhập mật khẩu"
                  :v-model="enterNewPass"
                ></b-form-input>
                <label for class="error">{{error}}</label>
              </div>
            </b-form-group>
            <div class="d-flex flex-row-reverse w-100">
              <nuxt-link to="/nguoi-dung">
                <b-button type="reset" variant="danger" class="btn-sub m-r b-text">Hủy</b-button>
              </nuxt-link>
              <b-button
                type="submit"
                :active="!canUpdate"
                :disabled="!canUpdate"
                @click="update"
                variant="primary"
                class="btn-sub b-text2"
              >Lưu</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </no-ssr>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  middleware: ['auth'],
  data() {
    return {
      display: false,
      disPas: false,
      name: '',
      bio: '',
      avatar: null,
      newPass: '',
      enterNewPass: '',
      oldPass: '',
      error: '',
      imageLink: '',
    }
  },
  computed: {
    ...mapGetters({
      me: 'auth/user',
      pass: '',
    }),
    nameChanged() {
      const oldName = this.me.name
      return this.name !== oldName
    },
    bioChanged() {
      const oldbio = this.me.bio
      return this.bio !== oldbio
    },
    avatarChanged() {
      const oldAvatar = this.me.avatar
      return this.avatar !== oldAvatar
    },
    passChanged() {
      return this.disPas
    },
    canUpdate() {
      return (
        this.nameChanged ||
        this.bioChanged ||
        this.avatarChanged ||
        this.passChanged
      )
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.name = this.me.name
      this.bio = this.me.bio
      this.avatar = this.me.avatar
    },
    changeAvatar() {
      if (this.avatar !== null) {
        return this.avatar
      } else {
        return this.me.avatar
      }
    },
    onFileChange(event) {
      event.preventDefault()
      const image = event.target.files[0]

      if (image != null) {
        this.imageLink = image
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = e => {
          this.avatar = e.target.result
        }
      }
    },
    change(value) {
      this.disPas = value
    },
    updateName(value) {
      this.name = value
    },
    updateBio(value) {
      this.bio = value
    },
    async update() {
      let submit = {
        ...(this.nameChanged && { name: this.name }),
        ...(this.bioChanged && { bio: this.bio }),
        ...(this.avatarChanged && { avatar: this.avatar }),
      }
      console.log(submit)
      await this.$store.dispatch('auth/update', {
        username: this.me.username,
        ...submit,
      })
      if (this.disPas === true) {
        if (this.newPass === this.enterNewPass) {
          let submit1 = {
            ...{ old_password: this.oldPass },
            ...{ new_password: this.newPass },
          }
          await this.$store.dispatch('auth/updatePass', {
            ...submit1,
          })
        } else {
          this.error = 'password error'
        }
      }
      this.$router.go()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
.form {
  margin: auto;
  padding: $unit;
  .change1 {
    color: $aqua !important;
  }
  .avatar {
    line-height: 2;
    height: 85px;
    .image {
      display: inline-block;
    }
    .text {
      display: inline-block;
      padding: 0 0 0 1.5rem;
    }
    .image-upload {
      .st-camera {
        font-size: 30px;
        top: 0px;
        left: 15px;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        padding-top: 8px;
        width: 85px;
        height: 85px;
        // i {
        color: #8e8e8d;
        // }
      }
      .st-camera:hover {
        // i:hover {
        // padding-top: 5px;
        padding-top: 5px;
        color: $white !important;
        font-size: 35px;
        // }
      }
    }
  }
}
.ip-form {
  padding: 30px;
  .form-cell {
    position: relative;
    a {
      cursor: pointer;
      color: $t300;
    }
    a:hover {
      text-decoration: underline;
    }
    .change-pas {
      background: $n10;
      @include box-shadow;
    }
  }
  .btn-sub {
    margin-right: 13px;
  }
}
.image-upload > input {
  display: none;
}
</style>
