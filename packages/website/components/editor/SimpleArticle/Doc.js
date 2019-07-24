import { Doc } from 'tiptap'

export default class SimpleArticleDoc extends Doc {
  get schema() {
    return {
      content: 'title block+',
    }
  }
}
