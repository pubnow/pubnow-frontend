export const state = () => ({
  users: [],
  perPage: 10,
  currentPage: 1,
  total: -1,
  url: '/',
})

export const getters = {
  users: state => state.users,
  total: state => state.total,
  perPage: state => state.perPage,
  currentPage: state => state.currentPage,
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
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
  setUrl(state, url = '/') {
    state.url = url
  },
}

export const actions = {
  async list({ commit, dispatch, state }) {
    const { url, currentPage } = state
    try {
      dispatch('wait/start', 'user.list', { root: true })
      const result = await this.$http.$get(`users${url}?page=${currentPage}`)
      const {
        data,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setUsers', data)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'user.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'user.list', { root: true })
      return false
    }
  },
  async changeType({ dispatch, commit }, payload) {
    commit('setCurrentPage', 1)
    commit('setUrl', payload)
    dispatch('list')
  },
  async changePage({ dispatch, commit }, payload) {
    commit('setCurrentPage', payload)
    dispatch('list')
  },
  async create(_, create) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$post('users', create.submit)
  },
  async update(_, { username, ...updateData }) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$put(`users/${username}`, {
      ...updateData,
    })
  },
  async delUser(_, username) {
    await this.$http.delete(`users/${username}`)
  },
}
