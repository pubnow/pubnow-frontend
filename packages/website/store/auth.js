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
        user: { username, password },
      })
      const { token, data: user } = result
      commit('setUser', user)
      commit('setToken', token)
      this.$cookiz.set('token', token)
      dispatch('wait/end', 'auth.login', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.login', { root: true })
      return false
    }
  },
  async register({ commit, dispatch }, { username, password, name, email }) {
    try {
      dispatch('wait/start', 'auth.register', { root: true })
      const result = await this.$http.$post('auth/register', {
        user: { username, email, name, password },
      })
      const { token, data: user } = result
      commit('setUser', user)
      commit('setToken', token)
      this.$cookiz.set('token', token)
      dispatch('wait/end', 'auth.register', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.register', { root: true })
      return false
    }
  },
}
