<template>
  <div>
    <Header />
    <Information />
    <Content />
  </div>
</template>

<script>
import { Header, Content, Information } from '../../components/personal'
export default {
  components: {
    Header,
    Content,
    Information,
  }
}
</script>