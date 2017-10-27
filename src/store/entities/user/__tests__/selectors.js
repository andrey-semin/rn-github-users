import {
  getIsLoading,
  getError,
  getUserList,
  getUsersById,
  getOpenedUserId,
  getOpenedUser,
  getOpenedUserFollowersIds,
  getFollowersList
} from '../selectors'

const isLoading = true
const id1 = 'id1'
const id2 = 'id2'
const fol_id1 = 'fol_id1'
const fol_id2 = 'fol_id2'
const fol_id3 = 'fol_id3'
const followers = [fol_id1, fol_id2, fol_id3]
const user1 = {
  id: id1,
  data: 'some data',
  followers
}

const user2 = {
  id: id2,
  data: 'some data'
}

const fol1 = {
  id: fol_id1,
  data: 'follower data'
}

const fol2 = {
  id: fol_id2,
  data: 'follower data'
}

const fol3 = {
  id: fol_id3,
  data: 'follower data'
}

const byId = {
  [id1]: user1,
  [id2]: user2,
  [fol_id1]: fol1,
  [fol_id2]: fol2,
  [fol_id3]: fol3
}

const error = 'Erro text'

const state = {
  user: {
    isLoading,
    byId,
    error
  }
}

const props = {
  navigation: {
    state: {
      params: {
        user: {
          id: id1
        }
      }
    }
  }
}

describe('entities/user selectors', () => {
  it('getIsLoading', () => {
    expect(getIsLoading(state)).toEqual(isLoading)
  })

  it('getError', () => {
    expect(getError(state)).toEqual(error)
  })

  it('getUsersById', () => {
    expect(getUsersById(state)).toEqual(byId)
  })

  it('getUserList', () => {
    expect(getUserList(state)).toEqual([user1, user2, fol1, fol2, fol3])
  })

  it('getOpenedUserId', () => {
    expect(getOpenedUserId(state, props)).toEqual(id1)
  })

  it('getOpenedUser', () => {
    expect(getOpenedUser(state, props)).toEqual(user1)
  })

  it('getOpenedUserFollowersIds', () => {
    expect(getOpenedUserFollowersIds(state, props)).toEqual(followers)
  })

  it('getFollowersList', () => {
    expect(getFollowersList(state, props)).toEqual([fol1, fol2, fol3])
  })
})
