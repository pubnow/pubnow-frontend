<template>
  <div class="categories">
    <va-container>
      <va-row class="a">
        <va-column v-for="(i,index) in listCategory" :key="index" :gutter="5" class="d" :xs="6">
          <CardCategory :title="i.name" :image="i.image"></CardCategory>
        </va-column>
      </va-row>
    </va-container>
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
    }),
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
