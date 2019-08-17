export const state = () => ({
  organizations: [],
  perPage: 10,
  currentPage: 1,
  total: -1,
})

export const getters = {
  organizations: s => s.organizations,
  total: state => state.total,
  perPage: state => state.perPage,
  currentPage: state => state.currentPage,
}

export const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
  setPerPage(state, perPage) {
    state.perPage = perPage
  },
  setTotal(state, total) {
    state.total = total
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
}

export const actions = {
  async list({ commit, dispatch, state }) {
    try {
      dispatch('wait/start', 'org.list', { root: true })
      const result = await this.$http.$get(
        `organizations?page=${state.currentPage}`,
      )
      const {
        data,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setOrganizations', data)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'org.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'org.list', { root: true })
      return false
    }
  },
  async changePage({ dispatch, commit }, payload) {
    commit('setCurrentPage', payload)
    dispatch('list')
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
