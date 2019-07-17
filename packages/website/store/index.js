export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      try {
        token = this.$cookiz.get('token')
        commit('auth/setToken', token)
        this.$http.setHeader('Authorization', `Bearer ${token}`)
        const result = await this.$http.$get('auth/me')
        const { data: user } = result
        commit('auth/setUser', user)
      } catch (e) {
        commit('auth/clear')
      }
    }
  },
}
