<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <h1>Danh sách bài đã Bookmark</h1>
        <bookmark />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Bookmark from '@/components/bookmark'
export default {
  middleware: ['auth'],
  head: {
    title: 'Danh sách bài đã bookmark',
  },
  components: {
    Bookmark,
  },
  async fetch({ store }) {
    await store.dispatch('bookmark/show')
  },
}
</script>
