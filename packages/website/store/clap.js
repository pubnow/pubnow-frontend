export const state = () => ({
  clap: null,
})

export const getters = {
  clap: s => s.clap,
}

export const mutations = {
  setClap(state, clap) {
    state.clap = clap
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
