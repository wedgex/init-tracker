import React from 'react'
import { shallow } from 'enzyme'
import NewActorContainer from './NewActorContainer'
import sinon from 'sinon'

it('calls onSubmit with serialized form data', () => {
  const fauxEvent = { target: { reset: sinon.spy() } }
  const onSubmit = sinon.spy()
  const wrapper = shallow(<NewActorContainer onSubmit={onSubmit} />)
  const data = { foo: 'bar' }
  wrapper.find('NewActor').props().onSubmit(fauxEvent, data)
  expect(onSubmit.calledWith(data)).toEqual(true)
})

it('resets form on submit', () => {
  const event = { target: { reset: sinon.spy() } }
  const wrapper = shallow(<NewActorContainer />)
  wrapper.find('NewActor').props().onSubmit(event, {})
  expect(event.target.reset.called).toEqual(true)
})
