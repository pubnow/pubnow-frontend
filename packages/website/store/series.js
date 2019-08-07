export const state = () => ({
  series: null,
  listSeries: null,
})


export const getters = {
  series: s => s.series,
  listSeries: s => s.listSeries,
}

export const mutations = {
  setSeries(state, series) {
    state.series = series
  },
  setListSeries(state, series) {
    state.listSeries = series
  },
}


export const actions = {
  async write({ commit }, data) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post('series', data)
      const { data: series } = result
      commit('setSeries', series)
      return series
    } catch (e) {
      commit('setSeries', null)
      return null
    }
  },
  async edit({ commit }, data) {
    let dataArticles = null
    if (data.title && data.content) {
      dataArticles = {
        articles: data.articles,
        title: data.title,
        content: data.content
      }
    } else {
      dataArticles = {
        articles: data.articles
      }
    }
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$put(`series/${data.slug}`, dataArticles)
      const { data: series } = result
      commit('setSeries', series)
      return series
    } catch (e) {
      return null
    }
  },
  async delete({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$delete(`series/${slug}`)
      return result
    } catch (e) {
      return null
    }
  },
  async show({ commit }) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get('series')
      const { data: series } = result
      commit('setListSeries', series)
      return series
    } catch (e) {
      return null
    }
  },
  async index({ commit }, slug) {
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get(`series/${slug}`)
      const { data: series } = result
      commit('setSeries', series)
      return series
    } catch (e) {
      return null
    }
  },
}
