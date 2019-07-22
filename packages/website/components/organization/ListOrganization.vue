<template>
  <div class="featured col">
    <Heading>Nổi bật</Heading>
    <div class="list-articles">
      <ul class="block-list block-list-1 list-unstyled">
        <li class="block-post" v-for="(i,index) in 5" :key="index">
          <div class="inner">
            <div class="thumb">
              <nuxt-link :to="`/bai-viet`">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/e0665e80a7e711e9bf967985d3048c3f.jpg"
                  alt
                  class="loaded"
                />
              </nuxt-link>
            </div>
            <div class="body">
              <h3 class="title">
                <nuxt-link :to="`/bai-viet`">dddddddddd</nuxt-link>
              </h3>
              <a
                v-if="index===0"
                href="#"
                class="description"
              >Sơn Tùng chỉ hơn mày 1-2 tuổi thế mà người ta đã được coi là huyền thoại sống của âm nhạc Việt Nam Công Phượng kém tuổi mày mà được Đội bóng Châu Âu mời về với mức lương khủng kia kìa Mark...</a>
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
<script>
</script>
<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
.featured {
  .list-articles {
    padding-bottom: 10px;
    .block-list {
      margin-left: -10px;
      margin-right: -10px;
      .block-post {
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 20px;
        box-sizing: border-box;
        .inner {
          overflow: hidden;
          position: relative;
          background: $white;
          @include box-shadow-lg;
          @include radius-md;
          .thumb {
            & a {
              display: block;
              position: relative;
              overflow: hidden;
              width: 100%;
            }
            & img {
              width: 100%;
              height: 100%;
              position: absolute;
              object-fit: contain;
            }
            .loaded {
              opacity: 1;
            }
          }
          .body {
            padding: $unit - 5;
            .title {
              a {
                color: #2c3e50;
                font-size: 1.3rem;
                font-weight: 700;
                font-family: $ale;
                text-decoration: none;
              }
            }
            .description {
              color: #34495e;
              text-decoration: none;
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
          }
        }
      }
    }
    .list-unstyled {
      padding-left: 0;
      list-style: none;
    }
  }
}
.block-list.block-list-1 > .block-post:first-child {
  width: 50%;
}
.block-list.block-list-1 > .block-post {
  width: 25%;
}
.block-list.block-list-1 > .block-post:not(:first-child) {
  .inner {
    .body {
      .title {
        height: 120px;
        overflow: hidden;
        margin: 0;
      }
      .author {
        position: absolute;
        bottom: 0;
        right: 15px;
        left: 15px;
      }
    }
    .thumb {
      a {
        height: 120px !important;
      }
    }
  }
}
.block-list.block-list-1 > .block-post:first-child {
  .inner {
    display: flex;
    flex-flow: column;
    .thumb {
      a {
        height: 270px !important;
      }
    }
    .body {
      position: relative;
      left: 0;
      width: 100%;
      height: 290px;
      order: 1;
      top: 0;
      right: 0;
      bottom: 0;
      position: relative;
      padding-bottom: 60px;
      .description {
        text-decoration: none;
        line-height: 1.6rem;
        font-size: 1rem;
        font-weight: 300 !important;
        word-break: break-word;
        color: $n90;
        max-height: 100px;
        overflow: hidden;
      }
      .author {
        position: absolute;
        bottom: 0;
        right: 15px;
        left: 15px;
      }
      .title {
        max-height: 75px;
        overflow: hidden;
      }
    }
  }
}
a {
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
.block-list.block-list-1 > .block-post .inner .body {
  padding-bottom: 60px;
}
.block-list.block-list-1 > .block-post .inner .body .author {
  position: absolute;
  bottom: 0;
  right: 15px;
  left: 15px;
}
</style>
