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

export const fetchUserFollowers = createAction('FETCH_FOLLOWERS')
export const fetchUserFollowersSuccess = createAction('FETCH_FOLLOWERS_SUCCESS')
export const fetchUserFollowersFail = createAction('FETCH_FOLLOWERS_FAIL')

export const getUserFollowers = (followers_url, id) => dispath =>
  dispath(
    fetchUserFollowers({
      request: {
        url: followers_url
      },
      id
    })
  )
