const { resolve } = require('path')

module.exports = function FroalaNuxt() {
  this.nuxt.hook('build:before', () => {
    this.options.css = [].concat(this.options.css || [])

    this.options.css.unshift('froala-editor/css/froala_editor.pkgd.min.css')
    this.options.css.unshift('froala-editor/css/froala_style.min.css')
    this.options.css.unshift('froala-editor/css/plugins/fullscreen.min.css')
    this.options.css.unshift('froala-editor/css/plugins/image.min.css')
    this.options.css.unshift('froala-editor/css/plugins/image_manager.min.css')
    this.options.css.unshift('froala-editor/css/plugins/char_counter.min.css')
    this.options.css.unshift('froala-editor/css/plugins/draggable.min.css')
    this.options.css.unshift('froala-editor/css/plugins/emoticons.min.css')
    this.options.css.unshift('froala-editor/css/plugins/colors.min.css')
    this.options.css.unshift('froala-editor/css/plugins/line_breaker.min.css')
    this.options.css.unshift('froala-editor/css/plugins/quick_insert.min.css')
    this.options.css.unshift(
      'froala-editor/css/plugins/special_characters.min.css',
    )
    this.options.css.unshift('froala-editor/css/plugins/table.min.css')
    this.options.css.unshift('froala-editor/css/plugins/video.min.css')

    this.addPlugin({
      ssr: false,
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'froala.js',
    })
  })
}
