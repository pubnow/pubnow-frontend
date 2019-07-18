<template>
  <div class="home-page">
    <div class="container">
         <CardHeaderHome/>
        <div class="row">
          <div class="col-sm-8" >
            <LeftContentHome/>
          </div>
          <div class="col-sm-4" >
            <RightContentHome/>
          </div>
        </div>
     
    </div>
  </div>
</template>

<script>
import {
  CardHeaderHome,
  RightContentHome,
  LeftContentHome,
} from '@/components/common'
export default {
  components: {
    CardHeaderHome,
    RightContentHome,
    LeftContentHome,
  },
}
</script>
<style lang="scss" scoped>
.u-maxWidth1032 {
  max-width: 1032px !important;
}
</style>
