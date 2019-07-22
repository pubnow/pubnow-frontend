<template>
  <div class="detail-tag">
    <va-container>
      <HeaderDetailCategory />
      <va-row>
        <va-column :sm="8">
          <NameTag />
          <LeftDetailCategory v-for="i in 5" :key="i" />
        </va-column>
        <va-column :sm="4" class="pl-5">
          <RightDetailCategory />
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
