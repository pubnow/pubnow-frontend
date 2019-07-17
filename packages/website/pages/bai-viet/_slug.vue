<template>
  <div>
    <h1>Trang Bài viết chi tiết: {{slug}}</h1>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },
}
</script>
