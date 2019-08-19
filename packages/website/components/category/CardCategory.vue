<template>
  <div class="category-card">
    <nuxt-link class="meta" :to="`/danh-muc/${slug}`">
      <img :src="image" class="cover" />
      <h1 class="title mt-3">{{title}}</h1>
    </nuxt-link>
    <no-ssr>
      <div class="d-flex align-items-center">
        <div>
          <span>{{ articles }} Bài viết</span>
          <span class="middot"></span>
          <span>{{ followers }} Người quan tâm</span>
        </div>
        <div class="ml-auto">
          <va-button
            v-if="followCategoryStatus"
            @click="handleFollowCategory(slug)"
            class="action-button btn-active btn-round btn-follow"
          >Đang theo dõi</va-button>
          <va-button
            v-else
            class="action-button btn btn-default btn-round btn-follow"
            @click="handleFollowCategory(slug)"
          >Theo dõi</va-button>
        </div>
      </div>
    </no-ssr>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    title: String,
    image: String,
    slug: String,
    following: Boolean,
    articles: Number,
    followers: Number,
  },
  data() {
    return {
      followCategoryStatus: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      followedCategoryStatus: 'follow/followCategory',
    }),
  },
  mounted() {
    this.followCategoryStatus = this.following
  },
  methods: {
    handleFollowCategory(slug) {
      if (this.user) {
        if (this.followCategoryStatus) {
          this.$store.dispatch('follow/unFollowCategory', slug).then(() => {
            this.followCategoryStatus = this.followedCategoryStatus
          })
        } else {
          this.$store.dispatch('follow/followCategory', slug).then(() => {
            this.followCategoryStatus = this.followedCategoryStatus
          })
        }
      } else {
        this.$router.push('/dang-nhap')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.category-card {
  .meta {
    cursor: pointer;
    .cover {
      width: 100%;
      max-height: 235px;
      object-fit: cover;
      @include border;
      @include radius-md;
      box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
      transition: box-shadow 0.25s ease, transform 0.25s ease;
    }
  }

  &:hover {
    .meta {
      .cover {
        box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
      }
    }
  }
}
</style>
