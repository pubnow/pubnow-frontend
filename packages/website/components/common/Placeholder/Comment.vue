		
<template>
  <content-loader
    :height="160"
    :width="750"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="310" y="40" rx="3" ry="3" width="70" height="10" />
    <rect x="45" y="3" rx="3" ry="3" width="100" height="10" />
    <rect x="150" y="3" rx="3" ry="3" width="10" height="10" />
    <rect x="45" y="20" rx="3" ry="3" width="130" height="10" />
    <rect x="190" y="20" rx="3" ry="3" width="130" height="10" />
    <rect x="45" y="40" rx="3" ry="3" width="90" height="10" />
    <rect x="160" y="40" rx="3" ry="3" width="60" height="10" />
    <rect x="240" y="40" rx="3" ry="3" width="60" height="10" />
    <rect x="45" y="60" rx="3" ry="3" width="30" height="10" />
    <circle cx="20" cy="20" r="18" />
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