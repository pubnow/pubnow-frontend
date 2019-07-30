import get from 'lodash.get'
import slice from 'lodash.slice'

export const state = () => ({
  followers: null,
  following: null,
  spiders: null,
  articles: [],
  user: null,
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
  setUser(state, user) {
    state.user = user
  },
}

export const getters = {
  followers: s => s.followers,
  following: s => s.following,
  spiders: s => s.spiders,
  articles: s => slice(s.articles, 2),
  first: s => get(s, 'articles[0]', null),
  second: s => get(s, 'articles[1]', null),
  author: s => s.user,
}

export const actions = {
  async author({ commit }, username) {
    try {
      const result = await this.$http.$get(`users/${username}`)
      const { data } = result
      commit('setUser', data)
      return true
    } catch (e) {
      commit('setUser', null)
      return false
    }
  },
  async articles({ commit }, username) {
    try {
      const result = await this.$http.$get(`users/${username}/articles`)
      const { data } = result
      commit('setArticles', data)
      return true
    } catch (e) {
      commit('setArticles', [])
      return false
    }
  },
}
