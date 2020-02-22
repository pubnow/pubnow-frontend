export const state = () => ({
  user: null,
  token: null,
})

export const getters = {
  user: s => s.user,
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
    this.$http.setToken(token, 'Bearer')
  },
  clear(state) {
    state.user = null
    state.token = null
    this.$cookiz.remove('token')
  },
}

export const actions = {
  async login({ commit, dispatch }, { username, password }) {
    try {
      dispatch('wait/start', 'auth.login', { root: true })
      const result = await this.$http.$post('auth/login', {
        username,
        password,
      })
      const { token, data: user } = result
      commit('setUser', user)
      commit('setToken', token)
      this.$cookiz.set('token', token)
      dispatch('organization/userOrgs', null, { root: true })
      dispatch('wait/end', 'auth.login', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.login', { root: true })
      throw e
    }
  },
  async register({ commit, dispatch }, { username, password, name, email }) {
    try {
      dispatch('wait/start', 'auth.register', { root: true })
      const result = await this.$http.$post('auth/register', {
        username,
        email,
        name,
        password,
      })
      const { token, data: user } = result
      commit('setUser', user)
      commit('setToken', token)
      this.$cookiz.set('token', token)
      dispatch('organization/userOrgs', null, { root: true })
      dispatch('wait/end', 'auth.register', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.register', { root: true })
      throw e
    }
  },
  async update({ state, commit, dispatch }, updateData) {
    try {
      dispatch('wait/start', 'auth.update', { root: true })
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$put(
        `users/${state.user.username}`,
        updateData.submit,
      )
      const { data: user } = result
      commit('setUser', user)
      dispatch('wait/end', 'auth.update', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.update', { root: true })
      return false
    }
  },
  async updatePass({ dispatch }, data) {
    try {
      dispatch('wait/start', 'auth.updatePass', { root: true })
      this.$http.setHeader('Accept', 'application/json')
      await this.$http.$put(`users/change-password`, data)
      dispatch('wait/end', 'auth.updatePass', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.updatePass', { root: true })
      return false
    }
  },
}
