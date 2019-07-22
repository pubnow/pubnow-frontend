<template>
  <div class="container">
    <div v-for="(i,index) in 5" :key="index">
      <ListOrganization v-if="index%3===0" />
      <CardHorizontalOrganization v-if="index%3===1" />
      <CardVerticalOrganization v-if="index%3===2" />
    </div>
  </div>
</template>
<script>
import {
  ListOrganization,
  CardHorizontalOrganization,
  CardVerticalOrganization,
} from '@/components/organization'
export default {
  components: {
    ListOrganization,
    CardHorizontalOrganization,
    CardVerticalOrganization,
  },
}
</script>
