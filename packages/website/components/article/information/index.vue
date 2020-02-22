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
            Bài viết công khai
            <va-toggle v-model="isPrivate" class="mb-0"></va-toggle>
          </div>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end my-3 create" v-if="!slug">
        <va-button class="mr-1" active @click="create(true)">Lưu nháp</va-button>
        <va-button class="button justify-content-end" type="success" @click="create">Đăng bài</va-button>
      </div>
      <div class="d-flex justify-content-end my-3 update" v-else>
        <va-button class="mr-1" active @click="update(true)">Lưu nháp</va-button>
        <va-button class="button justify-content-end" type="success" @click="update">Cập nhật</va-button>
      </div>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import { errorProcess } from '../../../utils/notification'

export default {
  data() {
    return {
      inputTag: '',
      textSearch: '',
      isShowCategory: false,
      isSaveArticle: true,
      dataID: [],
    }
  },
  props: {
    slug: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'article',
    },
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
      series: 'series/series',
    }),
    categorySelected: {
      get() {
        return this.$store.getters['article/category']
      },
      set(v) {
        this.$store.commit('article/setCategory', v)
      },
    },
    isPrivate: {
      get() {
        return !this.$store.getters['article/isPrivate']
      },
      set(v) {
        this.$store.commit('article/setPrivate', !v)
      },
    },
    categoryOptions() {
      return this.listCategory.map(category => ({
        value: category.id,
        label: category.name,
      }))
    },
  },
  methods: {
    remove(index) {
      this.$store.commit('article/removeTag', index)
    },
    add() {
      if (this.inputTag.trim()) {
        this.$store.commit('article/addTag', this.inputTag)
        this.inputTag = ''
      }
    },
    async create(draft = false) {
      try {
        const result = await this.$store.dispatch('article/write', {
          draft,
        })
        if (this.type === 'series') {
          this.series.articles.forEach(item => this.dataID.push(item.id))
          this.dataID.push(result.id)
          let data = {
            articles: [...this.dataID],
            slug: this.series.slug,
          }
          let resultSeries = this.$store.dispatch('series/edit', data)
          if (resultSeries) {
            this.notification.info({
              title: `Thông báo`,
              message: `Thêm bài viết vào series thành công`,
              duration: 1690,
              onHide: () => {
                this.$router.push(`/series/${this.series.slug}/chinh-sua`)
              },
            })
          } else {
            this.notification.danger({
              title: `Rất tiếc`,
              message: `Có lỗi xảy ra, vui lòng thử lại sau.`,
              duration: 2000,
            })
          }
        } else {
          this.notification.info({
            title: `Đăng bài thành công`,
            message: `Cảm ơn bạn đã sử dụng Pubnow.`,
            duration: 1690,
            onHide: () => {
              this.$router.push(`/bai-viet/${result.slug}`)
            },
          })
        }
      } catch (e) {
        if (e.response.status === 422) {
          const message = await errorProcess(e)
          this.notification.danger({
            title: 'Có lỗi xảy ra',
            message,
            duration: 3000,
          })
        } else {
          this.notification.danger({
            title: 'Có lỗi xảy ra',
            message: 'Có lỗi xảy ra, vui lòng thử lại sau.',
            duration: 1690,
          })
        }
      }
    },
    async update(draft = false) {
      try {
        const result = await this.$store.dispatch('article/edit', {
          draft,
          slug: this.slug,
        })
        this.notification.info({
          title: `Cập nhật thành công`,
          message: `Cảm ơn bạn đã sử dụng Pubnow.`,
          duration: 1690,
          onHide: () => {
            this.$router.push(`/bai-viet/${result.slug}`)
          },
        })
      } catch (e) {
        this.notification.danger({
          title: `Rất tiếc`,
          message: `Có lỗi xảy ra, vui lòng thử lại sau.`,
          duration: 2000,
        })
      }
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
</style>
