<template>
  <va-affix :offset="70">
    <div class="right">
      <aside class="uiScale name-dec">
        <div class="text-dec">
          <a href="#">
            <HeadingText>Phổ biến tại Pubnow</HeadingText>
          </a>
        </div>
        <div class="mt-4">
          <ul>
            <li class="d-flex mb-3 item" v-for="(i,index) in 5" :key="index">
              <div class="counter">0{{index+1}}</div>
              <div class="flex-grow-1 ml-2">
                <div>
                  <nuxt-link
                    to="/bai-viet/thanh-xuan-nhu-1-ly-tra"
                    class="overflow-hidden flex-grow-0 w-100"
                  >
                    <h2 class="title mb-0">Thanh xuân như 1 ly trà</h2>
                  </nuxt-link>
                </div>
                <div class="mt-1 colorText">
                  <nuxt-link to="/nguoi-dung/dacsang97" class="author mr-1">dacsang97</nuxt-link>tại
                  <a href="#" class="category">Tâm sự - Chia sẻ</a>
                  <div>
                    <span>17 tháng 6</span>
                    <span>.</span>
                    <span>6 phút đọc</span>
                    <span class="pl-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </va-affix>
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
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';

.right {
  .item {
    .counter {
      font-size: 32px;
      color: $n50;
      font-weight: 300;
      margin-top: $unit / 2;
    }
    a {
      .title {
        font-family: $ale;
        font-weight: 700;
        color: $n800;
      }

      &:hover {
        text-decoration: none;
      }
    }
    .author,
    .category {
      color: rgba(0, 0, 0, 0.84) !important;
      text-decoration: none !important;
    }
  }
}
</style>
