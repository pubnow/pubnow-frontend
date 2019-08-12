<template>
  <no-ssr>
    <b-container>
      <b-row>
        <b-col md="9" class="mx-auto">
          <va-button class="mb-2">{{ organization.name }}</va-button>
          <HtmlEditor :api="api" />
          <hr />
          <Information />
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { Information } from '@/components/article'
import { HtmlEditor } from '@/components/editor'

export default {
  middleware: ['auth'],
  head: {
    title: 'Viết bài',
  },
  components: {
    Information,
    HtmlEditor,
  },
  async fetch({ store, params, error }) {
    const user = store.getters['auth/user']
    const userOrgs = store.getters['organization/userOrgs']
    const { orgname } = params
    const isMember = userOrgs.findIndex(org => org.slug === orgname)
    if (isMember !== -1) {
      store.commit('article/setOrganization', userOrgs[isMember])
    } else {
      error({
        statusCode: 403,
        message: 'Bạn không phải thành viên của tổ chức này',
      })
    }
  },
  mounted() {
    this.$store.commit('article/reset', false)
  },
  computed: {
    ...mapGetters({
      api: 'api',
      organization: 'article/organization',
    }),
  },
}
</script>
