export default async function({ req, store, redirect, $http }) {
  if (store.state.auth.token) {
    await store.dispatch('notification/list')
  }
}
