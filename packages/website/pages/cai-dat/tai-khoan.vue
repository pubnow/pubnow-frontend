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
          <textarea name id cols="75" rows="2"></textarea>
        </div>
      </div>
      <div class="form-cell">
        <div>
          <label for class="name">
            User Name
            <a class="change" href="#s">
              <i class="fa fa-key"></i>
              thay đổi UserName
            </a>
          </label>
          <span class="icon">
            <i class="fas fa-user-alt"></i>
          </span>
          <input placeholder="Write your name here.." class="pt-2" />
        </div>
      </div>
      <div class="form-cell2">
        <div>
          <label for class="name">Tên</label>
          <span class="icon">
            <i class="fas fa-user-alt"></i>
          </span>
          <input placeholder="Write your name here.." class="pt-2" />
        </div>
      </div>
      <div class="form-cell3">
        <div>
          <label for class="name">
            Email
            <a class="change" href="#s">
              <i class="fa fa-key"></i>
              thay đổi Email
            </a>
          </label>
          <span class="icon">
            <i class="far fa-envelope"></i>
          </span>
          <input placeholder="Write your name here.." class="pt-2" />
        </div>
      </div>
      <!-- <p type="Email">
        <input placeholder="Let us know how to contact you back.." />
      </p>
      <p type="Message:">
        <input placeholder="What would you like to tell us.." />
      </p>
      <button>Send Message</button>
      <span class="fa fa-phone"></span>001 1023 567
      <span class="fa fa-envelope-o"></span> contact@company.com-->
    </form>
  </div>
</template>
<style lang="scss" scoped>
p:before {
  // content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
}
input {
  border: 0;
  border-bottom: 1px solid;
  width: 100%;
  display: inline-block;
}
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
        padding-left: 1.3rem;
      }
    }
    .form-cell {
      float: left;
      width: 50%;
      padding-top: 20px;
      padding-right: 20px;
      padding-left: 0;
      margin-bottom: 20px;
      position: relative;
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
      }
    }
    .form-cell2 {
      float: right;
      width: 50%;
      padding-top: 20px;
      padding-right: 20px;
      padding-left: 0;
      margin-bottom: 20px;
      position: relative;
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
      }
    }
    .form-cell3 {
      float: left;
      width: 50%;
      padding-top: 20px;
      padding-right: 20px;
      padding-left: 0;
      margin-bottom: 20px;
      position: relative;
      .icon {
        display: block;
        position: absolute;
        z-index: 1;
        height: 20px;
        width: 20px;
        left: 0px;
        top: 57px;
        font-size: 18px;
        & i {
          font-size: 18px;
        }
      }
      & input {
        padding-left: 25px;
      }
    }
  }
}
</style>
