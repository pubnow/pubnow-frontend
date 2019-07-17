<template>
  <div class="detail-category">
    <va-container >
     <HeaderDetailCategory/>
      <va-row>
         <va-column :sm="8" >
          <LeftDetailCategory v-for="i in 5" :key="i"/>
         </va-column>
        <va-column :sm="4" class="right">
          <RightDetailCategory/>
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
