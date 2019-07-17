<template>
  <div class="detail-category">
    <va-container >
     <header-detail-category></header-detail-category>
      <va-row>
         <va-column :sm="8" >
          <left-detail-category v-for="i in 5" :key="i"></left-detail-category>
         </va-column>
        <va-column :sm="4" class="right">
          <right-detail-category></right-detail-category>
        </va-column>
      </va-row>
    </va-container>
  </div>
</template>
<script>
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
} from '~/components/category'
export default {
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
    RightDetailCategory,
  },
}
</script>
<style scoped>
.right {
  padding-left: 40px !important;
}
</style>
