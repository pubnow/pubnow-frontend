import Cookie from 'js-cookie'

export const state = () => ({
  user: null,
  token: null,
})

export const getters = {
  user: state => state.user,
  token: state => state.token,
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }, user) {
    this.$http.setHeader('Accept', 'application/json')
    try {
      const result = await this.$http.$post('api/auth/login', {
        user,
      })
      commit('setUser', result.user)
      commit('setToken', result.token)
      Cookie.set('token', result.token)
      return true
    } catch (e) {
      return false
    }
  },
}
