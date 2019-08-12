export const state = () => ({
  articles: [],
  users: [],
})

export const getters = {
  articles: s => s.articles,
  users: s => s.users,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async article({ commit, dispatch }, { keyword }) {
    try {
      dispatch('wait/start', 'search.article', { root: true })
      const result = await this.$http.$get(`search/article?keyword=${keyword}`)
      const { data } = result
      commit('setArticles', data)
      dispatch('wait/end', 'search.article', { root: true })
    } catch (e) {
      dispatch('wait/end', 'search.article', { root: true })
    }
  },
  async user({ commit, dispatch }, { keyword }) {
    try {
      dispatch('wait/start', 'search.user', { root: true })
      const result = await this.$http.$get(`search/user?keyword=${keyword}`)
      const { data } = result
      commit('setUsers', data)
      dispatch('wait/end', 'search.user', { root: true })
    } catch (e) {
      dispatch('wait/end', 'search.user', { root: true })
    }
  },
}
