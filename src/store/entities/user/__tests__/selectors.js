import { getIsLoading, getUserList } from '../selectors'

const isLoading = true
const id1 = 'id1'
const id2 = 'id2'
const user1 = {
  id: id1,
  data: 'some data'
}

const user2 = {
  id: id2,
  data: 'some data'
}

const byId = {
  [id1]: user1,
  [id2]: user2
}

const state = {
  user: {
    isLoading,
    byId
  }
}

describe('entities/user selectors', () => {
  it('getIsLoading', () => {
    expect(getIsLoading(state)).toEqual(isLoading)
  })

  it('getUserList', () => {
    expect(getUserList(state)).toEqual([user1, user2])
  })
})
