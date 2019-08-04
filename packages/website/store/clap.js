export const state = () => ({
  clapNum: null,
  clapped: false,
})

export const getters = {
  clapNum: s => s.clapNum,
  clapped: s => s.clapped,
}

export const mutations = {
  setClap(state, clap) {
    state.clapped = clap.article.clapped
    state.clapNum = clap.article.claps
  },
}

export const actions = {
  async write({ commit }, article_id) {
    const data = {
      article_id
    }
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post(`claps`, data)
      const { data: clap } = result
      commit('setClap', clap)
      return clap
    } catch (e) {
      return null
    }
  },
}
