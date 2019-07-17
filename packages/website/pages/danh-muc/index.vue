<template>
  <div class="categories">
    <va-container>
      <va-row class="a">
       <va-column v-for="(i,index) in listCategory" :key="index" class="d" :xs="6"> 
          <card-category
          :title="i.name"
          :image="i.image"
          ></card-category>
        </va-column>
      </va-row>
    </va-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { CardCategory } from '~/components/category'
export default {
  // data() {
  //   return {
  //     listCategory: [],
  //   }
  // },
  components: {
    CardCategory,
  },
  computed: {
    ...mapGetters({
      listCategory: 'category/listCategory',
    }),
  },
  async mounted() {
    await this.$store.dispatch('category/getListCategory')
  },
}
</script>

<style scoped>
.d {
  /* background: red; */
  padding: 5px 5px 5px 10px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.c {
  padding: 5px 5px 5px 10px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background: blue; */
}
</style>
