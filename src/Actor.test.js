import React from 'react'
import { shallow } from 'enzyme'
import Actor from './Actor'

it('renders init', () => {
  const wrapper = shallow(<Actor init={5} />)
  expect(wrapper.text()).toMatch('5')
})

it('renders name', () => {
  const wrapper = shallow(<Actor name="Snugglesworth" />)
  expect(wrapper.text()).toMatch('Snugglesworth')
})
