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
  setAuth(state, payload) {
    state.user = payload.user
    state.token = payload.token
  },
}

export const actions = {
  async login({ commit }, user) {
    this.$http.setHeader('Accept', 'application/json')
    try {
      const result = await this.$http.$post('api/auth/login', {
        user,
      })
      commit('setAuth', result)
      Cookie.set('auth', result)
      return true
    } catch (e) {
      return false
    }
  },
}
