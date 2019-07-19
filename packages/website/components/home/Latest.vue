<template>
  <div class="latest">
    <HeadingText>Mới nhất</HeadingText>
    <div class="mt-4">
      <article class="article mb-5" v-for="i in 5" :key="i">
        <div class="article-post flex-grow-1">
          <div class="text-dec">
            <nuxt-link to="/bai-viet/vcl" class="overflow-hidden w-100">
              <h2 class="title">Câu chuyện kinh dị ngày thứ 6</h2>
            </nuxt-link>
            <a href="#" class="w-100">
              <div
                class="mt-1 description"
              >Vi phạm của ông Vũ Văn Ninh được kết luận là nghiêm trọng, làm thiệt hại rất lớn tiền của Nhà nước, ảnh hưởng xấu đến uy tín của tổ chức đảng và cá nhân, gây dư luận xấu.</div>
            </a>
          </div>
          <div class="mt-2">
            <nuxt-link to="/nguoi-dung/dacsang97">dacsang97</nuxt-link>
            <span class="ml-1">tại</span>
            <nuxt-link to="/danh-muc/quan-diem-tranh-luan">Quan điểm - Tranh luận</nuxt-link>
            <div class="mt-1">
              <span class="d-inline-block">13 tháng 6</span>
              <span>.</span>
              <span>6 phút đọc</span>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="article-image">
          <a
            href="#"
            class="d-block background-cover w-100 h-100"
            v-bind:style="{ backgroundImage: 'url(https://cdn-images-1.medium.com/fit/c/152/156/1*HKDooqfZX3gPtbywIn6yqg.png)' }"
          ></a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import HeadingText from '../common/HeadingText'

export default {
  components: {
    HeadingText,
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';

.latest {
  .article {
    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 100%;

    .text-dec {
      a {
        .title {
          font-family: $ale !important;
          font-size: 1.3rem;
          font-weight: 700;
          color: $n800;
        }
        .description {
          color: $n100;
          font-weight: 300;
          font-size: 1rem;
        }
        :hover {
          text-decoration: none !important;
        }
      }
    }
    .article-image {
      min-width: 152px;
    }
    .background-cover {
      background-image: url(https://cdn-images-1.medium.com/fit/c/152/156/1*HKDooqfZX3gPtbywIn6yqg.png);
      background-position: 50% 50% !important;
      background-position: center !important;
      background-origin: border-box !important;
      background-size: cover !important;
    }
  }
  a {
    color: rgba(0, 0, 0, 0.84) !important;
    text-decoration: none !important;
    :hover {
      color: rgba(0, 0, 0, 0.84) !important;
      text-decoration: none !important;
    }
  }
}
</style>
