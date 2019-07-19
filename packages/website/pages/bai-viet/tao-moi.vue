<template>
  <div class="container py-5">
    <textarea name="editor" style="width: 100%;"></textarea>
    <hr />
    <information />
  </div>
</template>

<script>
import { Information } from '../../components/article'
export default {
  // middleware: ['auth'],
  components: {
    Information,
  },
}
</script>
