<template>
  <content-loader
    :height="130"
    :width="740"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="0" y="13" rx="5" ry="5" width="185" height="22" />
    <rect x="0" y="47" rx="5" ry="5" width="529" height="16" />
    <rect x="0" y="75" rx="5" ry="5" width="65" height="16" />
    <rect x="90" y="75" rx="5" ry="5" width="66" height="16" />
    <rect x="0" y="100" rx="5" ry="5" width="130" height="16" />
    <rect x="150" y="100" rx="5" ry="5" width="100" height="16" />
    <rect x="590" y="13" rx="5" ry="5" width="150" height="105" />
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
