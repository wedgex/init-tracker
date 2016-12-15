import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom'
import ActorList from './ActorList'
import { sort } from './Actors'
import sinon from 'sinon'

it('renders each actor in order', () => {
  const actors = [{ init: 5, name: 'Balasar' }, { init: 10, name: 'Thorgrim' }]
  const wrapper = shallow(<ActorList actors={actors} />)

  const sortedActors = sort(actors)

  wrapper.find('Actor').forEach((actor, i) => {
    expect(actor.props().init).toEqual(sortedActors[i].init)
    expect(actor.props().name).toEqual(sortedActors[i].name)
  })
})

it('renders actors with removeActor', () => {
  const handleRemove = sinon.spy()
  const actors = [{ id: '123' }]
  const wrapper = mount(<ActorList actors={actors} removeActor={handleRemove}/>)
  wrapper.find('button').simulate('click')
  expect(handleRemove.calledWith('123')).toEqual(true)
})
