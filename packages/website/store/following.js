export const state = () => ({
  followingUser: null,
  followingCategory: null,
  followingOrganizations: null,
})

export const getters = {
  followingUser: state => state.followingUser,
  followingCategory: state => state.followingCategory,
  followingOrganizations: state => state.followingOrganizations,
}

export const mutations = {
  setFollowingUser(state, followingUser) {
    state.followingUser = followingUser
  },
  setFollowingCategory(state, followingCategory) {
    state.followingCategory = followingCategory
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
}
