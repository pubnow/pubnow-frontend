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
  async create(_, create) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$post('categories', {
      ...create.submit,
    })
  },
  async update(_, update) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$put(`categories/${update.slug}`, {
      ...update.submit,
    })
  },
  async deleteCat(_, slug) {
    await this.$http.delete(`categories/${slug}`)
  },
}
