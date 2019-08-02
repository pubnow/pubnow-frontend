<template>
  <div class="mb-3">
    <h3>Tìm kiếm bài viết</h3>
    <div class="d-flex">
      <va-input autofocus :clearable="clearable" @change="onChange" class="mr-2" />
      <va-button>Thêm vào</va-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clearable: false,
    }
  },
  methods: {
    onChange() {
      console.log('Changed')
    },
  },
}
</script>