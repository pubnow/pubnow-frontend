<template>
  <div class="categories">
    <div class="container">
      <b-row v-for="i in 2" :key="i" class="a">
        <b-col class="d">
          <card-category
          title="Your Focus Is Priceless. Stop Giving It Away."
          image="https://spiderum.com/assets/images/categories/business-min.jpg"
          ></card-category>
        </b-col>
        <b-col class="c"><card-category
        title="Your Focus "
          image="https://spiderum.com/assets/images/categories/inspirational-min.jpg"
          ></card-category></b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { CardCategory } from '~/components/category'
export default {
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
