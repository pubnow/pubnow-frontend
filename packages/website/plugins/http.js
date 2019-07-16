export default function({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onError(error => {
    console.log({ error })
  })
}
