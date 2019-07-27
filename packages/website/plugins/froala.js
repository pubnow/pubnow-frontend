import Vue from 'vue'
// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Fullscreen
require('froala-editor/js/plugins/fullscreen.min.js')
require('froala-editor/css/plugins/fullscreen.min.css')

// Align Plugin
require('froala-editor/js/plugins/align.min.js')

// Image Plugin
require('froala-editor/js/plugins/image.min.js')
require('froala-editor/css/plugins/image.min.css')

// Inline Class
require('froala-editor/js/plugins/inline_class.min.js')

// Inline Style
require('froala-editor/js/plugins/inline_style.min.js')

import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)
