<template>
  <no-ssr>
    <b-container>
      <editor-create status="create" />
    </b-container>
  </no-ssr>
</template>

<script>
import { EditorCreate } from '@/components/series'
export default {
  middleware: 'auth',
  components: {
    EditorCreate,
  },
}
</script>

<style lang="scss" scoped>
</style>

