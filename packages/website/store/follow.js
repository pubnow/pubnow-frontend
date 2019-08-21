export const state = () => ({
  followUser: false,
  followCategory: false,
  followTag: false,
})

export const getters = {
  followUser: s => s.followUser,
  followCategory: s => s.followCategory,
  followTag: s => s.followTag,
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
  },
  setFollowTag(state, follow) {
    state.followTag = follow.following
  },
  setUnFollowTag(state) {
    state.followTag = false
  },
}

export const actions = {
  async followUser({ commit, dispatch }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`users/${username}/follow`)
      const { data: follow } = result
      const index = follow.followingUsers.findIndex(
        item => item.username === username,
      )
      if (index !== -1) {
        commit('setFollowUser', follow.followingUsers[index])
      }
      dispatch('user/author', username, { root: true })
      return follow
    } catch (e) {
      return null
    }
  },
  async unFollowUser({ commit, dispatch }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`users/${username}/follow`)
      commit('setUnFollowUser')
      dispatch('user/author', username, { root: true })
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
      const index = follow.followingCategories.findIndex(
        item => item.slug === slug,
      )
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
  async followTag({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`tags/${slug}/follow`)
      const { data: follow } = result
      const index = follow.followingTags.findIndex(item => item.slug === slug)
      if (index !== -1) {
        commit('setFollowTag', follow.followingTags[index])
      }
      return follow
    } catch (e) {
      return null
    }
  },
  async unFollowTag({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`tags/${slug}/follow`)
      commit('setUnFollowTag')
      return result
    } catch (e) {
      return null
    }
  },
}
