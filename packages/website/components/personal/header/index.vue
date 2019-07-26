<template>
  <div
    class="wrap-header d-flex justify-content-end flex-column"
    :style="`background-image: url('${ article.thumbnail }')`"
  >
    <div class="container">
      <h1 class="title text-white">{{ article.title }}</h1>
      <span
        class="more text-secondary"
      >{{ article.updatedAt | formatDate }} &nbsp; · &nbsp; {{ article.content | timeRead }}</span>
      <p class="description text-white">{{ article.excerpt }}</p>
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

.wrap-header {
  background-size: cover;
  padding: $unit * 8 0 $unit 0;
  .title {
    font-size: $unit * 1.7;
    line-height: $unit * 2;
  }
  .more {
    font-size: $unit / 1.4;
  }
  .description {
    max-width: 550px;
  }
}
</style>
