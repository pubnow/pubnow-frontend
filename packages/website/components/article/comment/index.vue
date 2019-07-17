<template>
  <div class="my-5">
    <p class="mb-2">30 Bình luận</p>
    <div class="wrap-comment text-dark">
      <!-- Comment -->
      <div class="d-flex align-items-center">
        <img :src="require('@/assets/images/icons/comment.svg')" alt="clap icon" class="icon" />
        <textarea
          class="comment mx-3"
          rows="1"
          placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"
        ></textarea>
        <i class="far fa-smile smile"></i>
        <nuxt-link to="#" class="text-uppercase font-weight-bold ml-2">Gửi</nuxt-link>
      </div>
      <hr class="my-4" />
      <!-- Tab -->
      <div class="d-flex justify-content-end">
        <nuxt-link to="#" class="ml-4 tab active">Hot nhất</nuxt-link>
        <nuxt-link to="#" class="ml-4 tab">Mới nhất</nuxt-link>
      </div>
      <!-- View comment -->
      <view-comment
        :clap="128"
        :avatar="'https://bulma.io/images/placeholders/256x256.png'"
        :fullname="'Phạm Ngọc Hòa'"
        :time="'Đã chỉnh sửa 20 tháng 3 năm 2019'"
        :content="'Cộng hòa xã hội chủ nghĩa việt nam'"
      />
    </div>
  </div>
</template>

<script>
import ViewComment from './view'
export default {
  components: {
    ViewComment,
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-icon: 20px;

.wrap-comment {
  @include box-shadow;
  padding: $unit * 2;
  .icon {
    width: $size-icon;
    height: $size-icon;
  }
  .comment {
    width: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .smile {
    font-size: $unit * 0.9;
  }

  .tab {
    color: $instagram;
  }

  .active {
    color: $primary;
  }
}
</style>
