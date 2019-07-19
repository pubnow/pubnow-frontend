import get from 'lodash.get'

export const state = () => ({
  articles: [],
  tags: [],
  content: null,
  category: null,
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setTags(state, tags) {
    state.tags = tags
  },
  addTag(state, tag) {
    state.tags.push(tag)
  },
  removeTag(state, index) {
    state.tags.splice(index, 1)
  },
  setCategory(state, category) {
    state.category = category
  },
  setContent(state, content) {
    state.content = content
  },
}

export const getters = {
  articles: s => s.articles,
  tags: s => s.tags,
  category: s => s.category,
  content: s => s.content,
  title: s => get(s.content, 'content[0].content[0].text'),
}

export const actions = {
  async write({ commit, getters }) {
    const data = {
      title: getters.title,
      content: JSON.stringify(getters.content),
      category: getters.category,
      tag_list: Object.freeze(getters.tags),
    }
    try {
      await this.$http.$post('articles', data)
      return true
    } catch (e) {
      return false
    }
  },
}
