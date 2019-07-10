import Cookie from 'js-cookie'

export default function({ req, store, redirect }) {
  const auth = Cookie.get('auth')
  console.log({ auth })
  if (auth) {
    return store.commit('auth/setAuth', auth)
  }
  return redirect('/login')
}
