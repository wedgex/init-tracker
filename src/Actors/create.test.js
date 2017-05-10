import create from './create'

describe('create', () => {
  it('generates a uuid', () => {
    const actor = create({ name: 'K\'thriss' })
    expect(actor.id).toBeTruthy()
  })

  it('has name', () => {
    const actor = create({ name: 'K\'thriss' })
    expect(actor.name).toEqual('K\'thriss')
  })

  it('parses init', () => {
    const actor = create({ name: 'K\'thriss', init: '10' })
    expect(actor.init).toEqual(10)
  })

  it('defaults init to 0', () => {
    const actor = create({})
    expect(actor.init).toEqual(0)
  })
})
