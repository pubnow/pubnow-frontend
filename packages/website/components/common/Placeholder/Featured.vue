<template>
  <content-loader
    :height="400"
    :width="1100"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="0" y="7" rx="5" ry="3" width="455" height="230" />
    <rect x="465" y="7" rx="5" ry="3" width="350" height="230" />
    <rect x="825" y="7" rx="5" ry="5" width="275" height="125" />
    <rect x="825" y="140" rx="5" ry="5" width="275" height="128" />
    <rect x="825" y="275" rx="5" ry="5" width="275" height="102" />
    <rect x="465" y="245" rx="5" ry="5" width="225" height="26" />
    <rect x="0" y="245" rx="5" ry="5" width="265" height="26" />
    <rect x="465" y="280" rx="5" ry="5" width="278" height="14" />
    <rect x="465" y="303" rx="5" ry="5" width="94" height="14" />
    <rect x="0" y="280.61" rx="5" ry="5" width="107" height="14" />
    <rect x="0" y="309.61" rx="5" ry="5" width="233" height="14" />
    <rect x="465" y="325" rx="5" ry="5" width="213" height="14" />
    <rect x="465" y="350" rx="5" ry="5" width="106" height="14" />
    <rect x="0" y="330" rx="5" ry="5" width="106" height="14" />
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