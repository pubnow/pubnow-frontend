export const state = () => ({
  articles: [],
})

export const getters = {
  articles: s => s.articles,
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
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
}
