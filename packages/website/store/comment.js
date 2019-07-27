export const state = () => ({
  comment: null,
  dataComment: []
})

export const getters = {
  dataComment: s => s.dataComment,
}

export const mutations = {
  setDataComment(state, child) {
    state.dataComment = child
  },
  addComment(state, comment, parentID) {
    if (!parentID) {
      state.dataComment.push(comment)
    }
  },
  changeDataComment(state, child) {
    state.dataComment = child
  }
}

export const actions = {
  async create({ commit }, data) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`comments`, data)
      const { data: comment } = result
      commit('addComment', comment, data.parent_id)
      return comment
    } catch (e) {
      return null
    }
  },
  setDataComment({ commit }, data) {
    commit('setDataComment', data)
  },
  changeDataComment({ commit }, data) {
    commit('changeDataComment', data)
  },
  async delete({ commit }, id) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`comments/${id}`)
      return result
    } catch (e) {
      return null
    }
  },
  async update({ commit }, data) {
    try {
      const { id, content } = data
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$put(`comments/${id}`, { content })
      return result
    } catch (e) {
      return null
    }
  },
}
