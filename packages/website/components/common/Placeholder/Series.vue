<template>
  <content-loader
    :height="140"
    :width="720"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="0" y="21" rx="2" ry="5" width="250" height="18" />
    <rect x="437" y="85" rx="2" ry="5" width="125" height="12" />
    <rect x="120" y="85" rx="2" ry="5" width="80" height="12" />
    <rect x="0" y="53" rx="2" ry="5" width="150" height="16" />
    <circle cx="14" cy="92" r="14" />
    <circle cx="604" cy="92" r="14" />
    <circle cx="638" cy="92" r="14" />
    <circle cx="672" cy="92" r="14" />
    <circle cx="706" cy="92" r="14.12" />
    <rect x="40" y="85" rx="2" ry="2" width="61" height="12" />
  </content-loader>
</template>
    
<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
  },
}
</script>
