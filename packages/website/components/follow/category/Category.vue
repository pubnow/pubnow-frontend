<template>
  <div class="categories mt-4">
    <b-row>
      <b-col v-for="(i,index) in listCategory" :key="index" sm="6" class="mb-4">
        <CardCategory :title="i.name" :image="i.image"></CardCategory>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CardCategory from './CardCategory'
export default {
  components: {
    CardCategory,
  },
  computed: {
    ...mapGetters({
      listCategory: 'following/followingCategories',
    }),
  },
  async mounted() {
    await this.$store.dispatch(
      'following/getFollowingCategories',
      this.$store.getters['auth/user'].username,
    )
  },
}
</script>

<style lang="scss" scoped>
.d {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

