import Vue from 'vue'
import he from 'he'

Vue.filter('formatDate', source => {
  const date = new Date(source)
  return (
    date.getDate() +
    ' tháng ' +
    (date.getMonth() + 1) +
    ' năm ' +
    date.getFullYear()
  )
})

Vue.filter('timeRead', source => {
  const word = source.replace(/(<([^>]+)>)/gi, '').split(' ')
  return Math.round(word.length / 220) + ' phút đọc'
})

Vue.filter('unescape', str => he.decode(str))
