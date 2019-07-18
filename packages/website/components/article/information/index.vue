<template>
  <div>
    <span>Tags:</span>
    <b-badge variant="secondary" pill v-for="(tag, index) in tags" :key="index" class="tag mx-1">
      <i class="fas fa-times" @click="remove(index)"></i>
      {{ tag }}
    </b-badge>
    <form @submit.prevent="add" class="form" v-if="this.tags.length < 5">
      <input type="text" v-model="inputTag" />
    </form>
    <p class="font-weight-light">
      Chọn tối đa
      <b>5</b> tag để câu chuyện của bạn dễ dàng đến với mọi người hơn
    </p>
    <p class="text-dark mt-4 drop-button" @click="isShowCategory = !isShowCategory">
      Chọn danh mục
      <i class="fas fa-chevron-down"></i>
    </p>
    <form @submit.prevent class="wrap-category" v-if="isShowCategory">
      <i class="fas fa-search"></i>
      <input type="text" v-model="textSearch" class="input" />
      <div
        v-for="(category, index) in listFilter"
        :key="index"
        class="category"
        @click="select(category.name)"
      >{{ category.name }}</div>
    </form>
    <div class="d-flex justify-content-end align-items-center">
      Cho phép sao lưu bài viết
      <va-toggle v-model="isSaveArticle" class="mb-0"></va-toggle>
    </div>
    <div class="d-flex justify-content-end mt-3">
      <b-button class="button justify-content-end" size="sm" variant="info">Đăng bài</b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      inputTag: '',
      tags: ['tổ quốc', 'việt nam'],
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
      listCategory: 'category/listCategory',
    }),
  },
  async mounted() {
    await this.$store.dispatch('category/getListCategory')
  },
  methods: {
    remove(index) {
      this.tags.splice(index, 1)
    },
    add() {
      this.tags.push(this.inputTag)
      this.inputTag = ''
    },
    select(category) {
      this.isShowCategory = false
      this.categorySelected = category
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
