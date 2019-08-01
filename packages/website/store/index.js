export const state = () => ({
  API_URL: '',
})

export const mutations = {
  setApi(state, api) {
    state.API_URL = api
  },
}

export const getters = {
  api: s => s.API_URL,
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    let token = null
    await dispatch('category/list')
    commit('setApi', process.env.API_URL)
    if (req.headers.cookie) {
      try {
        token = this.$cookiz.get('token')
        commit('auth/setToken', token)
        const result = await this.$http.$get('auth/me')
        const { data: user } = result
        commit('auth/setUser', user)
      } catch (e) {
        console.log(e)
        commit('auth/clear')
      }
    }
  },
}
