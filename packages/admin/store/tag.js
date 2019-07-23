export const state = () => ({
  tags: [],
  perPage: 10,
  currentPage: 1,
  total: -1,
})

export const getters = {
  tags: state => state.tags,
  total: state => state.total,
  perPage: state => state.perPage,
  currentPage: state => state.currentPage,
}

export const mutations = {
  setTags(state, tags) {
    state.tags = tags
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
  async list({ commit, state, dispatch }) {
    try {
      dispatch('wait/start', 'tag.list', { root: true })
      const result = await this.$http.$get(`tags?page=${state.currentPage}`)
      const {
        data,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setTags', data)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'tag.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'tag.list', { root: true })
      return false
    }
  },
  async changePage({ dispatch, commit }, payload) {
    commit('setCurrentPage', payload)
    dispatch('list')
  },
}
