export const state = () => ({
  tags: [],
  tag: [],
})

export const getters = {
  tags: state => state.tags,
  tag: state => state.tag,
}

export const mutations = {
  setTags(state, tags) {
    state.tags = tags
  },
  setTag(state, tag) {
    state.tag = tag
  },
}

export const actions = {
  async list({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'tag.list', { root: true })
      const result = await this.$http.$get('tags')
      const { data } = result
      commit('setTags', data)
      dispatch('wait/end', 'tag.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'tag.list', { root: true })
      return false
    }
  },
  async show({ commit }, slug) {
    try {
      const result = await this.$http.$get(`tags/${slug}`)
      const { data: tag } = result
      commit('setTag', tag)
      return tag
    } catch (e) {
      return null
    }
  },
}
