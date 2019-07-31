export const state = () => ({
  bookmark: null,
  listBookmark: [],
})

export const getters = {
  bookmark: s => s.bookmark,
  listBookmark: s => s.listBookmark,
}

export const mutations = {
  setBookmark(state, bookmark) {
    state.bookmark = bookmark
  },
  setListBookmark(state, bookmark) {
    state.listBookmark = bookmark
  },
}

export const actions = {
  async write({ commit }, article_id) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`articles/${article_id}/bookmark`)
      const { data: bookmark } = result
      commit('setBookmark', bookmark)
      return bookmark
    } catch (e) {
      return null
    }
  },
  async show({ commit }) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(`users/bookmarks`)
      const { data: bookmark } = result
      commit('setListBookmark', bookmark)
      return bookmark
    } catch (e) {
      return null
    }
  },
  async delete({ commit }, article_id) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`articles/${article_id}/bookmark`)
      return result
    } catch (e) {
      return null
    }
  },
}