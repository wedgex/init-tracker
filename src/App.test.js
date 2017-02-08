import React from 'react';
import { mount } from 'enzyme'
import App from './App';
import { sort } from './Actors'

it('removes actor when clicking delete', () => {
  const actors = [{ id: '123' }]
  const wrapper = mount(<App actors={actors} />)
  wrapper
    .find('Actor')
    .find('button')
    .simulate('click')
  expect(wrapper.state('actors')).toEqual([])
})

it('renders each actor in order', () => {
  const actors = [{ init: 5, name: 'Balasar' }, { init: 10, name: 'Thorgrim' }]
  const wrapper = mount(<App actors={actors} />)

  const sortedActors = sort(actors)

  wrapper.find('Actor').forEach((actor, i) => {
    expect(actor.props().init).toEqual(sortedActors[i].init)
    expect(actor.props().name).toEqual(sortedActors[i].name)
  })
})

it('selects an actor when clicked', () => {
  const actors = [{ id: '123' }]
  const wrapper = mount(<App actors={actors} />)
  wrapper
    .find('Actor')
    .simulate('click')
  expect(wrapper.find('Actor').props().isSelected).toEqual(true)
})

it('reselecting an actor unselects it', () => {
  const actors = [{ id: '123' }]
  const wrapper = mount(<App actors={actors} />)
  wrapper
    .find('Actor')
    .simulate('click')
  wrapper
    .find('Actor')
    .simulate('click')
  expect(wrapper.find('Actor').props().isSelected).toEqual(false)
})
