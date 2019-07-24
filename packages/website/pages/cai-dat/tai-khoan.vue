<template>
  <no-ssr>
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <form class="form">
            <div class="avatar">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/fc0e0530a6a611e9a9bf39a183ca3215.jpg"
                class="rounded-circle z-depth-0 image"
                width="70px"
                height="70px"
                alt
              />
              <textarea name id cols="80" rows="2" class="text"></textarea>
            </div>
            <b-form class="pt-4 ip-form row">
              <b-form-group id="input-group-1" class="form-cell col-6">
                <label for class="name">User Name</label>
                <p class="border-bottom">
                  <span class="icon">
                    <i class="fas fa-user-alt"></i>
                  </span>
                  <input placeholder="Write your name here.." class="pt-1" />
                </p>
              </b-form-group>
              <b-form-group id="input-group-1" class="form-cell col-6">
                <label for class="name">
                  Email
                  <a class="change" href="#s" @click="changeEmail()">
                    <i class="fa fa-key"></i>
                    thay đổi Email
                  </a>
                </label>
                <p class="border-bottom">
                  <span class="icon">
                    <i class="far fa-envelope"></i>
                  </span>
                  <input v-if="display===true" placeholder="Write your name here.." />
                  <label v-else class="pl-4">ggggggg</label>
                </p>
              </b-form-group>
              <b-form-group id="input-group-1" class="form-cell col-6">
                <label for class="name">Tên</label>
                <p class="border-bottom">
                  <span class="icon">
                    <i class="fas fa-user-alt"></i>
                  </span>
                  <input placeholder="Write your name here.." class="pt-1" />
                </p>
              </b-form-group>
              <b-form-group v-if="disPas===false" class="form-cell col-6">
                <label for class="name">
                  <a class="change1 pt-4" href="#s" @click="change(true)">
                    <i class="fa fa-key"></i>
                    thay đổi password
                  </a>
                </label>
              </b-form-group>
              <b-form-group v-if="disPas===true" class="form-cell w-100 change-pas">
                <label for class="name">
                  <a class="change1 pt-4" href="#s" @click="change(false)">
                    <i class="fa fa-key"></i>
                    thay đổi password
                  </a>
                </label>
                <div class="d-inline-block float-left col-6">
                  <label for class="name">mật khẩu cũ</label>
                  <p class="border-bottom">
                    <input class="pt-1 pl-0" />
                  </p>
                </div>
                <div class="d-inline-block float-right col-6">
                  <label for class="name">mật khẩu Mới</label>
                  <p class="border-bottom">
                    <input class="pt-1 pl-0" />
                  </p>
                </div>
                <div class="d-inline-block float-right col-6 pt-4">
                  <label for class="name">nhập lại mật khẩu Mới</label>
                  <p class="border-bottom">
                    <input class="pt-1 pl-0" />
                  </p>
                </div>
              </b-form-group>
              <b-button type="reset" variant="danger" class="btn-sub m-r b-text">Hủy</b-button>
              <b-button type="submit" variant="primary" class="btn-sub b-text2">Lưu</b-button>
            </b-form>
          </form>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </no-ssr>
</template>
<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      display: false,
      disPas: false,
    }
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
  padding: $unit;
  .change1 {
    color: $aqua !important;
  }
  .avatar {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .image {
      display: inline-block;
    }
    .text {
      display: inline-block;
      padding: 0 0 0 1.5rem;
    }
  }
  .ip-form {
    .form-cell {
      padding: $unit;
      position: relative;

      .name {
        display: block;
        .change {
          float: right;
          color: $aqua !important;
        }
        a :hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      p {
        height: 30px;
      }
      input {
        border: 0;
        width: 100%;
        display: inline-block;
      }
      .icon {
        display: block;
        position: absolute;
        z-index: 1;
        height: 20px;
        width: 20px;
        left: 20px;
        top: 54px;
        font-size: 20px;
        i {
          font-size: 20px;
        }
      }
      input {
        padding-left: 25px;
        height: 15px;
      }
    }
    .change-pas {
      background: $n10;
      @include box-shadow;
    }
    .btn-sub {
      height: 35px;
      width: 60px;
      text-align: center;
      line-height: 2;
      padding-left: 0px;
      padding-right: 0;
      border-radius: 27px;
      font-weight: 400;
      text-transform: lowercase;
    }
    .m-r {
      margin: 0 1rem 0 34rem;
    }
    .b-text {
      background-color: $n0;
      color: $red;
    }
    .b-text:hover {
      background-color: $red;
      color: $n0;
    }
    .b-text2 {
      background: $aqua !important;
      border-color: $aqua !important;
      color: $n0;
    }
    .b-text2:hover {
      background: $primary !important;
    }
  }
}
</style>
