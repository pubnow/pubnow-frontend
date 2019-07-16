<template>
  <div>
    <h1>Trang Bài viết chi tiết: {{slug}}</h1>
    <h3>Tổ chức: {{name}}</h3>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      name: params.orgname,
      slug: params.slug,
    }
  },
}
</script>
