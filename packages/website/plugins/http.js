export default function({ $http }) {
  $http.onError(error => {
    if (process.env.NODE_ENV !== 'production') console.log({ error })
  })
}
