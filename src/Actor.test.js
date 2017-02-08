import React from 'react'
import { shallow } from 'enzyme'
import Actor from './Actor'
import sinon from 'sinon'

it('renders init', () => {
  const wrapper = shallow(<Actor init={5} />)
  expect(wrapper.text()).toMatch('5')
})

it('renders name', () => {
  const wrapper = shallow(<Actor name="Snugglesworth" />)
  expect(wrapper.text()).toMatch('Snugglesworth')
})

it('calls onRemove when delete is clicked', () => {
  const onRemove = sinon.spy()
  const wrapper = shallow(<Actor onRemove={onRemove} />)
  wrapper.find('button').simulate('click')
  expect(onRemove.called).toEqual(true)
})

it('calls onClick when clicked', () => {
  const onClick = sinon.spy()
  const wrapper = shallow(<Actor onClick={onClick} />)
  wrapper.simulate('click')
  expect(onClick.called).toEqual(true)
})
