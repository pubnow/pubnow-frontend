<template>
  <div class="category-heading">
    <no-ssr>
      <div class="background">
        <img src="https://source.unsplash.com/random" alt />
      </div>
      <div class="text-box">
        <div class="title">Quan điểm - tranh luận</div>
        <va-button class="action-button btn btn-default btn-round btn-follow">Theo dõi</va-button>
      </div>
    </no-ssr>
  </div>
</template>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';

.category-heading {
  width: 100%;
  font-size: 0;
  height: 200px;
  position: relative;
  text-align: center;
  margin-bottom: 25px;
  .background {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    overflow: hidden;
    background: #000;
    img {
      width: 100%;
    }
  }
  .text-box {
    padding-top: 3.5rem;
    display: inline-block;
    max-width: 100%;
    font-size: 1rem;
    position: relative;
    color: #fff;
    .title {
      padding-bottom: 10px;
      font-size: 24px;
      letter-spacing: 1px;
      font-weight: 800 !important;
    }
    .btn-default {
      background: #fff;
      border-color: #ccc;
      color: $primary !important;
    }
    .btn-round {
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
    .action-button {
      padding-top: 8px;
    }
  }
}
</style>

