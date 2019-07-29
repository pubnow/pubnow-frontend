<template>
  <div class="container">
    <b-row class="my-3">
      <b-col :xs="12" :sm="6" :md="8">
        <div v-if="article">
          <Article :article="article" />
        </div>
        <div v-else class="empty-img">
          <img src="@/assets/images/empty_state.png" />
          <span>Chưa có bài viết nào ở đây</span>
        </div>
      </b-col>
      <b-col :xs="12" :sm="6" :md="4">
        <User />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Article from '../article'
import User from './user'

export default {
  components: {
    Article,
    User,
  },
  computed: {
    ...mapGetters({
      article: 'user/second',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.empty-img {
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 300px;
  }
  span {
    color: $n100;
    font-size: $unit;
    border: 1px dashed $n100;
    padding: $unit / 2;
    margin-top: $unit / 4;
    user-select: none;
  }
}
</style>
