<template>
  <div class="mb-2 wrap-all p-3 bg-white">
    <div class="d-flex flex-column wrap-content">
      <nuxt-link to="#" class="title">{{ title }}</nuxt-link>
      <div>
        <va-badge v-for="(tag, index) in tags" :key="`tag-${index}`" class="mr-1">{{ tag }}</va-badge>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <div class="wrap-left">
          <p class="small mb-0 mt-0">
            <img :src="avatar" alt="avatar" class="avatar" />
            <nuxt-link to="#" class="author">{{ author }}</nuxt-link>
            &nbsp; · &nbsp; {{ date }}
          </p>
        </div>
        <div class="wrap-right">
          <va-tooltip trigger="hover" content="Views" placement="bottom">
            <i class="fas fa-eye icon"></i>
          </va-tooltip>
          <span class="number">{{ views }}</span>
          <va-tooltip trigger="hover" content="Posts" placement="bottom">
            <i class="fas fa-paste icon"></i>
          </va-tooltip>
          <span class="number">{{ posts }}</span>
          <va-tooltip trigger="hover" content="Claps" placement="bottom">
            <i class="fas fa-hand-paper icon"></i>
          </va-tooltip>
          <span class="number">{{ posts }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    author: {
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
    tags: {
      type: Array,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    clips: {
      type: Number,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
    posts: {
      type: Number,
      required: true,
    },
    claps: {
      type: Number,
      required: true,
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
