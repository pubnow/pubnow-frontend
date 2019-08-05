export const state = () => ({
  organizations: [],
  userOrgs: [],
  organization: {},
  param: 'fd',
})

export const getters = {
  organizations: state => state.organizations,
  userOrgs: state => state.userOrgs,
  organization: state => state.organization,
  param: state => state.param,
}

export const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
  setOrganization(state, organization) {
    state.organization = organization
  },
  setUserOrgs(state, orgs) {
    state.userOrgs = orgs
  },
  setParam(state, param) {
    state.param = param
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
  async show({ commit, dispatch }, id) {
    try {
      dispatch('wait/start', 'organizations.show', { root: true })
      const result = await this.$http.$get(`organizations/${id}`)
      const { data } = result
      commit('setOrganization', data)
      dispatch('wait/end', 'organizations.show', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.show', { root: true })
      return false
    }
  },
  async userOrgs({ commit }) {
    try {
      const result = await this.$http.$get('users/organizations')
      const { data } = result
      commit('setUserOrgs', data)
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
  async param({ commit }, param) {
    try {
      commit('setParam', param)
    } catch (e) {
      return null
    }
  },
}
