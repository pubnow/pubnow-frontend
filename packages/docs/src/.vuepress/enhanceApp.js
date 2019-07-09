import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import PubnowUI from '@pubnow/ui'
import '@pubnow/ui/scss/pubnow-ui.scss'

export default ({ Vue }) => {
  Vue.use(PubnowUI)
}
