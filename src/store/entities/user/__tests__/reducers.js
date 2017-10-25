import reducer from '../reducer'
import { fetchUsers, fetchUsersSuccess, fetchUsersFail } from '../actions'
import {
  ERROR_MESSAGE,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from '../constants'

describe('entities/user reducer', () => {
  it(FETCH_USERS, () => {
    const initialState = {
      isLoading: false,
      error: ERROR_MESSAGE
    }

    const stateAfter = {
      isLoading: true,
      error: null
    }

    expect(reducer(initialState, fetchUsers())).toEqual(stateAfter)
  })

  it(FETCH_USERS_SUCCESS, () => {
    const initialState = {
      isLoading: true,
      byId: {},
      ids: []
    }

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

    const data = [user1, user2]

    const stateAfter = {
      isLoading: false,
      byId: {
        [id1]: user1,
        [id2]: user2
      },
      ids: [id1, id2]
    }

    expect(reducer(initialState, fetchUsersSuccess({ data }))).toEqual(
      stateAfter
    )
  })

  it(FETCH_USERS_FAIL, () => {
    const initialState = {
      isLoading: true,
      error: null
    }

    const stateAfter = {
      isLoading: false,
      error: ERROR_MESSAGE
    }

    expect(reducer(initialState, fetchUsersFail())).toEqual(stateAfter)
  })
})
