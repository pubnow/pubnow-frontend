<template>
  <no-ssr>
    <b-container>
      <h1>Danh sách theo dõi</h1>
      <b-row class="mt-4">
        <b-col>
          <va-tabs @changed="onTabChange" :cache-lifetime="cacheLifetime">
            <va-tab name="Chuyên mục">
              <Category />
            </va-tab>
            <va-tab name="Tác giả">
              <Author />
            </va-tab>
            <va-tab name="Tổ chức">
              <Organization />
            </va-tab>
          </va-tabs>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { Author, Category, Organization } from '~/components/follow'

export default {
  middleware: ['auth'],
  head: {
    title: 'Danh sách theo dõi',
  },
  components: {
    Category,
    Author,
    Organization,
  },
  data() {
    return {
      cacheLifetime: 5,
    }
  },
  methods: {
    onTabChange() {
      console.log('Tab changed')
    },
  },
}
</script>
