export const state = () => ({
  followers: null,
  following: null,
  spiders: null,
  articles: [],
})

export const mutations = {
  setFollowers(state, followers) {
    state.followers = followers
  },
  setFollowing(state, following) {
    state.following = following
  },
  setSpiders(state, spiders) {
    state.spiders = spiders
  },
  setArticles(state, articles) {
    state.articles = articles
  },
}

export const getters = {
  followers: s => s.followers,
  following: s => s.following,
  spiders: s => s.spiders,
  articles: s => s.articles,
  first: s => s.articles[0],
  second: s => s.articles[0],
}

export const actions = {
  async articles({ commit, dispatch }, username) {
    try {
      const result = await this.$http.$get(`users/sangnd/articles`)
      const { data } = result
      commit('setArticles', data)
      return true
    } catch (e) {
      return false
    }
  },
}
