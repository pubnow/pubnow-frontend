<template>
  <nuxt-link :to="link" class="wrapper">
    <img :src="thumbnail" class="thumbnail" />
    <div class="caption">
      <span class="title">{{ article.title }}</span>
      <span class="author">
        <img :src="author.avatar" class="avatar" />
        <nuxt-link :to="`/nguoi-dung/${author.username}`" class="name">{{ author.name }}</nuxt-link>
        <span v-if="org">
          <span class="middot name"></span>
          <img :src="org.logo" class="avatar" />
          <nuxt-link :to="`/to-chuc/${org.slug}`" class="name">{{ org.name }}</nuxt-link>
        </span>
      </span>
    </div>
  </nuxt-link>
</template>

<script>
import IsArticle from '~/mixins/isArticle'

export default {
  mixins: [IsArticle],
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_sizes.scss';

$avatar: 24px;
.wrapper {
  display: block;
  background: $white;
  @include border;
  // border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    @include box-shadow-lg;
  }

  .thumbnail {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  .caption {
    padding: 15px;
    .title {
      color: $n500;
      font-weight: 500;
      overflow: hidden;
      position: relative;
      padding: 0;
      font-size: 1.2rem;
      line-height: 1.384;
      min-height: 6rem;
      word-break: break-word;
      display: block;
      white-space: normal;
      margin-bottom: $unit/2;
    }
    .author {
      .avatar {
        width: $avatar;
        height: $avatar;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      .name {
        color: $n100;
      }
    }
  }
}
</style>