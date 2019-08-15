import { list } from 'postcss'

export const state = () => ({
  invitations: [],
  notifications: [],
})

export const getters = {
  invitations: state => state.invitations,
  notifications: state => state.notifications,
}

export const mutations = {
  setInvitations: (state, invitations) => {
    state.invitations = invitations
  },
  setNotifications: (state, notifications) => {
    state.notifications = notifications
  },
  addNotification: (state, item) => {
    state.notifications.unshift(item)
  },
}

export const actions = {
  async list({ commit, dispatch }) {
    try {
      dispatch('wait/start', `notification.list`, { root: true })
      const result = await this.$http.$get(`notifications`)
      commit('setNotifications', result)
      dispatch('wait/end', `notification.list`, { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', `notification.list`, { root: true })
      return false
    }
  },
  async markAsRead({ dispatch }) {
    try {
      await this.$http.post(`notifications/read`)
      dispatch('list')
      return true
    } catch (e) {
      return false
    }
  },
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
