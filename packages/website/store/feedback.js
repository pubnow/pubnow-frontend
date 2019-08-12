export const state = () => ({
  feedback: null,
})

export const actions = {
  async sendFeedback({ dispatch }, payload) {
    try {
      dispatch('wait/start', `fb.send`, { root: true })
      const result = await this.$http.$post(`feedback`, payload)
      const { data } = result
      dispatch('wait/end', `fb.send`, { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', `fb.send`, { root: true })
      return false
    }
  }
}