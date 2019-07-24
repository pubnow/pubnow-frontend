<template>
  <div class="container bg-white pb-3">
    <h1>Danh sách tổ chức</h1>
    <organization
      v-for="(organization, index) in organizations"
      :key="index"
      :image="organization.image"
      :name="organization.name"
    />
  </div>
</template>

<script>
import { Organization } from '@/components/organization'
export default {
  components: {
    Organization,
  },
  data() {
    return {
      organizations: [
        {
          image: 'https://bulma.io/images/placeholders/128x128.png',
          name: 'Công hòa xã hội chủ nghĩa Việt Nam',
        },
        {
          image: 'https://bulma.io/images/placeholders/128x128.png',
          name: 'Độc lập tự do hạnh phúc',
        },
        {
          image: 'https://bulma.io/images/placeholders/128x128.png',
          name: 'Đố ai đếm được vì sao',
        },
        {
          image: 'https://bulma.io/images/placeholders/128x128.png',
          name: 'Đố ai đếm được công lao bác Hồ',
        },
        {
          image: 'https://bulma.io/images/placeholders/128x128.png',
          name: 'Công hòa xã hội chủ nghĩa Việt Nam',
        },
      ],
    }
  },
}
</script>
