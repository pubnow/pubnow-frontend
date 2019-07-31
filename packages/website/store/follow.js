export const state = () => ({
  followUser: false,
  followCategory: false,
})

export const getters = {
  followUser: s => s.followUser,
  followCategory: s => s.followCategory,
}

export const mutations = {
  setFollowUser(state, follow) {
    state.followUser = follow.following
  },
  setFollowCategory(state, follow) {
    state.followCategory = follow.following
  },
  setUnFollowUser(state) {
    state.followUser = false
  },
  setUnFollowCategory(state) {
    state.followCategory = false
  }
}

export const actions = {
  async followUser({ commit }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`users/${username}/follow`)
      const { data: follow } = result
      const index = follow.followingUsers.findIndex(item => item.username === username)
      if (index !== -1) {
        commit('setFollowUser', follow.followingUsers[index])
      }
      return follow
    } catch (e) {
      return null
    }
  },
  async unFollowUser({ commit }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`users/${username}/follow`)
      commit('setUnFollowUser')
      return result
    } catch (e) {
      return null
    }
  },
  async followCategory({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`categories/${slug}/follow`)
      const { data: follow } = result
      const index = follow.followingCategories.findIndex(item => item.slug === slug)
      if (index !== -1) {
        commit('setFollowCategory', follow.followingCategories[index])
      }
      return follow
    } catch (e) {
      return null
    }
  },
  async unFollowCategory({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`categories/${slug}/follow`)
      commit('setUnFollowCategory')
      return result
    } catch (e) {
      return null
    }
  },
}
