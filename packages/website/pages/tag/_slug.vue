<template>
  <div class="detail-tag">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <NameTag />
          <LeftDetailCategory v-for="i in 5" :key="i" />
        </div>
        <div class="col-sm-4">
          <HeaderDetailCategory />
          <RightDetailCategory />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
} from '~/components/category'
import NameTag from '@/components/tags/NameTag'
export default {
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
    RightDetailCategory,
    NameTag,
  },
}
</script>
<style lang="scss" scoped>
</style>
