import Vue from 'vue'

Vue.filter('formatDate', source => {
  const date = new Date(source)
  return date.getDate()
    + ' tháng ' + (date.getMonth() + 1)
    + ' năm ' + date.getFullYear()
})

Vue.filter('timeRead', source => {
  return Math.round(source.length / 600) + ' phút đọc'
})
