export const state = () => ({
  tags: [],
})

export const getters = {
  tags: state => state.tags,
}

export const mutations = {
  setTags (state, tags) {
    state.tags = tags
  },
}

export const actions = {
  async list ({ commit }) {
    try {
      const result = await this.$http.$get('tags')
      const { data } = result
      commit('setTags', data)
      return true
    } catch (e) {
      return false
    }
  },
}
