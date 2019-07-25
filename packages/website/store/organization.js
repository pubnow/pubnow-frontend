export const state = () => ({
  organizations: [],
})

export const getters = {
  organizations: state => state.organizations,
}

export const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
}

export const actions = {
  async list({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'organizations.list', { root: true })
      const result = await this.$http.$get('organizations')
      const { data } = result
      commit('setOrganizations', data)
      dispatch('wait/end', 'organizations.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.list', { root: true })
      return false
    }
  },
}
