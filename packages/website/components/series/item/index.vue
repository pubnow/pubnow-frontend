<template>
  <div class="d-flex mb-3 wrap-all px-1 py-1 align-items-center">
    <img :src="avatar" alt="avatar" class="avatar mr-2" />
    <div class="d-flex flex-column wrap-content">
      <p class="small mb-0 mt-0">
        <nuxt-link to="#" class="author">{{ author }}</nuxt-link>
        &nbsp; · &nbsp; {{ date }}
      </p>
      <div>
        <nuxt-link to="#" class="title">{{ title }}</nuxt-link>
        <va-badge v-for="(tag, index) in tags" :key="`tag-${index}`" class="mr-2">{{ tag }}</va-badge>
      </div>
      <div class="d-flex justify-content-between">
        <div class="wrap-left">
          <va-tooltip trigger="hover" content="Views" placement="bottom">
            <i class="fas fa-eye icon"></i>
          </va-tooltip>
          <span class="number">{{ views }}</span>
          <va-tooltip trigger="hover" content="Clips" placement="bottom">
            <i class="fas fa-paperclip icon"></i>
          </va-tooltip>
          <span class="number">{{ clips }}</span>
          <va-tooltip trigger="hover" content="Comments" placement="bottom">
            <i class="fas fa-paperclip icon"></i>
          </va-tooltip>
          <span class="number">{{ comments }}</span>
          <va-tooltip trigger="hover" content="Posts" placement="bottom">
            <i class="fas fa-paste icon"></i>
          </va-tooltip>
          <span class="number">{{ posts }}</span>
        </div>
        <div class="wrap-right">
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

$size-avatar: 45px;
.wrap-all {
  @include box-shadow;
  .avatar {
    height: $size-avatar;
    width: $size-avatar;
    border-radius: $size-avatar / 2;
  }
  .wrap-content {
    width: 100%;
  }
}
.icon {
  font-size: 12px;
  margin-right: 2px;
}
.number {
  margin-right: 8px;
}
</style>
