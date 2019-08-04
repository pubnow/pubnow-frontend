export const state = () => ({
  clapNum: null,
  clapped: false,
  count: null,
})

export const getters = {
  clapNum: s => s.clapNum,
  clapped: s => s.clapped,
  count: s => s.count,
}

export const mutations = {
  setClap(state, clap) {
    state.clapped = clap.article.clapped
    state.clapNum = clap.article.claps
    state.count = clap.count
  },
  deleteClap(state) {
    state.clapped = false
    state.clapNum -= state.count
  },
}

export const actions = {
  async write({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`articles/${slug}/clap`)
      const { data: clap } = result
      commit('setClap', clap)
      return clap
    } catch (e) {
      return null
    }
  },
  async delete({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      commit('deleteClap')
      const result = await this.$http.$delete(`articles/${slug}/clap`)
      return result
    } catch (e) {
      return null
    }
  },
}
