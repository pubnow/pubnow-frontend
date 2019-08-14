import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export default function({ store }) {
  const { token } = store.state.auth
  const authEndpoint =
    process.env.API_URL.replace('/api', '') + '/broadcasting/auth'
  window.Pusher = Pusher
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '0669edf00c75d6bd2c25',
    wsHost: process.env.WS_URL,
    wsPort: 6001,
    disableStats: true,
    cluster: 'ap1',
    authEndpoint,
    auth: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  })
}
