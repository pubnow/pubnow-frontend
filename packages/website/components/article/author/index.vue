<template>
  <div class="d-flex align-items-center pt-3">
    <img :src="avatar" alt="avatar" class="avatar mr-3" />
    <div>
      <nuxt-link :to="`/nguoi-dung/${author.username}`" class="fullname mb-2">{{ author.name }}</nuxt-link>
      <p class="mt-0">
        Đăng {{ time | formatDate }} trong
        <nuxt-link :to="`/danh-muc/${category.slug}`" class="category">{{ category.name }}</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import hasDate from '@/mixins/hasDate'

export default {
  mixins: [hasDate],
  props: {
    author: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  computed: {
    avatar() {
      if (!this.author.avatar) {
        return 'https://png.pngtree.com/svg/20160330/7c8beaa39c.png'
      }
      return this.author.avatar
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 60px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  object-fit: cover;
}

.fullname {
  font-size: $unit;
  text-decoration: none;
}

.fullname,
.category {
  &:hover {
    text-decoration: none !important;
  }
}
</style>
