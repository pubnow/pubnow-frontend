<template>
  <va-card :elevation="1" :padding="13" class="mt-1 px-3 py-2 card">
    <img :src="image" :alt="`Tổ chức ${name}`" class="image" />
    {{ name }}
  </va-card>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$size-image: 25px;

.card {
  cursor: pointer;
  line-height: $size-image;
}
.image {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}
</style>
