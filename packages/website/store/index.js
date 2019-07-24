export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    let token = null
    await dispatch('category/list')
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
