import Cookie from 'js-cookie'

export default function({ req, store, redirect }) {
  const token = Cookie.get('token')
  if (token) {
    return store.commit('auth/setToken', token)
  }
  return redirect('/login')
}
