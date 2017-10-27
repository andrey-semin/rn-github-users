import getNestedValueSafe from '../getNestedValueSafe'

describe('store/utils', () => {
  it('getNestedValueSafe', () => {
    const data = 'some data'

    const object = {
      level1: {
        level2: {
          level3: {
            data
          }
        }
      }
    }

    expect(getNestedValueSafe(object, 'level1.level2.level3.data')).toEqual(
      data
    )
    expect(getNestedValueSafe(object, 'level1.level2.data')).toEqual(undefined)
  })
})
