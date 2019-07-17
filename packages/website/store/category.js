export const state = () => ({
    listCategory: []
})

export const getters = {
    listCategory: state => state.listCategory,
}

export const mutations = {
    setListCategory(state, listCategory) {
        state.listCategory = listCategory
    },
}

export const actions = {
    async getListCategory({ commit, dispatch }) {
        try {
            dispatch('wait/start', 'category.list', { root: true })
            const result = await this.$http.$get('categories')
            const { data } = result
            commit('setListCategory', data)
            console.log(data);
            dispatch('wait/end', 'category.list', { root: true })
            return true
        } catch (e) {
            dispatch('wait/end', 'category.list', { root: true })
            return false
        }
    },
}