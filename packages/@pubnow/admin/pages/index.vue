<template>
  <div class="container">
    Import single component
    <i-pn-text/>
    <br>Global component
    <pn-text/>
  </div>
</template>

<script>
import { PnText } from '@pubnow/ui'

export default {
  components: {
    IPnText: PnText,
  },
}
</script>
