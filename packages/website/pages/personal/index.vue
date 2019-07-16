<template>
  <div>
    <the-header />
    <information />
    <the-content />
  </div>
</template>

<script>
import { TheHeader, TheContent, Information } from '../../components/personal'
export default {
  components: {
    TheHeader,
    TheContent,
    Information,
  },
}
</script>
