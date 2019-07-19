export const state = () => ({
  categories: [],
})

export const getters = {
  categories: state => state.categories,
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async list({ commit }) {
    try {
      const result = await this.$http.$get('categories')
      const { data } = result
      commit('setCategories', data)
      return true
    } catch (e) {
      return false
    }
  },
}
