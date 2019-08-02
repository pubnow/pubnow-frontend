<template>
  <content-loader
    :height="300"
    :width="750"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="80" y="25" rx="4" ry="4" width="90" height="16" />
    <rect x="80" y="55" rx="3" ry="3" width="160" height="10" />
    <rect x="2" y="105" rx="3" ry="3" width="350" height="20" />
    <rect x="2" y="149" rx="3" ry="3" width="320" height="10" />
    <rect x="2" y="179" rx="3" ry="3" width="201" height="10" />
    <circle cx="32" cy="46" r="30" />
    <rect x="2" y="212" rx="3" ry="3" width="380" height="10" />
    <rect x="2" y="239" rx="3" ry="3" width="350" height="10" />
    <rect x="2" y="270" rx="3" ry="3" width="600" height="10" />
    <rect x="450" y="145" rx="0" ry="0" width="250" height="100" />
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