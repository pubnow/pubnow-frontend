<template>
  <div class="panel">
    <div class="panel-heading">
      <h3 class="panel-title pull-left">
        Nổi bật
      </h3>
    </div>
    <div class="panel-content-heading">
      <ul class="block-list block-list-1 list-unstyled">
        <li class="block-post" v-for="(i,index) in 5" :key="index">
          <div class="inner">
            <div class="thumb">
              <a href="#">
                <img src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/3d0dffa0a5fc11e9b913cba60d029abb.jpg" alt="" class="loaded">
              </a>
            </div>
            <div class="text">
              <h3 class="title">
                <a href="#">Tư duy kiểu bổ củi</a>
              </h3>
              <a v-if="index===0" href="#" class="body">
                  Freakonomics tuần này  có đưa lại một chủ đề cũ, là chuyện làm cách nào để giảm tỷ lệ người phạm tội, rơi vào vòng lao lý trong xã hội, tại sao xã hội Mỹ vài chục năm trước tỷ lệ tội phạm rất cao mà...
              </a>
              <div class="author">
                <a href="#" class="avatar">
                  <img src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/6af98060633a11e9a28fd11406bd98c6.jpg" alt="">
                </a>
                <a href="#" class="username">
                      Curly Rae Braces
                </a>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.panel {
  height: 633px;
  .panel-heading {
    border-bottom: 1px solid #ddd !important;
    margin-bottom: 15px;
    width: 100%;
    height: 25px;
    .panel-title {
      margin: 0;
      letter-spacing: 0.5px;
      font-size: 18px;
    }
  }
  .panel-content-heading {
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
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.5);
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
              left: 50%;
              -webkit-transform: translateX(-50%);
              -moz-transform: translateX(-50%);
              -o-transform: translateX(-50%);
              transform: translateX(-50%);
            }
            .loaded {
              opacity: 1;
            }
          }
          .text {
            padding: 15px;
            .title {
              margin: 0 0 10px;
              font-family: SFD-Bold;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              & a {
                color: #2c3e50;
                text-decoration: none;
              }
            }
            .body {
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
    .text {
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
      & a {
        height: 120px !important;
      }
    }
  }
}
.block-list.block-list-1 > .block-post:first-child {
  .inner {
    // display: flex;
    // flex-flow: column;
    .thumb {
      & a {
        height: 270px !important;
      }
    }
    .text {
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
      .body {
        text-decoration: none;
        line-height: 20px;
        font-size: 14px;
        word-break: break-word;
        color: inherit;
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
.block-list.block-list-1 > .block-post .inner .text {
  padding-bottom: 60px;
}
.block-list.block-list-1 > .block-post .inner .text .author {
  position: absolute;
  bottom: 0;
  right: 15px;
  left: 15px;
}
</style>
