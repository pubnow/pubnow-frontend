export const state = () => ({
  bookmark: null,
  listBookmark: [],
  bookmarked: false,
})

export const getters = {
  bookmark: s => s.bookmark,
  listBookmark: s => s.listBookmark,
  bookmarked: s => s.bookmarked,
}

export const mutations = {
  setBookmark(state, bookmark) {
    state.bookmark = bookmark
    state.bookmarked = bookmark.article.bookmarked
  },
  setUnBookmark(state) {
    state.bookmarked = false
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
  async unBookmark({ commit }, article_id, data) {
    try {
      commit('setUnBookmark')
      commit('setListBookmark', data)
      const result = await this.$http.$delete(`articles/${article_id}/bookmark`)
      return result
    } catch (e) {
      return null
    }
  },
}