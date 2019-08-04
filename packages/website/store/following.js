export const state = () => ({
  followingUser: null,
  followingCategories: null,
  followingOrganizations: null,
})

export const getters = {
  followingUser: state => state.followingUser,
  followingCategories: state => state.followingCategories,
  followingOrganizations: state => state.followingOrganizations,
}

export const mutations = {
  setFollowingUser(state, followingUser) {
    state.followingUser = followingUser
  },
  setFollowingCategories(state, followingCategories) {
    state.followingCategories = followingCategories
  },
  setFollowingOrganizations(state, followingOrganizations) {
    state.followingOrganizations = followingOrganizations
  },
}

export const actions = {
  async getFollowingUser({ commit, dispatch }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(`users/${username}/following-users`)
      const { data } = result
      commit('setFollowingUser', data)
      dispatch('wait/end', 'following.followingUser', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'following.followingUser', { root: true })
      return false
    }
  },
  async getFollowingOrganizations({ commit, dispatch }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(
        `users/${username}/following-organizations`,
      )
      const { data } = result
      commit('setFollowingOrganizations', data)
      dispatch('wait/end', 'following.followingOrganizations', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'following.followingOrganizations', { root: true })
      return false
    }
  },
  async getFollowingCategories({ commit, dispatch }, username) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(
        `users/${username}/following-categories`,
      )
      const { data } = result
      commit('setFollowingCategories', data)
      dispatch('wait/end', 'following.followingCategories', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'following.followingCategories', { root: true })
      return false
    }
  },
}
