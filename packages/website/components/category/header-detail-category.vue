<template>
   <div class="category-heading">
      <div class="background">
        <img src="https://spiderum.com/assets/images/categories/business-min.jpg" alt="">
      </div>
      <div class="text-box">
        <div class="title">Quan điểm - tranh luận</div>
        <div class="action-button">
         <a class="btn btn-default btn-round btn-follow">Theo dõi</a>
        </div>
      </div>
    </div>
</template>
<style scoped>
.category-heading {
  width: 100%;
  font-size: 0;
  height: 200px;
  position: relative;
  text-align: center;
  margin-bottom: 25px;
}
.background {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.background img {
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.text-box {
  padding-top: 3.5rem;
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  font-size: 1rem;
  position: relative;
  color: #fff;
}
.text-box .title {
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 800 !important;
  font-family: SFD-Bold;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(0, 0, 0, 0.25),
    0 0 8px rgba(0, 0, 0, 0.25), 0 0 12px rgba(0, 0, 0, 0.25);
}
.btn.btn-default {
  background: #fff;
  border-color: #ccc;
  color: #2fb5fa !important;
}
.btn.btn-round {
  border-radius: 20px;
}
.btn {
  display: inline-block;
  padding: 6px 18px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
}
</style>

