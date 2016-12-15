import React from 'react'
import { mount } from 'enzyme'
import NewActor from './NewActor'
import sinon from 'sinon'

it('calls onSubmit with name and init', () => {
  const onSubmit = sinon.spy()
  const wrapper = mount(<NewActor onSubmit={onSubmit} />)
  wrapper.find('input[name="name"]').node.value = 'Snuglesworth'
  wrapper.find('input[name="init"]').node.value = 10
  wrapper.find('button').simulate('click')
  expect(onSubmit.calledWith({ init: '10', name: 'Snuglesworth' })).toEqual(true)
})

it('clears fields on submit', () => {
  const wrapper = mount(<NewActor />)
  const name = wrapper.find('input[name="name"]')
  name.node.value = 'Snuglesworth'
  const init = wrapper.find('input[name="init"]')
  init.node.value = 10
  wrapper.find('button').simulate('click')
  expect(name.node.value).toEqual('')
  expect(init.node.value).toEqual('')
})
