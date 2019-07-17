<template>
  <div class="categories">
    <va-container>
      <va-row class="a">
       <va-column v-for="(i,index) in 3" :key="index" class="d" :xs="6"> 
          <card-category
          title="Your Focus"
          image="https://spiderum.com/assets/images/categories/business-min.jpg"
          ></card-category>
        </va-column>
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
