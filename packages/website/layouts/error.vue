<template>
  <b-container>
    <b-row>
      <b-col cols="8" offset="2">
        <NotFound :reason="error.message" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { NotFound } from '@/components/common'

export default {
  components: {
    NotFound,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.error.message,
    }
  },
  layout: 'default',
}
</script>
