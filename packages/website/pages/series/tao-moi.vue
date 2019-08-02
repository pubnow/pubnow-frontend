<template>
  <b-container>
    <editor-create />
    <va-button class="mt-2" @click="create">
      <va-icon type="plus" class="mr-2" />Tạo series
    </va-button>
  </b-container>
</template>

<script>
import { EditorCreate } from '@/components/series'
export default {
  middleware: 'auth',
  components: {
    EditorCreate,
  },
  methods: {
    create() {
      const slug = 'abcde'
      this.$router.push(`/series/${slug}/chinh-sua`)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

