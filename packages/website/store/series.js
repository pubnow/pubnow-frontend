export const state = () => ({
  currentPage: 1,
  perPage: 10,
  total: -1,
  series: null,
  listSeries: [],
  userSeries: [],
})

export const getters = {
  series: s => s.series,
  listSeries: s => s.listSeries,
  currentPage: s => s.currentPage,
  total: state => state.total,
  perPage: state => state.perPage,
  userSeries: state => state.userSeries,
}

export const mutations = {
  setSeries(state, series) {
    state.series = series
  },
  setListSeries(state, series) {
    state.listSeries = series
  },
  setUserSeries(state, series) {
    state.userSeries = series
  },
  setCurrentPage(state, page) {
    state.currentPage = page
  },
  setPerPage(state, perPage) {
    state.perPage = perPage
  },
  setTotal(state, total) {
    state.total = total
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
        content: data.content,
      }
    } else {
      dataArticles = {
        articles: data.articles,
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
  async delete({ dispatch }, slug) {
    try {
      dispatch('wait/start', 'series.remove', { root: true })
      const result = await this.$http.delete(`series/${slug}`)
      dispatch('wait/end', 'series.remove', { root: true })
      return result
    } catch (e) {
      dispatch('wait/end', 'series.remove', { root: true })
      return null
    }
  },
  async index({ commit, dispatch }) {
    try {
      commit('setTotal', -1)
      dispatch('wait/start', 'series.index', { root: true })
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$get('series')
      const {
        data: series,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setListSeries', series)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'series.index', { root: true })
      return series
    } catch (e) {
      dispatch('wait/end', 'series.index', { root: true })
      return null
    }
  },
  async loadMore({ commit, getters }) {
    const page = getters['currentPage']
    const currentSeries = getters['listSeries']
    try {
      const result = await this.$http.$get(`series?page=${page}`)
      const { data: series } = result
      let newSeries
      if (page === 1) {
        newSeries = series
      } else {
        newSeries = currentSeries.concat(series)
      }
      commit('setListSeries', newSeries)
      return series
    } catch (e) {
      return null
    }
  },
  async show({ commit }, slug) {
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
  async user({ commit, dispatch, state }) {
    try {
      dispatch('wait/start', 'series.user', { root: true })
      const result = await this.$http.$get(
        `users/series?page=${state.currentPage}`,
      )
      const {
        data,
        meta: { current_page: currentPage, per_page: perPage, total },
      } = result
      commit('setUserSeries', data)
      commit('setCurrentPage', currentPage)
      commit('setPerPage', perPage)
      commit('setTotal', total)
      dispatch('wait/end', 'series.user', { root: true })
      return true
    } catch (e) {
      commit('setUserSeries', [])
      dispatch('wait/end', 'series.user', { root: true })
      return false
    }
  },
  async changeUserPage({ dispatch, commit }, payload) {
    commit('setCurrentPage', payload)
    dispatch('user')
  },
}
