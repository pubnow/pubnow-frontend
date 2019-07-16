<template>
  <svg height="20px" viewBox="0 0 12 20" width="12px" class="bookmark" @click="bookmark">
    <g fill="#808080" fill-rule="evenodd" stroke="none" stroke-width="1">
      <path d="M6,14.8869355 L11,18.1525013 L11,1.99079514 C11,1.44956807 10.5475107,1 9.9914698,1 L2.0085302,1 C1.45112106,1 1,1.4467228 1,1.99079514 L1,18.1525013 L6,14.8869355 Z M0,1.99079514 C0,0.891309342 0.901950359,0 2.0085302,0 L9.9914698,0 C11.1007504,0 12,0.898212381 12,1.99079514 L12,19.0081969 C12,19.5559546 11.6246731,19.7548691 11.1657257,19.4551245 L6,16.081321 L0.834274292,19.4551245 C0.373517323,19.7560509 0,19.5446944 0,19.0081969 L0,1.99079514 Z"></path>
    </g>
  </svg>
</template>

<script>
export default {
  methods: {
    bookmark() {
      console.log('bookmarks!!!')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';

.bookmark {
  cursor: pointer;
  &:hover {
    path {
      fill: $primary;
    }
  }
}
</style>