import { createAction } from 'redux-actions'

import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './constants'

export const fetchUsers = createAction(FETCH_USERS)
export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS)
export const fetchUsersFail = createAction(FETCH_USERS_FAIL)

export const fetchUsersList = () => dispath =>
  dispath(
    fetchUsers({
      request: {
        url: '/users'
      }
    })
  )
