export const state = () => ({
  categories: [],
  category: [],
})

export const getters = {
  categories: state => state.categories,
  category: state => state.category,
}

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCategory(state, category) {
    state.category = category
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
  async show({ commit }, slug) {
    try {
      const result = await this.$http.$get(`categories/${slug}`)
      const { data: category } = result
      commit('setCategory', category)
      return category
    } catch (e) {
      return null
    }
  },
}
