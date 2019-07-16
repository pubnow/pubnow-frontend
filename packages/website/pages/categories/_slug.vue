<template>
  <div class="detail-category">
    <div class="container">
     <header-detail-category></header-detail-category>
      <b-row>
        <b-col sm="8">
          <LeftDetailCategory></LeftDetailCategory>
        </b-col>
        <b-col sm="4">dddddd</b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { HeaderDetailCategory, LeftDetailCategory } from '~/components/category'
export default {
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
  },
}
</script>
<style scoped>
</style>
