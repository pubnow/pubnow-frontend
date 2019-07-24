export const state = () => ({
  users: [],
})

export const getters = {
  users: state => state.users,
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async list({ commit }) {
    try {
      const result = await this.$http.$get('users')
      const { data } = result
      commit('setUsers', data)
      return true
    } catch (e) {
      return false
    }
  },
  async create(_, create) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$post('users', {
      ...create.submit,
    })
  },
  async update(_, { username, ...updateData }) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$put(`users/${username}`, {
      ...updateData,
    })
  },
}
