<template>
  <div class="detail-category">
    <b-container>
      <HeaderDetailCategory />
      <b-row>
        <b-col :sm="8">
          <LeftDetailCategory v-for="i in 5" :key="i" />
        </b-col>
        <b-col :sm="4">
          <RightDetailCategory />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
} from '~/components/category'

export default {
  scrollToTop: true,
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
