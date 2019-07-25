<template>
  <div class="container">
    <information :name="name" :avatar="avatar" :email="email" slot="control"/>
    <tab />
  </div>
</template>

<script>
import { Information, Tab } from '@/components/control'
export default {
  layout: 'organization',
  components: {
    Information,
    Tab,
  },
}
</script>
