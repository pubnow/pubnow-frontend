<template>
  <div class="categories">
    <va-container>
      <va-row v-for="(i,index) in listCategory" :key="index" class="a">
        <va-column class="d" :xs="6">
          <card-category
          title="i.name"
          image="https://spiderum.com/assets/images/categories/business-min.jpg"
          ></card-category>
        </va-column>
        <!-- <va-column class="c" :xs="6"><card-category
        title="Your Focus "
          image="https://spiderum.com/assets/images/categories/inspirational-min.jpg"
          ></card-category></va-column> -->
      </va-row>
    </va-container>
  </div>
</template>
<script>
import { CardCategory } from '~/components/category'
export default {
  data() {
    return {
      listCategory: [],
    }
  },
  components: {
    CardCategory,
  },
  async asyncData({ query }) {
    const response = await this.$http.$get('categories')
    return {
      listCategory: response.data.data,
    }
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
