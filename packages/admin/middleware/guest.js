import Cookie from 'js-cookie'

export default function({ req, store, redirect }) {
  const token = Cookie.get('token')
  if (token) {
    return redirect('/')
  }
}
