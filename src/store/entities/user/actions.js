import { createAction } from 'redux-actions'

import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_FOLLOWERS,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_FOLLOWERS_FAIL,
  USER_PER_PAGE,
  DEFAULT_SINCE_ID
} from './constants'

export const fetchUsers = createAction(FETCH_USERS)
export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS)
export const fetchUsersFail = createAction(FETCH_USERS_FAIL)

export const fetchUsersList = (since = DEFAULT_SINCE_ID) => dispatch =>
  dispatch(
    fetchUsers({
      request: {
        url: '/users',
        params: {
          since,
          per_page: USER_PER_PAGE
        }
      }
    })
  )

export const fetchUsersPage = () => (dispatch, getState) => {
  const lastFetchedId = getState().user.lastFetchedId
  return dispatch(fetchUsersList(lastFetchedId))
}

export const fetchUserFollowers = createAction(FETCH_FOLLOWERS)
export const fetchUserFollowersSuccess = createAction(FETCH_FOLLOWERS_SUCCESS)
export const fetchUserFollowersFail = createAction(FETCH_FOLLOWERS_FAIL)

export const getUserFollowers = (login, id) => dispath =>
  dispath(
    fetchUserFollowers({
      request: {
        url: `/users/${login}/followers`
      },
      id
    })
  )
