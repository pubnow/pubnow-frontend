<template>
  <no-ssr>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="form row">
            <b-col class="avatar d-inline-block" sm="2">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/fc0e0530a6a611e9a9bf39a183ca3215.jpg"
                class="rounded-circle z-depth-0 image"
                width="85px"
                height="85px"
                alt
              />
            </b-col>
            <b-col sm="10" class="d-inline-block">
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
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
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  value="Nguyen Thi Huong"
                  disabled
                />
              </div>
            </b-form-group>
            <b-form-group class="form-cell col-6">
              <label for class="w-100">
                Email
                <a class="change float-right" href="#s" @click="changeEmail()">
                  <i class="fa fa-key"></i>
                  Thay Đổi Email
                </a>
              </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope-o">
                      <i class="far fa-envelope"></i>
                    </i>
                  </div>
                </div>
                <input
                  :disabled="display === false"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value="ddddd"
                />
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
                <input
                  type="text"
                  class="form-control"
                  placeholder="Write your name here.."
                  value="Nguyen Thi Huong"
                />
              </div>
            </b-form-group>
            <b-form-group v-if="disPas===false" class="form-cell col-6">
              <label for>
                <a class="change1 pt-4" href="#" @click="change(true)">
                  <i class="fa fa-key"></i>
                  Thay Đổi Password
                </a>
              </label>
            </b-form-group>
            <b-form-group v-if="disPas===true" class="form-cell w-100 change-pas pt-4">
              <label for class="d-block">
                <a class="change1 pt-4 pl-3" href="#s" @click="change(false)">
                  <i class="fa fa-key"></i>
                  Thay Đổi Password
                </a>
              </label>
              <div class="d-inline-block float-left col-6">
                <label for>Mật Khẩu Cũ</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Write your name here.."
                  value
                />
              </div>
              <div class="d-inline-block float-right col-6">
                <label for>Mật Khẩu Mới</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Write your name here.."
                  value
                />
              </div>
              <div class="d-inline-block float-right col-6 mt-4">
                <label for class="name">Nhập Lại Mật Khẩu Mới</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Write your name here.."
                  value
                />
              </div>
            </b-form-group>
            <div class="d-flex flex-row-reverse w-100">
              <b-button type="submit" variant="primary" class="btn-sub b-text2">Lưu</b-button>
              <b-button type="reset" variant="danger" class="btn-sub m-r b-text">Hủy</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </no-ssr>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
  data() {
    return {
      display: false,
      disPas: false,
    }
  },
  computed: {
    ...mapGetters({
      users: 'user/users',
    }),
  },
  methods: {
    change(value) {
      this.disPas = value
    },
    changeEmail() {
      this.display = true
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
  padding: 30px;
  .change1 {
    color: $aqua !important;
  }
  .avatar {
    line-height: 2;
    .image {
      display: inline-block;
    }
    .text {
      display: inline-block;
      padding: 0 0 0 1.5rem;
    }
  }
}
.ip-form {
  padding: $unit;
  .form-cell {
    position: relative;
    .change-pas {
      background: $n10;
      @include box-shadow;
    }
  }
  .btn-sub {
    margin-right: 13px;
  }
}
</style>
