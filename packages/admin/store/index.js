import CookieParser from 'cookieparser'

export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      console.log('ahihi')
      let auth = null
      if (req.headers.cookie) {
        const parsed = CookieParser.parse(req.headers.cookie)
        try {
          auth = JSON.parse(parsed.auth)
        } catch (err) {
          // No valid cookie found
        }
      }
      commit('auth/setAuth', auth)
    },
  },
}
