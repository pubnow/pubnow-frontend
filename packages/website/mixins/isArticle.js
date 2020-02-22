export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    thumbnail() {
      if (!this.article.thumbnail) {
        return 'https://source.unsplash.com/random'
      }
      return this.article.thumbnail
    },
    author() {
      return this.article.author
    },
    org() {
      return this.article.organization
    },
    cat() {
      return this.article.category
    },
    link() {
      if (this.org) {
        return `/to-chuc/${this.org.slug}/bai-viet/${this.article.slug}`
      }
      return `/bai-viet/${this.article.slug}`
    },
  },
}
