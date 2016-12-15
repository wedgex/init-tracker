import React from 'react';
import { mount } from 'enzyme'
import App from './App';

it('removes actor when clicking delete', () => {
  const actors = [{ id: '123' }]
  const wrapper = mount(<App actors={actors} />)
  wrapper
    .find('Actor')
    .find('button')
    .simulate('click')
  expect(wrapper.state('actors')).toEqual([])
})
