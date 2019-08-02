<template>
  <no-ssr>
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
          @click="showModal"
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
        @click="shareArticle"
      />
      <img
        :src="require('@/assets/images/icons/lock.svg')"
        alt="lock icon"
        class="icon icon-small mt-3"
      />
      <va-modal title="Xác nhận" :backdrop-clickable="backdropClickable" ref="modal">
        <div slot="body">Bạn có chắc chắn muốn xóa bookmark khỏi bài viết này không?</div>
        <div slot="footer">
          <div>
            <va-button @click="$refs.modal.close()">Hủy</va-button>
            <va-button type="primary" @click="bookmarkArticle(articleID)">Đồng ý</va-button>
          </div>
        </div>
      </va-modal>
    </div>
  </no-ssr>
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
      backdropClickable: true,
      popupWidth: 600,
      popupHeight: 359,
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
          this.$refs.modal.close()
        } else {
          this.$store.dispatch('bookmark/write', id).then(() => {
            this.bookmarkStatus = this.bookmarkedStatus
          })
        }
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    showModal() {
      this.$refs.modal.open()
    },
    shareArticle() {
      if (process.client) {
        const dualScreenLeft =
          window.screenLeft !== undefined ? window.screenLeft : screen.left
        const dualScreenTop =
          window.screenTop !== undefined ? window.screenTop : screen.top
        const width = window.innerWidth
          ? window.innerWidth
          : document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : screen.width
        const height = window.innerHeight
          ? window.innerHeight
          : document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : screen.height
        const left =
          Math.round(width / 2 - this.popupWidth / 2) + dualScreenLeft
        let top = 0
        if (height > this.popupHeight) {
          top = Math.round(height / 3 - this.popupHeight / 2) + dualScreenTop
        }
        const url = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`
        window.open(
          url,
          null,
          'left=' +
            left +
            ',top=' +
            top +
            ',' +
            'width=' +
            this.popupWidth +
            ',height=' +
            this.popupHeight +
            ',personalbar=0,toolbar=0,scrollbars=1,resizable=1',
        )
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
