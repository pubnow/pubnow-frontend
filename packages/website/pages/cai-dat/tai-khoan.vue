<template>
  <div class="post-container">
    <form class="form">
      <div class="avatar">
        <div class="image">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/fc0e0530a6a611e9a9bf39a183ca3215.jpg"
            class="rounded-circle z-depth-0"
            width="70px"
            height="70px"
            alt
          />
        </div>
        <div class="text">
          <textarea name id cols="74" rows="2"></textarea>
        </div>
      </div>
      <div class="form-cell">
        <div>
          <label for class="name">
            User Name
            <a class="change" href="#" @click="change()">
              <i class="fa fa-key"></i>
              thay đổi UserName
            </a>
          </label>
          <p class="border-bottom">
            <span class="icon">
              <i class="fas fa-user-alt"></i>
            </span>
            <input v-if="display===true" placeholder="Write your name here.." class="pt-1" />
            <label v-else class="pl-4">ggggggg</label>
          </p>
        </div>
      </div>
      <div class="form-cell">
        <div>
          <label for class="name">Tên</label>
          <p class="border-bottom">
            <span class="icon">
              <i class="fas fa-user-alt"></i>
            </span>
            <input placeholder="Write your name here.." class="pt-1" />
          </p>
        </div>
      </div>
      <div class="form-cell">
        <div>
          <label for class="name">
            Email
            <a class="change" href="#s" @click="change()">
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
        </div>
      </div>
      <div class="btn-sub">
        <div class="fl">
          <a href="#" class="btn btn-danger btn-round">Hủy</a>
          <input type="submit" value="lưu" class="btn btn-primary btn-round" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: false,
    }
  },
  methods: {
    change() {
      this.display = true
    },
  },
}
</script>

<style lang="scss" scoped>
.name {
  display: block;
  width: 100%;
  .change {
    float: right;
    color: #2fb5fa !important;
  }
}
a :hover {
  text-decoration: underline;
  cursor: pointer;
}
.post-container {
  margin: auto;
  width: 700px;
  .form {
    height: 500px;
    padding: 20px 20px 20px 20px;
    .avatar {
      display: flex;
      .image {
        display: inline-block;
      }
      .text {
        display: inline-block;
        padding-left: 1.5rem;
      }
    }
    .form-cell {
      display: inline-block;
      width: 49%;
      padding-top: 20px;
      padding-right: 20px;
      padding-left: 0;
      margin-bottom: 20px;
      position: relative;
      & p {
        height: 30px;
      }
      & input {
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
        left: 0px;
        top: 55px;
        font-size: 18px;
        & i {
          font-size: 18px;
        }
      }
      & input {
        padding-left: 25px;
        height: 15px;
      }
    }
    .btn-sub {
      .fl {
        float: right;
        .btn {
          width: 42% !important;
          height: 34px !important;
          line-height: 3 !important;
          padding-left: 18px !important;
          border-radius: 20px;
        }
        .btn-danger {
          background-color: white;
          color: red;
        }
        .btn-danger:hover {
          background-color: red;
          color: white;
        }
      }
    }
  }
}
</style>
