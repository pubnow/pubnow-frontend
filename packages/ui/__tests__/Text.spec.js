import { mount } from '@vue/test-utils'
import { PText } from '../src/main'

describe('Text Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PText)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(PText)
    expect(wrapper.element).toMatchSnapshot()
  })
})
