<template>
  <div class="categories">
    <b-container>
      <b-row>
        <b-col v-for="(category, index) in dataCategory" :key="index" md="4">
          <CardCategory
            :title="category.name"
            :slug="category.slug"
            :following="category.following"
            :image="category.image"
            :articles="category.articles_count"
            :followers="category.followers_count"
          ></CardCategory>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { CardCategory } from '~/components/category'
export default {
  components: {
    CardCategory,
  },
  data() {
    return {
      dataCategory: null,
    }
  },
  computed: {
    ...mapGetters({
      listCategory: 'category/categories',
      user: 'auth/user',
    }),
  },
  mounted() {
    this.$store.dispatch('category/list').then(() => {
      this.dataCategory = this.listCategory
    })
  },
}
</script>

<style lang="scss" scoped>
.d {
  padding: 5px 5px 5px 10px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
