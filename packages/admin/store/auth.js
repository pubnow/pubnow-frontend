import Cookie from 'js-cookie';

export const state = () => ({
  user: null,
  token: null,
  avatar: null
})

export const getters = {
  user: state => state.user,
  token: state => state.token,
  avatar: state => state.avatar,
}

export const mutations = {
  setToken(state, token) {
    this.$http.setHeader('Authorization', `Bearer ${token}`)
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  },
  setAvatar (state, avatar) {
    state.avatar = avatar
  },
  clear(state) {
    state.user = null
    state.token = null
    Cookie.remove('token')
  },
}

export const actions = {
  async login({ commit }, user) {
    this.$http.setHeader('Accept', 'application/json')
    try {
      const result = await this.$http.$post('auth/login', {
        user,
      })
      commit('setUser', result.data)
      commit('setToken', result.token)
      Cookie.set('token', result.token)
      return result.data
    } catch (e) {
      return false
    }
  },
}
