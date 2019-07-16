<template>
  <div class="d-flex flex-column mr-4 mb-4">
    <img
      :src="image"
      alt="hot post"
      class="image"
    />
    <nuxt-link to="#" class="text-uppercase mt-2">{{ category }}</nuxt-link>
    <h2 class="title mb-0"><nuxt-link to="#">{{ title }}</nuxt-link></h2>
    <span class="small">{{ date }}  &nbsp; · &nbsp; {{ time }}</span>
    <p class="text-body">{{ description }}</p>
    <div class="d-flex justify-content-between mt-4">
      <div>
        <Clap />
        <span class="clap">{{ clap }}</span>
      </div>
      <div class="d-flex wrap-right">
        <nuxt-link to="#" class="link">{{ comment }} Bình luận</nuxt-link>
        <nuxt-link class="mx-3 link" to="#">Chia sẻ</nuxt-link>
        <Bookmark/>
      </div>
    </div>
  </div>
</template>

<script>
import Clap from './clap'
import Bookmark from './bookmark'
import { type } from 'os';

export default {
  components: {
    Clap,
    Bookmark
  },
  props: {
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    clap: {
      type: Number,
      required: true
    },
    comment: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.title {
  font-size: $unit * 1.1;
  line-height: $unit * 2;
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
</style>
