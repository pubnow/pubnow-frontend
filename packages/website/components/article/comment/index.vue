<template>
  <div class="mb-5 mt-2">
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
      <template v-for="(comment, index) in comments">
        <view-comment
          :key="index"
          :clap="comments.clap"
          :avatar="comment.avatar"
          :fullname="comment.fullname"
          :time="comment.time"
          :content="comment.content"
        />
        <template v-if="comment.reply.length !== 0">
          <template v-for="(comment, index) in comment.reply">
            <view-comment
              class="ml-5"
              :key="index"
              :clap="comments.clap"
              :avatar="comment.avatar"
              :fullname="comment.fullname"
              :time="comment.time"
              :content="comment.content"
            />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import ViewComment from './view'
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
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
