import { formatDistance, parseISO } from 'date-fns'
import { vi } from 'date-fns/locale'

export default {
  filters: {
    formatDate(val) {
      return formatDistance(parseISO(val), Date.now(), { locale: vi })
    },
  },
}
