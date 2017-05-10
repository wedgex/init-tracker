import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import NewActorContainer from './NewActorContainer'

it('renders NewActor', () => {
  const wrapper = shallow(<NewActorContainer />)
  expect(wrapper.find('NewActor').length).toEqual(1)
})

it('passes props to NewActor', () => {
  const className = 'foo'
  const wrapper = shallow(<NewActorContainer className={className} />)
  const newActor = wrapper.find('NewActor')
  expect(newActor.props().className).toEqual(className)
})

it('calls onSubmit when NewActor submits', () => {
  const spy = sinon.spy()
  const wrapper = shallow(<NewActorContainer onSubmit={spy} />)
  const newActor = wrapper.find('NewActor')
  newActor.props().onSubmit({ target: { reset: () => {} } }, { name: 'Taako', init: 5 })
  expect(spy.called).toEqual(true)
  expect(spy.args[0][0]).toEqual({ name: 'Taako', init: 5 })
})

it('calls reset on the form', () => {
  const spy = sinon.spy()
  const wrapper = shallow(<NewActorContainer onSubmit={spy} />)
  const newActor = wrapper.find('NewActor')
  newActor.props().onSubmit({ target: { reset: spy } }, {})
  expect(spy.called).toEqual(true)
})
