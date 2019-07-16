<template>
  <div class="detail-category">
    <va-container >
     <header-detail-category></header-detail-category>
      <va-row>
         <va-column :sm="8" >
          <LeftDetailCategory></LeftDetailCategory>
        </va-column>
        <va-column :sm="4">dddddd</va-column>
      </va-row>
    </va-container>
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
