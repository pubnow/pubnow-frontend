export const state = () => ({
  categories: [],
})

export const getters = {
  categories: state => state.categories,
}

export const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories
  },
}

export const actions = {
  async list({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'category.list', { root: true })
      const result = await this.$http.$get('categories')
      const { data } = result
      commit('setCategories', data)
      dispatch('wait/end', 'category.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'category.list', { root: true })
      return false
    }
  },
}
