<template>
  <div class="container">
    <information :name="name" :avatar="avatar" :email="email" />
    <tab />
  </div>
</template>

<script>
import { Information, Tab } from '@/components/control'
export default {
  components: {
    Information,
    Tab,
  },
  data() {
    return {
      name: 'Young Tailor',
      avatar: 'https://bulma.io/images/placeholders/480x480.png',
      email: 'thaycacac@gmail.com',
    }
  },
}
</script>
