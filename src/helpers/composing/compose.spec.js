import compose from './compose'

describe('compose', () => {
  it('returns correct value', () => {
    const add1 = x => x + 1
    const multiply2 = x => x * 2
    const minus2 = x => x - 2

    expect(
      compose(
        add1,
        multiply2,
        minus2,
      )(9),
    ).toBe(15)
  })
})
