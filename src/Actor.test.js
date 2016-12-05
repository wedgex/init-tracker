import React from 'react'
import ReactDOM from 'react-dom';
import Actor from './Actor'

it('renders init', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Actor init={5} />, div)
  expect(div.textContent.includes('5')).toEqual(true)
})

it('renders name', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Actor name="Snugglesworth" />, div)
  expect(div.textContent.includes('Snugglesworth')).toEqual(true)
})
