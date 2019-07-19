export default function({ store, $http }) {
  $http.setToken(store.state.auth.token, 'Bearer')
  $http.onError(error => {
    if (process.env.NODE_ENV !== 'production') console.log({ error })
  })
}
