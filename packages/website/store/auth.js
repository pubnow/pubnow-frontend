const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  user: null,
  token: null,
})

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
    // Clear cookie
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
      Cookie.set('token', token)
      dispatch('wait/end', 'auth.login', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'auth.login', { root: true })
      return false
    }
  },
}
