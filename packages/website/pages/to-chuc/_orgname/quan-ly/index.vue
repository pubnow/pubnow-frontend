<template>
  <div class="container">
    <p>Overview</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Information, Tab } from '@/components/control'

export default {
  layout: 'organization',
  components: {
    Information,
    Tab,
  },
  computed: {
    ...mapGetters({
      org: 'organization/organization',
    }),
  },
  head() {
    return {
      title:
        (this.org && `Quản lý tổ chức - ${this.org.name}`) || 'Quản lý tổ chức',
    }
  },
}
</script>
