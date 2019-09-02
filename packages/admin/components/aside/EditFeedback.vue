<template>
  <div class="wrap-edit mt-3 p-3">
    <h1 class="text-center my-4">Feedback</h1>
    <b-form class="mt-2">
      <h2>{{ feedback.title }}</h2>
      <b-form-group>
        <div class="d-flex align-items-center">
          <div v-if="feedback.user" class="user d-flex align-items-center">
            <img :src="feedback.user.avatar" class="avatar mr-1" />
            <span class="font-weight-bold">{{ feedback.user.name }}</span>
          </div>
          <div v-else class="font-weight-bold">{{ feedback.username }}</div>
          <span class="ml-2">{{ feedback.publishedAt }}</span>
        </div>
      </b-form-group>
      <p class="fb-content">{{ feedback.content }}</p>
      <hr />
      <b-form-group label="Link liên quan" label-for="input-username">
        <b-form-input
          :value="feedback.reference"
          required
          readonly
          placeholder="Mô tả ngắn về tổ chức"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label class="d-block">Đã giải quyết</label>
        <va-toggle v-model="resolve" />
      </b-form-group>
      <div class="d-flex justify-content-end">
        <a :href="`mailto:${feedback.email}`" class="mail">
          <va-button icon-before="at" class="mr-1" type="primary">Phản hồi</va-button>
        </a>
        <va-button
          :active="!canUpdate"
          :disabled="!canUpdate"
          @click="update"
          icon-after="check"
          type="success"
        >Cập nhật</va-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    feedback: {
      type: Object,
    },
  },
  data() {
    return {
      resolve: false,
    }
  },
  computed: {
    resolveChanged() {
      return this.resolve !== this.feedback.resolve
    },
    canUpdate() {
      return this.resolveChanged
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.resolve = this.feedback.resolve
    },
    async update() {
      await this.$store.dispatch('feedback/update', {
        id: this.feedback.id,
        resolve: this.resolve,
      })
      this.$router.go()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.user {
  .avatar {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 18px;
    @include border;
  }
}
.mail {
  text-decoration: none;
}
.fb-content {
  font-size: 16px;
}
</style>
