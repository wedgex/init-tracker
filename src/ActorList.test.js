import React from 'react'
import ReactDOM from 'react-dom'
import ActorList from './ActorList'

it('renders each actor', () => {
  const div = document.createElement('div')
  const actors = []
  ReactDOM.render(<ActorList actors={actors} />, div)
  actors.forEach(actor => {
    expect(div.textContent.includes(actor.init)).toEqual(true)
    expect(div.textContent.includes(actor.name)).toEqual(true)
  })
})
