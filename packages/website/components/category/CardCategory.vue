<template>
  <div class="cover" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="meta">
      <div class="title">{{title}}</div>
    </div>
    <no-ssr>
      <va-button class="action-button btn btn-default btn-round btn-follow">Theo dõi</va-button>
    </no-ssr>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    image: String,
  },
}
</script>
 <style lang="scss" scoped>
.cover {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
  position: relative;
  .meta {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 7px 15px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    .title {
      color: #fff;
      font-size: 26px;
      line-height: 32px;
      position: relative;
    }
  }
  .action-button {
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
  }
  .btn-round {
    border-radius: 20px;
  }
  .btn-default {
    background: #fff;
    border-color: #ccc;
    color: #2fb5fa !important;
  }
  .btn {
    padding: 6px 18px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
  }
}
</style>
