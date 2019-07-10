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
