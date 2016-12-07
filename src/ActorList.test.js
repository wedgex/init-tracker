import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import ActorList from './ActorList'
import { sort } from './Actors'

it('renders each actor in order', () => {
  const actors = [{ init: 5, name: 'Balasar' }, { init: 10, name: 'Thorgrim' }]
  const wrapper = shallow(<ActorList actors={actors} />)

  const sortedActors = sort(actors)

  wrapper.find('Actor').forEach((actor, i) => {
    expect(actor.props().init).toEqual(sortedActors[i].init)
    expect(actor.props().name).toEqual(sortedActors[i].name)
  })
})
