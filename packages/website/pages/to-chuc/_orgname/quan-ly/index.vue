<template>
  <div class="container">
    <p>Overview</p>
  </div>
</template>

<script>
import { Information, Tab } from '@/components/control'
export default {
  asyncData({ store, params }) {
    store.dispatch('organization/param', params.orgname)
  },
  layout: 'organization',
  components: {
    Information,
    Tab,
  },
}
</script>
