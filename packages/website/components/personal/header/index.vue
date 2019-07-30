<template>
  <div
    class="wrap-header d-flex justify-content-end flex-column"
    :style="`background-image: url('${ article.thumbnail }')`"
    v-if="article"
  >
    <div class="container">
      <nuxt-link class="title" :to="`/bai-viet/${article.slug}`">{{ article.title }}</nuxt-link>
      <span
        class="more"
      >{{ article.updatedAt | formatDate }} &nbsp; · &nbsp; {{ article.content | timeRead }}</span>
      <p class="description">{{ article.excerpt }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      article: 'user/first',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';

.wrap-header {
  background-size: cover;
  padding: $unit * 8 0 $unit 0;
  position: relative;
  margin-top: -$unit;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    );
  }
  .container {
    z-index: 1;
    .title {
      font-size: $unit * 1.7;
      line-height: $unit * 2;
      color: $n20;
      font-family: $ale;
      font-weight: 700;
      transition: color 0.25s ease-in-out;
      display: block;
      &:hover {
        text-decoration: none;
        color: $n10;
      }
    }
    .more {
      font-size: $unit / 1.4;
      color: $n40;
    }
    .description {
      max-width: 550px;
      color: $n30;
      font-family: $noto;
    }
  }
}
</style>
