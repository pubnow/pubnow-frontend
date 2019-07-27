<template>
  <div class="wrapper mb-3">
    <content-loader
      :height="515"
      :width="750"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <circle cx="60" cy="60" r="25" />
      <rect x="95" y="40" rx="0" ry="0" width="290" height="18" />
      <rect x="95" y="65" rx="0" ry="0" width="70" height="14" />
      <rect x="180" y="65" rx="0" ry="0" width="70" height="14" />
      <rect x="35" y="100" rx="0" ry="0" width="685" height="230" />
      <rect x="35" y="350" rx="0" ry="0" width="190" height="25" />
      <rect x="35" y="390" rx="0" ry="0" width="685" height="18" />
      <rect x="35" y="420" rx="0" ry="0" width="285" height="18" />
      <circle cx="50" cy="470" r="15" />
      <rect x="70" y="463" rx="0" ry="0" width="50" height="14" />
      <rect x="515" y="463" rx="0" ry="0" width="90" height="14" />
      <rect x="615" y="463" rx="0" ry="0" width="75" height="14" />
      <rect x="700" y="463" rx="0" ry="0" width="20" height="14" />
    </content-loader>
  </div>
</template>
    
<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';

.wrapper {
  @include box-shadow-sm;
  @include border;
  @include radius-md;
}
</style>

