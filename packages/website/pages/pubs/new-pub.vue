<template>
  <div class="container">
    <div class="title">Tạo mới bài viết</div>
    <div class="form-wrapper">
      <b-form-input v-model="title" size="lg" placeholder="Title" class="input-common form-title-ct" />
      <b-form-textarea id="textarea-auto-height" max-rows="800"  v-model="content" placeholder="Tell your story" class="input-common form-content-ct" />
      <b-button to="/pubs/2" variant="outline-info">Tạo bài viết</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

<style scoped>
.title {
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-top: 30px;
}
.form-wrapper {
  padding: 30px 0;
}
.form-title-ct {
  margin-bottom: 20px;
}
.input-common {
  border-width: 0;
}
.form-content-ct {
  margin-bottom: 20px;
}
.input-common:focus {
  outline: none;
}
</style>
