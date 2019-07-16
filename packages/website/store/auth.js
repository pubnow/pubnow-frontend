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
  async login({ commit }, { username, password }) {
    console.log({ username, password })
    try {
      const result = await this.$http.$post('auth/login', {
        user: { username, password },
      })
      console.log({ result })
    } catch (e) {
      console.log({ e })
    }
  },
}
