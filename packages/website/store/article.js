import get from 'lodash.get'
import { read } from 'jimp'

export const state = () => ({
  articles: [],
  tags: [],
  content: null,
  category: null,
  article: null,
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
  setArticle(state, article) {
    state.article = article
  },
}

export const getters = {
  articles: s => s.articles,
  tags: s => s.tags,
  category: s => s.category,
  content: s => s.content,
  title: s => get(s.content, 'content[0].content[0].text'),
  article: s => s.article,
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
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post('articles', data)
      const { data: article } = result
      return article
    } catch (e) {
      return null
    }
  },
  async show({ commit }, slug) {
    try {
      const result = await this.$http.$get(`articles/${slug}`)
      const { data: article } = result
      commit('setArticle', article)
      return article
    } catch (e) {
      return null
    }
  },
  async index({ commit }) {
    try {
      const result = await this.$http.$get(`articles`)
      const { data: articles } = result
      commit('setArticles', articles)
      return articles
    } catch (e) {
      return null
    }
  },
}
