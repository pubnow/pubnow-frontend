export const state = () => ({
  organizations: [],
  userOrgs: [],
  organization: {},
  param: 'fd',
  members: [],
  articles: [],
  featured: [],
  popular: [],
  statistic: null,
})

export const getters = {
  organizations: state => state.organizations,
  userOrgs: state => state.userOrgs,
  organization: state => state.organization,
  param: state => state.param,
  members: state => state.members,
  articles: state => state.articles,
  featured: s => s.featured,
  popular: s => s.popular,
  statistic: state => state.statistic,
}

export const mutations = {
  setOrganizations(state, organizations) {
    state.organizations = organizations
  },
  setOrganization(state, organization) {
    state.organization = organization
  },
  setUserOrgs(state, orgs) {
    state.userOrgs = orgs
  },
  setParam(state, param) {
    state.param = param
  },
  setMembers(state, members) {
    state.members = members
  },
  setArticles(state, articles) {
    state.articles = articles
  },
  setStatistic(state, statistic) {
    state.statistic = statistic
  },
  setFeatured(state, featured) {
    state.featured = featured
  },
  setPopular(state, popular) {
    state.popular = popular
  },
}

export const actions = {
  async list({ commit, dispatch }) {
    try {
      dispatch('wait/start', 'organizations.list', { root: true })
      const result = await this.$http.$get('organizations')
      const { data } = result
      commit('setOrganizations', data)
      dispatch('wait/end', 'organizations.list', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.list', { root: true })
      return false
    }
  },
  async show({ commit, dispatch }, id) {
    try {
      dispatch('wait/start', 'organizations.show', { root: true })
      const result = await this.$http.$get(`organizations/${id}`)
      const { data } = result
      commit('setOrganization', data)
      dispatch('wait/end', 'organizations.show', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.show', { root: true })
      return false
    }
  },
  async delete({ dispatch }, id) {
    try {
      dispatch('wait/start', 'organizations.delete', { root: true })
      await this.$http.delete(`organizations/${id}`)
      dispatch('wait/end', 'organizations.delete', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.delete', { root: true })
      return false
    }
  },
  async statistic({ commit, dispatch }, { slug, start, end }) {
    try {
      dispatch('wait/start', 'organizations.statistic', { root: true })
      const result = await this.$http.$get(
        `organizations/${slug}/statistic?start=${start}&end=${end}`,
      )
      const { data } = result
      commit('setStatistic', data)
      dispatch('wait/end', 'organizations.statistic', { root: true })
      return true
    } catch (e) {
      dispatch('wait/end', 'organizations.statistic', { root: true })
      return false
    }
  },
  async userOrgs({ commit }) {
    try {
      const result = await this.$http.$get('users/organizations')
      const { data } = result
      commit('setUserOrgs', data)
      return true
    } catch (e) {
      return false
    }
  },
  async members({ commit }, id) {
    try {
      const result = await this.$http.$get(`organizations/${id}/members`)
      const { data } = result
      commit('setMembers', data)
      return true
    } catch (e) {
      return false
    }
  },
  async articles({ commit, dispatch }, id) {
    try {
      dispatch('wait/start', 'org.articles', { root: true })
      const result = await this.$http.$get(`organizations/${id}/articles`)
      const { data } = result
      dispatch('wait/end', 'org.articles', { root: true })
      commit('setArticles', data)
      return true
    } catch (e) {
      dispatch('wait/end', 'org.articles', { root: true })
      throw e
    }
  },
  async featured({ commit, dispatch }, id) {
    try {
      dispatch('wait/start', 'org.featured', { root: true })
      const result = await this.$http.$get(`organizations/${id}/featured`)
      dispatch('wait/end', 'org.featured', { root: true })
      const { data: articles } = result
      commit('setFeatured', articles)
    } catch (e) {
      dispatch('wait/end', 'org.featured', { root: true })
      throw e
    }
  },
  async popular({ commit, dispatch }, id) {
    try {
      dispatch('wait/start', 'org.popular', { root: true })
      const result = await this.$http.$get(`organizations/${id}/popular`)
      dispatch('wait/end', 'org.popular', { root: true })
      const { data: articles } = result
      commit('setPopular', articles)
    } catch (e) {
      dispatch('wait/end', 'org.popular', { root: true })
      throw e
    }
  },
  async create({ dispatch }, data) {
    try {
      dispatch('wait/start', 'org.create', { root: true })
      const result = await this.$http.$post('organizations', data)
      dispatch('wait/end', 'org.create', { root: true })
      return result
    } catch (e) {
      dispatch('wait/end', 'org.create', { root: true })
      return false
    }
  },
  async update({ dispatch, commit }, { id, data }) {
    try {
      dispatch('wait/start', 'org.update', { root: true })
      const result = await this.$http.$put(`organizations/${id}`, data)
      dispatch('wait/end', 'org.update', { root: true })
      return result
    } catch (e) {
      console.log({ e })
      dispatch('wait/end', 'org.update', { root: true })
      return false
    }
  },
  async invite({ dispatch, state }, { organization_id, user_id }) {
    try {
      dispatch('wait/start', `org.invite.${user_id}`, { root: true })
      const result = await this.$http.$post(`invite-requests`, {
        organization_id,
        user_id,
      })
      dispatch('members', state.organization.slug)
      dispatch('wait/end', `org.invite.${user_id}`, { root: true })
      return result
    } catch (e) {
      dispatch('wait/end', `org.invite.${user_id}`, { root: true })
      return false
    }
  },
  async removeUser({ dispatch, state }, { inviteId }) {
    try {
      dispatch('wait/start', `org.removeUser`, { root: true })
      const result = await this.$http.delete(`invite-requests/${inviteId}`)
      dispatch('members', state.organization.slug)
      dispatch('wait/end', `org.removeUser`, { root: true })
      return result
    } catch (e) {
      dispatch('wait/end', `org.removeUser`, { root: true })
      return false
    }
  },
}
