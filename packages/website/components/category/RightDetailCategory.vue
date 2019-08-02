<template>
  <div class="inner">
    <div class="box box-top">
      <div class="box-rule">
        <p>
          <b>Nội dung cho phép</b>
        </p>
        <p>Các nội dung thể hiện góc nhìn, quan điểm đa chiều về các vấn đề kinh tế, văn hoá – xã hội trong và ngoài nước.</p>
        <p>
          <b>Quy định</b>
        </p>
        <ul class="mt-2">
          <li>Những nội dung không thuộc phạm trù của danh mục sẽ bị nhắc nhở và xoá (nếu không thay đổi thích hợp)</li>
        </ul>
      </div>
    </div>
    <div class="box box-top top-post">
      <div class="box-title">
        <span>Bài viết của tháng</span>
      </div>
      <ul class="box-list-post">
        <li class="item-post avatar-thumb-post" v-for="i in 4" :key="i">
          <div class="thumb">
            <a href="#">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/e22f6990295011e7a999e7b5135b7d88.jpg"
                alt
              />
            </a>
          </div>
          <h3 class="title">
            <a href>Có mắt như mù</a>
          </h3>
          <div class="author-user">
            <p>
              bởi
              <a href="#">Huskywannafly</a> 6 tháng 7
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="box box-top">
      <div class="box-title">
        <span>Phù hợp với bạn</span>
      </div>
      <ul class="box-list-post">
        <li class="item-post avatar-thumb-post" v-for="i in 4" :key="i">
          <div class="thumb">
            <a href="#">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/img.spiderum.com/sp-xs-avatar/ceb5e9e0a0d711e6b9a4a3d40a952e05.jpg"
                alt
              />
            </a>
          </div>
          <h3 class="title">
            <a href>Có mắt như mù</a>
          </h3>
          <div class="author-user">
            <p>
              bởi
              <a href="#">Huskywannafly</a> 6 tháng 7
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="box box-bonus">
      <div class="box-title">
        <span>Tags nổi bật</span>
      </div>
      <ul class="tags-list list-unstyled">
        <li class="tag-item" v-for="tag in tags" :key="tag.id">
          <a href="#">{{tag.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      tags: 'tag/tags',
    }),
  },
  mounted() {
    this.$store.dispatch('tag/list')
  },
}
</script>


<style lang="scss" scoped>
.box .box-top {
  padding-bottom: 15px;
}
.box .box-title {
  color: #99a3ad;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(95, 111, 129, 0.2);
}
.box-list-post {
  padding: 15px 0 10px;
}
.item-post.avatar-thumb-post {
  padding: 0 0 0 50px;
  position: relative;
  list-style-type: none;
}
.thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
}
.item-post + .item-post {
  margin-top: 15px;
}
.thumb img {
  max-width: 100%;
  max-height: 100%;
}
.avatar-thumb-post .title {
  margin: 0;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-height: 36px;
}
.avatar-thumb-post .title a {
  display: block;
  font-size: 14px;
  line-height: 18px;
}
.author-user p {
  color: #99a3ad;
}
.author-user p {
  font-size: 12px;
  font-weight: 400;
  margin: 0;
}
.author-user p a {
  color: #2fb5fa;
}
.tags-list {
  padding-top: 15px;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.tags-list .tag-item {
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
}
.tag-item a {
  display: block;
  padding: 5px 10px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.05);
}
.title a {
  color: #2c3e50;
}
.title a:hover {
  text-decoration: none;
  color: #2fb5fa !important;
}
.author-user a :hover {
  color: #2fb5fa !important;
}
</style>