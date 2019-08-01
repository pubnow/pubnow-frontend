<template>
  <div class="d-flex pt-3">
    <div class="d-flex align-items-center">
      <img :src="avatar" alt="avatar" class="avatar mr-3" />
      <div>
        <nuxt-link :to="`/nguoi-dung/${author.username}`" class="fullname mb-2">{{ author.name }}</nuxt-link>
        <p class="mt-0">
          Đăng {{ time | formatDate }} trong
          <nuxt-link :to="`/danh-muc/${category.slug}`" class="category">{{ category.name }}</nuxt-link>
        </p>
      </div>
    </div>
    <no-ssr>
      <div class="d-flex ml-auto align-items-center" v-if="isAuthor">
        <va-dropdown>
          <div slot="trigger">
            <va-button icon-before="cog">Cài đặt</va-button>
          </div>
          <li>
            <nuxt-link :to="`/bai-viet/${slug}/edit`">Chỉnh sửa</nuxt-link>
          </li>
          <li @click="openModal">
            <a href="#">Xóa</a>
          </li>
        </va-dropdown>
      </div>
      <va-modal title="Xóa bài viết" ref="deleteModal" :backdrop-clickable="true">
        <div slot="body">
          <p>Bạn có chắc chắn muốn xóa bài viết này không?</p>
        </div>
        <div slot="footer">
          <va-button @click="$refs.deleteModal.close()">Hủy bỏ</va-button>
          <va-button
            type="danger"
            @click="deleteArticle"
            icon-before="trash"
            :disable="removing"
            :loading="removing"
          >Xóa</va-button>
        </div>
      </va-modal>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import hasDate from '@/mixins/hasDate'

export default {
  mixins: [hasDate],
  props: {
    author: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
    },
    category: {
      type: Object,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteArticle() {
      const result = await this.$store.dispatch('article/remove', this.slug)
      this.$refs.deleteModal.close()
      if (result) {
        this.notification.info({
          title: `Xóa bài viết thành công`,
          message: `Bạn đang được chuyển về Trang chủ.`,
          duration: 1690,
          onHide: () => {
            this.$router.push('/')
          },
        })
      } else {
        this.notification.danger({
          title: `Có lỗi xảy ra`,
          message: `Bạn không thể xóa được bài viết này`,
          duration: 1690,
        })
      }
    },
    openModal() {
      this.$refs.deleteModal.open()
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
    removing() {
      return this.$wait.is('article/remove')
    },
    isAuthor() {
      return this.user && this.user.id === this.author.id
    },
    avatar() {
      if (!this.author.avatar) {
        return 'https://png.pngtree.com/svg/20160330/7c8beaa39c.png'
      }
      return this.author.avatar
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 60px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
  object-fit: cover;
}

.fullname {
  font-size: $unit;
  text-decoration: none;
}

.fullname,
.category {
  &:hover {
    text-decoration: none !important;
  }
}
</style>
