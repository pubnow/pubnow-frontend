<template>
  <div class="container">
    <ListOrganization v-for="(i,index) in 5" :key="index" />
  </div>
</template>
<script>
import ListOrganization from '@/components/organization/ListOrganization'
export default {
  components: {
    ListOrganization,
  },
}
</script>
