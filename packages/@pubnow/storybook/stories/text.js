import { storiesOf } from '@storybook/vue'

storiesOf('Text', module)
  .add('with text', () => `<p-text>Hello</p-text>`)
  .add('with emoji', () => `<p-text>😀 😎 👍 💯</p-text>`)
