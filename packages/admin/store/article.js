export const state = () => ({
  articles: [],
  perPage: 10,
  currentPage: 1,
  total: -1,
})

export const getters = {
  articles: state => state.articles,
  total: state => state.total,
  perPage: state => state.perPage,
  currentPage: state => state.currentPage,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
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
      dispatch('wait/start', 'article.list', { root: true })
      const result = await this.$http.$get(`articles?page=${state.currentPage}`)
      const {
        data,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setArticles', data)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'article.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'article.list', { root: true })
      return false
    }
  },
  async changePage({ dispatch, commit }, payload) {
    commit('setCurrentPage', payload)
    dispatch('list')
  },
  async delArticle(_, slug) {
    await this.$http.delete(`articles/${slug}`)
  },
}
