export const state = () => ({
  articles: [],
  tags: [],
  featured: [],
  popular: [],
  title: '',
  content: null,
  category: null,
  article: null,
})

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setFeatured(state, featured) {
    state.featured = featured
  },
  setPopular(state, popular) {
    state.popular = popular
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
  setTitle(state, title) {
    state.title = title
  },
  setContent(state, content) {
    state.content = content
  },
  setArticle(state, article) {
    state.article = article
  },
  reset(state) {
    state.tags = []
    state.title = ''
    state.content = null
    state.category = null
  },
}

export const getters = {
  articles: s => s.articles,
  featured: s => s.featured,
  popular: s => s.popular,
  tags: s => s.tags,
  category: s => s.category,
  content: s => s.content,
  title: s => s.title,
  article: s => s.article,
}

export const actions = {
  async write({ commit, state }) {
    const data = {
      title: state.title,
      content: state.content,
      category: state.category,
      tags: state.tags,
    }
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$post('articles', data)
      const { data: article } = result
      commit('reset')
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
  async featured({ commit }) {
    try {
      const result = await this.$http.$get(`articles/featured`)
      const { data: articles } = result
      commit('setFeatured', articles)
    } catch (e) {
      return null
    }
  },
  async popular({ commit }) {
    try {
      const result = await this.$http.$get(`articles/popular`)
      const { data: articles } = result
      commit('setPopular', articles)
    } catch (e) {
      return null
    }
  }
}
