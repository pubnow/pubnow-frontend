export default function({ store, redirect, from, route }) {
  if (store.state.auth.token) {
    return redirect('/')
  }
  if (from) {
    route.query.redirectTo = from.path
  }
}
