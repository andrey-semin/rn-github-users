import { createAction } from 'redux-actions'

import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_FOLLOWERS,
  FETCH_FOLLOWERS_SUCCESS,
  FETCH_FOLLOWERS_FAIL,
  USER_PER_PAGE,
  DEFAULT_SINCE_ID,
  FOLLOWERS_PER_PAGE
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

export const getUserFollowers = ({ login, id }, page = 1) => dispatch =>
  dispatch(
    fetchUserFollowers({
      request: {
        url: `/users/${login}/followers`,
        params: {
          page
        }
      },
      id
    })
  )

export const fetchUserFollowersPage = ({ login, id }) => (
  dispatch,
  getState
) => {
  const user = getState().user.byId[id]
  if (user) {
    const { followers } = user
    const pageToFetch = followers
      ? Math.floor(followers.length / FOLLOWERS_PER_PAGE) + 1
      : 1

    return dispatch(getUserFollowers({ login, id }, pageToFetch))
  }
  return Promise.reject()
}
