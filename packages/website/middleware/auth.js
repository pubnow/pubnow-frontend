export default async function({ req, store, redirect, $http }) {
  if (!store.state.auth.token) {
    return redirect('/dang-nhap')
  }
  await store.dispatch('notification/list')
}
