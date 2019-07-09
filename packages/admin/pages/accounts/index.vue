<template>
  <div class="container">
    <breadcrumb :items="breadcrumb" />
    <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
  </div>
</template>

<script>
import { Breadcrumb } from '@/components/commons'

export default {
  components: {
    Breadcrumb,
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Thành viên'],
  }),
}
</script>
