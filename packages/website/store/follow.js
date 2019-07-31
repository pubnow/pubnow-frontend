export const state = () => ({
  followUser: null,
  followCategory: null,
})

export const getters = {
  followUser: s => s.followUser,
  followCategory: s => s.followCategory,
}

export const mutations = {
  setFollowUser(state, follow) {
    state.followUser = follow
  },
  setFollowCategory(state, follow) {
    state.followCategory = follow
  },
}

export const actions = {
  async followUser({ commit }, user_id) {
    const data = {
      user_id
    }
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`users/follow`, data)
      const { data: follow } = result
      commit('setFollowUser', follow)
      return follow
    } catch (e) {
      return null
    }
  },
  async followCategory({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`/users/${slug}/follow-tag`)
      const { data: follow } = result
      commit('setFollowCategory', follow)
      return follow
    } catch (e) {
      return null
    }
  },
}
