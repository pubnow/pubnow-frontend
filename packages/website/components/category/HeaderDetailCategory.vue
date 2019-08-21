<template>
  <div class="category-heading">
    <no-ssr>
      <img class="cover" :src="image ? image : `https://source.unsplash.com/random`" alt />
      <div class="text-box">
        <div class="title">{{name}}</div>
        <va-button
          v-if="followCategoryStatus"
          @click="handleFollowCategory(slug)"
          class="mt-2 btn-active btn-round btn-follow"
        >Đang theo dõi</va-button>
        <va-button
          v-else
          class="mt-2 btn btn-default btn-round btn-follow"
          @click="handleFollowCategory(slug)"
        >Theo dõi</va-button>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    following: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    articles: {
      type: Number,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
    },
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
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.category-heading {
  margin-bottom: 39px;

  .cover {
    width: 100%;
    max-height: 235px;
    object-fit: cover;
    @include border;
    @include radius-md;
    box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
    transition: box-shadow 0.25s ease, transform 0.25s ease;
  }

  &:hover {
    .cover {
      box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
    }
  }
}
</style>

