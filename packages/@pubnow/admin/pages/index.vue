<template>
  <div class="container">
    Import single component
    <i-p-text>xxx</i-p-text>
    <br>Global component
    <p-text>fdfdd</p-text>
  </div>
</template>

<script>
import { PText } from '@pubnow/ui'

export default {
  components: {
    IPText: PText,
  },
}
</script>
