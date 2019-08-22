<template>
  <content-loader
    :height="355"
    :width="1111"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="0" y="0" rx="0" ry="0" width="730" height="350" />
    <rect x="750" y="8" rx="0" ry="0" width="121" height="95" />
    <rect x="875" y="8" rx="0" ry="0" width="121" height="21" />
    <circle cx="890.34" cy="91.03" r="12.42" />
    <rect x="904" y="83" rx="0" ry="0" width="115" height="13" />
    <rect x="747" y="127" rx="0" ry="0" width="121" height="95" />
    <rect x="746" y="246" rx="0" ry="0" width="121" height="95" />
    <rect x="873" y="249" rx="0" ry="0" width="200" height="22" />
    <rect x="873" y="275" rx="0" ry="0" width="117" height="20" />
    <rect x="875" y="130" rx="0" ry="0" width="155" height="21" />
    <circle cx="889.34" cy="212.03" r="12.42" />
    <rect x="905" y="204" rx="0" ry="0" width="70" height="13" />
    <circle cx="890.45" cy="333.14" r="12.53" />
    <rect x="905" y="324" rx="0" ry="0" width="67" height="14" />
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
