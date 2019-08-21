<template>
  <b-row class="mb-3">
    <b-col :xs="12" :sm="6" :md="6" class="text-center">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img
            :src="avatar ? avatar : 'https://avatars2.githubusercontent.com/u/21233322?s=88&v=4'"
            alt="avatar"
            class="avatar mr-2"
          />
          <div class="align-items-center text-left">
            <p
              class="text-body font-weight-bold fullname mt-0"
              @click="handleUserClick(username)"
            >{{ fullname }}</p>
            <span class="small">@{{ username }}</span>
          </div>
        </div>
        <div v-if="user && user.id !== userID">
          <va-button
            v-if="followUserStatus"
            type="primary"
            size="xs"
            class="button"
            @click="handleFollowUser(username)"
          >Đang theo dõi</va-button>
          <va-button
            v-else
            type="default"
            size="xs"
            class="button"
            @click="handleFollowUser(username)"
          >Theo dõi</va-button>
        </div>
        <div v-if="!user">
          <va-button
            v-if="followUserStatus"
            type="primary"
            size="xs"
            class="button"
            @click="handleFollowUser(username)"
          >Đang theo dõi</va-button>
          <va-button
            v-else
            type="default"
            size="xs"
            class="button"
            @click="handleFollowUser(username)"
          >Theo dõi</va-button>
        </div>
      </div>
      <va-button type="primary" size="xs" class="button mt-3">Ủng hộ tác giả</va-button>
    </b-col>
    <b-col :xs="12" :sm="6" :md="6">
      <div class="d-flex justify-content-between">
        <div
          class="text-body font-weight-bold fullname mt-0"
          @click="handleCategoryClick(categorySlug)"
        >{{ category }}</div>
        <va-button
          v-if="followCategoryStatus"
          type="primary"
          size="xs"
          class="button"
          @click="handleFollowCategory(categorySlug)"
        >Đang theo dõi</va-button>
        <va-button
          v-else
          type="default"
          size="xs"
          class="button"
          @click="handleFollowCategory(categorySlug)"
        >Theo dõi</va-button>
      </div>
      <p>{{ description }}</p>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    fullname: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    categorySlug: {
      type: String,
    },
    followUser: {
      type: Boolean,
      required: true,
    },
    followCategory: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      followUserStatus: false,
      followCategoryStatus: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      followedUserStatus: 'follow/followUser',
      followedCategoryStatus: 'follow/followCategory',
    }),
  },
  mounted() {
    this.followUserStatus = this.followUser
    this.followCategoryStatus = this.followCategory
  },
  methods: {
    handleFollowUser(id) {
      if (this.user) {
        if (this.followUserStatus) {
          this.$store.dispatch('follow/unFollowUser', id).then(() => {
            this.followUserStatus = this.followedUserStatus
          })
        } else {
          this.$store.dispatch('follow/followUser', id).then(() => {
            this.followUserStatus = this.followedUserStatus
          })
        }
      } else {
        this.$router.push('/dang-nhap')
      }
    },
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
    handleUserClick(username) {
      this.$router.push(`/nguoi-dung/${username}`)
    },
    handleCategoryClick(slug) {
      this.$router.push(`/danh-muc/${slug}`)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 45px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  object-fit: cover;
}

.text-body:hover {
  text-decoration: underline;
  cursor: pointer;
}

.fullname {
  font-size: $unit * 0.8;
}

.button {
  height: $unit;
}
</style>