const { toSortPattern } = require('infrastructure/repositories/translator')

describe('Repositories:Translator', () => {
  it('should translate to sort by brand', async () => {
    const input = 'brand'

    const expectedSortPattern = { brand: 1 }

    const sortPattern = toSortPattern(input);

    expect(sortPattern).toStrictEqual(expectedSortPattern)
  })

  it('should translate to sort by description', async () => {
    const input = 'description'

    const expectedSortPattern = { description: 1 }

    const sortPattern = toSortPattern(input);

    expect(sortPattern).toStrictEqual(expectedSortPattern)
  })

  it('should translate to sort by price', async () => {
    const input = 'price'

    const expectedSortPattern = { price: 1 }

    const sortPattern = toSortPattern(input);

    expect(sortPattern).toStrictEqual(expectedSortPattern)
  })

  it('should translate to sort by id as default', async () => {
    const input = 'xxxxxxx'

    const expectedSortPattern = { id: 1 }

    const sortPattern = toSortPattern(input);

    expect(sortPattern).toStrictEqual(expectedSortPattern)
  })
})
