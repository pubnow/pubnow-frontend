<template>
  <div class="wrap-affix d-flex flex-column py-2">
    <div>
      <img
        v-if="clapStatus"
        :src="require('@/assets/images/icons/clap-filter.svg')"
        @click="clapArticle(articleID)"
        alt="clap filter icon"
        class="icon icon-large evenodd"
      />
      <img
        v-else
        :src="require('@/assets/images/icons/clap.svg')"
        @click="clapArticle(articleID)"
        alt="clap icon"
        class="icon icon-large"
      />
    </div>
    <span>{{ clapNum }}</span>
    <img
      :src="require('@/assets/images/icons/comment.svg')"
      alt="clap icon"
      class="icon icon-small mt-3"
    />
    <span>{{ commentNum }}</span>
    <div>
      <img
        v-if="bookmarkStatus"
        :src="require('@/assets/images/icons/bookmark-filter.svg')"
        @click="bookmarkArticle(articleID)"
        alt="bookmark filter icon"
        class="icon icon-large mt-3"
      />
      <img
        v-else
        :src="require('@/assets/images/icons/bookmark.svg')"
        @click="bookmarkArticle(articleID)"
        alt="bookmark icon"
        class="icon icon-large mt-3"
      />
    </div>
    <img
      :src="require('@/assets/images/icons/facebook.svg')"
      alt="facebook icon"
      class="icon icon-small mt-3"
    />
    <img
      :src="require('@/assets/images/icons/lock.svg')"
      alt="lock icon"
      class="icon icon-small mt-3"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    clap: {
      type: Number,
      required: true,
    },
    commentNum: {
      type: Number,
      required: true,
    },
    articleID: {
      type: String,
      required: true,
    },
    clapped: {
      type: Boolean,
      required: true,
    },
    bookmarked: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      clapNum: 0,
      clapStatus: false,
      bookmarkStatus: false,
    }
  },
  computed: {
    ...mapGetters({
      numClap: 'clap/clapNum',
      clappedStatus: 'clap/clapped',
      bookmarkedStatus: 'bookmark/bookmarked',
      user: 'auth/user',
    }),
  },
  mounted() {
    this.clapNum = this.clap
    this.clapStatus = this.clapped
    this.bookmarkStatus = this.bookmarked
  },
  methods: {
    clapArticle(id) {
      if (this.user) {
        this.$store.dispatch('clap/write', id).then(() => {
          this.clapNum = this.numClap
          this.clapStatus = this.clappedStatus
        })
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    bookmarkArticle(id) {
      if (this.user) {
        if (this.bookmarkStatus) {
          this.$store.dispatch('bookmark/unBookmark', id).then(() => {
            this.bookmarkStatus = this.bookmarkedStatus
          })
        } else {
          this.$store.dispatch('bookmark/write', id).then(() => {
            this.bookmarkStatus = this.bookmarkedStatus
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
@import '@pubnow/ui/scss/_mixins.scss';

$icon-large: 25px;
$icon-small: 20px;

.wrap-affix {
  width: 40px;
  position: fixed;
  margin-top: 30px;
  margin-left: -60px;
  justify-content: center;
  text-align: center;
  align-items: center;
  .icon {
    cursor: pointer;
  }
  .icon-clap {
    width: $icon-large;
    height: $icon-large;
  }
  .icon-comment {
    width: $icon-small;
    height: $icon-small;
  }
}
</style>
