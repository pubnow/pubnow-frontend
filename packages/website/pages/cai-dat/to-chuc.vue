<template>
  <no-ssr>
    <b-container class="bg-white pb-3">
      <b-row>
        <b-col md="10" offset-md="1">
          <HeadingText class="d-flex align-items-center">
            Danh sách tổ chức
            <va-button active class="ml-auto" icon-before="plus" @click="addOrg">Thêm tổ chức</va-button>
          </HeadingText>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="10" offset-md="1">
          <b-row>
            <b-col md="6" v-for="(organization) in orgs" :key="organization.id">
              <organization :org="organization" :is-owner="user.id === organization.owner.id" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { HeadingText } from '@/components/common'
import { Organization } from '@/components/organization'
import { mapGetters } from 'vuex'

export default {
  components: {
    Organization,
    HeadingText,
  },
  computed: {
    ...mapGetters({
      orgs: 'organization/userOrgs',
      user: 'auth/user',
    }),
  },
  methods: {
    addOrg() {
      this.$router.push('/to-chuc/tao-moi')
    },
  },
  mounted() {
    this.$store.dispatch('organization/userOrgs')
  },
}
</script>
