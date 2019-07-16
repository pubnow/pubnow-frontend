const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = parsed.token
        this.$http.setHeader('Authorization', `Bearer ${token}`)
        const result = await this.$http.$get('auth/me')
        const { data: user } = result
        commit('auth/setUser', user)
      } catch (e) {
        console.log({ e })
      }
    }
    commit('auth/setToken', token)
  },
}
