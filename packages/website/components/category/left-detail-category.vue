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
             <hover-profile>
               <span class="hover-username">
                 <a href="#" class="name">Ma kết</a>
               </span>
             </hover-profile> trong 
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
             <ng-img>
               <img src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-thumbnails/5b357c90a6ee11e9941c35ca1bbe261d.jpg" alt="">
             </ng-img>
           </a>
         </div>
         <h3 class="title">
           <a href="#">Thị trường tuyển dụng hiện nay – Ngành nào “an toàn” nhất?</a>
         </h3>
         <a href="#" class="body">
            Hằng ngày, trên trang chia sẻ của các trường đại học, chúng ta vẫn thường đọc được những confession tâm sự về chuyện học – chuyện nghề của các bạn...
         </a>
         <div class="tags">
           <ul class="list-unstyled">
             <li>
               <a href="">thị trường</a>
             </li>
           </ul>
         </div>
       </div>
     </li>
    </ul>
  </div>
</template>
<style scoped>
.feed-list {
  padding-left: 0;
}
.feed-list .feed-post {
  margin-bottom: 10px;
}
.inner {
  padding: 15px 20px;
  background: #fff;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.25);
}
.author {
  font-size: 13px;
  line-height: 15px;
  color: #99a3ad;
  padding: 5px 0 5px 46px;
}
.avatar {
  height: 36px;
  width: 36px;
  overflow: hidden;
  float: left;
  text-align: center;
  border-radius: 50%;
  margin-left: -46px;
}
a {
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
.avatar img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}
li {
  list-style: none;
}
.category-name {
  color: #2c3e50 !important;
}
.image {
  margin-top: 15px;
  overflow: hidden;
  display: block;
}
.inner .image ng-img {
  display: block;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}
.title {
  margin: 15px 0 0;
  word-break: break-word;
}
.feed-list .feed-post .inner .title a {
  color: #2c3e50;
  font-family: SFD-Bold;
  font-size: 20px !important;
  font-weight: bold;
  line-height: 30px;
  display: block;
}
.body {
  padding-top: 15px;
  display: block;
  word-break: break-word;
  color: inherit;
  font-size: 14px;
  color: #34495e !important;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.tags {
  margin-top: 10px;
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
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>
