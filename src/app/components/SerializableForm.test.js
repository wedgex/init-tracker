import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import SerializableForm from './SerializableForm'

it('renders children', () => {
  const wrapper = shallow(
    <SerializableForm>
      <input />
      <button>Submit</button>
    </SerializableForm>
  )

  expect(wrapper.find('input').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('calls onSubmit with serialized form data', () => {
  const onSubmit = sinon.spy()
  const wrapper = mount(
    <SerializableForm onSubmit={onSubmit}>
      <input name="name" defaultValue="test name" />
      <input name="other" defaultValue="foo" />
    </SerializableForm>
  )
  wrapper.find('form').simulate('submit')
  const call = onSubmit.lastCall
  expect(call.args[1]).toEqual({
    name: 'test name',
    other: 'foo',
  })
})
