import Cookie from 'js-cookie'

export default async function({ req, store, redirect, $http }) {
  const token = Cookie.get('token')
  if (token) {
    store.commit('auth/setToken', token)
    try {
      const me = await $http.$get('auth/me')
      if (!me.data.isAdmin) {
        store.commit('auth/clear')
        return redirect('/login')
      }
    } catch (e) {
      store.commit('auth/clear')
      return redirect('/login')
    }
    return true
  }
  return redirect('/login')
}
