<template>
  <b-container>
    <b-row>
      <b-col cols="8" offset="2">
        <NotFound v-if="error.statusCode === 404" :reason="error.message" />
        <Oops v-else :reason="error.message" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { NotFound, Oops } from '@/components/common'

export default {
  components: {
    NotFound,
    Oops,
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
