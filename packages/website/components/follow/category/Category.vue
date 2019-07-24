<template>
  <div class="categories mt-4">
    <b-row>
      <b-col v-for="(i,index) in listCategory" :key="index" sm="6" class="mb-4">
        <CardCategory
          :title="i.name"
          :image="`https://source.unsplash.com/collection/1163637/480x480?sig=${index+1}`"
        ></CardCategory>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CardCategory from './CardCategory'
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

