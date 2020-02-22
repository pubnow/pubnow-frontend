<template>
  <content-loader
    :height="355"
    :width="1111"
    :speed="2"
    primaryColor="#f4f5f7"
    secondaryColor="#dfe1e6"
  >
    <rect x="0" y="0" rx="0" ry="0" width="120" height="30" />
    <rect x="0.72" y="48.61" rx="0" ry="0" width="250" height="145" />
    <rect x="285" y="47.61" rx="0" ry="0" width="250" height="145" />
    <rect x="571" y="47.61" rx="0" ry="0" width="250" height="145" />
    <rect x="855" y="47.61" rx="0" ry="0" width="250" height="145" />
    <rect x="13.13" y="207.61" rx="0" ry="0" width="199" height="21" />
    <rect x="12.13" y="235.61" rx="0" ry="0" width="73" height="17" />
    <rect x="298.13" y="208.61" rx="0" ry="0" width="122" height="17" />
    <rect x="582.13" y="207.61" rx="0" ry="0" width="199" height="19" />
    <rect x="581.13" y="234.61" rx="0" ry="0" width="66" height="18" />
    <rect x="866.13" y="207.61" rx="0" ry="0" width="148" height="22" />
    <circle cx="26.34" cy="322.82" r="13.21" />
    <circle cx="312.91" cy="323.39" r="12.78" />
    <circle cx="598.88" cy="324.36" r="12.75" />
    <circle cx="883.48" cy="322.96" r="12.35" />
    <rect x="44.13" y="313.61" rx="0" ry="0" width="83" height="15" />
    <rect x="329.13" y="314.61" rx="0" ry="0" width="89" height="15" />
    <rect x="614.13" y="315.61" rx="0" ry="0" width="65" height="14" />
    <rect x="899.13" y="314.61" rx="0" ry="0" width="76" height="14" />
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
