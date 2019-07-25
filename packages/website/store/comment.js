export const state = () => ({
  comment: null,
})

export const getters = {
  comment: s => s.comment,
}

export const mutations = {
  setComment(state, comment) {
    state.comment = comment
  },
}

export const actions = {
  async write({ commit }, data) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`comments`, data)
      const { data: comment } = result
      commit('setComment', comment)
      return comment
    } catch (e) {
      return null
    }
  },
}
