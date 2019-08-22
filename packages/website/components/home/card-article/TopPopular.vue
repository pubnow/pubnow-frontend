<template>
  <nuxt-link :to="link" class="top-popular-item">
    <img class="cover" :src="thumbnail" />
    <nuxt-link :to="`/danh-muc/${cat.slug}`" class="category">{{ cat.name }}</nuxt-link>
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
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    thumbnail() {
      if (!this.article.thumbnail) {
        return 'https://source.unsplash.com/random'
      }
      return this.article.thumbnail
    },
    author() {
      return this.article.author
    },
    org() {
      return this.article.organization
    },
    cat() {
      return this.article.category
    },
    link() {
      if (this.org) {
        return `/to-chuc/${this.org.slug}/bai-viet/${this.article.slug}`
      }
      return `/bai-viet/${this.article.slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';

$avatar: 24px;
.top-popular-item {
  display: flex;
  background-size: cover;
  background: #fff;
  height: 350px;
  position: relative;
  &:hover {
    .cover {
      opacity: 0.8;
    }
  }
  .category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: $n500;
    font-weight: 500;
    background: $y200;
    text-transform: uppercase;
    padding: 5px 10px;
  }
  .cover {
    display: block;
    width: 100%;
    border: 0;
    object-fit: cover;
    transition: all 0.15s ease-in;
  }

  .caption {
    bottom: 0;
    margin-left: 0;
    padding: 5rem 1rem 1rem;
    position: absolute;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0, transparent 100%);
    width: 100%;

    .title {
      font-size: 2rem;
      line-height: 1.3;
      color: #fff;
      max-height: 8.1rem;
      overflow: hidden;
      padding-bottom: 0.6rem;
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
        color: #fff;
      }
    }
  }
}
</style>