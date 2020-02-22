<template>
  <div class="featured">
    <Heading class="p-left">Nổi bật</Heading>
    <div class="list-articles">
      <ul class="block-list block-list-1 list-unstyled">
        <li class="block-post" v-for="(i,index) in 5" :key="index">
          <div class="card mb-3" style="width: 100%;">
            <div class="row no-gutters">
              <div class="col-sm">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/e0665e80a7e711e9bf967985d3048c3f.jpg"
                  class="card-img"
                  alt="..."
                  height="270px"
                />
              </div>
              <div class="col-sm">
                <div class="card-body">
                  <div class="title">
                    <h5 class="card-title">Card title</h5>
                    <p
                      v-if="index===0"
                      class="card-text"
                    >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
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
.col-sm {
  & img {
    border-radius: 0 !important;
  }
}
.title {
  height: 185px;
  overflow: hidden;
  margin: 0;
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
    color: #99a3ad;
    cursor: pointer;
    font-size: 13px;
  }
}
.block-list.block-list-1 > .block-post .inner .body .author {
  position: absolute;
  bottom: 0;
  right: 15px;
  left: 15px;
}
.block-list.block-list-1 > .block-post:first-child {
  width: 100%;
}
.block-list.block-list-1 > .block-post {
  width: 50%;
}
.block-post {
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.p-left {
  padding-left: 15px;
}
</style>
