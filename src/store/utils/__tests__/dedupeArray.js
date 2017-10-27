import dedupeArray from '../dedupeArray'

describe('store/utils', () => {
  it('dedupeArray', () => {
    const notDuplicatedArray = [1, 2] // buddy ignore:line
    const data = [...notDuplicatedArray, 1]

    expect(dedupeArray(data)).toEqual(notDuplicatedArray)
  })
})
