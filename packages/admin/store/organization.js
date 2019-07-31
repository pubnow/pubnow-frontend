export const state = () => ({
  organizations: [],
})

export const getters = {
  organizations: s => s.organizations,
}

export const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
}

export const actions = {
  async list({ commit }) {
    try {
      const result = await this.$http.$get('organizations')
      const { data } = result
      commit('setOrganizations', data)
      return true
    } catch (e) {
      return false
    }
  },
  async create({ dispatch }, data) {
    try {
      dispatch('wait/start', 'org.create', { root: true })
      const result = await this.$http.$post('organizations', data)
      dispatch('wait/end', 'org.create', { root: true })
      return result
    } catch (e) {
      dispatch('wait/end', 'org.create', { root: true })
      return false
    }
  },
  async update(_, { id, ...updateData }) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$put(`organizations/${id}`, {
      ...updateData,
    })
  },
  async remove(_, id) {
    await this.$http.delete(`organizations/${id}`)
  },
}
