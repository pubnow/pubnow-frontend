export const state = () => ({
  listFeedback: [],
})

export const getters = {
  listFeedback: s => s.listFeedback,
}

export const mutations = {
  setList(state, list) {
    state.listFeedback = list
  },
}

export const actions = {
  async index({ commit, dispatch }) {
    try {
      const result = await this.$http.$get('feedback')
      const { data } = result
      commit('setList', data)
      return true
    } catch (e) {
      return false
    }
  },
  async update({ commit, dispatch }, { id, resolve }) {
    try {
      await this.$http.$put(`feedback/${id}`, { resolve })
      return true
    } catch (e) {
      return false
    }
  },
}
