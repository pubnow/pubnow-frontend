export const state = () => ({
  statistic: null,
})

export const getters = {
  statistic: s => s.statistic,
}

export const mutations = {
  setStatistic(state, statistic) {
    state.statistic = statistic
  },
}

export const actions = {
  async run({ commit, dispatch }, { start, end }) {
    try {
      dispatch('wait/start', 'statistic.run', { root: true })
      const result = await this.$http.$get(
        `admin/statistic?start=${start}&end=${end}`,
      )
      const { data } = result
      commit('setStatistic', data)
      dispatch('wait/end', 'statistic.run', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'statistic.run', { root: true })
      return false
    }
  },
}
