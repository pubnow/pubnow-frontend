export const state = () => ({
  comment: [],
  dataComment: [],
  commentCount: 0,
})

export const getters = {
  dataComment: s => s.dataComment,
  comment: s => s.comment,
  commentCount: s => s.commentCount,
}

export const mutations = {
  setComment(state, comment) {
    state.comment = comment
  },
  addComment(state, comment) {
    state.dataComment = comment
  },
  setCommentCount(state, num) {
    state.commentCount = num
  }
}

export const actions = {
  async show({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(`articles/${slug}/comments`)
      const { data: comment } = result
      commit('setComment', comment)
      return comment
    } catch (e) {
      return null
    }
  },
  async create({ commit }, data) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`comments`, data)
      const { data: comment } = result
      commit('addComment', comment)
      return comment
    } catch (e) {
      return null
    }
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
  async count({ commit }, data) {
    commit('setCommentCount', data)
  },
}
