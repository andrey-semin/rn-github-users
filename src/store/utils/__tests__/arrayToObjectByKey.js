import arrayToObjectByKey from '../arrayToObjectByKey'

describe('store/utils', () => {
  it('arrayToObjectByKey', () => {
    const id1 = 'id1'
    const id2 = 'id2'
    const object1 = {
      id: id1,
      data: 'some data'
    }
    const object2 = {
      id: id2,
      data: 'some data'
    }
    const array = [object1, object2]
    const expected = {
      [id1]: object1,
      [id2]: object2
    }

    expect(arrayToObjectByKey(array, 'id')).toEqual(expected)
  })
})
