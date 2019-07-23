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
  async create(context, create) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$post('categories', {
      ...create.submit,
    })
  },
  async update(context, update) {
    this.$http.setHeader('Accept', 'application/json')
    await this.$http.$put(`categories/${update.slug}`, {
      ...update.submit,
    })
  },
  async deleteCat(context, slug) {
    await this.$http.delete(`categories/${slug}`)
  },
}
