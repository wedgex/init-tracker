import React from 'react'
import { shallow } from 'enzyme'
import NewActor from './NewActor'
import sinon from 'sinon'

it('passes onSubmit to Form', () => {
  const onSubmit = sinon.spy()
  const wrapper = shallow(<NewActor onSubmit={onSubmit} />)
  expect(wrapper.find('SerializableForm').props().onSubmit).toEqual(onSubmit)
})

it('renders name input', () => {
  const wrapper = shallow(<NewActor />)
  expect(wrapper.find('input[name="name"]').length).toEqual(1)
})

it('renders init input', () => {
  const wrapper = shallow(<NewActor />)
  expect(wrapper.find('input[name="init"]').length).toEqual(1)
})

it('renders add button', () => {
  const wrapper = shallow(<NewActor />)
  const button = wrapper.find('button')
  expect(button.length).toEqual(1)
  expect(button.text()).toEqual('Add')
})
