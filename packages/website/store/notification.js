export const state = () => ({
  invitations: [],
})

export const getters = {
  invitations: state => state.invitations,
}

export const mutations = {
  setInvitations: (state, invitations) => {
    state.invitations = invitations
  },
}

export const actions = {
  async listInvitations({ commit, dispatch }) {
    try {
      dispatch('wait/start', `notification.invitations`, { root: true })
      const result = await this.$http.$get(`users/invite-requests`)
      const { data } = result
      commit('setInvitations', data)
      dispatch('wait/end', `notification.invitations`, { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', `notification.invitations`, { root: true })
      return false
    }
  },
  async interact({ dispatch }, { id, type }) {
    try {
      dispatch('wait/start', `notification.acceptIvt`, { root: true })
      await this.$http.$post(`invite-requests/${id}/${type}`)
      dispatch('listInvitations')
      dispatch('organization/userOrgs', null, { root: true })
      dispatch('wait/end', `notification.acceptIvt`, { root: true })
      return true
    } catch (e) {
      console.log({ e })
      dispatch('wait/end', `notification.acceptIvt`, { root: true })
      return false
    }
  },
}
