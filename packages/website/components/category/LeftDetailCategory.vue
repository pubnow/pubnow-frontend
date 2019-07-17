<template>
  <div class="left-content">
    <ul class="feed-list">
     <li class="feed-post">
       <div class="inner">
         <div class="author">
           <div class="avatar">
             <a href="#">
               <img src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/2284cd70739911e9bc561189dd157642.jpg" alt="">
             </a>
           </div>
           <div>
               <span class="hover-username">
                 <a href="#" class="name">Ma kết</a>
               </span>
              trong 
             <a class="category-name">Quan điểm-tranh luận</a>
           </div>          
           <div class="created">
              <span class="date">
                hôm qua
              </span>
           </div>
         </div>
         <div class="image">
           <a href="#">
               <img src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/5b357c90a6ee11e9941c35ca1bbe261d.jpg" alt="">
           </a>
         </div>
         <h3 class="title">
           <a href="#">Thị trường tuyển dụng hiện nay – Ngành nào “an toàn” nhất?</a>
         </h3>
         <p class="content">
           <a href="#" class="body">
            Hằng ngày, trên trang chia sẻ của các trường đại học, chúng ta vẫn thường đọc được những confession tâm sự về chuyện học – chuyện nghề của các bạn...
         </a>
         </p>
         <div class="tags">
           <ul class="list-unstyled">
             <li>
               <a href="">thị trường</a>
             </li>
             <li>
               <a href="">thị trường</a>
             </li><li>
               <a href="">thị trường</a>
             </li><li>
               <a href="">thị trường</a>
             </li>
           </ul>
         </div>
         <div class="toolbar">
           <div class="pull-left">
             <div class="vote-box">
               <span class="icon">
                 <i class="fas fa-sign-language"></i>
               </span>
               <a>5k</a>
             </div>
           </div>
           <div class="pull-right">
             <span class="views">
               <span class="icon">
              <i class="fas fa-eye"></i>
               </span>
             <span class="text">622</span>
             </span>
             <a href="#" class="comment">
               <span class="icon">
                 <i class="fas fa-comment-dots"></i>
               </span>
               <span class="text">4</span>
             </a>
           </div>
         </div>
       </div>
     </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.left-content {
  .feed-list {
    padding-left: 0;
    .feed-post {
      margin-bottom: 10px;
      .inner {
        padding: 15px 20px;
        background: #fff;
        border-radius: 3px;
        position: relative;
        box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.25);
        .author {
          font-size: 13px;
          line-height: 15px;
          color: #99a3ad;
          padding: 5px 0 5px 46px;
          .avatar {
            height: 36px;
            width: 36px;
            overflow: hidden;
            float: left;
            text-align: center;
            border-radius: 50%;
            margin-left: -46px;
            .category-name {
              color: #2c3e50 !important;
            }
            &li {
              list-style: none;
            }
            &img {
              max-width: 100%;
              max-height: 100%;
              border-radius: 50%;
            }
          }
        }
        .image {
          margin-top: 15px;
          overflow: hidden;
          display: block;
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
          &img {
            width: 792px;
          }
        }
        .title {
          margin: 15px 0 0;
          word-break: break-word;
          & a {
            color: #2c3e50;
            font-family: SFD-Bold;
            font-size: 20px !important;
            font-weight: bold;
            line-height: 30px;
            display: block;
          }
        }
        .content {
          .body {
            display: block;
            word-break: break-word;
            color: inherit;
            font-size: 14px;
            color: #34495e !important;
          }
        }
        .tags {
          margin-top: 10px;
          height: 30px;
        }
        .tags > ul > li > a {
          display: block;
          background: #f9f9f9;
          padding: 3px 8px;
          text-transform: uppercase;
          font-size: 11px;
          color: #999;
          font-family: Arial;
        }
        .tags > ul > li {
          float: left;
          margin-right: 5px;
          margin-bottom: 5px;
        }
        .toolbar {
          margin-top: 10px;
          height: 30px;
          .pull-left {
            float: left;
            .vote-box {
              position: relative;
              padding-right: 55px;
            }
          }
          .pull-right {
            .views {
              color: #99a3ad;
              line-height: 20px;
              display: inline-block;
              margin-right: 20px;
            }
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
.icon {
  color: #99a3ad;
  font-size: 20px;
}
a {
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

.feed-list .feed-post .inner .title .text {
  color: #99a3ad;
}
.title a:hover {
  text-decoration: none !important;
}
.body a:hover {
  text-decoration: none !important;
}
.content a:hover {
  text-decoration: none !important;
}
</style>
