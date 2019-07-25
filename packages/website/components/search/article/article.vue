<template>
  <div class="d-flex flex-column mt-4 bg-white px-4 py-4 wrap-all">
    <div class="d-flex align-items-center mb-3">
      <img :src="avatar" alt="avatar" class="avatar mr-2" />
      <div>
        <nuxt-link to="#" class="font-weight-bold">{{ fullname }}</nuxt-link>
        <span>trong</span>
        <nuxt-link to="#">{{ category }}</nuxt-link>
        <p
          class="mt-0 font-weight-lighter small"
        >Đăng {{ date | formatDate }} &nbsp; · &nbsp; {{ time }} đọc</p>
      </div>
    </div>
    <img :src="image" alt="hot post" class="image cursor-poiter" />
    <p class="title font-weight-bold cursor-poiter">
      <span
        v-for="(character, index) in titleArray"
        :key="index"
        :class="textSearhArray.includes(character.toLowerCase()) ? 'selected' : ''"
      >{{ character }}</span>
    </p>
    <p class="text-body cursor-poiter">{{ description }}</p>
    <div class="d-flex justify-content-between mt-4">
      <div>
        <img :src="require('@/assets/images/icons/clap.svg')" alt="clap icon" class="cursor-poiter" />
        <span class="clap">{{ clap }}</span>
      </div>
      <div class="d-flex wrap-right">
        <nuxt-link to="#" class="link">{{ comment }} Bình luận</nuxt-link>
        <nuxt-link class="mx-3 link" to="#">
          <img :src="require('@/assets/images/icons/share.svg')" alt="share icon" class="icon" />
          Chia sẻ
        </nuxt-link>
        <img
          :src="require('@/assets/images/icons/bookmark.svg')"
          alt="bookmark icon"
          class="cursor-poiter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import hasDate from '@/mixins/hasDate'

export default {
  mixins: [hasDate],
  props: {
    keyword: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'https://bulma.io/images/placeholders/128x128.png',
    },
    fullname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    clap: {
      type: Number,
      required: true,
    },
    comment: {
      type: Number,
      required: true,
    },
  },
  computed: {
    titleArray() {
      return this.title.split(' ')
    },
    textSearhArray() {
      return this.keyword.toLowerCase().split(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$size-image: 50px;

.cursor-poiter {
  cursor: pointer;
}

.wrap-all {
  @include radius-md;
  @include box-shadow-sm;
  @include border;
}

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
  span {
    &:after {
      content: ' ';
      background: white;
    }
  }
}

.clap {
  color: $text;
  font-size: $unit * 0.75;
  vertical-align: bottom;
}

.wrap-right {
  line-height: 25px;
  .link {
    color: $text !important;
  }
}

.image {
  width: 100%;
}

.icon {
  margin-bottom: $unit / 4;
}

.selected {
  background: gray;
  color: white;
}
</style>
