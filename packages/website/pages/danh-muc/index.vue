<template>
  <div class="categories">
    <b-container>
      <b-row>
        <b-col v-for="(category, index) in listCategory" :key="index" sm="6" class="mb-4">
          <CardCategory
            :title="category.name"
            :slug="category.slug"
            :following="category.following"
            :image="`https://source.unsplash.com/collection/1163637/480x480?sig=${index+1}`"
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
  computed: {
    ...mapGetters({
      listCategory: 'category/categories',
      user: 'auth/user',
    }),
  },
  mounted() {
    this.$store.dispatch('category/list')
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
