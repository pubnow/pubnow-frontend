<template>
  <div class="mb-2 wrap-all p-3 bg-white">
    <div class="d-flex flex-column wrap-content">
      <div class="d-flex justify-content-between">
        <nuxt-link :to="`/series/${slug}`" class="title">{{ title }}</nuxt-link>
      </div>
      <div class="d-flex justify-content-between mt-1">
        <div class="wrap-left">
          <p class="small mb-0 mt-0">
            <img
              :src="author.avatar === ''?'https://cdn.head-fi.org/g/2283245_l.jpg':author.avatar"
              alt="avatar"
              class="avatar"
            />
            <nuxt-link :to="`/nguoi-dung/${author.username}`" class="author">{{ author.name }}</nuxt-link>
            &nbsp; · &nbsp; {{ date }}
          </p>
        </div>
        <div class="wrap-right">
          <va-tooltip trigger="hover" content="Posts" placement="bottom">
            <i class="fas fa-paste icon"></i>
          </va-tooltip>
          <span class="number">{{ articles.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    articles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editSeries(slug) {
      this.$store.dispatch('series/index', slug).then(() => {
        this.$router.push(`series/${slug}/chinh-sua`)
      })
    },
    deleteSeries() {
      console.log('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_fonts.scss';

$size-avatar: 24px;
.wrap-all {
  @include border;
  @include radius-md;
  .avatar {
    height: $size-avatar;
    width: $size-avatar;
    border-radius: $size-avatar / 2;
    object-fit: cover;
  }
  .wrap-content {
    width: 100%;

    .title {
      color: $b500;
      font-size: $unit;
      font-family: $ale;
      font-weight: 700;
      margin-bottom: $unit / 4;
      &:hover {
        text-decoration: none;
      }
    }

    .author {
      color: $n400;
      font-weight: 600;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .icon {
    font-size: 12px;
    margin-right: 2px;
  }
  .number {
    margin-right: 8px;
  }
}
</style>
