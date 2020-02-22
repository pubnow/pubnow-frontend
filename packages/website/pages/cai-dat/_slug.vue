<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col>
          <h1>Slug cài đặt</h1>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
export default {
  middleware: ['auth'],
  head: {
    title: 'Cài đặt',
  },
}
</script>
