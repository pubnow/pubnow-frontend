<template>
  <b-container>
    <editor-create />
    <content-create />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { EditorCreate, ContentCreate } from '@/components/series'
export default {
  components: {
    EditorCreate,
    ContentCreate,
  },
}
</script>

<style lang="scss" scoped>
</style>

