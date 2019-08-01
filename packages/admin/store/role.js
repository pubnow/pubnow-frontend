export const state = () => ({
  roles: [],
})

export const getters = {
  roles: state => state.roles,
}

export const mutations = {
  setRoles(state, roles) {
    state.roles = roles
  },
}

export const actions = {
  async list({ commit }) {
    try {
      const result = await this.$http.$get('roles')
      const { data } = result
      console.log(result)
      commit('setRoles', data)
      return true
    } catch (e) {
      return false
    }
  },
}
