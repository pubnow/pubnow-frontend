<template>
  <div class="editor">
    <input class="title" placeholder="Tiêu đề bài viết" :value="title" @input="changeTitle" />
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
  Placeholder,
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  History,
  Image,
} from 'tiptap-extensions'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    EditorContent,
  },
  computed: {
    ...mapGetters({
      title: 'article/title',
    }),
  },
  props: {
    content: {
      type: Object,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapMutations({
      setTitle: 'article/setTitle',
    }),
    changeTitle(evt) {
      this.setTitle(evt.target.value)
    },
  },
  data() {
    return {
      json: null,
      editor: new Editor({
        autoFocus: true,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Image(),
          new Link(),
          new History(),
          new Placeholder({
            showOnlyCurrent: false,
            emptyNodeText: node => {
              return 'Viết về câu chuyện của bạn ...'
            },
          }),
        ],
        onUpdate: ({ getHTML }) => {
          this.json = getHTML()
          this.$store.commit('article/setContent', getHTML())
        },
      }),
    }
  },
  mounted() {
    this.editor.setOptions({
      editable: this.editable,
    })
    if (this.content) {
      this.editor.setContent(this.content)
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.editor {
  min-height: 300px;

  .title {
    border: 0;
    background: transparent;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: $unit / 2;
  }
}

.editor__content {
  word-wrap: break-word;
}

.editor__content * {
  caret-color: currentColor;
  font-family: $noto !important;
  color: $n700 !important;
}

.editor__content pre {
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 0.8rem;
  overflow-x: auto;
}

.editor__content pre code {
  display: block;
}

.editor__content p code {
  display: inline-block;
  padding: 0 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
}

.editor__content ol,
.editor__content ul {
  padding-left: 1rem;
}

.editor__content li > ol,
.editor__content li > p,
.editor__content li > ul {
  margin: 0;
}

.editor__content a {
  color: inherit;
}

.editor__content blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  padding-left: 0.8rem;
  font-style: italic;
  margin-top: 10px;
}

.editor__content blockquote p {
  margin: 0;
}

.editor__content img {
  max-width: 100%;
  border-radius: 3px;
}

.editor__content table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.editor__content table td,
.editor__content table th {
  min-width: 1em;
  border: 2px solid #ddd;
  padding: 3px 5px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}

.editor__content table td > *,
.editor__content table th > * {
  margin-bottom: 0;
}

.editor__content table th {
  font-weight: 700;
  text-align: left;
}

.editor__content table .selectedCell:after {
  z-index: 2;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(200, 200, 255, 0.4);
  pointer-events: none;
}

.editor__content table .column-resize-handle {
  position: absolute;
  right: -2px;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 20;
  background-color: #adf;
  pointer-events: none;
}

.editor__content .tableWrapper {
  margin: 1em 0;
  overflow-x: auto;
}

.editor__content .resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

.editor *.is-empty:nth-child(1)::before,
.editor *.is-empty:nth-child(2)::before {
  content: attr(data-empty-text);
  float: left;
  color: $n300;
  pointer-events: none;
  height: 0;
}

::placeholder {
  color: $n300;
}
</style>