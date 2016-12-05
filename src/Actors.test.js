import { sort } from './Actors'

it('sorts actors by initiative' , () => {
  const actors = [
    { init: 10, name: 'Snugglesworth' },
    { init: 20, name: 'Balasar' },
    { init: 1, name: 'Thorgrim' },
  ]

  expect(sort(actors)).toEqual([
    { init: 20, name: 'Balasar' },
    { init: 10, name: 'Snugglesworth' },
    { init: 1, name: 'Thorgrim' },
  ])
})
