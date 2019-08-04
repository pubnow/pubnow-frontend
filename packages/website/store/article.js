export const state = () => ({
  articles: [],
  tags: [],
  featured: [],
  popular: [],
  title: '',
  content: null,
  category: null,
  article: null,
  isPrivate: false,
  userArticles: [],
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
  setPrivate(state, isPrivate) {
    state.isPrivate = isPrivate
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
    state.private = false
  },
  fillData(state, article) {
    state.tags = article.tags.map(tag => tag.name)
    state.title = article.title
    state.content = article.content
    state.category = article.category.id
    state.isPrivate = article.private
  },
  setUserArticles(state, articles) {
    state.userArticles = articles
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
  isPrivate: s => s.isPrivate,
  userArticles: s => s.userArticles,
}

export const actions = {
  async write({ commit, state }, draft = false) {
    const data = {
      title: state.title,
      content: state.content,
      category_id: state.category,
      tags: state.tags,
      draft,
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
  async edit({ commit, state }, slug) {
    const data = {
      title: state.title,
      content: state.content,
      category_id: state.category,
      tags: state.tags,
      private: state.isPrivate,
    }
    try {
      this.$http.setHeader('Accept', 'application/json')
      const result = await this.$http.$put(`articles/${slug}`, data)
      const { data: article } = result
      commit('reset')
      return article
    } catch (e) {
      return null
    }
  },
  async show({ commit, dispatch }, slug) {
    try {
      dispatch('wait/start', 'article.show', { root: true })
      const result = await this.$http.$get(`articles/${slug}`)
      const { data: article } = result
      commit('setArticle', article)
      commit('fillData', article)
      dispatch('wait/end', 'article.show', { root: true })
      return article
    } catch (e) {
      dispatch('wait/end', 'article.show', { root: true })
      return null
    }
  },
  async remove({ dispatch }, slug) {
    try {
      dispatch('wait/start', 'article.remove', { root: true })
      await this.$http.delete(`articles/${slug}`)
      dispatch('wait/end', 'article.remove', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'article.remove', { root: true })
      return false
    }
  },
  async index({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'article.index', { root: true })
      const result = await this.$http.$get(`articles`)
      dispatch('wait/end', 'article.index', { root: true })
      const { data: articles } = result
      commit('setArticles', articles)
      return articles
    } catch (e) {
      dispatch('wait/end', 'article.index', { root: true })
      return null
    }
  },
  async featured({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'article.featured', { root: true })
      const result = await this.$http.$get(`articles/featured`)
      dispatch('wait/end', 'article.featured', { root: true })
      const { data: articles } = result
      commit('setFeatured', articles)
    } catch (e) {
      dispatch('wait/end', 'article.featured', { root: true })
      return null
    }
  },
  async popular({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'article.popular', { root: true })
      const result = await this.$http.$get(`articles/popular`)
      const { data: articles } = result
      dispatch('wait/end', 'article.popular', { root: true })
      commit('setPopular', articles)
    } catch (e) {
      dispatch('wait/end', 'article.popular', { root: true })
      return null
    }
  },
  async user({ commit, dispatch }, username) {
    try {
      dispatch('wait/start', 'article.user', { root: true })
      const result = await this.$http.$get(`users/${username}/articles`)
      const { data } = result
      commit('setUserArticles', data)
      dispatch('wait/end', 'article.user', { root: true })
      return true
    } catch (e) {
      commit('setUserArticles', [])
      dispatch('wait/end', 'article.user', { root: true })
      return false
    }
  },
}
