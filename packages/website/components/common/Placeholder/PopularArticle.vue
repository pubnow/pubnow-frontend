<template>
  <content-loader
    :height="130"
    :width="350"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="49" y="14" rx="2" ry="5" width="250" height="18" />
    <rect x="49" y="65" rx="2" ry="5" width="125" height="12" />
    <rect x="197" y="65" rx="2" ry="5" width="80" height="12" />
    <rect x="49" y="40" rx="2" ry="5" width="150" height="16" />
    <rect x="580" y="13" rx="2" ry="5" width="50" height="105" />
    <circle cx="20" cy="30" r="20" />
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
