<template>
  <div class="featured">
    <Heading class="p-left">Nổi bật</Heading>
    <div class="list-articles">
      <ul class="block-list block-list-1 list-unstyled">
        <li class="block-post" v-for="(i,index) in 5" :key="index">
          <div class="card text-white">
            <img
              class="card-img-top"
              src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/e0665e80a7e711e9bf967985d3048c3f.jpg"
              alt="Card image top"
            />
            <div class="card-img-overlay">
              <h3>
                <a>This is a simple Card example</a>
              </h3>
              <div class="author">
                <a href="#" class="avatar">
                  <img
                    src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/6af98060633a11e9a28fd11406bd98c6.jpg"
                    alt
                  />
                </a>
                <a href="#" class="username">hello</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
.block-post {
  display: inline-block;
  width: 20%;
  height: 400px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
  .card {
    & img {
      width: 209px !important;
      height: 400px !important;
    }
  }
  & h3 {
    font-size: 18px;
    color: $white;
  }
  .author {
    font-size: 13px;
    line-height: 15px;
    padding: 15px 0 15px 46px;
    .avatar {
      height: 36px;
      width: 36px;
      overflow: hidden;
      float: left;
      text-align: center;
      border-radius: 50%;
      margin-left: -46px;
      margin-top: -10px;
      & img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
    }
    .username {
      color: $white;
      cursor: pointer;
      font-size: 13px;
    }
  }
}
.p-left {
  padding-left: 15px;
}
.card-img-overlay {
  top: 16rem !important;
}
</style>
