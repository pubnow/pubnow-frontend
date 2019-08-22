<template>
  <nuxt-link :to="link" class="popular-right-item mb-2 p-2">
    <img :src="thumbnail" class="thumbnail mr-2" />
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
.popular-right-item {
  border: 1px solid $n40;
  display: flex;
  background-color: #fff;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: $n20;

    .thumbnail {
      opacity: 0.8;
    }
  }

  .thumbnail {
    width: 120px;
    height: 94px;
    object-fit: cover;
    transition: all 0.15s ease-in;
  }

  .caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      color: $n500;
      font-weight: 500;
      overflow: hidden;
      position: relative;
      padding: 0;
      top: -0.2rem;
      font-size: 1.2rem;
      line-height: 1.384;
      max-height: 3.2rem;
      word-break: break-word;
      display: block;
      white-space: normal;
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