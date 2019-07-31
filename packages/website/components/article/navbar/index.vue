<template>
  <div class="wrap-affix d-flex flex-column py-2">
    <img
      :src="require('@/assets/images/icons/clap.svg')"
      @click="clapArticle(articleID)"
      alt="clap icon"
      class="icon icon-large"
    />
    <span>{{ clapNum }}</span>
    <img
      :src="require('@/assets/images/icons/comment.svg')"
      alt="clap icon"
      class="icon icon-small mt-3"
    />
    <span>{{ commentNum }}</span>
    <img
      :src="require('@/assets/images/icons/bookmark.svg')"
      alt="comment icon"
      class="icon icon-large mt-3"
    />
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
  },
  data() {
    return {
      clapNum: 0,
    }
  },
  computed: {
    ...mapGetters({
      numClap: 'clap/clap',
    }),
  },
  mounted() {
    this.clapNum = this.clap
  },
  methods: {
    clapArticle(id) {
      this.$store.dispatch('clap/write', id).then(() => {
        this.clapNum = this.numClap
      })
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
