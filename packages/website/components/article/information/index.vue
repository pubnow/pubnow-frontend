<template>
  <no-ssr>
    <div>
      <b-row>
        <b-col>
          <p class="font-weight-light mb-2">
            Chọn tối đa
            <b>5</b> tag để câu chuyện của bạn dễ dàng đến với mọi người hơn
          </p>
          <div class="mb-3">
            <span>Tags:</span>
            <b-badge
              variant="secondary"
              pill
              v-for="(tag, index) in tags"
              :key="index"
              class="tag mx-1"
            >
              <i class="fas fa-times" @click="remove(index)"></i>
              {{ tag }}
            </b-badge>
            <form @submit.prevent="add" class="form" v-if="this.tags.length < 5">
              <input type="text" v-model="inputTag" />
            </form>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <va-select
            v-model="categorySelected"
            :options="categoryOptions"
            search
            placeholder="Chọn danh mục"
            @
          ></va-select>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-end align-items-center">
            Cho phép sao lưu bài viết
            <va-toggle v-model="isSaveArticle" class="mb-0"></va-toggle>
          </div>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end mt-3">
        <va-button class="button justify-content-end" type="success" @click="create">Đăng bài</va-button>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      inputTag: '',
      categorySelected: '',
      textSearch: '',
      isShowCategory: false,
      isSaveArticle: true,
    }
  },
  computed: {
    listFilter() {
      return this.listCategory.filter(category =>
        category.name.toLowerCase().includes(this.textSearch.toLowerCase()),
      )
    },
    ...mapGetters({
      listCategory: 'category/categories',
      tags: 'article/tags',
    }),
    categoryOptions() {
      return this.listCategory.map(category => ({
        value: category.id,
        label: category.name,
      }))
    },
  },
  async mounted() {
    await this.$store.dispatch('category/list')
  },
  methods: {
    remove(index) {
      this.$store.commit('article/removeTag', index)
    },
    add() {
      this.$store.commit('article/addTag', this.inputTag)
      this.inputTag = ''
    },
    async create() {
      const result = this.$store.dispatch('article/write')
      if (result) {
        this.notification.info({
          title: `Đăng bài thành công`,
          message: `Cảm ơn bạn đã sử dụng Pubnow.`,
          duration: 1690,
          onHide: () => {
            this.$router.push('/')
          },
        })
      } else {
        this.notification.danger({
          title: `Rất tiếc`,
          message: `Có lỗi xảy ra, vui lòng thử lại sau.`,
          duration: 2000,
        })
      }
    },
  },
  watch: {
    categorySelected(val) {
      this.$store.commit('article/setCategory', val)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.tag {
  font-size: 100%;
  font-weight: normal;
}

.form {
  display: inline;
  input {
    background: none;
    border: none;
    border-bottom: 1px solid $gray90;
    &:focus {
      outline: none;
    }
  }
}

.drop-button {
  cursor: pointer;
}
.wrap-category {
  position: absolute;
  width: $unit * 12;
  background: $gray90;
  padding: $unit / 2;
  border-radius: $unit / 5;
  @include box-shadow;
  .category {
    cursor: pointer;
    padding: $unit / 5 0;
    border-bottom: 1px solid $gray94;
    &:hover {
      background: $gray85;
    }
  }
  .input {
    width: calc(100% - 20px);
    background: none;
    border: none;
    border-bottom: 1px solid $gray70;
    &:focus {
      outline: none;
    }
  }
}

.button {
  height: 30px !important ;
  padding: 0.25rem 0.5rem !important;
  font-size: 0.875rem !important;
  line-height: 1.5 !important;
  border-radius: 0.2rem !important;
  font-weight: 300 !important;
  text-transform: none !important;
}
</style>
